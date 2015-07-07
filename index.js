/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-easing',
  included: function (app) {
    app.import(app.bowerDirectory + "/jquery-easing-original/jquery.easing.js");
  }
};
