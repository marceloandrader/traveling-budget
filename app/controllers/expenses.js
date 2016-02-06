import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  expenses: groupBy('model', 'category'),
  actions: {
    remove: function(exp) {
      if (!confirm('Seguro?')) { return; }
      exp.destroyRecord();
    }
  }
});
