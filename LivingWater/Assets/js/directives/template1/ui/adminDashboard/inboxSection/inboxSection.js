'use strict';

/* Create module for navbar directive */
angular.module('directives.inboxSection', [])
.directive('inboxSection',
           ['$location',
            'inboxProperties',
            function ($location, inboxProperties) {
                function preFn(scope, element, attr) {
                    /* TODO: Do something here before post function */
                }
                /* Do the directive's logic here */
                function postFn(scope, element, attr) {
                    scope.messages = inboxProperties.inbox;
                    scope.content = { user: '', subject: '', content: '' };
                    scope.username = "";
                    scope.subject = "";
                    scope.showInformation = function (itm) {
                        scope.username = itm.sender_username;
                        scope.subject = itm.subject;
                        scope.content = itm.InboxContent;
                    };
                    scope.CheckIfUnread = function (itm) {
                        for (var i = 0; i < itm.InboxContent; i++) {
                            if (itm.InboxContent[i].unread == false) {
                                itm.unreadcount++;
                            }
                        }
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