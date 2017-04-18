import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Bookdata, BookdataSchema } from '../../api/bookdata/bookdata.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

export const groupObjects = [{ label: 'Image', value: 'Image' },
                             { label: 'Title', value: 'Title' },
                             { label: 'Author', value: 'Author' },
                             { label: 'Course', value: 'Course' }];

Template.Add_Book_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = BookdataSchema.namedContext('Add_Book_Page');
});

Template.Add_Book_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  group() {
    return groupObjects;
  },
});

Template.Add_Book_Page.events({
  'submit .book-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const image = event.target.Image.value;
    const title = event.target.Title.value;
    const author = event.target.Author.value;
    const course = event.target.Course.value;

    const newBookData = { image, title, author, course };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    BookdataSchema.clean(newBookData);
    // Determine validity.
    instance.context.validate(newBookData);
    if (instance.context.isValid()) {

      Bookdata.insert(newBookData);

      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Browse_Books_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});





