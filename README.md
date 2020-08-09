# The FirstTimers

## Quick start
* Create .env.local in the current folder
* Add the following to the .env.local file

    HOST=http://localhost:3141
    MONGODB_URI=mongodb+srv://clientApplication:5sVLt7qFCLAWNMb7@cluster0.nqmka.mongodb.net/wdcc-mern-01?retryWrites=true&w=majority
    AUTH0_CLIENT_ID=QuMmUTJm7sVpOc6z0XkJ3SLw9Qndiybr
    AUTH0_DOMAIN=dev-so1al4mm.au.auth0.com
    AUTH0_CLIENT_SECRET=RwTeC9NnoGYKNUJ7Hv3s94plNp9mFP_aBvNGCnPRBrTD5hcs9uuBtPeS42tM5GYH
    REDIRECT_URI=http://localhost:3141/api/callback
    POST_LOGOUT_REDIRECT_URI=http://localhost:3141/
    SESSION_COOKIE_SECRET=7b9c92e9aa1d3d882369e7c3d8e4f9b3
* Open terminal (either vscode or something else) run ```npm install```
* Then run ```npm run dev``` to open the sever
* We are still developing all the button and Navigation and stuff. Right now u can just go to this page ```http://localhost:3141/hello```

## Our goal and solutions
Our main goal is to help students who have trouble in learning stuff remotely, particulally in watching lecture recording. 
<br><br>
To help that we thought we can improve the video platform and add some subtitles to the recordings, either manually or AI-ly. 
<br><br>
The users are able to see thier lecture recordings and subtitles. They are also able to post their transcripts but unortuantly we have troubles in that. 
<br><br>
Overall it is a great platform to help students improve their studying


<!-- # WDCC MERN Workshop. 
A boilerplate for workshops and tutorials for MERN - Mongo, Express, React, Node/Next

# The WWDC MERN template

This template provides an initial application with the following features
* Home, About and Report pages
* User sign in and registration via Auth0 
* Pages or components that show depending on signed in state.
* Profile component to show data from sign in
* Button to log an event
* Server API to post a new event and return list of events
* Event is a simple object with name, type and date
* MongoDB middleware hook.
* NextJS implicit routing
* Demonstrate React client side data fetching - useEffect
* Demonstrate use of Next server side rendering
* Demonstrate Next SWR data fetching
* Styling using TailwindsCSS
* Jest Unit testing

## The App.
On the home page you first have to log in.  

Once signed in via Auth0 you then see a profile panel with your name and avatar and a button.
When you click the button we log an event in the db - name, date and event type. Everyone who clicks the button logs events into the same collection.

On the report page we fetch and list all the recorded events. This is displayed as a dumb table. 

## Brief
Create a full stack web application that 
* uses React for client side pages and components
* gets and posts data to the server API 
* handle API requests and store data in the database.

More information 
* [Task list](docs/Tasks.md)
* [Auth0 setup](docs/Auth0Setup.md)
* [Database setup](docs/database.md)
* [Vercel setup](docs/Vercel.md)
* [TailwindsCSS styling](https://tailwindcss.com/)
* [Jest Testing](https://jestjs.io/en/)

### Local development
* Create and checkout a new repository based on this template.
* copy .env-template to .env and fill in secrets 
* setup local or remote MongoDB
* `npm install`  to install the packages
* `npm run dev` to start the dev server
* `npm run build` to build the deployment package
* `npm start` to run the production server.

### Test 
* place *.spec.js files in `__tests__` folders close to tested items
* `npm test` to run the test suite
* `npm run test:coverage` to get coverage

### First time deployment
You will require accounts on 
* Auth0 - for identity management - see docs/Auth0Setup.md
* Mongo Atlas Cloud - for a remote database
* Vercel - for instant deployments.

To deploy the production application run `vercel --prod ` in the root folder. (you will need to setup a vercel account)

You will need to complete
* Access keys for Auth0 and vercel in .env.local and vercel.conf
* prod url for app in .env, vercel.conf and Auth0 web app configuration. 

 -->
