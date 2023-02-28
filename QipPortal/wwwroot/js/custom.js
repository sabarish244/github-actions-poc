
var div_appname;
var div_appFullname;
var PojectIDF;
var varReportID = 0;
var PojectIDapp = "";
var AddRemoveFav = [];
var ForSearch = [];
var forAddFevhtml;
var currentlyActivFav = 0;
var currentlyActiveFavName;
var REPORT = "REPORT";
var APP = "APP";

/*Scripting to change the sidebar option based on tab selection in landing page*/
$(document).ready(function () {

    /* Search - Enter button work with Search funcation*/
    $('#txtsearchapp').keydown(function (e) {
        if (e.keyCode == 13) {
            OnSearchClicked();
        }
    });


    /*
    * This function for handle the sidebar hide functionality
    */
    $("#collapseSideBar").on("click", () => {
        $("#collapseSideBar").toggleClass("collapsed");
        $("#sidebarBS").toggleClass("collapsed");
        $("#sidebarbass").toggleClass("collapsed");
        $("#resizableSideBar").toggleClass("collapsed");
        $(".navBarhead").toggleClass("collapsed");
        $(".welcomeBottomVector").toggleClass("collapsed");
        $(".welcomeTopVector").toggleClass("collapsed");
        $(".collapsedNavLogo").toggleClass("collapsed");
        $(".navBarSearchBtn").toggleClass("col-xl-6");
        $(".navBarSearchBtn").toggleClass("col-xl-8");
    });

    $('#tabs li button:not(:first)').addClass('inactive');
    $('.container-menu').hide();
    $('.container-menu:first').show();
    $("#imgside").attr('src', '../../img/icons/Main_Image_GUI.svg');
    //for AutoQ
    $('#tabs-auto li button:not(:first)').addClass('inactive-auto');
    $('.container-menu-auto').hide();
    $('.container-menu-auto:first').show();

    //Changing sidebar Icons instead of same image
    const sideBarIconsDynamic = document.querySelectorAll(".categoryAppIcons li button");
    for (var i = 0; i < sideBarIconsDynamic.length; i++) {
        if (sideBarIconsDynamic[i].textContent == "Explore & Plan") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/explore-and-plan-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Develop & Build" || sideBarIconsDynamic[i].textContent == "Develop and Build") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/develop-and-build-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Test") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/test-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Deploy & Operate") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/deploy-and-operate-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Monitor & Manage") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/monitor-and-manage-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Innovation & Incubation" || sideBarIconsDynamic[i].textContent == "Innovation") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/innovation-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Solution Catalogue") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/solution-catalouge-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Mechanical Product Engineering" || sideBarIconsDynamic[i].textContent == "MPE") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/MPE-sidebar-icon.svg');
        } else if (sideBarIconsDynamic[i].textContent == "Demo Zone") {
            $(sideBarIconsDynamic[i]).children("img").attr('src', '../../img/icons/demo-zone-icon.svg');
        }
    };
    $(".categoryReportsIcons li button img").attr('src', '../../img/icons/reports-qip-icon.svg');
    $(".list-dropdown ul li button img").attr('src', '../../img/icons/arrow-sidebar.svg');
    $(".subcategory-dropdown span img").attr('src', '../../img/icons/appActiveEllipse.svg');

    /*checking fav list empty or not for showing fav list empty message*/
    if ($("#Fevid").children().hasClass("favItems")) {
        $("#favListsNotFound").addClass("d-none");

        /*pushing inital favlists in Fav Array*/
        var favListsForCheck = $("#Fevid .favItems");
        for (var i = 0; i < favListsForCheck.length; i++) {
            var idval = $(favListsForCheck)[i];
            AddRemoveFav.push($(idval).attr('id'));
        }
    } else {
        $("#favListsNotFound").removeClass("d-none");
    };

    //Scripting to Expand the Category List in sidebar of landing page
    $('.list-dropdown button.test').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        PojectIDapp = $(this).attr("id");
        var $currentElement = $(this);
        /*Top level sidebar category automatic close check*/
        if (!$currentElement.hasClass("activeParent") && $currentElement.hasClass("top")) {
            var $currentMenuList = $currentElement.closest(".container-menu");
            var $openCategories = $currentMenuList.find(".top.menu-button.activeParent");
            for (var i = 0; i < $openCategories.length; i++) {
                var $item = $($openCategories.get(i));
                var $attachedSubMenu = $item.next('ul');
                $attachedSubMenu.find('ul').hide();
                $attachedSubMenu.find(".menu-button.activeParent").removeClass("activeParent");
                $attachedSubMenu.hide().removeClass("activeParent");
                $item.closest('.categoryHeadList').find('> *').removeClass('active');
                $item.removeClass('activeParent');
            }
        } /*Second level sidebar category automatic close check*/
        else if (!$currentElement.hasClass("activeParent") && $currentElement.parent().parent().parent().hasClass("top")) {
            const $secondLeveSiblings = $currentElement.parent().siblings("li.list-dropdown");
            for (var i = 0; i < $secondLeveSiblings.length; i++) {
                var $item = $($secondLeveSiblings.get(i));
                var $attachedSubMenu = $item.next('ul');
                $attachedSubMenu.find('ul').hide();
                $item.removeClass("active");
                $item.find('ul').hide();
                $item.find(".menu-button.activeParent").removeClass("activeParent");
                $item.closest('.categoryHeadList').find('> *').removeClass('active');
            }
        }

        $currentElement.next('ul').toggle();
        //adding class for sidebar active state

        $currentElement.toggleClass("activeParent");
        /*Checking condition for sidebar which is currently active*/
        if ($currentElement.next().css("display") == "none") {
            $currentElement.parents(".list-dropdown").removeClass('active');
        } else {
            var currentIsActive = $currentElement.parent().hasClass('active');
            $currentElement.closest('.categoryHeadList').find('> *').removeClass('active');
            if (currentIsActive != 1) {
                $currentElement.parents(".list-dropdown").addClass('active');
            } else {
                $currentElement.parents(".list-dropdown").removeClass('active');
            };
        };
    });


    /*Scripting to Expand the sub-category List in sidebar of landing page*/
    $('.sidebar .main-menu .applists ul li ul li a').click(function () {
        $('.sidebar .main-menu .applists ul li ul li a').removeClass("active");
        $(this).addClass("active");
    });


    $('#lnktabGUI').click(function () {
        $("#imgside").attr('src', '../../img/icons/Main_Image_GUI.svg');
    });
    $('#lnktabAPI').click(function () {
        $("#imgside").attr('src', '../../img/icons/Main_Image_API.svg');
    });
    $('#lnktabLaps').click(function () {
        $("#imgside").attr('src', '../../img/icons/Main_Image_GUI.svg');
    });

    /*Scripting to Expand the sub-category List in sidebar of landing page*/
    $('.subcategory-dropdown span.testabc').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $('#tabs li button').click(function () {
        var t = $(this).attr('id');
        if ($(this).hasClass('inactive')) {
            $('#tabs li button').addClass('inactive');
            $(this).removeClass('inactive');

            $('.container-menu').hide();
            $('#' + t + 'C').fadeIn('slow');
        }
    });



    //Tab-auto
    $('#tabs-auto li button').click(function () {
        var t = $(this).attr('id');
        if ($(this).hasClass('inactive-auto')) {
            $('#tabs-auto li button').addClass('inactive-auto');
            $(this).removeClass('inactive-auto');

            $('.container-menu-auto').hide();
            $('#' + t + 'C').fadeIn('slow');
        }
    });

});



