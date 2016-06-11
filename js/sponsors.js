(function(){
    var app = angular.module("sponsors-list", []);
    
    app.directive("sponsorList", ['$http', function($http){
       return{
           restrict : 'E',
           templateUrl : '../pages/sponsors-list.html',
           controller : function(){
               var list = this;
               list.sponsors = [];
               $http.get('../json/sponsor-info.json').success(function(response) {
                    list.sponsors = response;
                    console.log(response);
               });
           },
           controllerAs : 'site'
       }; 
    }]);
})();