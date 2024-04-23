# EuroCamp

## Title:

EuroCamp: Conding challenge

### Project Description

Advent of Code is a fun coding challenge that takes place each year, consisting of a series of small puzzles. We would like you to complete a part of this challenge to demonstrate your coding style and approach to problem solving. The challenge can be found at [https://adventofcode.com](https://adventofcode.com/). You will need to connect your GitHub account to participate.

### Project directory structure

    ├───cypress/ # cypress end to end tests
    ├── public/ # Public assets
    |    └──__helper__ # contain files for gameOne and GameTwo
    ├── src/ # React components and application logic
    |    ├──__tests__/ # Jest Test files and suites
    |    └──components/ # reusable react components
    |    └──utils/ # common utils like helper functions and constants
    ├── package.json # dependencies and scripts
    ├── cypress.config.json # cypress configurations
    ├── tsconfig.json # typescript configurations
    ├── tailwind.config.json # tailwind css configurations
    └── ... # Other frontend-related files
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

#### Product - technical decision

I decided to use react just because it offers something visual, and also allow me to play more with cypress testing tool.
but the decision to go with react does not affect the requirement like using Typescript and unit test.

### Learning purpose (Not need)

Cypress offers unit tests, component test and end to end test. in this project we will only use cypress for E2E testing.

### Run E2E tests (Cypress)

Requirement: application running

1. launch the cypress UI test runner, and you can run the E2E test manually

```bash
   npm run cy:open
```

2. Run tests on the terminal

```bash
   npm run cy:e2e
```

When it comes to writing end-to-end (E2E) tests with Cypress, there isn't a one-size-fits-all approach. The approach you choose depends on various factors such as the complexity of your application, the specific use cases you want to test, and your team's preferences.

However, here are two common approaches you can consider:

- Component-Based Testing:
  - Write tests that focus on individual components or small units of your application.
  - Test the behavior and functionality of each component in isolation, mocking any dependencies if necessary.
  - This approach is useful for ensuring that each component behaves as expected and can help catch bugs early in the development process.
  - Use tools like cy.get() to select specific DOM elements within your component and cy.contains() to assert on the expected content or behavior.

Example

```bash
  describe('Button component', () => {
    it('should render with correct text', () => {
      cy.visit('/');
      cy.get('button').should('contain.text', 'Click me');
    });

    it('should call onClick handler when clicked', () => {
      cy.visit('/');
      cy.get('button').click();
      // Add assertions for expected side effects
    });
  });
```

- User Action-Based Testing:
  - Write tests that simulate user interactions and test the end-to-end flow of your application.
  - Mimic real user behavior by interacting with your application through clicks, typing, and other actions.
  - Test common user journeys or use cases from start to finish.
  - This approach helps ensure that your application works correctly from the user's perspective.
  - Use Cypress commands like cy.visit() to navigate to different pages, cy.get() to select elements, and cy.type() or cy.click() to simulate user actions.

Example

```bash
  describe('User actions', () => {
    it('should navigate to about page when link is clicked', () => {
      cy.visit('/');
      cy.contains('About').click();
      cy.url().should('include', '/about');
    });

    it('should add an item to the cart', () => {
      cy.visit('/');
      cy.get('.product').eq(0).find('button').click(); // Assuming products have a button to add to cart
      cy.get('.cart').should('contain.text', '1 item'); // Assuming cart updates with item count
    });
  });
```

So, user Action-base testing is our main approach for E2E testing, because we want to ensure that the application works as expected from the user's perspective.

### Info

- Cypress Commands [here](https://docs.cypress.io/guides/guides/command-line)
- Cypress Queries [here](https://docs.cypress.io/api/table-of-contents/)
- extra info on Queries [here](https://example.cypress.io/)
- more info [here](https://github.com/cypress-io/cypress-example-kitchensink?tab=readme-ov-file)

Note: always best to write long test in cypress and short because of all process that cypress does for each test

https://cloud.cypress.io/projects/hsewzb/branches/main/overview

## Author

### `Adilson Mendes`
