angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.backButton.text('');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
    })




    .state('app.contatti', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contatti.html',
          controller: 'contattiCtrl'
        }
      }
    })





    .state('app.benvenuti', {
      cache: false,
      url: '/benvenuti',
      views: {
        'menuContent': {
          templateUrl: 'templates/benvenuti.html',
          controller: 'benvenutiCtrl'
        }
      }
    })

    /* Product single views */
    .state('app.single1', {
        url: '/benvenuti/product-single-page1',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page1.html',
            controller: 'ProductSingle1Ctrl'
          }
        }
    })
    .state('app.single2', {
        url: '/benvenuti/product-single-page2',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page2.html',
            controller: 'ProductSingle2Ctrl'
          }
        }
    })
    .state('app.single3', {
        url: '/benvenuti/product-single-page3',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page3.html',
            controller: 'ProductSingle3Ctrl'
          }
        }
    })
    .state('app.single4', {
        url: '/benvenuti/product-single-page4',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page4.html',
            controller: 'ProductSingle4Ctrl'
          }
        }
    })
    .state('app.single5', {
        url: '/benvenuti/product-single-page5',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page5.html',
            controller: 'ProductSingle5Ctrl'
          }
        }
    })
    .state('app.single6', {
        url: '/benvenuti/product-single-page6',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page6.html',
            controller: 'ProductSingle6Ctrl'
          }
        }
    })
    .state('app.single7', {
        url: '/benvenuti/product-single-page7',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page7.html',
            controller: 'ProductSingle7Ctrl'
          }
        }
    })
    .state('app.single8', {
        url: '/benvenuti/product-single-page8',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page8.html',
            controller: 'ProductSingle8Ctrl'
          }
        }
    })
    .state('app.single9', {
        url: '/benvenuti/product-single-page9',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page9.html',
            controller: 'ProductSingle9Ctrl'
          }
        }
    })
    .state('app.single10', {
        url: '/benvenuti/product-single-page10',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page10.html',
            controller: 'ProductSingle10Ctrl'
          }
        }
    })
    .state('app.single11', {
        url: '/benvenuti/product-single-page11',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page11.html',
            controller: 'ProductSingle11Ctrl'
          }
        }
    })
    .state('app.single12', {
        url: '/benvenuti/product-single-page12',
        views: {
          'menuContent': {
            templateUrl: 'templates/product-single-page12.html',
            controller: 'ProductSingle12Ctrl'
          }
        }
    })

    // News Page tabs
    .state('app.news-tab', {
        url: '/news-tab',
        abstract: true,
        views: {
          'menuContent': {
            templateUrl: 'templates/news-tabs.html',
            controller: 'newsTabCtrl'
          }
        }
    })

    .state('app.news-tab.news', {
      url: '/news',
      views: {
        'tab-news': {
          templateUrl: 'templates/tab-news.html',
          controller: 'newsCtrl'
        }
      }
    })

    .state('app.news-tab.archived', {
      url: '/archived',
      views: {
        'tab-archived': {
          templateUrl: 'templates/tab-archived.html',
          controller: 'archivedCtrl'
        }
      }
    })

    // Catalog Page tabs
    .state('app.catalog-tab', {
        url: '/catalog-tab',
        abstract: true,
        views: {
          'menuContent': {
            templateUrl: 'templates/catalog-tabs.html',
            controller: 'catalogTabCtrl'
          }
        }
    })

    .state('app.catalog-tab.brands', {
      url: '/brands',
      views: {
        'tab-brands': {
          templateUrl: 'templates/tab-brands.html',
          controller: 'brandsCtrl'
        }
      }
    })

    .state('app.catalog-tab.brands-thumbnail-list', {
        url: '/brands/brands-thumbnail-list',
        views: {
          'tab-brands': {
            templateUrl: 'templates/brands-thumbnail-list.html',
            controller: 'brandsThumbnailList'
          }
        }
    })

    .state('app.catalog-tab.categories', {
      url: '/categories',
      views: {
        'tab-categories': {
          templateUrl: 'templates/tab-categories.html',
          controller: 'categoriesCtrl'
        }
      }
    })

    .state('app.catalog-tab.categories-thumbnail-list', {
        url: '/categories/categories-thumbnail-list',
        views: {
          'tab-categories': {
            templateUrl: 'templates/categories-thumbnail-list.html',
            controller: 'categoriesThumbnailList'
          }
        }
    })

    .state('app.catalog-tab.seasons', {
      url: '/seasons',
      views: {
        'tab-seasons': {
          templateUrl: 'templates/tab-seasons.html',
          controller: 'seasonsCtrl'
        }
      }
    })

    .state('app.catalog-tab.seasons-thumbnail-list', {
        url: '/seasons/seasons-thumbnail-list',
        views: {
          'tab-seasons': {
            templateUrl: 'templates/seasons-thumbnail-list.html',
            controller: 'seasonsThumbnailList'
          }
        }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/benvenuti');

});
