import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('expenses', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:id'});
  });
});

export default Router;
