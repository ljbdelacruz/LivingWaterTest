﻿
angular.module('otherApp')
.factory('adminDashboardProperties', function () {
    var adminDashboardProperties = {
        isAddingNewsEnable:false,
        isModifyProductsEnable: false,
        update:'&',
    };
    return adminDashboardProperties;
});