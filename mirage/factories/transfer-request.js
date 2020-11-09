import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  requestDate() {
    let daysAgo = faker.random.number({ min: 0, max: 15 });
    return faker.date.recent(daysAgo);
  },
  startDate() {
    return this.requestDate;
  },
  endDate() {
    return faker.random.boolean() ? new Date() : null;
  },
  total() {
    return faker.random.number({ min: 1, max: 10000000 });
  },
  processed() {
    return this.endDate ? faker.random.number({ min: 0, max: this.total }) : 0;
  },
  remaining() {
    return faker.random.number({ min: 1, max: 1000000 });
  },
  status() {
    // This values of this field appear to be somewhat arbitrary
    return 'Sometimes the system reports suCcEsses or ErrOrs and sometimes it reports fAiLures or FAILED or FAILED';
  },
  username() {
    return faker.internet.userName();
  },
  fullname() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  email() {
    return faker.internet.email();
  },

  inactive: trait({
    startDate() {
      return null;
    },
    endDate() {
      return null;
    },
    requestDate() {
      let daysAgo = faker.random.number({ min: 0, max: 3 });
      return faker.date.recent(daysAgo);
    },
    remaining() {
      return 0;
    },
    processed() {
      return 0;
    }
  }),

  inProgress: trait({
    endDate() {
      return null;
    },
    remaining() {
      return faker.random.number({ min: 0, max: 500000000 });
    },
    processed() {
      return faker.random.number({ min: 1, max: this.total - 1 });
    }
  }),

  error: trait({
    requestDate() {
      let daysAgo = faker.random.number({ min: 6, max: 15 });
      return faker.date.recent(daysAgo);
    },
    startDate() {
      let daysAgo = faker.random.number({ min: 2, max: 5 });
      return faker.date.recent(daysAgo);
    },
    endDate() {
      let daysAgo = faker.random.number({ min: 0, max: 1 });
      return faker.date.recent(daysAgo);
    },
    remaining() {
      return null;
    },
    processed() {
      return faker.random.number({ min: 1, max: this.total - 1 });
    }
  }),

  success: trait({
    requestDate() {
      let daysAgo = faker.random.number({ min: 6, max: 15 });
      return faker.date.recent(daysAgo);
    },
    startDate() {
      let daysAgo = faker.random.number({ min: 2, max: 5 });
      return faker.date.recent(daysAgo);
    },
    endDate() {
      let daysAgo = faker.random.number({ min: 0, max: 1 });
      return faker.date.recent(daysAgo);
    },
    remaining() {
      return null;
    },
    processed() {
      return this.total;
    }
  })
});
