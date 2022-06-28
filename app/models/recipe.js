import Model, { attr, hasMany } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr('string') name;
  @attr('string') preparation;
  @attr('number') time;
  @hasMany('ingredient') ingredients;
}
