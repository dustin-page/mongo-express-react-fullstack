# MongoDB, Express, React, Redux and Sagas Starter Kit

This is a full stack JavaScript development environment.

## Tooling

- Webpack - For handling imports and bundling code
- Babel - For transpiling ES6+ and JSX into ES5 compatible JavaScript
- React - For building the UI
- Redux - For state management
- React Sagas - For handling async operations and side effects
- MongoDB - Database for persisting data
- Express - JavaScript server for serving up Web APIs called by the front end

## Installation
`npm install`

## *** React (Front End Application) ***

### Running the Application
`npm run dev`

## *** MongoDB (Database) *** 

### Install MongoDB Community Edition

1. Download MongoDB Community Edition

    `https://www.mongodb.com/download-center/community`

2. Run the Windows Installer from the Windows Command Interpreter

    Important: You must open the command interpreter as an Administrator.

### Start MongoDB Community Edition from the Command Interpreter (Command Prompt)

Important: You must open the command interpreter as an Administrator.

1. Create database directory (only do this if you don't already have MongoDB installed)

    `cd C:\`

    `md "\data\db"`

    Referenes

    * Additional installation instructions - `https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/`

2. Start your MongoDB database

    a. In Windows Explorer navigate to the MongoDB bin directy

    `C:\Program Files\MongoDB\Server\4.2\bin`

    b. Open a command prompt in the bin directory.

    Note: This can be done by typing "cmd" in the Windows Explorer address bar

    c. In the command prompt type:

    `mongod.exe --dbpath="c:\data\db"`

    Note: The --dbpath option points to your database directory. If you've previously added this database path to "mongod.exe" you can just run the command `mongod.exe` without this flag.

    If the MongoDB database server is running correctly, the Command Interpreter displays:

    `[initandlisten] waiting for connections`

### MongoDB GUI Tools

* Robot 3T - Install this tool to visual the contents of your database


## *** Express (Server) *** 

### Running the Express Server

`npm run server`

### Tests

`npm run server-test`

## Future Enhancements

1. Add a CSS Preprocesser for SASS or LESS
2. Set up a Webpack build process for production
3. Add tests to `server/server.js` for HTTP request errors
