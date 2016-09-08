'use strict';

/* Create module for navbar directive */
angular.module('directives.newsContainer', [])

/**
 * navigationBar directive
 */
.directive('newsContainer',
           ['$location',
            'userInformation',
            'userListService',
            'processChecker',
            function ($location, userInformation, userListService, processChecker) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    //this one changes the html form from view mode to edit mode
                    scope.process = 1;
                    scope.addingMode = false;
                    scope.viewMode = true;
                    scope.editMode = false;
                    scope.allowModifyNews = userInformation.isadmin;
                    scope.index = -1;

                    scope.findIndex = function () {
                        for (var i = 0; i < userListService.news.length; i++) {
                            if (userListService.news[i].id == scope.news.id) {
                                scope.index = i;
                                break;
                            }
                        }
                    };
                    scope.findIndex();
                    scope.SwitchModes = function (action) {
                        if (action == 'add') {
                            scope.addingMode = true;
                            scope.viewMode = false;
                            scope.editMode = false;
                            processChecker('addNews');
                            alert("adding Mode");
                            scope.process = userInformation.process;
                        } else if (action == 'view') {
                            scope.addingMode = false;
                            scope.viewMode = true;
                            scope.editMode = false;
                            processChecker('viewNews');
                            scope.process = userInformation.process;
                        } else if (action == 'edit') {
                            scope.addingMode = false;
                            scope.viewMode = false;
                            scope.editMode = true;
                            processChecker('editNews');
                            scope.process = userInformation.process;
                        }
                    };

                    scope.ModifyNews = function (action, id) {
                        if (action == 'edit') {
                            userInformation.newsToModify_id = id;
                            userInformation.process = 2;
                            scope.SwitchModes('edit');
                            //scope.ChangeToEditMode();
                            //$location.path('/EditNews');
                        } else if(action == 'delete') {
                            alert("Are You Sure You Want To Delete This News?");
                        } else if (action == 'save') {
                            scope.SwitchModes('view');
                        } else if (action == 'add') {

                        } else if (action == 'learnMore') {
                            userInformation.newsToView.title = userListService.news[id].title;
                            userInformation.newsToView.content = userListService.news[id].content;
                            userInformation.newsToView.datePublished = userListService.news[id].id;
                            $location.path('/ViewNews');
                        } else {
                            alert('No Function Yet');
                        }
                    };
                }
                return {
                    restrict: 'E',
                    scope: {
                        news:'=',
                    },
                    replace: true,
                    templateUrl: '/Assets/js/directives/template1/ui/newsComponents/newsContainer/newsContainer.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                    
                };


            }]);