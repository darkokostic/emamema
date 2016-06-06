angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('contattiCtrl', function($scope) {
    google.maps.event.addDomListener(window, 'load', initialize());

    function initialize() {
        var myLatLng = new google.maps.LatLng(45.537765, 10.220054);
        var mapOptions = {
            center: myLatLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false,
            streetViewControl: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Crowne Plaza'
        });
        $scope.map = map;
    }
})

.controller('benvenutiCtrl', function($scope, $ionicScrollDelegate, $timeout) {

    /* function for autoscroll */
    $timeout(function(){
        $ionicScrollDelegate.getScrollView().options.animationDuration = 1000;
        $ionicScrollDelegate.scrollBottom([true]);
    },3000);

})

.controller('catalogTabCtrl', function($scope) {

})

.controller('brandsCtrl', function($scope) {

})

.controller('categoriesCtrl', function($scope) {

})

.controller('seasonsCtrl', function($scope) {

})

.controller('brandsThumbnailList', function($scope) {

})

.controller('seasonsThumbnailList', function($scope) {

})

.controller('categoriesThumbnailList', function($scope) {

})



.controller('newsCtrl', function($scope, $ionicSwipeCardDelegate, $rootScope) {
        var cardTypes = [{
            id: 0,
        title: 'Swipe down to clear the card',
        date: '5/1/2016',
        description: 'Aperitivo da Emamema! Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore...',
        image: 'img/pic.png',
        link: 'https://www.facebook.com/'
      }, {
          id: 1,
        title: 'Where is this?',
        date: '6/1/2016',
        description: 'Aperitivo da Emamema! Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore...',
        image: 'img/pic.png',
        link: 'https://www.facebook.com/'
      }, {
          id: 2,
        title: 'What kind of grass is this?',
        date: '7/1/2016',
        description: 'Aperitivo da Emamema! Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore...',
        image: 'img/pic2.png',
        link: 'https://www.facebook.com/'
      }, {
          id: 3,
        title: 'What beach is this?',
        date: '8/1/2016',
        description: 'Aperitivo da Emamema! Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore...',
        image: 'img/pic3.png',
        link: 'https://www.facebook.com/'
      }, {
          id: 4,
        title: 'What kind of clouds are these?',
        date: '9/1/2016',
        description: 'Aperitivo da Emamema! Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore...',
        image: 'img/pic4.png',
        link: 'https://www.facebook.com/'
      }];

      $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);
      var cardsSwipedList = [];

      $scope.cardSwiped = function(id) {
          if(id != 0) {
              cardsSwipedList.push(cardTypes[id]);
              $rootScope.swipedCards = cardsSwipedList;
              console.log(cardsSwipedList);
              console.log(cardTypes[id]);
          }
          $scope.addCard();
      };

      $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
      };

      $scope.addCard = function() {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        $scope.cards.push(angular.extend({}, newCard));
        // cardsSwipedList.push(angular.extend({}, newCard));
        // $rootScope.swipedCards = cardsSwipedList;
        // console.log(cardsSwipedList);
      }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})

.controller('archivedCtrl', function($scope) {

})

.controller('newsTabCtrl', function($scope) {

})


.controller('ProductSingle1Ctrl', function($scope) {

})

.controller('ProductSingle2Ctrl', function($scope) {

})

.controller('ProductSingle3Ctrl', function($scope) {

})

.controller('ProductSingle4Ctrl', function($scope) {

})

.controller('ProductSingle5Ctrl', function($scope) {

})

.controller('ProductSingle6Ctrl', function($scope) {

})

.controller('ProductSingle7Ctrl', function($scope) {

})

.controller('ProductSingle8Ctrl', function($scope) {

})

.controller('ProductSingle9Ctrl', function($scope) {

})

.controller('ProductSingle10Ctrl', function($scope) {

})

.controller('ProductSingle11Ctrl', function($scope) {

})

.controller('ProductSingle12Ctrl', function($scope) {

})
