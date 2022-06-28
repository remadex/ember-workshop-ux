import EmberRouter from '@ember/routing/router';
import config from 'ember-workshop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('search');
  this.route('recipes', function () {
    this.route('detail', { path: ':recipe_id' });
    this.route('create');
  });
  this.route('loading');
});
