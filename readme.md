# Fullstack with CRA and Express PoC

This is a proof of concept repo that sideloads a CRA app into an express ejs view during development. The advantage of this is that fetch calls to the exppress API are the same both in dev and in prod since the UI and API load on the same Port.

## Development

Clone the repo and install npm dependencies in the `api` and `frontend` folders

Copy `api/.env.sample` to `api/.env`

Startup both apps using node-foreman by first installing it.

`npm i -g node-foreman`

Then booting it up with

`nf start`

## Production

Set ` NODE_ENV=production` in `api/.env`

Build the CRA front end with `yarn build`

Run the Prod app with `nf start`

You can view the frontend app on `http://localhost:3000` and call the api health check endpoint on `http://localhost:3000/health`
