# Photofree

## Introduction

This is a photo gallery web application built with React and AWS Amplify. The app allows users to upload images to a private S3 bucket, view images uploaded by themselves and other users, and sign out.
When you first run the application, you will be prompted to sign up for an account. Once you have signed up and logged in, you can upload images by clicking the "Upload" button in the navbar. Uploaded images will be displayed on the main page of the application.

## Technologies

The app was built using the following technologies:

- React
- AWS Amplify
- AWS S3
- TypeScript
- Docker

## Setup

To set up the app locally, you'll need to follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the root directory of the app.
3. Configure Amplify by running `amplify configure` and following the prompts.
4. Create the necessary resources by running `amplify init` and `amplify push`.

Once you've completed these steps, you can run the app locally with `npm start`.

## Docker

The app includes a Dockerfile that you can use to build and run the app in a Docker container. To build the container, run the following command in the root directory of the app:

1. Setup Docker on your machine
2. Clone the repository and navigate to the project directory
3. Run the following command to build the docker container: `docker build -t react-image .`
4. Once the container is built, you can run it with the following command: `docker run --rm -p 3000:3000 react-image`

This will start the app and make it available at `http://localhost:3000`.