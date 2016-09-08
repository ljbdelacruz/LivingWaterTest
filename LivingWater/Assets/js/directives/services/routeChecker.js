
angular.module('otherApp')
.factory('routeChecker', ['userInformation','$location','productService', function (userInformation, $location, productService) {
    return function (path) {
        switch (path) {
            case '/Home':
                if (userInformation.islogin == false) {
                    $location.path('/Login');
                }
                break;
            case '/AdminDashboard':
                if (userInformation.isadmin == false && userInformation.islogin == false) {
                    $location.path('\Login');
                }
                break;
            case '/Products':
                if (userInformation.islogin == false /*&& userInformation.isadmin */){
                    productService.isenableAddingToCart = false;
                } else {
                    productService.isenableAddingToCart = true;
                }
                break;
            case '/ViewNews':
                if (userInformation.newsToView.title == '') {
                    $location.path('/News');
                }
                break;
            default:
                break;
        }

        //if not ViewNews path then empty the news title from userInformation.newsToView

    }
}]);