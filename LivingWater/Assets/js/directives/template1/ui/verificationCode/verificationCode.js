'use strict';

/* Create module for navbar directive */
angular.module('directives.verificationCode', [])

/**
 * navigationBar directive
 */
.directive('verificationCode',
           ['$location',
            'userInformation',
            function ($location, userInformation) {
                function preFn(scope, element, attr) {
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.userInput = "";
                    scope.showError = false;

                    scope.Verify = function () {
                        if (scope.userInput == scope.image.answer) {
                            if (userInformation.process == 20) {
                                userInformation.successRegister = true;
                                alert("Correct Registration");
                            } else if (userInformation.process == 21) {
                                userInformation.sucessCreatingConcern = true;
                                alert("Correct Concern");
                            }
                        } else {
                            scope.showError = true;
                            alert("Wrong Verification Code");
                        }
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        image: '=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/verificationCode/verificationCode.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);