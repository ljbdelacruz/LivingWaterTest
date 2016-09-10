'use strict';

/* Create module for navbar directive */
angular.module('directives.inboxMessage', [])
.directive('inboxMessage',
           ['$location',
            function ($location) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.message = "";
                    scope.Reply = function () {
                        alert("REPLY");
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        content: "=",
                        username: "=",
                        subject:"=",
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/adminDashboard/inboxMessage/inboxMessage.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);