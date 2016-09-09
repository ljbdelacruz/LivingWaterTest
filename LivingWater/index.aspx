<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="LivingWater.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" type="text/css" href="/Assets/css/template1/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="/Assets/css/template1/Custom.css" />
    <link rel="stylesheet" type="text/css" href="/Assets/css/template1/global.css" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet" />
    <link href="Assets/css/creative/creative.css" />
    <link href="Assets/css/creative/creative.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
</head>
<body ng-controller="AppCtrl" ng-init="filterNavItems(); loadVerificationCodes(); loadSlideImages(); loadNews();" class="bg1">
    <navigation-bar items="navItems"></navigation-bar>
    <div class="contentDiv" ng-view></div>

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.min.js"></script>
    <!--Directives-->
    <link rel="stylesheet" type="text/css" href="/Assets/js/directives/template1/ui/navigationBar/css/navigationBar.css" />
    <script src="Assets/js/directives/template1/ui/navigationBar/navigationBar.js"></script>
    <!--Sub Directives-->
    <script src="/Assets/js/directives/template1/ui/registration/registration.js"></script>
    <script src="/Assets/js/directives/template1/ui/loginComponent/loginComponent.js"></script>
    <script src="/Assets/js/directives/template1/ui/concernComponent/concernComponent.js"></script>
    <script src="/Assets/js/directives/template1/ui/contactComponents/contactUsBody/contactUsBody.js"></script>
    <script src="/Assets/js/directives/template1/ui/verificationCode/verificationCode.js"></script>
    <script src="/Assets/js/directives/template1/ui/socialNavBar/socialNavBar.js"></script>
    <script src="/Assets/js/directives/template1/ui/adminDashboard/inboxSection/inboxSection.js"></script>
    <script src="/Assets/js/directives/template1/ui/adminDashboard/inboxMessage/inboxMessage.js"></script>
    <script src="/Assets/js/directives/template1/ui/adminDashboard/concernSection/concernSection.js"></script>
    <script src="/Assets/js/directives/template1/ui/adminDashboard/newsSection/newsSection.js"></script>
    <script src="/Assets/js/directives/template1/ui/newsComponents/newsContainer/newsContainer.js"></script>
    <script src="/Assets/js/directives/template1/ui/displayImage/displayImage.js"></script>
    <script src="/Assets/js/directives/template1/ui/displayVideo/displayVideo.js"></script>
    <script src="/Assets/js/directives/template1/ui/playlistComponent/playlistComponent.js"></script>
    <script src="/Assets/js/directives/template1/ui/embeddedVideo/embedVideo.js"></script>
    <script src="/Assets/js/directives/template1/ui/carouselImage/carouselImage.js"></script>
    <script src="/Assets/js/directives/template1/ui/adminNavBar/adminNavBar.js"></script>
    <script src="/Assets/js/directives/template1/ui/newsComponents/modifyNews/modifyNews.js"></script>
    <script src="/Assets/js/directives/template1/ui/aboutUs/aboutUs.js"></script>
    <script src="/Assets/js/directives/template2/ui/products/productBody/productBody.js"></script>
    <script src="/Assets/js/directives/template2/ui/newsComponents/newsBody/newsBody.js"></script>
    <script src="/Assets/js/directives/template2/ui/newsComponents/newsPreview/newsPreview.js"></script>

    <!--Services-->
    <script src="/Assets/js/directives/services/sharedControllerService.js"></script>
    <script src="/Assets/js/directives/services/registrationService.js"></script>
    <script src="/Assets/js/directives/services/Globalization.js"></script>
    <script src="/Assets/js/directives/services/userInformation.js"></script>
    <script src="/Assets/js/directives/services/userListService.js"></script>
    <script src="/Assets/js/directives/services/processChecker.js"></script>
    <script src="/Assets/js/directives/services/checkRequiredField.js"></script>
    <script src="/Assets/js/directives/services/routeChecker.js"></script>
    <script src="Assets/js/directives/services/siteSettings.js"></script>
    <script src="/Assets/js/directives/services/loadData.js"></script>

    <!--Database Fetcher Service-->
    <script src="/Assets/js/directives/services/dbfetcher/dbInbox.js"></script>
    <script src="/Assets/js/directives/services/dbfetcher/dbVerificationCode.js"></script>
    <script src="/Assets/js/directives/services/dbfetcher/dbSlideImage.js"></script>
    <script src="/Assets/js/directives/services/dbfetcher/dbNews.js"></script>
    <script src="/Assets/js/directives/services/dbfetcher/dbConcern.js"></script>
    <script src="/Assets/js/directives/services/dbfetcher/dbInbox.js"></script>

    <!--DB POST-->
    <script src="Assets/js/directives/services/dbpost/dbSubmitLogin.js"></script>
    <script src="Assets/js/directives/services/dbpost/dbSubmitConcern.js"></script>
    <script src="Assets/js/directives/services/dbpost/dbSubmitRegistration.js"></script>
    <script src="Assets/js/directives/services/dbpost/dbGlobByLanguage.js"></script>
    <!--Service Properties-->
    <script src="/Assets/js/directives/services/properties/productsService.js"></script>
    <script src="/Assets/js/directives/services/properties/registrationProperties.js"></script>
    <script src="/Assets/js/directives/services/properties/newsProperties.js"></script>
    <script src="/Assets/js/directives/services/properties/inboxProperties.js"></script>

    <!--Functionalities Service-->
    <script src="Assets/js/directives/services/tempFunction/modifyCart.js"></script>
    <!--Filters Service-->
    <script src="Assets/js/directives/services/filters/allProduct.js"></script>
    <script src="Assets/js/directives/services/filters/bySlots.js"></script>
    <script src="Assets/js/directives/services/filters/byGenre.js"></script>



    <!--Modules-->
    <!--Home-->
    <script src="/Assets/js/directives/template1/house/home/module.js"></script>
    <script src="/Assets/js/directives/template1/house/home/HomeCtrl.js"></script>

    <!--Modules Login-->
    <link rel="stylesheet" type="text/css" href="/Assets/js/directives/template1/house/login/css/Login.css" />
    <script src="/Assets/js/directives/template1/house/login/module.js"></script>
    <script src="/Assets/js/directives/template1/house/login/LoginCtrl.js"></script>
    <!--Contact Us-->
    <link rel="stylesheet" type="text/css" href="/Assets/js/directives/template1/house/contactUs/css/ContactUs.css" />
    <script src="/Assets/js/directives/template1/house/contactUs/module.js"></script>
    <script src="/Assets/js/directives/template1/house/contactUs/ContactUsCtrl.js"></script>
    <!--Module Admin Dashboard-->
    <script src="/Assets/js/directives/template1/house/adminDashboard/module.js"></script>
    <script src="/Assets/js/directives/template1/house/adminDashboard/adminDashboardCtrl.js"></script>
    <!--Modules News-->
    <script src="/Assets/js/directives/template1/house/news/module.js"></script>
    <script src="/Assets/js/directives/template1/house/news/newsCtrl.js"></script>
    <!--Modules Products-->
    <script src="/Assets/js/directives/template1/house/products/module.js"></script>
    <script src="/Assets/js/directives/template1/house/products/productsCtrl.js"></script>
    <!--Modules About Us-->
    <script src="/Assets/js/directives/template1/house/aboutUs/module.js"></script>
    <script src="/Assets/js/directives/template1/house/aboutUs/AboutCtrl.js"></script>
    <!--Modules View News-->
    <script src="/Assets/js/directives/template1/house/viewNews/module.js"></script>
    <script src="/Assets/js/directives/template1/house/viewNews/viewNewsCtrl.js"></script>

    <script src="Assets/js/directives/template1/mainController/App.js"></script>
    <script src="Assets/js/directives/template1/mainController/AppCtrl.js"></script>
</body>
</html>
