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
    course: 'ICS 111',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'DISCRETE MATHEMATICS AND ITS APPLICATION',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$65',
    course: 'ICS 141 / ICS 241',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'DATA STRUCTURES ABSTRACTIONS AND DESIGN USING JAVA',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$80',
    course: 'ICS 211',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'THE C PROGRAMMING LANGUAGE',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$40',
    course: 'ICS 212',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'THE C++ PROGRAMMING LANGUAGE',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$50',
    course: 'ICS 212',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'INTRODUCTION TO ALGORITHM',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 311',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'PC ASSEMBLY LANGUAGE',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 312',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'LAND OF LISP',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 313',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'PROGRAMMING LANGUAGE PRAGMATICS',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 313',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'DATABASE SYSTEMS: THE COMPLETE BOOK',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 321',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'DIGITAL LOGIC DESIGN: A RIGOROUS APPROACH',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 331',
    address: 'markrc@hawaii.edu',
  },
  {
    title: 'OPERATING SYSTEM CONCEPTS',
    condition: '5',
    first: 'Mark',
    last: 'Cummins',
    price: '$90',
    course: 'ICS 332',
    address: 'markrc@hawaii.edu',
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