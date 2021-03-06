import Publisher from './publisher';
import DS from 'ember-data';

export default Publisher.extend({
  name: DS.attr('string'),
  discount: DS.attr('number'),
  books: DS.hasMany('book')
});
