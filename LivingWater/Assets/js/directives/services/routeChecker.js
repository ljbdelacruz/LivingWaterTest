
angular.module('otherApp')
.factory('routeChecker', ['userInformation', '$location', '$window', 'productService', 'globalizationByLanguage', function (userInformation, $location, $window, productService, globalizationByLanguage) {
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
                    $location.path(path);
                }
                break;
            case '/Products':
                if (userInformation.islogin == false /*&& userInformation.isadmin */){
                    productService.isenableAddingToCart = false;
                } else {
                    productService.isenableAddingToCart = true;
                }
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
            default:
                break;
        }

        //if not ViewNews path then empty the news title from userInformation.newsToView

    }
}]);