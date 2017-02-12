
# Personal Website

![Image of Yaktocat](https://github.com/Bryanschauerte/profileUpdates/out.gif)

## Node server

###Express

- helmet handles headers for security
- bodyParser to expose and populate req.body
- Mongo dataBase edited by requests made to server
- Serving of database contents to populate front end
- Handles Json Web Tokens to secure admin and requests
- Serves static files as well as a isomorphic react application

## Frontend

#### React
- Server rendered complied with jspm

#### React Motion
- handles beautiful physics motions

#### React Redux
- State management
- Seperation of concerns
- redux-thunk to handle promises

#### REST Requests
- Axios Handles requests to the server

#### SASS
- CSS extension
- Complied with jspm and browser prefixes added

### Development
- Grunt to pipe sass and serve all files in real time.
- redux-logger to keep an eye on dispatches

### Deployment
- Front end complied using JSPM self executing bundle injected into static template.
