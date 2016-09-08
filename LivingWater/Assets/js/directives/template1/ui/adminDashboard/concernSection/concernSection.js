'use strict';

/* Create module for navbar directive */
angular.module('directives.concernSection', [])
.directive('concernSection',
           ['$location',
            function ($location) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.sTitle = "";
                    scope.subject="";
                    scope.sUsername = "";
                    scope.sMessage = "";

                    scope.showInformation = function (itm) {
                        scope.sTitle = itm.title;
                        scope.sMessage = itm.message;
                        scope.sUsername = itm.username;
                        scope.subject = itm.subject;
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {
                        items:'=',
                    },
                    templateUrl: '/Assets/js/directives/template1/ui/adminDashboard/concernSection/concernSection.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);