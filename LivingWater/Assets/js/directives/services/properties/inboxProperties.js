
angular.module('otherApp')
.factory('inboxProperties', function () {
    var inboxProperties = {
        inbox: [{
            id: 1, sender_id: 1, sender_username: 'admin', receiver_id: 2, subject: 'Product', unreadcount:0,
            InboxContent: [{ id: 1, message: 'Hello', unread: false, inbox_id: 1 },
                           { id: 2, message: 'Yellow', unread: false, inbox_id: 1 }]
        }],
    };
    return inboxProperties;
});