
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('register',{
      url:'/register',
        templateUrl: 'templates/register.html'

  })
    .state('hh', {
      url: '/hh',
      templateUrl: 'templates/hh.html'
    })
    .state('home',{
      url:'/home',
      templateUrl: 'templates/home.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');




    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;

        $scope.getSentiment = function () {


                        //This is the Alchemy API for getting the sentiment of the most recent review for a place.
                        var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                            "?apikey=a976918cfb9d7624147a02ce41a3bb9b6ecd3ba6" +
                            "&outputMode=json&text=" + final_span.innerHTML);
                        callback.success(function (data) {
                            if(data!=null && data.docSentiment!=null)
                            {
                                $scope.ReviewWithSentiment = {"reviewText" : final_span.innerHTML,
                                                            "sentiment":data.docSentiment.type,
                                                             "score":data.docSentiment.score  };
                                document.getElementById('div_ReviewList').style.display = 'block';


                            }
                        });


            }
        $scope.getEmotion = function () {

}};
            //This is the Alchemy API for getting the sentiment of the most recent review for a place.
            var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion" +
                "?apikey=a976918cfb9d7624147a02ce41a3bb9b6ecd3ba6" +
                "&outputMode=json&text=" + final_span.innerHTML);
            callback.success(function (data) {
                if(data!=null && data.docEmotions!=null)
                {
                    $scope.ReviewWithEmotion = {"reviewText" : final_span.innerHTML,
                        "anger":data.docEmotions.anger,
                        "disgust":data.docEmotions.disgust,
                        "fear":data.docEmotions.fear,
                        "joy":data.docEmotions.joy,
                        "sadness":data.docEmotions.sadness,
                    };
                    document.getElementById('div_ReviewEmotionList').style.display = 'block';


                }
            })


        }

    });
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

