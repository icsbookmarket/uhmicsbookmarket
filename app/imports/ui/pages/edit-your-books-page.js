import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Bookdata, BookdataSchema } from '../../api/bookdata/bookdata.js';
import { YourBookdata, YourBookSchema } from '../../api/yourbooks/yourbooks.js';

Template.Browse_Books_Page.helpers({

  /**
   * @returns {*} All of the Bookdata documents.
   */
  bookdataList() {
    return Bookdata.find();
  },
});

Template.Edit_Your_Books_Page.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

const displayErrorMessages = 'displayErrorMessages';

/*  export const groupObjects = [{ label: 'First', value: 'First' },
                             { label: 'Last', value: 'Last' },
                             { label: 'Email', value: 'Email' },
                             { label: 'Price', value: 'Price' },
                             { label: 'Description', value: 'Description' }];
                             */

export const conditionList = ['Excellent', 'Great', 'Good', 'Fair', 'Poor'];

Template.Edit_Your_Books_Page.onCreated(function onCreated() {
  this.subscribe('YourBookdata');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = YourBookSchema.namedContext('Edit_Your_Books_Page');
});

Template.Edit_Your_Books_Page.helpers({
  bookDataField(fieldName) {
    const bookData = YourBookdata.findOne(FlowRouter.getParam('_id'));
    return bookData && bookData[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  conditions() {
    return _.map(conditionList, function makeLevelObject(level) {
      return { label: level };
    });
  },
  booktitles() {
    const bookDataTitles = Bookdata.find().fetch();
    const l = [];
    _.map(bookDataTitles, function (book) {
      l.push({
        label: book.title, selected: false,
      });
    });
    return l;
  },
  /*group() {
    return groupObjects;
  },
  */
});

Template.Edit_Your_Books_Page.events({
  'submit .sale-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    // Are these getting the right things? Especially Condition and Titles
    const title = event.target.Titles.value;
    const address = event.target.Email.value;
    const first = event.target.First.value;
    const last = event.target.Last.value;
    const price = event.target.Price.value;
    const condition = event.target.Condition.value;
    const description = event.target.Description.value;
    console.log('Can you see me?');
    console.log(`price: ${price}, condition: ${condition}, description: ${description}, lastName: ${last}, firstName: ${first}, address" ${address}`);

    const updatedSaleData = { title, condition, first, last, price, address, description };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    YourBookSchema.clean(updatedSaleData);
    console.log(updatedSaleData);
    // Determine validity.
    instance.context.validate(updatedSaleData);
    if (instance.context.isValid()) {
      console.log('What is here vv');
      console.log(updatedSaleData);
      YourBookdata.update(updatedSaleData);
      // YourBookdata.update(FlowRouter.getParam('_id'), {$set: updatedSaleData });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Your_Books_Page');
    } else {
      console.log('What is here else');
      console.log(updatedSaleData);
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
//
//
