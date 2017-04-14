import { Template } from 'meteor/templating';
import { Bookdata } from '../../api/bookdata/bookdata.js';

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  bookdataList() {
    return Bookdata.find();
  },
});

Template.Browse_Books_Page.onCreated(function onCreated() {
  this.subscribe('Bookdata');
});