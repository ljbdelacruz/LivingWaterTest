angular.module('modules.ContactUs')
.controller('ContactUsCtrl',
            ['$scope',
             function ($scope) {
                 $scope.data = [{ head: 'Contact Us At', email: 'ljbdelacruz123@gmail.com', telnumber: '7788', cell: '09394242879' }];
                 


             }
            ]
);