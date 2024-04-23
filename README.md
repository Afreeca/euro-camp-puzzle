# EuroCamp

## Title:

EuroCamp: Conding challenge

### Project Description

Advent of Code is a fun coding challenge that takes place each year, consisting of a series of small puzzles. We would like you to complete a part of this challenge to demonstrate your coding style and approach to problem solving. The challenge can be found at [https://adventofcode.com](https://adventofcode.com/). You will need to connect your GitHub account to participate.

### Product assumptions

- First day of the week is Monday

### Project directory structure

    ├── app/
    │ ├── server/ # Server-side code
    │ | ├── src/ # React components and application logic
    | | ├── test/ # Test files and suites
    | | ├── Dockerfile # Dockerfile for building the application
    │ | ├── package.json # Frontend dependencies and scripts
    | | ├── .env.dev.example # environment variables needed to run the server app
    │ │ └── ... # Other server-related files
    │ │
    │ └── client/ # Frontend code
    │   ├── public/ # Public assets
    │   ├── src/ # React components and application logic
    |   ├── tests/ # Test files and suites
    |   ├── Dockerfile # Dockerfile for building the application
    │   ├── package.json # Frontend dependencies and scripts
    |   ├── .env. # environment variables
    │   └── ... # Other frontend-related files
    │
    ├── docker-compose.yml # Docker Compose file for running one or both application
    ├── Technical_Challenge.pdf # technical challenge doc
    └── README.md # Project documentation

## Languages

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

## Tools

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a>

## Requirements

Follow the instructions provided in the official documentation for your OS

- Nodejs and npm -> https://nodejs.org/en/download/

## How to run the application

#### Run it Manually

To run the application manually, you need Node.js and npm installed. Follow these steps:

from the root folder (euro-camp-puzzle):

1. install dependencies

   ```bash
   npm install
   ```

2. Run the frontend UI:

   ```bash
   npm run start
   ```

### Access the UI Application

Once the application is running, you can access the UI by opening [http://localhost:3000](http://localhost:3000) in your browser

### Run Unit tests (Jest)

From the root folder:

```bash
npm run test
```

#### Product

## Author

### `Adilson Mendes`
