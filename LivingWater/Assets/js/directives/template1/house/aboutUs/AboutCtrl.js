angular.module('modules.AboutUs')
.controller('AboutCtrl',
            ['$scope',
             function ($scope) {
                 $scope.data = [{ videos: { vid: '' }, images: [{ image: '/Assets/resources/livingWater/img1.jpg', resolution: '', bootstrap: '' }], title: 'Living Water Incorported', content: 'the living water incorported started as a humble company' }
                               ];
             }
            ]


);