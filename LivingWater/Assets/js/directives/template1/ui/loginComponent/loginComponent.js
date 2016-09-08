'use strict';

/* Create module for navbar directive */
angular.module('directives.loginComponent', [])

/**
 * navigationBar directive
 */
.directive('loginComponent',
           ['$location',
            'userInformation',
            'userListService',
            'processChecker',
            'loadInbox',
            'loadConcern',
            'submitLogin',
            function ($location, userInformation, userListService, processChecker, loadInbox, loadConcern, submitLogin) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.username = "";
                    scope.password = "";
                    scope.goto = function () {
                        //this one changes the path/url
                        processChecker(this.item.path);
                        $location.path(this.item.path);
                    };
                    scope.login = function () {
                        var data = { username: scope.username, password: scope.password };
                        submitLogin(data, scope.Checking);
                     }
                    scope.Checking = function () {
                        if (userInformation.islogin == true) {
                            loadInbox();
                            //loads the concerns
                            loadConcern();
                            scope.update();
                            processChecker('/Home');
                            $location.path('/Home');
                        } else {
                            alert("Wrong User Credentials");
                        }
                    }
                }
                return {
                    restrict: 'EAC',
                    replace: true,
                    scope: {
                        update: '&',
                    },
                    templateUrl: '/Assets/js/directives/template1/ui/loginComponent/loginComponent.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };


            }]);