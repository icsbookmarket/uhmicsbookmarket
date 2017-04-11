import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Ah Lim',
    last: 'Om',
    condition: 'Excellent',
    price: 60,
  },
  {
    first: 'Jane',
    last: 'Delacruz',
    condition: 'Fair',
    price: 45,
  },
  {
    first: 'William',
    last: 'Johnson',
    condition: 'Excellent',
    price: 60,
  },
  {
    first: 'Tyler',
    last: 'Dennings',
    condition: 'Poor',
    price: 30,
  },

];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
