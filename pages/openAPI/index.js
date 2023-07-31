import React, { useEffect } from 'react'
import { OpenAI } from 'langchain'
// import {RetrievalQAChain} from 'langchain/chains'
// import {Retreval}
import {HNSWLib} from 'langchain/vectorstores'
import {OpenAIEmbeddings} from 'langchain/embeddings'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import * as fs from 'fs'
import * as dotenv from 'dotenv'


const index = () => {

    //we will load the environment variables
    dotenv.config()

    //setup the input data and paths 
    const textFilename = "The_Creative_Act";
    const question =  "what is the wisdom of the opposite is true"
    const textPath = `./${textFilename}.txt`
    const VECTOR_STORE_PATH = `${textFilename}.index` 

    
    const [data, setData] = useState(null);

    async function runWithEmbeddings() {
        try {

            const model =  new OpenAI({})
            let vectorStores;

            if(fs.existsSync(VECTOR_STORE_PATH)){
                console.log('Vector exists');
                vectorStores = await HNSWLib.load(VECTOR_STORE_PATH, new OpenAIEmbeddings())
            }else{
                //this will run the first time
                //first we will read the text file
                const text = fs.readFileSync(textPath,'utf8');
                //create a RecursiveCharacterTextSplitter with a specified chunk size
                const textSplitter = new RecursiveCharacterTextSplitter({chunkSize:50})
                //now we will split our text into little chunks
                const docs = await textSplitter.createDocuments([text])
                //create a new vector store from the document using OpenAIEmbeddings
                vectorStores = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings())
                //now we will save that vectorStore
                await vectorStores.save(VECTOR_STORE_PATH)
            }

            //now we will create a RetrevalQAChain by passing the modal and vector store
            const chain = RetrievalQAChain.fromLLM(model, vectorStores.asRetriever());

            //now we will call the above chain with the question we stablished above
            const res = await chain.call(
                {
                    query:question,
                }
            )

            console.log({res})

            // const response = await fetch('https://api.example.com/data');
            // const jsonData = await response.json();
            // setData(jsonData);
        } catch (error) {
           console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        runWithEmbeddings();
    }, []);

    


  return (
    <div>index</div>
  )
}

export default index