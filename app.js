
(function(){
    var app = angular.module("charlton-heritage", ['site-navigation','sponsors-list','picture-host']);
    
    app.directive("navigation", [function(){
       return{
           restrict : 'E',
           templateUrl : 'index.html',
           controller : function(){
           },
           controllerAs : 'viewpage'
       }; 
    }]);
})();