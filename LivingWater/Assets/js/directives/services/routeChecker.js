
angular.module('otherApp')
.factory('routeChecker', ['userInformation', '$location', '$window', 'productService', 'globalizationByLanguage', 'adminDashboardProperties', function (userInformation, $location, $window, productService, globalizationByLanguage, adminDashboardProperties) {
    return function (path) {
        switch (path) {
            case '/Home':
                if (userInformation.islogin == false) {
                    $location.path('/Login');
                } else {
                    $location.path(path);
                }
                break;
            case '/AdminDashboard':
                if (userInformation.isadmin == false && userInformation.islogin == false) {
                    $location.path('\Login');
                } else {
                    if (adminDashboardProperties.update != '&') {
                        adminDashboardProperties.update();
                    }
                    $location.path(path);

                }
                break;
            case '/Products':
                if (userInformation.islogin == false /*&& userInformation.isadmin */){
                    productService.isenableAddingToCart = false;
                } else if(userInformation.islogin == true && userInformation.isadmin == false) {
                    productService.isenableAddingToCart = true;
                }
                productService.isEnableDeleteProduct = false;
                productService.isEnableEditProduct = false;
                $location.path(path);
                break;
            case '/News':
                $location.path(path);
                break;
            case '/ViewNews':
                if (userInformation.newsToView.title == '') {
                    $location.path('/News');
                } else {
                    $location.path(path);
                }
                break;
            case '/AboutUs':
                $location.path(path);
                break;
            case '/ContactUs':
                $location.path(path);
                break;
            case '/Login':
                $location.path('/Login');
                $window.location.reload();
                break;
            case '/Inbox':
                if (userInformation.islogin == false) {
                    $location.path('/Login');
                } else {
                    $location.path(path);
                }
                break;
            case '/Franchise':
                $location.path(path);
                break;
            default:
                break;
        }

        //if not ViewNews path then empty the news title from userInformation.newsToView

    }
}]);