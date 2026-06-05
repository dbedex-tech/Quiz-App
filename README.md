# Quiz App

A programming quiz application built with React and Vite.

Users select a programming topic, complete a timed quiz, receive immediate feedback, and view their final score.

## Documentation

Project documentation can be found in the `docs` folder:

* PRD (Product Requirements Document)
* Architecture
* Roadmap

Please review these documents before starting work on any issue.

## Tech Stack

* React
* JavaScript
* Vite
* CSS
* QuizAPI

## Requirements

* Node.js
* npm

This project uses `npm` as the package manager.

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root using `.env.example` as a reference.

```env
VITE_QUIZ_API_KEY=your_api_key_here
```

Access environment variables in the application using:

```js
import.meta.env.VITE_QUIZ_API_KEY
```

Note:

* Only variables prefixed with `VITE_` are exposed to frontend code.
* Never commit your `.env` file.

### Start the Development Server

```bash
npm run dev
```

## Project Structure

```txt
docs/
src/
public/
.env.example
package.json
vite.config.js
```

For the full application structure, refer to the Architecture document.

## Contributing

Before starting work:

1. Review the PRD, Architecture, and Roadmap documents.
2. Pick or assign yourself an issue.
3. Create a feature branch.
4. Open a Pull Request linked to the corresponding issue.

Please keep implementations aligned with the agreed scope and architecture.

## Current Scope

The current MVP includes:

* Topic selection
* QuizAPI integration
* Global timer
* Immediate answer validation
* Question explanations
* Results screen

For the complete scope, refer to the PRD.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
