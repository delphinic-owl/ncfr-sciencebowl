<!-- @format -->

## _** North Central Florida Regional Science Bowl Interface**_

### _**IMPORTANT**_ -

- This project is an individual, personal project that is not officially sanctioned by the National Science Bowl. It may serve to preface a more formal project undertaken by UF students.

- This project simply aims to fill in the gaps in the mediation of the North Central Florida regional competition, conducted at the University of Florida, which have been unearthed over the years by organizers. This goal is to be achived by developing an interface for volunteers, participants, coaches, and competition organizers that streamlines the competition from registration and preparation to the day of the competition.

- This project was bootstrapped from the following [template](https://github.com/rennemannd/MERN-Template). See this template for instructions on start up.

## Personal Goals

1. Develop a stable grounding and acquaintence with developing a web application, essentially from the ground up.

- Do so in a holistic, calculated fashion, in as Agile a way as is possible, without a client.
- In effect, learn to write, design, and structure code in a clean and professional way that is readily understandable and conducive to onboarding.

2. Develop a strong ability to do research into the various technologies out there and learn on my own, in a self-motivated fashion.

3. Get further acquainted and proficient with the MERN stack. Along the way, pick up knowledge about other frameworks, languages, tech stacks, and APIs that may offer a more suitable approach for development of a formal version of this app alongside a team of other students, later this year.

4. Get relatively proficient in cybersecurity and ensuring proper encryption and all that, such that the formal edvelopment of this app (version 2) can actually be deployed to the target audience, come fall.

## Design/Approach Goals

1. Start the project with [UML] diagrams:

   1. Class Diagrams
   2. User Stories and User Map
   3. Product Backlog
   4. Sequence Diagrams
   5. Wireframes

2. Start and stick to a Kanban board (Trello)

3. Make use of and play around with established design patterns which I am studying in CIS4930: Design Patterns - Object Oriented Programming. Also, try to look out for patterns I'm unintentionally using.

4. Plan out my own version of Agile Sprints.

## Feature Goals (for version 1 (personal) or version 2 (team))

- Roles for: [Organizers, Volunteers, Competitors, and Coaches ]
- Interactive, live bracket system that models the competition, the day of, akin to Challonge.
- Volunteer training/test (?)
- Online, live mock/practice tournaments (?)
- Resources for participants including study material, practices, logistics and day-of planning
- Chat Systems (?)
- College/STEM advice from volunteers (?)

## Available Scripts

### 'npm run install-all'

Install all dependencies for both server and client.

### `npm run dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run server`

Runs just the server in development mode.<br>

### `npm run client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

## File structure

#### `client` - Holds the client application

- #### `public` - This holds all of our static files
- #### `src`
  - #### `assets` - This folder holds assets such as images, docs, and fonts
  - #### `components` - This folder holds all of the different components that will make up our views
  - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components
  - #### `App.js` - This is what renders all of our browser routes and different views
  - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!
