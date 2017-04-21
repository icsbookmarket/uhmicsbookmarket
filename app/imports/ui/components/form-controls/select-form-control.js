import { Template } from 'meteor/templating';

Template.Select_Form_Control.onRendered(function onRendered() {
  this.$('select.dropdown').dropdown();
});

Template.Select_Form_Control.helpers({
  check(options) {
    console.log(options);
},
});