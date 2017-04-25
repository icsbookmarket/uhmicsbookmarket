import { Template } from 'meteor/templating';
import { Bookdata } from '../../api/bookdata/bookdata.js';

Template.Courses.onCreated(function onCreated() {
  this.subscribe('Bookdata');
});

Template.Courses.helpers({
  bookdataList() {

    return Bookdata.find({}, { sort: { course: 1 } });
  },
});
