// Ajax requests for login/logout/signup/changepassword

'use strict';

const app = require('../app');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = (data) =>
  let request = $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
  return request;
};

const signIn = (data) => {
  let request = $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
  return request;
};

const signOut = () => {
  let request = $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE'
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  return request;
};

const changePassword = () => {
  let request = $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
  return request;
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
