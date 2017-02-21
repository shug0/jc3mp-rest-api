# Just Cause 3 MP - REST API
Provide a REST API with your running server

## Setup
### Install
Just clone the repository in your `packages` folder and run `npm install` in it.
### How it's work
When the server load the package it will launch your [Express](http://expressjs.com/) server and provide the rest api on the port `4204`.

## Implemented API
### Players

`/players`

Return a array of connected Players on the server.
The players came from the [jcmp](https://just-cause.mp/docs/client/objects/jcmp) global object.

`/players/:steamId`

Return a connected [Player](https://just-cause.mp/docs/server/classes/Player) by his **steamId**

`/players/:steamId/kick`

Kick the connected [Player](https://just-cause.mp/docs/server/classes/Player) by his **steamId**
