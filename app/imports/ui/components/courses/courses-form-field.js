import { Template } from 'meteor/templating';

Template.Courses_Form_Field.onRendered(function onRendered() {
  this.$('.dropdown').dropdown();
});