/*Scripting to change the language in the localization dropdown*/
//$(function () {
//    $('.selectpicker').selectpicker();
//});


function getViewNameFromResourceName(resourceName) {
    viewID = resourceName.split(" ");
    viewID = viewID[0].replace(".", "");
    viewID = viewID.replace(")", "");
    viewID = viewID.replace("(", "");
    return viewID.replace("-", "");
}

function ShowNonResourceItem(nonResourceName) {
    var viewName = getViewNameFromResourceName(nonResourceName);
    if($("#searchDiv").length === 0  && $(`.landingPageMain ${"#div" + viewName}`).length) {
        SwitchViews(nonResourceName, '0', '0', '0');
    } else {
        ShowResourceLoads('0', nonResourceName, '0', '0', APP);
    }
}

/*Scripting to add and remove the favorites of all landing pages*/
function addfavoritesfunction() {
    $("#alreadyFevID").val(0);
    if ($.inArray($("#ReportID").val(), AddRemoveFav) > -1) {
        $("#alreadyFevID").val($("#ReportID").val());
    }
    if ($("#alreadyFevID").val() != 0) {
        funFavoriateAddandRemove($("#ReportID").val(), "");
    } else {
        funFavoriateAddandRemove(0, "");
    }
};

function undoFavouriteAction() {
    addfavoritesfunction();
}

