'use strict';

/* Create module for navbar directive */
angular.module('directives.inboxMessage', [])
.directive('inboxMessage',
           ['$location',
            'addInboxContent',
            function ($location, addInboxContent) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.newInboxContent = { id: 1, message: '', unread: true, inbox_id: -1, dateCreated: '' };
                    scope.Reply = function () {
                        scope.newInboxContent.inbox_id = scope.content[0].inbox_id;
                        scope.newInboxContent.dateCreated = '9-12-2016';
                        addInboxContent(scope.newInboxContent, scope.SuccessReply);
                    };
                    scope.SuccessReply = function () {
                        alert("Success");
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