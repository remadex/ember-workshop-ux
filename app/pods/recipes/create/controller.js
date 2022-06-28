import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { loading } from 'ember-loading';

export default class RecipesCreateController extends Controller {
  @service store;
  @service router;

  @tracked recipe = {
    name: '',
    time: 0,
    preparation: '',
    ingredients: [],
  };

  @action
  @loading
  async saveRecipe(e) {
    e.preventDefault();
    // setTimeout(async () => {
    const recipe = this.store.createRecord('recipe', this.recipe);
    await recipe.save();

    this.recipe = {
      name: '',
      time: 0,
      preparation: '',
      ingredients: [],
    };

    this.router.transitionTo('recipes.detail', recipe.id);
    // }, 10000);
  }
}
