# Line Please

Built by Anugrah Lambogo

## Visit the Live site

https://line-please-app.now.sh/

## About Line Please

This site is to help users memorize blocks of text by using a teleprompt like tool.
There are 3 main parts of the application; the upload new text component, the teleprompt component, and the view/delete component. Users can go to upload new text to upload the text they want to commit to memory. In this component, they can break up their text by sections. Users can add or subtract sections to fit the amount they need. Each line in the section is also expected to be broken up by line breaks. Once the user uploads the text, they can then go to the teleprompt component and practice that text. The teleprompt component allows users to select their text, select whether they want their text to be displayed by sections or individual lines, select how much time each part is displayed, and select whether or not the user wants to see the full line or only the first 2 words of the line. The user can then use this component and the different settings to practice recite their text and commit to memory. Finally, users can go to view/delete to view the list of uploaded texts and delete the texts.

Screenshots of the components are shows below

## Technology Used

**Client:** *ReactJs, HTML, CSS*

**Server/DB:** *NodeJS, Express, PostgreSQL*

**Testing:** *Snapshot, Mocha, Chai*

## Setup

In order to run this react app on your local environment:

> *npm i* in order to install all dependencies

> *npm start* opens a localhost version of this React client.

> *API_ENDPOINT* in the config.js file points to the heroku hosted database.  In order to install a local version of the server/database, please see the [server repository](https://github.com/thinkful-ei-iguana/line-please-server) and follow README instructions for setting up a local server environment.

## Screenshots

![Image - dashboard](https://github.com/thinkful-ei-iguana/line-please-app/blob/master/public/Screen%20Shot%202.png?raw=true "dashboard")
![Image - dashboard](https://github.com/thinkful-ei-iguana/line-please-app/blob/master/public/Screen%20Shot%201.png?raw=true "dashboard")
![Image - dashboard](https://github.com/thinkful-ei-iguana/line-please-app/blob/master/public/Screen%20Shot%203.png?raw=true "dashboard")
