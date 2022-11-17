#!/bin/sh

## Setup the Dev Environment automatically
git clone https://github.com/alwisidi/tuwaiq_devops_project.git
cd ./tuwaiq_devops_project

## To install the dependecies in the development environment
# npm i --prefix ./server & npm i --prefix ./client

## To run both the server and the react app
# node ./server/index.js & cd ./client && npm start

## Build Docker images and run them using Docker Compose
docker build -t tuwaiq_prj_server ./server &
docker build -t tuwaiq_prj_client ./client &&
docker compose up
