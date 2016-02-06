import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('expense', {
      category: 'Comida',
      createdOn: new Date()
    });
  },
  actions: {
    save: function() {
      var self = this;
      this.controller.get('model').save().then(function() {
        self.transitionTo('expenses');
      });
    }
  }
});