/*Scripting to Expand the sub-category List in sidebar of landing page as per Favourites add and Remove*/
function funFavoriateAddandRemove(Fevid, FevName, overrideProperties) {
    if (event.target.closest("button.li-sub-menu-dropdown") != null && $(event.target).closest("button.li-sub-menu-dropdown").data("clicked", true)) {

        //selected from fave bar.. only possible action is to remove 
        if (overrideProperties) {
            forAddFevhtml = GetAddFaveHtml(overrideProperties.resourceId, overrideProperties.resourceName, overrideProperties.favouriteId, overrideProperties.projectId, overrideProperties.resourceType);
        } 


        div_appFullname = currentlyActiveFavName;
        div_appname = getViewNameFromResourceName(currentlyActiveFavName);
        Fevid = currentlyActivFav;
    }

    event.stopPropagation();
    if (Fevid != "" && Fevid != 0) {
        $('#ReportID').val(Fevid);
    }
    //else if (varReportID != "" && varReportID != 0) {
    //    $('#ReportID').val(varReportID);
    //}

    var userFav = {
        "FavId": $('#hdnLoggerID').val(),
        "ResourceId": $('#ReportID').val(),
        "UserId": 0,
        "Resources": null,
        "Users": null
    };

    /* Store the clicked resourceID in the session cookie for later use in manipulating favourite - added for SSO functionality */
    var strFavCookie = "favResourceId=" + userFav.ResourceId;
    strFavCookie += "; favResourceName=" + null;
    strFavCookie += "; favFavouriteId=" + userFav.FavId;
    strFavCookie += "; favProjectId=" + null;
    document.cookie = strFavCookie;

    /*Getting the actual div name for the favorite indicate icon update*/
    var viewName = getViewNameFromResourceName(div_appFullname);

    if (Fevid == 0) {
        //---------------------------------- 

        $.ajax({
            type: "POST",
            url: "/AddUserFavourites",
            data: JSON.stringify(userFav),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                var catTitles = getCatTitles(userFav.ResourceId);
                var addFavHtmlWithTitle = forAddFevhtml.replace("data-title='", "title='" + catTitles.menuPath);
                var addFavHtmlWithSpan = addFavHtmlWithTitle.replace("[MENUCAT]", catTitles.topLabel);
                $("#Fevid").append(addFavHtmlWithSpan);
                AddRemoveFav.push($('#ReportID').val());
                /*Changing to Favorite state for the current app on the UI*/
                if ($("#div" + viewName).length > 0) {
                    $("#div" + viewName).find(".addfavorites").addClass("activeFav");
                    $("#div" + viewName).find(".addfavorites").parent().attr("title", "Remove Favorite");
                } else {
                    $("#reportContainerRow").find(".addfavorites").addClass("activeFav");
                    $("#reportContainerRow").find(".addfavorites").parent().attr("title", "Remove Favorite");
                }
                $("#Appname").html(div_appFullname);
                $("#Appdetalis").html("has been added to Favorites list");
                $(".FavNotification").css('display', 'block');
                $('.FavNotification').delay(3000).fadeOut();

                /*checking fav list empty or not for showing fav list empty message*/
                if ($("#Fevid").children().hasClass("favItems")) {
                    $("#favListsNotFound").addClass("d-none");
                } else {
                    $("#favListsNotFound").removeClass("d-none");
                };
            },
            error: function (msg) { }
        });
    } else {

        //-------------------------------``````````````-
        $.ajax({
            type: "POST",
            url: "/DeleteUserFavourites",
            data: JSON.stringify(userFav),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (msg) {
                AddRemoveFav = jQuery.grep(AddRemoveFav, function (value) {
                    return value != $('#ReportID').val();
                });
                $('#Fevid > #' + $('#ReportID').val() + '').remove();
                $(".powerBIReportId." + Fevid).find(".addfavorites").removeClass("activeFav");
                $(".powerBIReportId." + Fevid).find(".addfavorites").parent().attr("title", "Add Favorite");
                /*Changing to unFavorite state for the current app on the UI*/
                if ($("#div" + viewName).length > 0) {
                    $("#div" + viewName).find(".addfavorites").removeClass("activeFav");
                    $("#div" + viewName).find(".addfavorites").parent().attr("title", "Add Favorite");
                } else {
                    $("#reportContainerRow").find(".addfavorites").removeClass("activeFav");
                    $("#reportContainerRow").find(".addfavorites").parent().attr("title", "Add Favorite");
                }
                $("#Appname").html(div_appFullname);
                $("#Appdetalis").html("has been removed from Favorites list");
                $(".FavNotification").css('display', 'block');
                $('.FavNotification').delay(3000).fadeOut();

                /*checking fav list empty or not for showing fav list empty message*/
                if ($("#Fevid").children().hasClass("favItems")) {
                    $("#favListsNotFound").addClass("d-none");
                } else {
                    $("#favListsNotFound").removeClass("d-none");
                };
            },
            error: function (msg) { }

        });

        //------------------------------------------------  n
    }
}


