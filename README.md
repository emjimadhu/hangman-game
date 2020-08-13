<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">HANGMAN GAME</h3>

  <p align="center">
    A Hangman Game built using React.js, Typescript and NX Workspace.
    <br />
    <br />
    <a href="https://hangman-game-eta.vercel.app/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Why](#why)
* [What i wanted to learn from this Project](#what-i-wanted-to-learn-from-this-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Required Versions](#required-versions)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Main Scripts](#main-scripts)
* [Directory Structure](#directory-structure)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<!-- USAGE EXAMPLES -->
## Why

I am learning ReactJS, so wanted to understand fundamentals of React. And wanted to learn how to creaate fully typed React Project usig Typescript. And wanted to learn NX Workspace for monorepo projects in depth. I found this [tutorial](https://www.youtube.com/watch?v=jj0W8tYX_q8&t=1s) interesting. In that tutorial they created it with React with JavaScript. And i wanted to reproduce the same project in Typescript.

## What i wanted to learn from this Project

- [x] `useEffect` react hook when and how to use it,
- [X] `useState` react hook when and how to use it,
- [X] Fully typed react functional components,
- [X] How to use monorepo architecture like google using `nx` workspace,
- [X] How to seperate each feature into a seperate library and use it in the app.
- [X] How to use custom `eslint` rules for better linting and proper code structure,
- [X] How to auto deploy static site to [vercel.com](https://vercel.com)

### Built With

* [ReactJS](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [NX Workspace](https://nx.dev/react)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Required Versions

- **node** - v12.16.1
- **npm** - v6.14.5
- **yarn** - v1.22.4
- **nx** - v10.0.11

### Prerequisites

* node

```sh
# Mac and Linux using nvm (node-version-manager)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

nvm install v12.16.1
```

* yarn

```sh
# Mac
brew install yarn

# Debian / Ubuntu
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

* nx

```sh
# NPM
npm install -g nx

# Yarn
yarn global add nx
```

### Installation

1. Clone the repo

```sh
# SSH
git clone git@github.com:emjimadhu/hangman-game.git

# HTTPS
git clone https://github.com/emjimadhu/hangman-game.git
```

2. Install NPM packages

```sh
yarn # or yarn install
```

## Main Scripts

* `yarn start:client` - Starts Development server for react app,
* `yarn build:client` - Builds react app for production,
* `yarn lint:client` - Lints React App

## Directory Structure

- `root`: Project root holds all the flies of the project
  - `apps`: Holds client(ReactJS)
    - `client`: Directory contains all the React app codes
  - `libs`: Holds all the common library and codes you can share between apps
    - `client`: Holds all the components used in react app
      - `figure`: Figure component
      - `header`: Header component
      - `notification`: Notification component
      - `popup`: Popup component
      - `word`: Word component
      - `wrong-letters`: WrongLetters component
  - `readme-images`: Holds all the images for README.



<!-- CONTACT -->
## Contact

Em Ji Madhu - [![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/emjimadhu/hangman-game](https://github.com/emjimadhu/hangman-game)

Demo Link: [https://hangman-game-eta.vercel.app/](https://hangman-game-eta.vercel.app/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
* [CodeSTACKr](https://www.youtube.com/codeSTACKr)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: repo-assets/screenshot.png
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=1
[linkedin-url]: https://www.linkedin.com/in/em-ji-madhu-8b007456/
