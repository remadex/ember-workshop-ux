import { Factory } from 'ember-cli-mirage';
import faker from 'Faker';

export default Factory.extend({
  name() {
    return faker.Company.companyName();
  },
  preparation() {
    return faker.Lorem.sentences(3);
  },
  time() {
    return faker.random.number(2);
  },
});
