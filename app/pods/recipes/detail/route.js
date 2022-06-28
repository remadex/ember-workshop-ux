import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RecipesDetailRoute extends Route {
  @service store;

  async model({ recipe_id }) {
    return await this.store.findRecord('recipe', recipe_id, {
      include: 'ingredients',
    });
  }
}
