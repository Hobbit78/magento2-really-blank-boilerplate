## Magento2 Really Blank Boilerplate

This Magento 2 theme is really blank. It just enables a fallback to the default Magento 2 default theme and disables the default CSS.

### Stylesheets ###
This theme comes with SASS files which needs to be compiled.
The location for the compiled CSS file is:
```pub/static/frontend/Blank/default/en_US/css/```

### Translation file ###

You can find the translation file in:
```app/i18n/```

### Gulp ###

In de root of Magento you can find `gulpfile.js` and `package.json`.
This helps you to setup a Sass compiler.
Feel free to set your own settings to your needs.

**Run Gulp**
For development
```gulp dev```

For production
```gulp production```