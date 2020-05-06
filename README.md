## Project information

- Student: Xavier Bardaji Gallardo
- University: Brunel University London
- Degree: Digital Design Year 2
- Module: Mobile Web application project

Odyssey is a web full-stack social media application for adventurers, travelers… who want to share their most exciting adventures with their friends or the world. This is a University assignment forth server-side and mobile web development subjects, and with this project, I hope to demonstrate my understanding of client-side and server-side technologies for mobile web application development.

This repository only includes Front-End Development files. To run this project, the web server implementation needs to be executed on another port. 

Back-End Development Repository: https://github.com/XavierMod/Odyssey-back-end

## Installation Guide

Odyssey has been built using a local development environment and it is not ready for production deployment. Odyssey’s development workflow is industry-standard, meaning that relies on the same methodologies and structures as any other modern professional web application. It focuses on build tools using NPM (as previously explained), and the next process would be the one to follow when another developer forks the project on their local environment. 
To meet the requirements of the assignment, I have provided the local files of the last version of the project. However, if for some reason these files can’t be opened, I have also pushed both client and server sider repositories to GitHub.

Client-Side Guide

DON'T FORGET TO ALSO INSTALL THE BACK-END FILES ON ANOTHER PORT. Back-End Development Repository: https://github.com/XavierMod/Odyssey-back-end

1. Install Node: https://nodejs.org/en/download/

2. Install NPM: https://www.npmjs.com/get-npm

3. Install Moesif Origin & CORS Changer Google Chrome Extension, to avoid CORS issues: https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc
Open the “odyssey-project” folder with an IDE (e.g. Visual Studio Code).

4. From the integrated terminal, run “npm i”. This will install all the necessary node modules required to run Odyssey.

5. Once step 4 has finished, also from the integrated terminal, run “npm start”. This will start the app on “localhost:3000/“. This process needs to be running for the app to work. 

6. Don’t forget to have the Moesif Origin & CORS Changer extension activated when using the app, or requests between the client and server-side will not work. 

## Using and inspecting the app

Several users and posts have been introduced in the app to test the interactivity and functionality of the app. New users can be added into the database (Google Sign Up system not included), add friends, create posts, etc. To test the interaction between users, this is the complete list of “dummy” users that have been already put in the database:

| Username      | Email                   | Password      |
|---------------|-------------------------|---------------|
| katysoto012   | katysoto012@gmail.com   | katysoto012   |
| adamsnackbox1 | adamsnackbox1@gmail.com | adamsnackbox1 |
| alexhonnold12 | alexhonnold12@gmail.com | alexhonnold12 |
| joebell       | joebell@gmail.com       | joebell       |

