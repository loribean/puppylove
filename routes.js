module.exports = (app, allModels) => {




  // require the controller
  const puppyControllerCallbacks = require('./controllers/puppycontrol')(allModels);

  app.get('/', puppyControllerCallbacks.getHome);
  app.get('/login/user', puppyControllerCallbacks.logIn);
  app.post('/storepassword/user', puppyControllerCallbacks.postLogIn);
  app.get('/login/org', puppyControllerCallbacks.logInOrg);
  app.post('/storepassword/org', puppyControllerCallbacks.postLogInOrg);
  app.get('/submitdog', puppyControllerCallbacks.submitDog);
  app.post('/posteddog', puppyControllerCallbacks.postDog);
  app.get('/register/user', puppyControllerCallbacks.createAccountUser);
  app.post('/signed/user', puppyControllerCallbacks.postAccountUser);
  app.get('/register/org', puppyControllerCallbacks.createAccountOrg);
  app.post('/signed/org', puppyControllerCallbacks.postAccountOrg);
  app.get('/dashboard/org', puppyControllerCallbacks.getDashboard);
  app.get('/dogs/:id', puppyControllerCallbacks.indivDog);
  app.get('/dogs/edit/:id', puppyControllerCallbacks.editDog);
  app.put('/postededit', puppyControllerCallbacks.postEditDog);
  app.get('/timeline',puppyControllerCallbacks.timeline);
  app.post('/swipe',puppyControllerCallbacks.swipe);
  app.get('/matches/:id',puppyControllerCallbacks.getOrgMatches);
   app.get('/messages/:yourid/:otherid',puppyControllerCallbacks.getMessages);
  app.post('/messages/:senderid/:recipientid',puppyControllerCallbacks.postMessages);
   app.get('/chat/:id',puppyControllerCallbacks.getMessagesUser);
   app.post('/chathist/:id',puppyControllerCallbacks.postMessagesUser);
   app.get('/home',puppyControllerCallbacks.getAllConversationsUser);
   app.get('/logout',puppyControllerCallbacks.logout);


};