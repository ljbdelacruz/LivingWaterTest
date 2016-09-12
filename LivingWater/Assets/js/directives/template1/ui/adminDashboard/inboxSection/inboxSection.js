'use strict';

/* Create module for navbar directive */
angular.module('directives.inboxSection', [])
.directive('inboxSection',
           ['$location',
            'inboxProperties',
            'deleteInboxSelected',
            'loadData',
            function ($location, inboxProperties, deleteInboxSelected, loadData) {
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
                    scope.enableSelection = false;
                    scope.options = 1;
                    scope.OnOptionSettingChanged = function (option) {
                        switch(+option){
                            case 1:
                                scope.enableSelection = false;
                                break;
                            case 2:
                                scope.enableSelection = true;
                                scope.disableSelectionAll();
                                break;
                            default:
                                scope.enableSelection = true;
                                scope.enableSelectionAll();
                                break;
                        }
                    };
                    scope.disableSelectionAll = function () {
                        for (var i = 0; i < scope.messages.length; i++) {
                            scope.messages[i].isSelected = false;
                        }
                    };
                    scope.enableSelectionAll = function () {
                        for (var i = 0; i < scope.messages.length; i++) {
                            scope.messages[i].isSelected = true;
                        }
                    };
                    scope.DeleteSelected = function () {
                        deleteInboxSelected(scope.messages, scope.SuccessDelete);
                    };
                    scope.SuccessDelete = function () {
                        alert("Success Deleting");
                        loadData(1);
                    };
                }
                return {
                    restrict: 'E',
                    replace: true,
                    scope : {
                        isadmin:'=',
                    },
                    templateUrl: '/Assets/js/directives/template1/ui/adminDashboard/inboxSection/inboxSection.html',
                    compile: function (scope, element, attr) {
                        return {
                            pre: preFn,
                            post: postFn
                        }
                    }
                };
            }]);