/*Scripting to Expand the Query String to get values*/
function GetParameterValues(param) {
    try {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
    catch (err) {
        alert(err)
    }
}

function myFunction(divID, appname) {
    //div_appFullname = appname;
    currentlyActiveFavName = appname;
    //$('#ReportID').val(divID);
    currentlyActivFav = divID;
    //event.stopPropagation();
    $(event.target).next().toggleClass("show");
}

// Close the dropdown if the user clicks outside of it
$(function () {
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropbtn") === false) {
            $(".dropdown.li-sub-menu-dropdown").removeClass("show");
        }
    });
});


/*Function to display the Logout modal while clicking the Logout button*/
function ShowLogoutModal() {
    if ($('#LogoutModal').modal('hide')) {
        $('#LogoutModal').modal('show');
    }
}

function faveBarAddAndRemove(resourceId, resourceName, favouriteId, projectId, resourceType) {

    var overrideProperties = {
        resourceId: resourceId,
        resourceName: resourceName,
        favouriteId: favouriteId,
        projectId: projectId,
        resourceType: resourceType
    }

    funFavoriateAddandRemove(resourceId, projectId, overrideProperties);
}


function GetAddFaveHtml(resourceId, resourceName, favouriteId, projectId, resourceType) {
    var datali_tag = "<li class='subcategory-dropdown favItems' id=\'" + resourceId + "'><button data-title='' onclick=\"ShowResourceLoads('" + resourceId + "','" + resourceName + "', '" + favouriteId + "', '" + projectId + "','" + resourceType + "')\">";

    var spanExtra = resourceType === APP ? " class=\"app\" id=\"subm\"" : ""

    var resourceSection = "<span " + spanExtra + "><img alt=\"" + resourceName + "\" src=\"../../img/icons/appActiveEllipse.svg\">" + resourceName + "<span class=\"favcat\">[MENUCAT]</span></span>";

    var result = datali_tag + resourceSection + "<button class='dropbtn' style='float: right;' onclick=\"myFunction('" + resourceId + "', '" + resourceName + "')\"><img alt='Menudots' src='../../img/icons/Threedots.svg'  /></button>" +
        "<button onclick=\"faveBarAddAndRemove('" + resourceId + "', '" + resourceName + "', '" + favouriteId + "', '" + projectId + "', '" + resourceType + "')\" class='dropdown li-sub-menu-dropdown'>" +
        "<ul id = '" + resourceId + "' class='dropdown-content'>" +
        "<li>Remove from Favorite</li> </ul> </button></button> </li>";

    return result;
}

