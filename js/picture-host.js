(function(){
    var app = angular.module("picture-host", []);
    
    app.directive("pictureHost", ['$http', function($http){
       return{
           restrict : 'E',
           templateUrl : '../pages/picture-inject.html',
           controller : function(){
               var list = this;
               list.pictures = [];
               list.loc = '../images/' + location.search.substr(1) +'/meta.json';
               $http.get(list.loc).success(function(response) {
                    list.pictures = response;
               });
           },
           controllerAs : 'host'
       }; 
    }]);
})();