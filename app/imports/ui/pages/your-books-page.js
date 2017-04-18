import { Template } from 'meteor/templating';
import { YourBookdata } from '../../api/yourbooks/yourbooks.js';

Template.Your_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  yourbookdataList() {
    return YourBookdata.find();
  },
});

Template.Your_Books_Page.onCreated(function onCreated() {
  this.subscribe('YourBookdata');
});
Template.Sell_Books_Page.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});
