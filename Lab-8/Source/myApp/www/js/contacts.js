module.controller('MyCtrl', function($scope, $cordovaContacts, $ionicPlatform) {
  $scope.addContact = function() {
    $cordovaContacts.save($scope.contactForm).then(function(result) {
      // Contact saved
    }, function(err) {
      // Contact error
    });
  };

  $scope.getAllContacts = function() {
    $cordovaContacts.find().then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
      $scope.contacts = allContacts;
    }
  };

  $scope.findContactsBySearchTerm = function (searchTerm) {
    var opts = {                                           //search options
      filter : searchTerm,                                 // 'Bob'
      multiple: true,                                      // Yes, return any contact that matches criteria
      fields:  [ 'displayName', 'name' ]                   // These are the fields to search for 'bob'.
      desiredFields: [id];    //return fields.
    };

    if ($ionicPlatform.isAndroid()) {
      opts.hasPhoneNumber = true;         //hasPhoneNumber only works for android.
    };

    $cordovaContacts.find(opts).then(function (contactsFound) {
      $scope.contacts = contactsFound;
    };
  }

  $scope.pickContactUsingNativeUI = function () {
    $cordovaContacts.pickContact().then(function (contactPicked) {
      $scope.contact = contactPicked;
    }
  }

});

