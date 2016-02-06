import Ember from 'ember';

export function budgetFor(params/*, hash*/) {
  let categories = params[1];
  return categories.budget[params[0]];
}

export default Ember.Helper.helper(budgetFor);
