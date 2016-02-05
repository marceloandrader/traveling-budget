import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('expense', {
      createdOn: new Date()
    });
  },
  actions: {
    save: function() {
      this.controller.get('model').save();
    }
  }
});
