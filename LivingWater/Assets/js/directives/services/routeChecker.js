
angular.module('otherApp')
.factory('routeChecker', ['userInformation', '$location', 'productService', 'globalizationByLanguage', function (userInformation, $location, productService, globalizationByLanguage) {
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
            case '/Login':
                globalizationByLanguage(userInformation.language_id);
                break;
            default:
                break;
        }

        //if not ViewNews path then empty the news title from userInformation.newsToView

    }
}]);