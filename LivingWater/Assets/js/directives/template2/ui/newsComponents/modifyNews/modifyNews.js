'use strict';

/* Create module for navbar directive */
angular.module('directives.modifyNews', [])
.directive('modifyNews',
           ['$http',
            function($http) {
    function preFn(scope, element, attr) {
        /* TODO: Do something here before post function */

    }
    /* Do the directive's logic here */
    function postFn(scope, element, attr) {
        scope.news={title:'', content:'', images:[], videos:[]};
        scope.videoCode="";
        scope.isAllowPostNews=false;

        scope.AddNewVideo=function(){
            if(scope.videoCode!=""){
                var nVideo={id: 1, news_id: 1, title: 'Youtube video player', design: 'youtube-player',
                            type: 'text/html', width: 300, height: 300, source: 'https://www.youtube.com/embed/'+scope.videoCode,
                            thumbnail: 'http://img.youtube.com/vi/'+scope.videoCode+'/default.jpg', frameborder:0};
                scope.news.videos.push(nVideo);
            }
        };
        scope.AddNewImage=function(){
            //fill in data here
            var nImage={};
            scope.news.images.push(nImage);
        };
        scope.PostNewNews=function(){
            //add news verifier here and send the news and the isSuccess method into its parameter
            if(isAllowPostNews){
                //call the addNews service and execute the code to insert new news
            }
        };
        scope.isSuccess=function(){
            scope.isAllowPostNews=true;
        };
        scope.DeleteNews=function(){
            //delete selected news
        };
        scope.SaveChanges=function(){
            //here update changes
        };
        //mode legend mode 1 = add, 2=edit
        scope.mode2=3;
    }
    return {
        restrict: 'E',
        scope: {
            mode:'=',
            newsSelected:'=',
        },
        replace: true,
        //change path if will be used on other projects
        templateUrl: '/Assets/js/directives/template2/ui/newsComponents/modifyNews/modifyNews.html',
        compile: function(scope, element, attr) {
            return {
                pre: preFn,
                post: postFn
            }
        }
    };
}]);