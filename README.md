#The Game Awards - Nominess for "Game of the Year" category app!

A small app to showcase universal(isomorphic) rendering and rounting with ReactJS and NodeJS.  

<img src="https://raw.githubusercontent.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp/master/src/static/img/github-cover.png" alt="Cover image" />

###Required:

* NodeJS and NPM installeds on your OS.
* A supported browser (it works on mobile browsers too).

If you don't know JSX syntax yet, I really recommend to you take a brief look at official JSX doccumentation (I listed it at the end of this readme). You also can check the last notes to see a nice tutorial about how I made this project.

###Project's principles:
* Universal javascript / Isomorphic javascript

###Tools:

* ExpressJS 4.X
* ReactJS
* React Router
* EJS Templating
* Babel
* Webpack

###Lets begin!

After downloaded or cloned the project, open your terminal on the root folder then run:
```
npm install
```

It should install both requireds and dev packages.

####Fastest way to run this app
I prepared some tasks to run on NPM for speeding up the demostration process.  
Run on your terminal:
```
npm run start
```
It will run all commands to generate and render our universal javascript app. Then open your browser and go to ```localhost:{port}```.


#####Using only the static files (without server rendering)
The http-server module is installed  as a dev dependency. To use it run:
```
npm run static
```

After doing that, you should see some messages as these below:  
<img src="https://raw.githubusercontent.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp/master/src/static/img/github-enviroment.png" alt="Http enviroment's message" />

###Useful links:

* React official documentation (https://facebook.github.io/react/)
* JSX In Depth (https://facebook.github.io/react/docs/jsx-in-depth.html)

In this project I've made some adaptations from [this tutorial](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app). I've preserved much code as well as the very useful comments on it.

I'll be grateful if you can report either bugs or any issue, besides that your feedback will be welcome too!
