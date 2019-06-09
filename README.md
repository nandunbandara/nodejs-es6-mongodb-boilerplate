# NodeJS ES-6 MongoDB Boilerplate

This is boilerplate for NodeJS projects written in the ES-6 standard with MongoDB as the database. This also includes Swagger integration for your documentation. Please feel free to contribute to make this better.

---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


---

## Install

    $ git clone https://github.com/ntbandara3/nodejs-es6-mongodb-boilerplate.git
    $ cd nodejs-es6-mongodb-boilerplate
    $ npm install

## Running the project in development mode

    $ npm run dev

## Running the project in production mode

    $ npm start

## Testing

    $ npm test

## Build for development

    $ npm run build-dev

## Build for production

    $ npm run build