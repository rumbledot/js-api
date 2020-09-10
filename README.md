# js-api
A part of Dusun project
js-api is a REST API that will handle operation requests to mongoDB Atlas database
and providing authentication using JWT to clients

# project overview
Dusun is a cross platform management game.
- Components:
  - js-api
  - Dusun web-app (symfony + pixiJS)
- Future development
  - Dusun mobile-app (native)
  - Dusun mobile-app (kotlin)

# project requirement
NodeJS NPM, MongoDB Atlas

# steps and libraries
### initialise the project using 'npm init'
### express
  - the framework I used to build this REST API
### nodemon

  nodemon will restart the API after every changes made
### express-session
  
  helps me manage the session, still clashing with curl function I made in front-end
  - session-file-store
  
    store the session in a file
     
### body-parser
  
  with this middleware we can use the request body payload
### dotenv
  
  create and manage .env file that can be use to store values
  
  values that are sensitive like database username and password, location and port number
### mongoose
  
  help connecting to mongoDB atlas
### mongoose-validator
  
  helps validate mongo schema
### joi
  
  this one can help us validate inputs
### uuid
