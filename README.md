# The Game Awards - Nominess for "Game of the Year" category app!

A small app to showcase universal rendering and rounting with ReactJS and NodeJS.  

<img src="https://raw.githubusercontent.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp/master/src/static/img/github-cover.png" alt="Cover image" />

###Required:

* NodeJS and NPM installeds on your OS.
* A supported browser (it works on mobile browsers too).

If you don't know JSX syntax yet, I really recommend to you take a brief look at official JSX doccumentation (I listed it at final part of this readme).
Check the end of this file to see a nice tutorial to check how I made this project.

### Lets begin!

After downloaded or cloned the project, open your terminal on the root folder then run:
```
npm install
```

It should install both requireds and dev packages. For the next steps I need to warn you that you have two options for using "http-server" and "webpack" modules:

1 - Use "http-server" and "webpack" packages accessing them by their folders (they've been already installed);
2 - Use their versions globally. (I don't recommend this one).
```
npm install -g http-server webpack@1.13.x
```

####Generating our app's bundle (optional)
It's optional because the bundle has already generated and commited, but whether you prefer to either generate it again or generate a development version, follow one of the steps below:

For the first option:
```
$ NODE_ENV=production node_modules/.bin/webpack -p
```

For the second one (globally):  
```
$ NODE_ENV=production webpack -p
```

#### Preparing the enviroment!
Now, the last step! Prepare you http enviroment using the module "http-server". As mentioned above, whether you prefer the first option:
```
node_modules/.bin/http-server src/static
```

Or, by the second one:
```
http-server src/static
```

After doing that, you should see some messages as these below:  
<img src="https://raw.githubusercontent.com/ViniciusTavares/TGA2015UniversalReactAndNodeApp/master/src/static/img/github-enviroment.png" alt="Http enviroment's message" />

That's it! I hope you enjoy this project!

###Useful links:

* React official documentation (https://facebook.github.io/react/)
* JSX In Depth (https://facebook.github.io/react/docs/jsx-in-depth.html)


In this project I've made some adaptations from [this tutorial](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app). I've preserved much code as well as the very useful comments on it.

I'll be grateful if you can report either bugs or any issue, besides your feedback will be welcome too!
