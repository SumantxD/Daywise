<h1 align="center">
  <br>
  <a href="https://github.com/ArmynC/ArminC-AutoExec/archive/master.zip"><img src="https://github.com/SumantxD/selfGPT/assets/65810424/4a1fcc8d-cefb-42e6-86c2-69d5c565bf1d" alt="ArminC AutoExec"></a>
</h1>

<h4 align="center">A high-quality CS:GO config built for gamers.</h4>

<p align="center">
    <a href="https://github.com/ArmynC/ArminC-AutoExec/commits/master">
    <img src="https://img.shields.io/github/last-commit/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    <a href="https://github.com/ArmynC/ArminC-AutoExec/issues">
    <img src="https://img.shields.io/github/issues-raw/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    <a href="https://github.com/ArmynC/ArminC-AutoExec/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
    <a href="https://twitter.com/intent/tweet?text=Try this CS:GO AutoExec:&url=https%3A%2F%2Fgithub.com%2FArmynC%2FArminC-AutoExec">
    <img src="https://img.shields.io/twitter/url/https/github.com/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=twitter"
         alt="GitHub tweet">
</p>

![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)


## Introduction

### Motivation:
The power of large language models like GPT-3 and Cohere is undeniable, but their limitations lie in being trained on outdated data and lacking awareness of personalized information. While they excel at general knowledge, they lack context about an individual's specific experiences, interests, and personal data. This limitation inspired the creation of SelfGPT, a web application aimed at empowering users to feed their custom data into these language models, allowing LLM to crawl through and structure their documents. By enabling users to interact with their personalized data through natural language, SelfGPT unlocks a multitude of new use cases and possibilities. Whether it's organizing personal records, keeping track of important events, summarizing social media feeds, analyzing books, diaries, blogs, or research papers, SelfGPT lets users leverage the full potential of large language models on their own data.

### Application Overview:
SelfGPT comprises two essential sections: a user-friendly data editor and an interactive chatbot powered by large language models. The data editor provides a board and card architecture, allowing users to organize their information efficiently. Users can create multiple boards for categorizing data, such as academic information, expenses, or important dates. Inside each board, they can generate numerous cards representing individual entries and even group them together using tags. This structured approach simplifies journaling, form filling, and maintaining various personal and professional records.

The second section leverages the power of large language models through an embedded chatbot. Users can feed their personalized data into the chatbot throught the data editor, enabling it to analyze, structure, and organize their documents throught the use of Langchain library. They can then interact with their data through natural language queries, making it easier to obtain relevant and customized information. Whether you need to find specific past events, summarize news articles, or get insights from your own custom data, the chatbot brings personalized responses at your fingertips. SelfGPT truly opens up a world of possibilities by enabling you to tap into the full potential of large language models while leveraging your personal data in an intuitive and seamless way.


## How To Use

### Part 1:

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/amitmerchant1990/electron-markdownify

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```
### Part 2:

```bash
# Clone this repository
$ git clone https://github.com/amitmerchant1990/electron-markdownify

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```
#### Get you API Key
You can get your free cohere API key from [here](https://cohere.com/)
#### Configure Flowise 
Use this JSON file to get the
[Sumant Chatflow.zip](https://github.com/SumantxD/selfGPT/files/12234797/Sumant.Chatflow.zip)
Enter your data in the data-editor, then inport it to flowise, now you can use the chatobt to interact with your personal data


> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Basic Architecture

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

#### Pending Features
- Export model
- Support for multiple sklearn SVM models
- Visualization for models with more than 2 features

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
