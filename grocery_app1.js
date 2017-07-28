//initializing the app
var grocery_shopping=angular.module('grocery_shopping',['ngRoute']);


//giving directions on hitting the url
function routeConfiguration($routeProvider){
    $routeProvider
        .when('/',{
        templateUrl:'pages/login.html',
            controller:'loginController'
    })
     .when('/home',{
        templateUrl:'pages/home.html',
            controller:'homeController'
    })
    .when('/restaurant/:id',{
        templateUrl :'pages/restaurant.html',
            controller:'restaurantController'
    });
}

grocery_shopping.config(routeConfiguration);


grocery_shopping.controller('loginController',function($scope,$location){

    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            $location.url('/home');
        }

    };

});

//creating a service which can be used later
grocery_shopping.service('restaurantService',function(){
    this.restaurants = [


        {
            id:0,
            name:'Deli Smoke House',
            address:'Cannaught Place',
            votes:'56k',
            Cuisine:'Chinese',
            cost:'800',
            image:('shd.png'),
            recommendedDish:{
                name: 'Best Dish:italian Pizzachick',
                image: 'sdh.jfif'
            }
        },
        {
            id:1,
            name:'Lord of the Rings',
            address:'Cannaught Place',
            votes:'45k',
            Cuisine:'Chinese',
            cost:'1200',
            image:('lor.jfif')
//            recommendedDish:{
//            name:'Best dish:Mexicana O mexica',
//            url:'lor.jfif'
     //}
        },
        {
            id:2,
            name:'Farzi Cafe',
            address:'Cannaught Place',
            votes:'29k',
            Cuisine:'Cafe',
            cost:'1700',
            image:('farzicafe.jfif'),
            recommendedDish:{
            name:'cycle Sandwich',
                image:'tfc.jfif'
        }
        },
        {
            id:3,
            name:'Out of the box',
            address:'Gurgaon',
            votes:'80k',
            Cuisine:'Italian',
            cost:'1200',
            image:('otb.jfif') ,
            recommendedDish:{
            name:'chefs special pizza',
            image:'outofthebox.jpg'
        }
        },
        {
            id:4,
            name:'Wood House Cafe',
            address:'Malviya Nagar',
            votes:'20k',
            Cuisine:'Mughlai',
            cost:'500',
            image:('whc.jfif'),
            recommendedDish:{
                name:'cup delight',
                image:'farzi.jfif'
            }


        }
    ]
});


//});
//controller for home page
grocery_shopping.controller('homeController',function($scope ,restaurantService){
    console.log('home controller');
    $scope.restaurants=restaurantService.restaurants;


});
grocery_shopping.controller('restaurantController',function($scope,$routeParams,restaurantService){
    console.log("enter");
    $scope.restaurantId = $routeParams.id;
    var restaurants=restaurantService.restaurants;
    $scope.restaurant = restaurants[$routeParams.id];

  //$scope.showDetails=false;
//    console.log($routeParams.restaurant);
//        $scope.restaurant=restaurants[$routeParams.restaurantIndex];
//  console.log($scope.restaurant);
});

//     function getIngerdiants(url){
//var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
//$http({
//    'method': 'POST',
//    'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
//    'headers': {
//        'Authorization': 'Key ed3ad1138e85425b9e7bbadb376bb4f1',
//        'Content-Type': 'application/json'
//    },
//    'data': data
//}).then(function (response) {
//        var ingredients = response.data.outputs[0].data.concepts;
//        console.log(response);
//        var list = '';
//        for (var i =0;i < ingredients.length ;i++) {
//            $scope.ingredients.push(ingredients[i].name);
//        }
//
//    });
//
//}
//
//});
//
//
////})
//
//
//
//
//
