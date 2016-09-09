
angular.module('otherApp')
.factory('inboxProperties', function () {
    var inboxProperties = {
        inbox: [{
            id: 1, sender_id: 1, sender_username: 'admin', receiver_id: 2, subject: 'Product', unreadcount:0,
            InboxContent: [{ id: 1, message: 'Hello', unread: false, inbox_id: 1 },
                           { id: 2, message: 'What Happen last night aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?', unread: false, inbox_id: 1 }]
                },
                {
                    id: 2, sender_id: 2, sender_username: 'ljbdelacruz', receiver_id: 2, subject: 'Franchising', unreadcount: 1,
                    InboxContent: [{id: 1, message: 'Homeland Security We Are Here To Arrest You!', unread:true, inbox_id: 2}]
                }
        ],
    };
    return inboxProperties;
});