import { YourBookdata } from '../../api/yourbooks/yourbooks.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const yourbookdataSeeds = [
  {
    title: 'INTRODUCTION TO PROGRAMMING USING JAVA',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$70',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'DISCRETE MATHEMATICS AND ITS APPLICATION',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$65',
    address: 'markrc23141413434134@hawaii.edu',
    description: 'Buy me please. Price is negotiable. Put subject line ' +
    'with the book title so I know which book you are inquiring about',
  },
  {
    title: 'DATA STRUCTURES ABSTRACTIONS AND DESIGN USING JAVA',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$80',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'THE C PROGRAMMING LANGUAGE',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$40',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'THE C++ PROGRAMMING LANGUAGE',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$50',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'INTRODUCTION TO ALGORITHM',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'PC ASSEMBLY LANGUAGE',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'LAND OF LISP',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'PROGRAMMING LANGUAGE PRAGMATICS',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'DATABASE SYSTEMS: THE COMPLETE BOOK',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'DIGITAL LOGIC DESIGN: A RIGOROUS APPROACH',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
  {
    title: 'OPERATING SYSTEM CONCEPTS',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    address: 'markrc@hawaii.edu',
    description: 'Buy me please',
  },
];

// var i=0;
// $('id').each(function(){
//   i++;
//   var newID='menu'+i;
//   $(this).attr('id',newID);
//   $(this).val(i);
// });

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (YourBookdata.find().count() === 0) {
  _.each(yourbookdataSeeds, function seedContacts(stuff) {
    YourBookdata.insert(stuff);
  });
}