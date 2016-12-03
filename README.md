#The Game Awards - Nominess for "Game of the Year" category app!

A small app to showcase universal rendering and rounting with ReactJS and NodeJS.  

<img src="https://raw.githubusercontent.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp/master/src/static/img/github-cover.png" alt="Cover image" />

###Required:

* NodeJS and NPM installeds on your OS.
* A supported browser (it works on mobile browsers too).

If you don't know JSX syntax yet, I really recommend to you take a brief look at official JSX doccumentation (I listed it at final part of this readme).
Check the end of this file to see a nice tutorial to check how I made this project.

###Lets begin!

After downloaded or cloned the project, open your terminal on the root folder then run:
```
npm install
```

It should install both requireds and dev packages.

####Preparing the enviroment (choose only one above)

#####Generating template via NodeJs!
As we've used JSX syntax we can't use the common node interpreter. It's time to use babel-node to run our server.js script!
```
NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' src/server.js
```
If everything is right, you have to see the follow message: "Server running on http://localhost:port [env]"

#####Reading only the static files (without a node server)
I've already installed the http-server module as a dev dependency. To use it run:
```
node_modules/.bin/http-server src/static
```

Or, if you prefer install it by yourself and use it globally:
```
http-server src/static
```

After doing that, you should see some messages as these below:  
<img src="https://raw.githubusercontent.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp/master/src/static/img/github-enviroment.png" alt="Http enviroment's message" />

####Generating our app's bundle (optional)
It's optional because the bundle has already generated and commited, but whether you prefer to either generate it again or generate a development version, follow the command below:
```
$ node_modules/.bin/webpack -d
```

That's it! I hope you enjoy this project!

###Useful links:

* React official documentation (https://facebook.github.io/react/)
* JSX In Depth (https://facebook.github.io/react/docs/jsx-in-depth.html)


In this project I've made some adaptations from [this tutorial](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app). I've preserved much code as well as the very useful comments on it.

I'll be grateful if you can report either bugs or any issue, besides your feedback will be welcome too!
