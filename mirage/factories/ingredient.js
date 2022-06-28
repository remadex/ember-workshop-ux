import { Factory } from 'ember-cli-mirage';
import faker from 'Faker';

export default Factory.extend({
  name() {
    return faker.Company.companyName();
  },
});