function ShowResourceLoads(resourceId, resourceName, favouriteId, projectId, resourceType) {
    forAddFevhtml = GetAddFaveHtml(resourceId, resourceName, favouriteId, projectId, resourceType);

   /* Store the clicked resourceID in the session cookie for later use in manipulating favourite - added for SSO functionality */
    var strFavCookie = "favResourceId=" + resourceId;
    strFavCookie += "; favResourceName=" + resourceName;
    strFavCookie += "; favFavouriteId=" + favouriteId;
    strFavCookie += "; favProjectId=" + projectId;
    document.cookie = strFavCookie;

    if (resourceType === APP && $("#searchDiv").length === 0) {
        // don't reload the page if the div is already on the page
        var viewName = getViewNameFromResourceName(resourceName);
        if ($(`.landingPageMain ${"#div" + viewName}`).length) {
            $('#ReportID').val(resourceId);
            /*Highlight active state for apps*/
            var currentIsActive = $(event.target).parent().hasClass('active');
            $(event.target).closest('.categoryHeadList').find('> *').removeClass('active');
            if (currentIsActive != 1) {
                $(event.target).parents(".list-dropdown").addClass('active');
            } else {
                $(event.target).parents(".list-dropdown").removeClass('active');
            }

            /*Display Switch funtion*/

            SwitchViews(resourceName, resourceId, favouriteId, projectId);


            div_appname = resourceName;
            div_appFullname = resourceName;

            if ($.inArray(resourceId, AddRemoveFav) > -1) {
                $('.addfavorites').addClass("activeFav");
                $(".addfavorites").parent().attr("title", "Remove Favorite");
            }
            else {
                $('.addfavorites').removeClass("activeFav");
                $(".addfavorites").parent().attr("title", "Add Favorite");
            }

            return;
        }
    }

    /*sidebar close for mobile device*/
    $("#sidebarbass").removeClass("active");
    $(".closeIconHamburger").removeClass("active");
    $("#divAppNotFound").addClass("d-none");

    var resourceUrl = '';
    if (resourceType === APP) {
        resourceUrl = "../Home/Index/";
        /*Loader show*/
        $("#welcomepages").css("display", "none");
        $(".landingPageMain").addClass("d-none");
        $("#LandingPageLoader").removeClass("d-none");

        /*Highlight active state for apps*/
        var currentIsActive = $(event.target).parent().hasClass('active');
        $(event.target).closest('.categoryHeadList').find('> *').removeClass('active');
        if (currentIsActive != 1) {
            $(event.target).parents(".list-dropdown").addClass('active');
        } else {
            $(event.target).parents(".list-dropdown").removeClass('active');
        }
    } else {
        resourceUrl = "../Reports/Index/" + resourceId;
    }

    $.ajax({
        type: "GET",
        url: resourceUrl,
        success: function (data) {
            var datajs = $(data).find("#containerfluid").html();
            $("#containerfluid").html(datajs);
            $('#ReportID').val(resourceId);

            if (resourceType === REPORT) {
                $(datajs).find('#recnameID').empty().append(resourceName);

                $("#recnameID").html(resourceName);
                $(".powerBIReportId").addClass(resourceId);

            } else {
                /*Loader remove*/
                $("#LandingPageLoader").addClass("d-none");
                $(".landingPageMain").removeClass("d-none");
                /*Display Switch funtion*/

                $('.modal').on('hidden.bs.modal', function (e) {
                    stopVideoForClosedModal(this);
                });
                SwitchViews(resourceName, resourceId, favouriteId, projectId);
            }

            div_appname = resourceName;
            div_appFullname = resourceName;

            if ($.inArray(resourceId, AddRemoveFav) > -1) {
                $('.addfavorites').addClass("activeFav");
                $(".addfavorites").parent().attr("title", "Remove Favorite");
            }
            else {
                $('.addfavorites').removeClass("activeFav");
                $(".addfavorites").parent().attr("title", "Add Favorite");
            }
        },
        fail: function (ex) {
            if (resourceType === APP) {
                /*Loader remove*/
                $("#LandingPageLoader").addClass("d-none");
                $(".landingPageMain").removeClass("d-none");
            }

            $("#divAppNotFound").removeClass("d-none");
        }
    });

}

