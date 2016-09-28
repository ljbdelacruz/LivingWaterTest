'use strict';

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
            'adminDashboardProperties',
            function ($location, routeChecker, userInformation, navigationBarProperties, adminDashboardProperties) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.Remove = function (id) {
                        var temp = {};
                        for (var i = 0; i < scope.videos; i++) {
                            if (scope.videos[i].id == id) {
                                temp = scope.videos[i];
                                break;
                            }
                        }
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        videos: "=",
                        mode:'='
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template2/ui/displayVideo/displayVideo.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);