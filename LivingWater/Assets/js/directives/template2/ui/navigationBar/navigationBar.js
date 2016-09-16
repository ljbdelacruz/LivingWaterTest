﻿'use strict';

/* Create module for navbar directive */
angular.module('directives.navigationBar', [])

/**
 * navigationBar directive
 */
.directive('navigationBar',
           ['$location',
            'routeChecker',
            'userInformation',
            'navigationBarProperties',
            function ($location, routeChecker, userInformation, navigationBarProperties) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.isShowUser = navigationBarProperties.isUser;
                    scope.isShowAdmin = navigationBarProperties.isAdmin;
                    scope.Update = function () {
                        if (userInformation.isadmin == false && userInformation.islogin == true) {
                            scope.isShowUser = true;
                        } else if (userInformation.isadmin == true && userInformation.islogin == true) {
                            scope.isShowAdmin = true;
                        } else {
                            scope.isAdmin = false;
                            scope.isShowUser = false;
                        }
                    };
                    navigationBarProperties.update = scope.Update;
                    navigationBarProperties.update();
                    scope.goto = function (path) {
                        routeChecker(path);
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        items: "="
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/navigationBar/navigationBar.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);