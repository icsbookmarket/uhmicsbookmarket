import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const YourBookdata = new Mongo.Collection('YourBookdata');

/**
 * Create the schema for Book Data
 */
export const YourBookSchema = new SimpleSchema({

  title: {
    label: 'title',
    type: String,
    optional: false,
    max: 200,
  },
  condition: {
    label: 'condition',
    type: String,
    optional: false,
    max: 20,
  },
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 200,
  },
  course: {
    label: 'course',
    type: String,
    optional: false,
    max: 200,
  },
  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 200,
  },
});

YourBookSchema.messages({

});

YourBookdata.attachSchema(YourBookSchema);
