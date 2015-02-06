/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-jquery-easing',
  included: function (app) {
    app.import(app.bowerDirectory + "/whirl/dist/whirl.css");
  }
};