function stopVideoForClosedModal(modal) {
    var $iframe = $(modal).find("iframe");
    if ($iframe.length > 0) {
        $iframe.attr("src", $iframe.attr("src"));
    } else {
        var $video = $(modal).find("video");
        $video.trigger('pause');
        if ($video.length > 0) {
            $video.get(0).currentTime = 0;
        }
    }
}

/*Function to display the Report */
function ShowReportsLoads(resourceId, resourceName, favouriteId, projectId) {
    ShowResourceLoads(resourceId, resourceName, favouriteId, projectId, REPORT);
};

/*Function to display the App */
function ShowHomeLoads(resourceName, resourceId, favouriteId, projectId) {
    ShowResourceLoads(resourceId, resourceName, favouriteId, projectId, APP);
};

/* This function will display a list of search matches in the corresponding div
 * by adding them as options to a select element.
 * Params
 *  landingPages [I] An Array of landing page div elements.
 */
function DisplaySearchResults(landingPages) {

    // Get the results display
    var results = document.getElementById("SearchResults");

    // Enumerate all of the landing pages
    for (let pageIndex = 0; pageIndex < landingPages.length; pageIndex++) {

        // Get the landing page at this index
        var landingPage = landingPages[pageIndex];

        // Create an option
        var option = document.createElement("option");

        // Set the text to be the id of the div
        option.text = landingPage.title;
        option.value = landingPage.id;

        // Add it to the select
        results.add(option, null);
    }
}


/* This function is called whenever the user changes the log level.
 * It will change the message to 'processing', disable the select and then make an API call to change the log level.
 * When the API returns it will use a timer to hide the window and reset the controls.
 */
function OnLogLevelChanged() {

    // Get the results display
    var select = document.getElementById("LogLevelSelect");

    // Get the log level
    var logLevel = select.value;

    // Disable the select
    select.disabled = true;

    // Update the message
    $("#LogLevelSuccessMessage").html("Processing ....");

    // Format the request
    var url = "/SetUserLogLevel?logLevel=" + logLevel;
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.contentType = "application/json";

    // This function hides the progress message whenver the operation completes
    req.onreadystatechange = function () {

        // 4 = complete
        if (this.readyState == 4) {

            if (this.status == 200) {

                // Update the message
                $("#LogLevelSuccessMessage").html("Log level changed.");

                // Start the progress timer passing which will hide the window
                window.setTimeout(OnLogTimerTicked, 1000);
            }
        }
    };

    // Send the request
    req.send();
}

/* Called whenever the log level change timer ticks to hide the
 * change log level screen and to reset the message.
 */
function OnLogTimerTicked() {

    // Re-enable the select
    var select = document.getElementById("LogLevelSelect");
    select.disabled = false;

    // Hide the log selection window
    $("#loggingData").removeClass("active");

    // Set the message back
    $("#LogLevelSuccessMessage").html("Select the logging level, as appropriate based on the request from the support Engineer.");
}

/* This function is called whenever the user changes the log level.
 * It will change the message to 'processing', disable the select and then make an API call to change the log level.
 * When the API returns it will use a timer to hide the window and reset the controls.
 */
function OnLogLevelChanged() {

    // Get the results display
    var select = document.getElementById("LogLevelSelect");

    // Get the log level
    var logLevel = select.value;

    // Disable the select
    select.disabled = true;

    // Update the message
    $("#LogLevelSuccessMessage").html("Processing ....");

    // Format the request
    var url = "/SetUserLogLevel?logLevel=" + logLevel;
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.contentType = "application/json";

    // This function hides the progress message whenver the operation completes
    req.onreadystatechange = function () {

        // 4 = complete
        if (this.readyState == 4) {

            if (this.status == 200) {

                // Update the message
                $("#LogLevelSuccessMessage").html("Log level changed.");

                // Start the progress timer passing which will hide the window
                window.setTimeout(OnLogTimerTicked, 1000);
            }
        }
    };

    // Send the request
    req.send();
}

/* Called whenever the log level change timer ticks to hide the
 * change log level screen and to reset the message.
 */
