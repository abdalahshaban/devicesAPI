# Devices

You can :
  - registration (email - password)
  -  login 
  -  AUth provided by JWT
  - create a device (brand -name-description)
  - get user devices
  - add device data
  - get user device data


### Tech
Devices uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [Swagger-ui-express] -  for documenting the APIs 

And of course Devices itself is open source with a [public repository][git-repo-url] on GitHub.

### Installation

Devices requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.
```sh
$ cd zewailcity
$ npm install -d
$ npm run start or node app.js
```

for run test 
```sh
$ cd zewailcity
$ npm install 
$ npm run test
```

for API navigator
```sh
$ npm run start
then
Surf to http://localhost:3000/api-docs
then
signup or login with valid data and copy token value
then click on authorize and past this token to can make other api that required a token
```

   [git-repo-url]: <https://github.com/abdalahshaban/devicesAPI>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Swagger-ui-express]:<https://www.npmjs.com/package/swagger-ui-express>
