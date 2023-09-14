# paying-bills
Paying-bills is project for the course NVD. The idea for the project is to have one platform for paying and keeping track of the bill for your household.
The technologies used for the back end are: Docker PostgreSQL Environment and GraphQL Server and for the front end we use: React with Relay management library which fetch and 
update data with GraphQL.

# requirements to start the project
  1. node recommended version 16.18.0
  2. npm recommended version 8.19.2
  3. Docker which you can download it from this link https://www.docker.com/

# starting the back end
  1. navigate to the directory where the docker file is "\paying-bills-back"
  2. run the command "npm install"
  3. run the command "docker-compose up -d"
  4. run the command "node --es-module-specifier-resolution=node index.js"

# starting the front end
  1. navigate to the directory "\paying-bills-front"
  2. run the command "npm install"
  3. run the command "npm start"
