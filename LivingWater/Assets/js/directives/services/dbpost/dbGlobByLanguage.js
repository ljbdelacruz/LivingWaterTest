
angular.module('otherApp')
.factory('globalizationByLanguage', ['$http', 'Globalization', 'userInformation', function ($http, Globalization, userInformation) {
    return function (language_id, callBackResponse) {
        var parameters = {
            "langID": angular.toJson(language_id)
        }
        Globalization.globalizationTranslationMainNav = [];
        Globalization.adminNavBarItems = [];

        $http.post('index.aspx/GetGlobalizationByUserLanguage', angular.toJson(parameters))
        .success(function (data) {
            var result = angular.fromJson(data.d);

            for (var i = 0; i < result.length; i++) {
                var isShow = false;
                if (result[i].filteredLanguage.translation == "Admin Dashboard" && userInformation.isadmin == false || result[i].filteredLanguage.translation=="Log out" && userInformation.islogin==false) {
                    isShow = false;
                } else {
                    isShow = true;
                }
                this.temp = { label: result[i].filteredLanguage.translation, path: result[i].path, show: isShow }
                switch (result[i].page_id) {
                    case 1:
                        //this is for navigation bar pushing
                        Globalization.globalizationTranslationMainNav.push(temp);
                        break;
                    case 2:
                        //admin navbar
                        Globalization.adminNavBarItems.push(temp);
                        break;
                    default:
                        break;
                }
            }
            callBackResponse();

        }).error(function (data) {

        });
    }
}]);