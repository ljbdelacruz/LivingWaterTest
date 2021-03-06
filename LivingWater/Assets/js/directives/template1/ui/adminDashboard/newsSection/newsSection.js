﻿'use strict';

/* Create module for navbar directive */
angular.module('directives.newsSection', [])
.directive('newsSection',
           ['$location',
            'userListService',
            function ($location, userListService) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.news = userListService.newNews;
                }
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/adminDashboard/newsSection/newsSection.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);