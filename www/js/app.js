// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ngCordova','ionic','starter.controllers', 'ionic-material', 'ngMessages'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
         localStorage.setItem("like", true);
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    
.state('insert-image', {
      url: '/insert-image',
     views: {
            'menuContent': {
      templateUrl: 'templates/insert-image.html',        
      controller: 'EventCtrl'
            }
     }
    })
    .state('app.activity', {
        url: '/activity/:vedioId',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            }
        }
    })

  
 .state('app.viewcategory', {
        url: '/viewcategory/:categoryid',
        views: {
            'menuContent': {
                templateUrl: 'templates/viewcategory.html',
                controller: 'ViewCategoriesCtrl'
            },
        
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery/:categoryid',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'ViewCategoriesCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })  
    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'templates/events.html',
                controller: 'EventCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    }) 
     .state('app.addevents', {
        url: '/addevents',
        views: {
            'menuContent': {
                templateUrl: 'templates/addevents.html',
                controller: 'EventCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
.state('app.movies', {
        url: '/movies/:categoryid',
        views: {
            'menuContent': {
                templateUrl: 'templates/movies.html',
                controller: 'ViewCategoriesCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile/:vedioId',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ActivityCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/friends');
});
