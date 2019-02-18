import Ember from 'ember';
// import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('author', params.author_id);
  }
});