function OnLogTimerTicked() {

    // Re-enable the select
    var select = document.getElementById("LogLevelSelect");
    select.disabled = false;

    // Hide the log selection window
    $("#loggingData").removeClass("active");

    // Set the message back
    $("#LogLevelSuccessMessage").html("Select the logging level, as appropriate based on the request from the support Engineer.");
}



/* This function is called when the selection changes in the results select box.
 * It will simply display an alert with the selected landing page Id.
 */
function OnResultSelected() {

    // Get the results display
    var results = document.getElementById("SearchResults");

    alert(results.value);
}

/* Called when the search button has been clicked after a term has been entered.
 * It will perform the search and display the results.
 */
function OnSearchClicked() {
    // Get the search box
    var searchTerm = $("#txtsearchapp").val();

    //result not found screen
    /* Only continue if the string is valid, note that this shouldn't happen as we are disabling
     * the search button if the text is empty.
     */
    if ((searchTerm != null) && (searchTerm != "")) {

        // Clear the old search results
        this.ClearSearchResults();

        /* 
         * This function only Triggering, if the user collpased the sidebar
         */
        if ($("#collapseSideBar").hasClass("collapsed")) {
            $("#collapseSideBar").trigger("click");
        }

        /*Searching message*/
        /*$("#UlSearch").append(searchingEl);*/

        // Search for matches

        if ($('#divSite').length > 0) {
            var landingPages = this.SearchForText(searchTerm);
            loadSearchResults(landingPages);
        }
        else {
            if ($("#searchDiv").length === 0) {
                var me = this;
                $("#containerfluid").append("<div id='searchDiv' style=\"display:none\"></div>");
                $.ajax({
                    type: "GET",
                    url: "../Home/Index/",
                    success: function (data) {
                        var datajs = $(data).find("#containerfluid").html();
                        $("#searchDiv").html(datajs);
                        var landingPages = me.SearchForText(searchTerm);
                        loadSearchResults(landingPages);
                    }
                });
            } else {
                var landingPages = this.SearchForText(searchTerm);
                loadSearchResults(landingPages);
            }

        }
    }
}

function loadSearchResults(landingPages) {
    const noResult = "<li class='searchResultNotFound px-4'><div class='text-center'><div class='mb-2'><img src='../../img/no-result.svg' alt='search result not found' /></div><div class='p-text'>Sorry! No result found :-(</div><div class='small-text font-italic' id='searchResultNotFoundIns'>Search by keyword <br /> through the search box</div></div></li>";

    if (landingPages.length > 0) {
        $("#UlSearch").append(landingPages);
    } else {
        $("#UlSearch").append(noResult);
    }


    // open sidebar while user clicked search button
    $("#sidebarbass").addClass("active");
    $(".closeIconHamburger").addClass("active");
}



/* This function is called when the search text changes to enable or disable the search button.
 */
function OnSearchTextChanged() {


    // Get the text box and the button
    var searchButton = document.getElementById("btnsearchsubmit");
    var searchTextBox = document.getElementById("txtsearchapp");

    // The button will be disabled if there is no text
    var disabled = ((searchTextBox.value == null) || (searchTextBox.value == ""));
    searchButton.disabled = disabled;

    /*Update UI for disabled process*/
    if (!disabled) {
        $("#btnsearchsubmit").removeClass("disabledButton");
    } else {
        $("#btnsearchsubmit").addClass("disabledButton");
    }
}

/* Search all the landing page contents for matches of the supplied search term.
 * Params
 *  searchTerm [I] The search term to look for.
 * Returns
 *  An Array of landing page div elements.
 */
