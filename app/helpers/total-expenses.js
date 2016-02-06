import Ember from 'ember';

export function totalExpenses(params/*, hash*/) {
  let total = 0;
  params[0].forEach(function(exp) {
    total += exp.get('value');
  });

  return total;
}

export default Ember.Helper.helper(totalExpenses);
