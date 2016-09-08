'use strict';

/* Create module for navbar directive */
angular.module('directives.contactUsBody', [])

.directive('contactUsBody',
           ['$location',
            'siteSettings',
            function ($location, siteSettings) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.width = siteSettings.width;
                }
                return {
                    restrict: 'EAC',
                    scope: {
                        data:'='
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/contactComponents/contactUsBody/contactUsBody.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);