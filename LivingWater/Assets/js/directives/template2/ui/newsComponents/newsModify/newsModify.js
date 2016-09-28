'use strict';

/* Create module for navbar directive */
angular.module('directives.newsModify', [])
.directive('newsModify',
           ['$location',
            'newsProperties',
            'userInformation',
            function ($location, newsProperties, userInformation) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {

                    scope.title = "";
                    scope.content = "";
                    scope.datePublished;
                    scope.images = [];
                    scope.videos = [];
                    scope.CheckMode = function () {
                        switch (+scope.mode) {
                            case 1:
                                //this mode is for adding new news
                                scope.videos = [];
                                break;
                            case 2:
                                //this mode is for deleting news
                                break;
                            default:
                                break;
                        }
                    };

                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        mode:'='
                    },
                    templateUrl: '/Assets/js/directives/template2/ui/newsComponents/newsModify/newsModify.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);