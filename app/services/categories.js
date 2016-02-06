import Ember from 'ember';

export default Ember.Service.extend({
  categories: [
    'Comida',
    'Casa',
    'Marcelo',
    'Cristina',
    'Micaela',
    'Amelia',
    'Encargos',
    'Miscelaneos'
  ],
  budget: {
    'Comida': 662,
    'Casa': 1500,
    'Marcelo': 500,
    'Cristina': 600,
    'Micaela': 310,
    'Amelia': 310,
    'Encargos' : 2000,
    'Miscelaneos': 200
  }
});
