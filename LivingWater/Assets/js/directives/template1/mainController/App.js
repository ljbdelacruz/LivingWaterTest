'use strict';

/* Wait for all resources to be downloaded */
angular
    .element(document)
    .ready(function () {
        /**
        * ngStarterKit Module
        *
        * Description:
        *   A simple boilerplate for angularjs developers
        */
        /* Start the angular app */
        angular.bootstrap(document, ['ngStarterKit']);
    });

angular.module('ngStarterKit', [
            'ngRoute',
            /* Directives */
            'directives.loginComponent',
            'directives.registrationComponent',
            'directives.navigationBar',
            'directives.contactUsBody',
            'directives.concernComponent',
            'directives.verificationCode',
            'directives.socialNavBar',
            'directives.inboxSection',
            'directives.inboxMessage',
            'directives.concernSection',
            'directives.newsSection',
            'directives.newsContainer',
            'directives.playlistComponent',
            'directives.carouselImage',
            'directives.embedVideo',
            'directives.adminNavBar',
            'directives.displayImage',
            'directives.modifyNews',
            'directives.dAboutUs',
            'directives.productBody',
            'directives.newsBody',
            'directives.newsPreview',
            'directives.productModify',
            /*Modules*/
            'modules.Home',
            'modules.Login',
            'modules.ContactUs',
            'modules.AdminDashboard',
            'modules.News',
            'modules.Products',
            'modules.AboutUs',
            'modules.ViewNews',
            /* Services*/
            'otherApp',
])
        .config(['$routeProvider',
                 function ($routeProvider) {
                     $routeProvider.otherwise({ redirectTo: '/Login' });
                 }
        ]);
