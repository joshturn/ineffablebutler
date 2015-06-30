muniButlerApp.factory('Auth', function ($http) {
  var check = function () {
    return $http.get('/api/user', {
      withCredentials: true
    });
  };

  var update = function (user) {
    console.log("user: ", user);
    return $http.put('/api/user', user, {
      withCredentials: true
    });
  };

  var logout = function () {
    return $http.get('/api/logout', {
      withCredentials: true
    });
  };

  return {
    check: check,
    logout: logout, 
    update: update
  };
});
