$(document).ready(function () {

    ////Notification Centre
    $(".notification-icon").click(function (evt) {
        evt.stopImmediatePropagation();
        $(".notifications-centre").toggleClass("active");
        $(".notification-icon").find('img').toggle();
    });

    ////Gateway
    $(".qip-gateway-icon").click(function (evt) {
        evt.stopImmediatePropagation();
        var isSettingsActive = $(".qip-settings-div").hasClass("active");
        var isGatewayActive = $(".qip-gateway-div").hasClass("active");

        if (isSettingsActive) {
            $(".qip-settings-div").removeClass("active");
        }

        if (isGatewayActive) {
            $(".qip-gateway-div").removeClass("active");
        }
        else {
            $(".qip-gateway-div").addClass("active");
        }
    });

    $(".qip-div-close").click(function (evt) {
        var isGatewayActive = $(".qip-gateway-div").hasClass("active");
        var isSettingsActive = $(".qip-settings-div").hasClass("active");
        if (isGatewayActive) {
            $(".qip-gateway-div").removeClass("active");
        }
        if (isSettingsActive) {
            $(".qip-settings-div").removeClass("active");
        }
    });

    ////Settings
    $(".qip-settings-icon").click(function (evt) {
        evt.stopImmediatePropagation();
        var isSettingsActive = $(".qip-settings-div").hasClass("active");
        var isGatewayActive = $(".qip-gateway-div").hasClass("active");

        if (isGatewayActive) {
            $(".qip-gateway-div").removeClass("active");
        }
        
        if (isSettingsActive) {
            $(".qip-settings-div").removeClass("active");
        }
        else {
            $(".qip-settings-div").addClass("active");
        }
    });

    //Page Switching Functions: Start
    $(".dashboard").click(function () {
        $(".dashboard-header").addClass("active");
        $(".qip-header").removeClass("active");
        $(".vsts-header").removeClass("active");

        $(this).addClass("active");
        $(".qip").removeClass("active");
        $(".vsts").removeClass("active");
        $(".qip-settings-div").removeClass("active");
        $(".qip-gateway-div").removeClass("active");
        switchCheck();
    });

    $(".qip").click(function () {
        $(".qip-header").addClass("active");
        $(".dashboard-header").removeClass("active");
        $(".vsts-header").removeClass("active");

        $(this).addClass("active");
        $(".dashboard").removeClass("active");
        $(".vsts").removeClass("active");
        $(".qip-settings-div").removeClass("active");
        $(".qip-gateway-div").removeClass("active");
        switchCheck();
    });

    $(".vsts").click(function () {
        $(".vsts-header").addClass("active");
        $(".dashboard-header").removeClass("active");
        $(".qip-header").removeClass("active");

        $(this).addClass("active");
        $(".dashboard").removeClass("active");
        $(".qip").removeClass("active");
        $(".qip-settings-div").removeClass("active");
        $(".qip-gateway-div").removeClass("active");
        switchCheck();
    });
    
    function switchCheck() {
        var inactiveSrc;
        var activeSrc;

        if ($(".dashboard").hasClass("active")) {
            inactiveSrc = '/img/icons/Navigation Toolbar Left_26px.png';
            activeSrc = '/img/icons/Navigation Toolbar Left_26px_green.png';
            $('img[src="' + inactiveSrc + '"]').attr('src', activeSrc);
        } else {
            inactiveSrc = '/img/icons/Navigation Toolbar Left_26px.png';
            activeSrc = '/img/icons/Navigation Toolbar Left_26px_green.png';
            $('img[src="' + activeSrc + '"]').attr('src', inactiveSrc);
        }

        if ($(".qip").hasClass("active")) {
            inactiveSrc = '/img/icons/Speed_26px.png';
            activeSrc = '/img/icons/Speed_26px_green.png';
            $('img[src="' + inactiveSrc + '"]').attr('src', activeSrc);
        } else {
            inactiveSrc = '/img/icons/Speed_26px.png';
            activeSrc = '/img/icons/Speed_26px_green.png';
            $('img[src="' + activeSrc + '"]').attr('src', inactiveSrc);
        }

        if ($(".vsts").hasClass("active")) {
            inactiveSrc = '/img/icons/Vsts_26px.png';
            activeSrc = '/img/icons/Vsts_26px_green.png';
            $('img[src="' + inactiveSrc + '"]').attr('src', activeSrc);
        } else {
            inactiveSrc = '/img/icons/Vsts_26px.png';
            activeSrc = '/img/icons/Vsts_26px_green.png';
            $('img[src="' + activeSrc + '"]').attr('src', inactiveSrc);
        }
    }
    //Page Switching Functions: End












});



