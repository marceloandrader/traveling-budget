import Ember from 'ember';

export function totalExpenses(params/*, hash*/) {
  let total = 0;
  params[0].forEach(function(exp) {
    if (Ember.isPresent(exp.get('value'))) {
      total += parseFloat(exp.get('value'));
    }
  });

  return total;
}

export default Ember.Helper.helper(totalExpenses);
