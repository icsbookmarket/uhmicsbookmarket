Template.Sell_Books_Page.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

// import { Template } from 'meteor/templating';
// import { ReactiveDict } from 'meteor/reactive-dict';
// import { _ } from 'meteor/underscore';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { Bookdata, BookdataSchema } from '../../api/bookdata/bookdata.js';
//
// /* eslint-disable no-param-reassign */
//
// const displayErrorMessages = 'displayErrorMessages';
//
// Template.Sell_Books_Page.onCreated(function onCreated() {
//   this.messageFlags = new ReactiveDict();
//   this.messageFlags.set(displayErrorMessages, false);
//   this.context = BookdataSchema.namedContext('Sell_Books_Page');
// });
//
// Template.Sell_Books_Page.helpers({
//   errorClass() {
//     return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
//   },
//   fieldError(fieldName) {
//     const invalidKeys = Template.instance().context.invalidKeys();
//     const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
//     return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
//   },
// });
//
// Template.Sell_Books_Page.events({
//   'submit .contact-data-form'(event, instance) {
//     event.preventDefault();
//     // Get name (text field)
//     const first = event.target.First.value;
//     const last = event.target.Last.value;
//     const telephone = event.target.Telephone.value;
//     const email = event.target.Email.value;
//
//     const newBookData = { first, last, telephone, email};
//     // Clear out any old validation errors.
//     instance.context.resetValidation();
//     // Invoke clean so that newStudentData reflects what will be inserted.
//     BookdataSchema.clean(newBookData);
//     // Determine validity.
//     instance.context.validate(newBookData);
//     if (instance.context.isValid()) {
//       Bookdata.insert(newBookData);
//       instance.messageFlags.set(displayErrorMessages, false);
//       FlowRouter.go('Home_Page');
//     } else {
//       instance.messageFlags.set(displayErrorMessages, true);
//     }
//   },
// });
//
//
