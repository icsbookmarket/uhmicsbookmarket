import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing',
  action() {
    BlazeLayout.render('Landing');
  },
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    BlazeLayout.render('Login');
  },
});

FlowRouter.route('/home', {
  name: 'Home',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home' });
  },
});
FlowRouter.route('/your-books', {
  name: 'Your_Books_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Your_Books_Page' });
  },
});

FlowRouter.route('/sell-books', {
  name: 'Sell_Books_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Sell_Books_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.route('/browse-books', {
  name: 'Browse_Books_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Books_Page' });
  },
});

FlowRouter.route('/courses', {
  name: 'Course_Directory',
  action() {
    BlazeLayout.render('App_Body', { main: 'Course_Directory' });
  },
});

FlowRouter.route('/add-book', {
  name: 'Add_Book_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Book_Page' });
  },
});

FlowRouter.route('/sell-books', {
  name: 'Sell_Books_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Sell_Books_Page' });
  },
});

FlowRouter.route('/book-check', {
  name: 'Book_Check_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Book_Check_Page' });
  },
});

FlowRouter.route('/book-detail', {
  name: 'Book_Detail_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Book_Detail_Page' });
  },
});

FlowRouter.route('/contact-seller', {
  name: 'Contact_Seller_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Contact_Seller_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
