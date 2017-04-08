## Magento2 Really Blank Boilerplate

This Magento 2 theme is really blank. It just enables a fallback to the default Magento 2 default theme and disables the default CSS.

This theme includes:

* Sass
* Gulp
* Foundation 6


### Stylesheets ###
This theme comes with SASS files which needs to be processed.
The location for the processed CSS file is:
```pub/static/frontend/Blank/default/en_US/css/```
You can set it to your own needs in `gulpfile.js`. It's directly injected into the pub/frontend - folder. This is only for development. This way Browser Sync and Sourcemapping works better.

For the production environment the CSS files will be compiled into `app/design/frontend/<vendor>/<theme>/web/css`. 

### Translation file ###

You can find the translations in:
```app/i18n/```

### Gulp ###

In de root of Magento you can find `gulpfile.js` and `package.json`.
This helps you to setup a Sass compiler.
Feel free to set your own settings to your needs.

**Starting with Gulp**

Go to your Magento folder and run `npm install`.
This will install all dependencies for using Gulp.
*(For using NPM and Gulp you need to install NodeJS. [Check https://nodejs.org/en/]() how to do this.)*

**Run Gulp**

```gulp dev``` - Starts Gulp in development mode.  

```gulp production``` - Runs Gulp for production environment.

### Foundation 6 ###

In the theme folder `app/design/frontend/Blank/default/` you find a `bower.json`-file. Go to this folder with your terminal and run `bower install`.

*(For running Bower you need to install it first. Please check [https://bower.io/]() for more information about this.)*


### Resources###

* Bower - [https://bower.io]() 
* Nodejs - [https://nodejs.org/en/]() 
* Sass - [http://sass-lang.com]() 
* Magento - [http://devdocs.magento.com/guides/v2.0/frontend-dev-guide/bk-frontend-dev-guide.html]()



Good luck!