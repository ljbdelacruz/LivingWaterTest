
angular.module('otherApp', [])
.factory('sharedService', function () {
    var sharedService = {
        background: '/Assets/resources/livingWater/bg1.jpg',
        logo:"",
        navItems: [],
        slideImage: [{ image: '/Assets/resources/livingWater/img1.jpg', path: '', page_id: 1 },
                     { image: '/Assets/resources/livingWater/img2.jpg', path: '', page_id: 2 },
                     { image: '/Assets/resources/livingWater/img3.jpg', path: '', page_id: 3 },
                     { image: '/Assets/resources/livingWater/img4.jpg', path: '', page_id: 4 }],
        slideInterval: 3000,
        subjectTypeCombo : [  { subject: 'Other Concerns' },
                              { subject: 'Franchise Inquiry' },
                              { subject: 'Product' }],
        productLineTypes: [{ label: 'WATER', show: true, product: [] }, { label: 'ETC', show: true, product: [] }],
        productLine: [],
    };
    return sharedService;
});