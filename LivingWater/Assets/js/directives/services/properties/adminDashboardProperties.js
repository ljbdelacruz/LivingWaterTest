﻿
angular.module('otherApp')
.factory('adminDashboardProperties', function () {
    var adminDashboardProperties = {
        isAddingNewsEnable:false,
        isModifyProductsEnable: false,
        isModifySettingsEnable: false,
        isModifyOrderEnable:false,
        update:'&',
    };
    return adminDashboardProperties;
});