function SearchForText(searchTerm) {
    var idRegex = /<button.+?id="mnu\-(.+?)"/i;

    ForSearch = [];
    // The return will be an array of landing pages 
    var ret = new Array();

    var sidebarmenu = $("#sidebarmenu");
    var landingPages = $(sidebarmenu).find(".list-dropdown");

    // Enumerate all landing pages

    //This for loop as per list only main Content
    for (let pageIndex = 0; pageIndex < landingPages.length; pageIndex++) {
        var landingPagecon2 = landingPages[pageIndex];
        var landingPageContent2 = landingPagecon2.innerHTML;
        var moreappname = "";
        landingPageContent2 = landingPageContent2.split("<ul");

        // If there is a match add the page to the return array
        if (landingPageContent2 != "") {

            landingPageContent2 = landingPageContent2[landingPageContent2.length - 1];
            if (typeof landingPageContent2 != "undefined") {
                //Some time one submenu multiple app or report so that time split it's should be 1 app 1 array
                moreappname = landingPageContent2.split("</li>");
            }
            //This loop for more app split one by one app finding with name to id and id to finding Landing Page Content
            for (let moreapp = 0; moreapp < moreappname.length - 1; moreapp++) {

                landingPageContent2 = moreappname[moreapp];
                if (moreapp == 0) {
                    landingPageContent2 = landingPageContent2.split("<li");
                    landingPageContent2 = "<li " + landingPageContent2[1];
                }

                var textContent = $(landingPageContent2).find("span[data-searchable=\"true\"]").contents().filter((i, el) => el.nodeType === 3).text();
                if (textContent && textContent.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) > -1) {
                    addToSearchArrays(ForSearch, ret, idRegex, landingPageContent2)
                }

                var newViewId = $(landingPageContent2).find("#subm").contents().filter((i, el) => el.nodeType === 3).text();
                var divappID = newViewId.split(" ");
                divappID = divappID[0].replace("-", "").replace("(", "").replace(")", "").replace(".", "");

                //It's every app or report remove all html tag
                var landingPagesdiv = $("#div" + divappID).text();

                // search the text of the div does not include html tags
                if (landingPagesdiv.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) > -1) {
                    if (landingPageContent2.toLowerCase().indexOf("<ul") > -1) {
                        landingPageContent2 = landingPageContent2.split("<li");
                        landingPageContent2 = "<li" + landingPageContent2[1];
                    }

                    addToSearchArrays(ForSearch, ret, idRegex, landingPageContent2)
                }
            }
        }
    }
    return ret;
};

function addToSearchArrays(ids, searchResults, idRegex, content) {
    //find id on button tag
    var match = idRegex.exec(content);
    var id = null;
    if (match && match.length === 2) {
        id = match[1];
    }
    if (id != null) {
        //It's checking any duplicate app or report added or not
        if ($.inArray(id, ids) === -1) {
            ids.push(id);
            var itemCats = getCatTitles(id);

            searchResults.push(content.replace(/id="mnu-/i, 'id="srch-').replace('data-title="', 'title="' + itemCats.menuPath).replace('menucat', 'searchcat'));
        }
    }
}

function getCatTitles(resourceId) {
    var $menuItem = $('#mnu-' + resourceId);
    var menuPath = $menuItem.attr('data-menu-path');
    var topLabel = $menuItem.find('.menucat').text();

    var result = {
        topLabel: topLabel,
        menuPath: menuPath
    };
    return result;
}

function ClearSearchResults() {
    /* Hide the menu and clear search DIV  */
    var t = "tab4";
    if ($("#tab4").hasClass('inactive')) {
        $('#tabs li button').addClass('inactive');
        $("#tab4").removeClass('inactive');

        $('.container-menu').hide();
        $('#' + t + 'C').fadeIn('slow');
    }

    // Clear the search results
    $(".SearchAll").empty();
};

function ClicktoQIPtab() {

    /* Hide the menu and clear search DIV  */
    var t = "tab2";
    if ($("#tab2").hasClass('inactive')) {
        $('#tabs li button').addClass('inactive');
        $("#tab2").removeClass('inactive');
        $('.container-menu').hide();
        $('#' + t + 'C').fadeIn('slow');

        // open sidebar while user clicked QIP report button
        $("#sidebarbass").addClass("active");
        $(".closeIconHamburger").addClass("active");
    }
};

$(document).ready(function () {

    /*checking report list empty or not for showing fav list empty message*/
    if ($("#reportlists ul").children().hasClass("list-dropdown")) {
        $("#reportListsNotFound").addClass("d-none");
    }

    /*checking fav list empty or not for showing QIP as default tab */
    if ($("#applists ul").children().hasClass("list-dropdown")) {
        $("#appListsNotFound").addClass("d-none");
    } else if ($("#reportlists ul").children().hasClass("list-dropdown")) {
        ClicktoQIPtab();
    } else {}
});