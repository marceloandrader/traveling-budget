import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  value: DS.attr('number'),
  description: DS.attr('string'),
  createdOn: DS.attr('date')
});
