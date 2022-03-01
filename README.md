# reactandnodejsruntogether

#This is a simple react and nodejs application. This exmaple shows how to run react and nodejs concurrently.

This is for beginer and easy to learn.

#backend package.json
"scripts": {
    "server": "nodemon index.js",
    "client": "npm run start --prefix ../frontend",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
  
  #frontend package.json
  "proxy": "http://localhost:4000/",
