import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  categories: Ember.inject.service(),
  onlySavedModels: Ember.computed('model.@each.isNew', function() {
    return this.get('model').filter(function(exp) {
      return !exp.get('isNew');
    });
  }),
  expenses: groupBy('onlySavedModels', 'category'),
  actions: {
    remove: function(exp) {
      if (!confirm('Seguro?')) { return; }
      exp.destroyRecord();
    }
  }
});
