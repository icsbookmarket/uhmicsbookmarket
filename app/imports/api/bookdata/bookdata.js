import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Bookdata = new Mongo.Collection('Bookdata');

/**
 * Create the schema for Book Data
 */
export const BookdataSchema = new SimpleSchema({
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
  telephone: {
    label: 'telephone',
    type: String,
    regEx: /^\d{3}-\d{3}-\d{4}$/,
    optional: true,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
});

BookdataSchema.messages({
  regEx: "Telephone numbers must be xxx-xxx-xxxx, where x is a digit."
});

Bookdata.attachSchema(BookdataSchema);
