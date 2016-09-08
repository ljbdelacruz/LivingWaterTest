'use strict';

/* Create module for navbar directive */
angular.module('directives.inboxSection', [])
.directive('inboxSection',
           ['$location',
            function ($location) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.content = { user: '', subject: '', content: '' };
                    scope.showInformation = function (itm) {
                        scope.content = itm;
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        items: "="
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/adminDashboard/inboxSection/inboxSection.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);