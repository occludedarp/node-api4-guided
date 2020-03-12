# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.

## Notes

Types of Environments
Development
Testing
Production

-on a server a process is assigned to your application
-the node api runs in a process on the server
-in node the environment is an Object {process.env}
-the API can read that Object
-Operating Systems or System Administrators can add properties to that environment Object
- service to host several applications in the same server
-let the server pick the port by the variable it assigns dynamically
- most hosting providers will have that port configured for you if not you need to find the environemtn varibale they go by so you can use it in your code


1.) we added the dynamic port variable to index.js
2.) we added the environment variable  and the port variable to the api file
3.) we added the script start : node to package.json

-continuous deployment
code --> commit&push --> heroku deploys
                      ^this is the process we set up
4.)