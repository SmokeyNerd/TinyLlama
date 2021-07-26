// ==UserScript==
// @name         TinyLlama : 2021 Tinychat Theme
// @namespace    http://www.smokeyllama.com
// @version      2021.08
// @description  Editing Overall Theme of Tinychat. 12 Color Themes, and More! Install and refresh.
// @author       SmokeyLlama
// @match        https://tinychat.com/*
// @match        https://tinychat.com/room/*
// @exclude      https://tinychat.com/room/*?1
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @license      MIT
// @updateURL    https://github.com/SmokeyLlama/tinyllama/raw/master/tinychat_theme.user.js
// @downloadURL  https://github.com/SmokeyLlama/tinyllama/raw/master/tinychat_theme.user.js

// ==/UserScript==
/* jshint -W097 */
var blobURL = URL.createObjectURL(new Blob(['(',

    function() {
        onmessage = function(e) {
            setTimeout(function() {
                postMessage('fuckTc')
            }, 500);
        }
    }
    .toString(),

    ')()'
], {
    type: 'application/javascript'
}));

var worker = new Worker(blobURL);

worker.onmessage = function(e) {
    try {
        var bodyElem = document.querySelector("body");
        var webappOuter = document.querySelector("tinychat-webrtc-app");
        var webappElem = webappOuter.shadowRoot;
        var videolistElem = webappElem.querySelector("tc-videolist").shadowRoot;
        var camQueryString = ".videos-items:last-child > .js-video";
        var camElems = videolistElem.querySelectorAll(camQueryString);

        camElems.forEach(function(item, index) {
            var bluredShit = item.querySelector("tc-video-item").shadowRoot.querySelector(".video").querySelector(".blured");
            if (bluredShit !== null) {
                bluredShit.remove();
            }
            item.querySelector("tc-video-item").shadowRoot.querySelector(".video").querySelector("div").querySelector("video").style.filter = "none"
            if (item.querySelector("tc-video-item").shadowRoot.querySelector(".video").querySelector("div").querySelector('style') === null) {
                var css = '.overlay{z-index:1;}.overlay:hover > .icon-visibility {left: 14px!important; top: 12px!important;}.overlay:hover > .icon-resize {top: 12px!important;}.overlay:hover > .icon-report {right: 12px!important;top: 14px!important;}.overlay:hover > .icon-context {bottom: 7px!important; right: 16px!important;}.overlay:hover > .icon-context {right: 7px!important; right: 16px!important;}.overlay:hover > .icon-volume {left: 14px!important; bottom: 7px!important;}.overlay > .icon-context:focus + .video-context.on-white-scroll{opacity: 100!important;visibility: visible!important;}';
                var style = document.createElement('style');
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                item.querySelector("tc-video-item").shadowRoot.querySelector(".video").querySelector("div").appendChild(style);
            }
        });
    } catch (e) {}
    setTimeout(function() {
        worker.postMessage('fuckTc')
    }, 500);
};

worker.postMessage('');

if (/\/room/.test(location.pathname)) {


    LLAMAwsParser``;
    var initInterval = setInterval(function() {
        if (document.querySelector("tinychat-webrtc-app").shadowRoot) LLAMAapp = runLLAMA``;
        else tcl("Waiting for DOM...");
    }, 500);

    function runLLAMA() {
        clearInterval(initInterval);
        try {
            /* Begin main function */

            var bodyElem = document.querySelector("body");

            var webappOuter = document.querySelector("tinychat-webrtc-app");
            var webappElem = webappOuter.shadowRoot;

            var chatlogOuter = webappElem.querySelector("#room-content");
            var chatlogElem = webappElem.querySelector("tc-chatlog").shadowRoot;
            var titleElem = webappElem.querySelector("tc-title").shadowRoot;
            var sidemenuElem = webappElem.querySelector("tc-sidemenu").shadowRoot;
            var videomoderationElem = sidemenuElem.querySelector("tc-video-moderation").shadowRoot;
            var videolistElem = webappElem.querySelector("tc-videolist").shadowRoot;


            var chatlistElem = sidemenuElem.querySelector("tc-chatlist").shadowRoot;
            var userlistElem = sidemenuElem.querySelector("tc-userlist").shadowRoot;
            var userContextmenuElem = userlistElem.querySelector("tc-user-contextmenu").shadowRoot;

            var chatlogCSS = chatlogElem.querySelector("#chat-wrapper");
            var sidemenuCSS = sidemenuElem.querySelector("#sidemenu");

            var videomoderationCSS = videomoderationElem.querySelector("#moderatorlist");
            var webappCSS = webappElem.querySelector("#room");

            var chatlistCSS = chatlistElem.querySelector("#chatlist");
            var userlistCSS = userlistElem.querySelector("#userlist");
            var userContextmenuCSS = userContextmenuElem.querySelector("#main");
            var titleCSS = titleElem.querySelector("#room-header");
            var themeCSS = titleElem.querySelector("#llama-themes");
            var buttonCSS = videolistElem.querySelector("#videos-footer");

            var videolistCSS = videolistElem.querySelector("#videolist");
            var bodyCSS = document.querySelector("body");

            var userinfoCont = sidemenuElem.querySelector("#user-info > div");
            var scrollbox = chatlogElem.querySelector("#chat");
            var unreadbubble = chatlogElem.querySelector("#input-unread");

            var resourceDirectory = document.querySelector('link[rel="manifest"]').getAttribute("href").split("manifest")[0]; // \/([\d\.\-])+\/
            var pinkPop = new Audio(resourceDirectory + 'sound/pop.mp3');
            var weedPop = new Audio('http://smokeyllama.com/bong.mp3');
            var audioPop = new Audio(resourceDirectory + 'sound/pop.mp3');
            var settingMentions = [];
            var giftsElemWidth = 127;
            var messageHeight;
            var chatboxHeight;
            var totalScrolledUp = 0;
            var freshInstall = (GM_listValues().length == 0);
            var isModerator = (!userlistElem.querySelector("#button-banlist").classList.contains("hidden"));
            var isPaidAccount = (sidemenuElem.querySelector("#sidemenu-wider"));

            var browserFirefox = navigator.userAgent.includes("Firefox/");
            var urlAddress = new URL(window.location.href);
            var urlPars = urlAddress.searchParams;

            var messageQueryString = "#chat-content .message";
            var camQueryString = ".videos-items:last-child > .js-video";

            var userCount = 0;
            var messageCount = 0;
            var camMaxedCurrent = null;
            var camClosedCurrent = null;
            var autoScrollStatus = true;
            var roomName = webappOuter.getAttribute("roomname");
            var joinTime = getFormattedDateTime(new Date(), "time");
            var joinDate = getFormattedDateTime(new Date());

            document.title = roomName + " - Tinychat";
            declareGlobalVars();
            var settingsWaitInterval = setInterval(waitForSettings, 1000);

            injectCSS();
            injectElements();

            var scrollboxEvent = scrollbox.addEventListener("wheel", userHasScrolled);
            var unreadbubbleEvent = unreadbubble.addEventListener("click", function() {
                autoScrollStatus = true;
            });

            if (userinfoCont.hasAttribute("title")) {
                bodyCSS.classList.add("logged-in");
                sidemenuElem.querySelector("#sidemenu").classList.add("logged-in");
            }
            if (isModerator) {
                userlistElem.querySelector("#userlist").classList.add("llama-mod");
                chatlistElem.querySelector("#chatlist").classList.add("llama-mod");
            }

            var settingsQuick = {
                "Autoscroll": (GM_getValue("llama-Autoscroll") == "true" || GM_getValue("llama-Autoscroll") == undefined),
                "MentionsMonitor": (GM_getValue("llama-MentionsMonitor") == "true" || GM_getValue("llama-MentionsMonitor") == undefined),
                "NotificationsOff": (GM_getValue("llama-NotificationsOff") == "true"),
                "ChangeFont": (GM_getValue("llama-ChangeFont") == "true" || GM_getValue("llama-ChangeFont") == undefined),
                "MaxedCamLeft": (GM_getValue("llama-MaxedCamLeft") == "true" || GM_getValue("llama-MaxedCamLeft") == undefined),

                "NightMode": (GM_getValue("llama-NightMode") == "true"),
                "NightModeBlack": (GM_getValue("llama-NightModeBlack") == "true" || GM_getValue("llama-NightModeBlack") == undefined),

                "DefaultMode": (GM_getValue("llama-NighModeBlack") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "PinkMode": (GM_getValue("llama-PinkMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "BlueMode": (GM_getValue("llama-BlueMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "GreenMode": (GM_getValue("llama-GreenMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "PurpleMode": (GM_getValue("llama-PurpleMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "DarkPurpleMode": (GM_getValue("llama-DarkPurpleMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "OrangeMode": (GM_getValue("llama-OrangeMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "RedMode": (GM_getValue("llama-RedMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "WhiteMode": (GM_getValue("llama-WhiteMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "FeatureOneMode": (GM_getValue("llama-FeatureOneMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "FeatureTwoMode": (GM_getValue("llama-FeatureTwoMode") == "true" || GM_getValue("llama-DarkMode") == "false"),
                "FeatureThreeMode": (GM_getValue("llama-FeatureThreeMode") == "true" || GM_getValue("llama-DarkMode") == "false"),

                "BorderlessCams": (GM_getValue("llama-BorderlessCams") == "true" || GM_getValue("llama-BorderlessCams") == undefined),
                "miniyt": (GM_getValue("llama-miniyt") == "true"),
                "ChatBelow": (GM_getValue("llama-ChatBelow") == "true"),
            };
            if (settingsQuick["ChangeFont"]) bodyElem.classList.add("llama-changefont");
            if (settingsQuick["NightMode"]) nightmodeToggle(true);
            if (settingsQuick["MaxedCamLeft"]) videolistCSS.classList.add("llama-leftcam");
            if (settingsQuick["miniyt"]) miniytToggle(true);

            if (settingsQuick["DefaultMode"]) defaultmodeToggle(true) && whitemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && purplemodeToggle(false) && orangemodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["PinkMode"]) pinkmodeToggle(true) && whitemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && purplemodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["BlueMode"]) bluemodeToggle(true) && whitemodeToggle(false) && greenmodeToggle(false) && pinkmodeToggle(false) && purplemodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["GreenMode"]) greenmodeToggle(true) && whitemodeToggle(false) && pinkmodeToggle(false) && bluemodeToggle(false) && purplemodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["PurpleMode"]) purplemodeToggle(true) && whitemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["DarkPurpleMode"]) darkpurplemodeToggle(true) && whitemodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["OrangeMode"]) orangemodeToggle(true) && whitemodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && redmodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["RedMode"]) redmodeToggle(true) && whitemodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && featureonemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["FeatureOneMode"]) featureonemodeToggle(true) && whitemodeToggle(false) && redmodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && featuretwomodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["FeatureTwoMode"]) featuretwomodeToggle(true) && whitemodeToggle(false) && redmodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && featureonemodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);
            if (settingsQuick["FeatureThreeMode"]) featurethreemodeToggle(true) && featuretwomodeToggle(false) && whitemodeToggle(false) && redmodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && featureonemodeToggle(false) && darkpurplemodeToggle(false);
            if (settingsQuick["WhiteMode"]) whitemodeToggle(true) && featuretwomodeToggle(false) && redmodeToggle(false) && purplemodeToggle(false) && greenmodeToggle(false) && bluemodeToggle(false) && pinkmodeToggle(false) && defaultmodeToggle(false) && orangemodeToggle(false) && featureonemodeToggle(false) && darkpurplemodeToggle(false) && featurethreemodeToggle(false);

            if (settingsQuick["ChatBelow"]) chatBelowToggle(true);
            if (settingsQuick["BorderlessCams"]) borderlessCamsToggle(true);

            if (browserFirefox && 1 == 2) {
                titleElem.querySelector("#room-header-info").insertAdjacentHTML("afterend", `
	<div id="llama-firefoxwarning" class="style-scope tinychat-title"
	style="font-size: .75em; background: white; color: grey; width: 200px; padding: 5px; line-height: 13px;vertical-align: middle;border: #ddd 1px solid;border-width: 0px 1px 0px 1px;">
		<div class="style-scope tinychat-title" style="display: table;height: 100%;">
			<span style="display: table-cell; vertical-align: middle;top: 16%;" class="style-scope tinychat-title">
			Tinychat Theme requires Chrome or Opera.
			</span>
		</div>
	</div>
	`);
            }

            function waitForSettings() {
                try {
                    settingsVisible = false;
                    if (titleElem.querySelector("#room-header-gifts") != null) {
                        clearInterval(settingsWaitInterval);
                        newCamAdded();
                        newUserAdded();
                        newMessageAdded();
                        setTimeout(messageParserCheckCSS, 3000);

                        giftsElemWidth = titleElem.querySelector("#room-header-gifts").offsetWidth;
                        if (titleElem.querySelector("#room-header-gifts-items") == null) {
                            giftsElemWidth1000 = giftsElemWidth + 45;
                        } else {
                            giftsElemWidth1000 = giftsElemWidth;
                        }
                        if (titleCSS.querySelector("#titleCSS")) {
                            titleCSS.querySelector("#titleCSS").innerHTML += `
				#llama-settings {
					right: ` + giftsElemWidth + `px;
				}
			`;
                        }

                        var sidemenuFakeBorder = document.createElement("span");
                        sidemenuFakeBorder.setAttribute("id", "llama-sidemenufakeborder");
                        sidemenuCSS.insertAdjacentElement("beforeend", sidemenuFakeBorder);

                        settingsElem = titleElem.querySelector("#room-header-gifts").insertAdjacentHTML("beforebegin", `

<!--- START OF THEMES --->
<div id="llama-themes">
<div id="llama-themesBox" class="hidden">
   <div id="llama-colors">
      <div id="llama-settings-pinkmode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="PINK"></span>
            <div class="foo2 pink"></div>
         </label>
      </div>
      <div id="llama-settings-greenmode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="GREEN"></span>
            <div class="foo2 green"></div>
         </label>
      </div>
      <div id="llama-settings-bluemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="BLUE"></span>
            <div class="foo2 blue"></div>
         </label>
      </div>
      <div id="llama-settings-purplemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="PURPLE"></span>
            <div class="foo2 purple"></div>
         </label>
      </div>
      <div id="llama-settings-orangemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="ORANGE"></span>
            <div class="foo2 orange"></div>
         </label>
      </div>
      <div id="llama-settings-redmode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="RED"></span>
            <div class="foo2 red"></div>
         </label>
      </div>
      <div id="llama-settings-darkpurplemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="DARK PURPLE"></span>
            <div class="foo2 darkpurple"></div>
         </label>
      </div>
      <div id="llama-settings-defaultmode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="DEFAULT"></span>
            <div class="foo2 default"></div>
         </label>
      </div>
      <div id="llama-settings-whitemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark" title="WHITE"></span>
            <div class="foo2 white"></div>
         </label>
      </div>
      <div id="llama-settings-featureonemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark feature1" title="Weed"></span>
            <div class="foo2 featureone"></div>
         </label>
      </div>
      <div id="llama-settings-featuretwomode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark feature2" title="Smash Bros"></span>
            <div class="foo2 featuretwo"></div>
         </label>
      </div>
      <div id="llama-settings-featurethreemode">
         <label class="llama-color-container">
            <input type="checkbox"><span class="checkmark feature3" title="Splatoon"></span>
            <div class="foo2 featurethree"></div>
         </label>
      </div>
      <div id="featured" class="featured" style="display:none;">
         <div id="llama-settings-featuredmode">FEATURED</div>
      </div>
   </div>
</div>
<div id="llama-themesGear" title="Themes">

<style>
#llama-themesGear>div>span:after {
	content: "";
	position: relative;
	display: none;
	/* display: inline-block; */
	height: 7px;
	width: 7px;
	top: -1px;
	left: 0;
	margin-left: 4px;
	border-width: 2px 2px 0 0;
	border-style: solid;
	border-color: #fff;
	box-sizing: border-box;
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	transition: .2s;
}

#llama-themesGear>div>span:hover::after {
	margin-left: 8px;
}

#llama-themesButton.llama-themes-open>span::after {
	border-width: 0 0 2px 2px;
	margin-left: 8px;
}


/* -------------------------------- PINKKK BUTTONS -------------------------------- */

.llama-pinkmode #llama-themesButton {
	background-color: var(--pinkmode-bgcolor);
	border-color: var(--pinkmode-bordercolor);
}

.llama-pinkmode #llama-gamesButton {
	background-color: var(--pinkmode-bgcolor);
	border-color: var(--pinkmode-bordercolor);
}

.llama-pinkmode #llama-themesGear>div {
	color: #fff;
}

.llama-pinkmode #llama-gamesGear>div {
	color: #fff;
}


/* -------------------------------- GREENNN BUTTONS -------------------------------- */

.llama-greenmode #llama-themesButton {
	background-color: var(--greenmode-bgcolor);
	border-color: var(--greenmode-bordercolor);
}

.llama-greenmode #llama-gamesButton {
	background-color: var(--greenmode-bgcolor);
	border-color: var(--greenmode-bordercolor);
}


/* -------------------------------- BLUEEE BUTTONS -------------------------------- */

.llama-bluemode #llama-themesButton {
	background-color: var(--bluemode-bgcolor);
	border-color: var(--bluemode-bordercolor);
}

.llama-bluemode #llama-gamesButton {
	background-color: var(--bluemode-bgcolor);
	border-color: var(--bluemode-bordercolor);
}


/* -------------------------------- PURPLEEE BUTTONS -------------------------------- */

.llama-purplemode #llama-themesButton {
	background-color: var(--purplemode-bgcolor);
	border-color: var(--purplemode-bordercolor);
}

.llama-purplemode #llama-gamesButton {
	background-color: var(--purplemode-bgcolor);
	border-color: var(--purplemode-bordercolor);
}


/* -------------------------------- ORANGEEE BUTTONS -------------------------------- */

.llama-orangemode #llama-themesButton {
	background-color: var(--orangemode-bgcolor);
	border-color: var(--orangemode-bordercolor);
}

.llama-orangemode #llama-gamesButton {
	background-color: var(--orangemode-bgcolor);
	border-color: var(--orangemode-bordercolor);
}


/* -------------------------------- REDDD BUTTONS -------------------------------- */

.llama-redmode #llama-themesButton {
	background-color: var(--redmode-bgcolor);
	border-color: var(--redmode-bordercolor);
}

.llama-redmode #llama-gamesButton {
	background-color: var(--redmode-bgcolor);
	border-color: var(--redmode-bordercolor);
}


/* -------------------------------- DARKPURPLEEE BUTTONS -------------------------------- */

.llama-darkpurplemode #llama-themesButton {
	background-color: var(--darkpurplemode-bgcolor);
	border-color: var(--darkpurplemode-bordercolor);
}

.llama-darkpurplemode #llama-gamesButton {
	background-color: var(--darkpurplemode-bgcolor);
	border-color: var(--darkpurplemode-bordercolor);
}


/* -------------------------------- WHITEEE BUTTONS -------------------------------- */

.llama-whitemode #llama-themesButton {
	background-color: var(--whitemode-tcblue);
	border-color: var(--whitemode-bordercolor);
}

.llama-whitemode #llama-gamesButton {
	background-color: var(--whitemode-bgcolor);
	border-color: var(--whitemode-bordercolor);
}


/* -------------------------------- FEATUREONEEE BUTTONS -------------------------------- */

.llama-featureonemode #llama-themesButton {
	background-color: var(--featureonemode-bgcolor);
	border-color: var(--featureonemode-bordercolor);
}

.llama-featureonemode #llama-gamesButton {
	background-color: var(--featureonemode-bgcolor);
	border-color: var(--featureonemode-bordercolor);
}


/* -------------------------------- FEATURETWOOO BUTTONS -------------------------------- */

.llama-featuretwomode #llama-themesButton {
	background-color: var(--featuretwomode-bgcolor);
	border-color: var(--featuretwomode-bordercolor);
}

.llama-featuretwomode #llama-gamesButton {
	background-color: var(--featuretwomode-bgcolor);
	border-color: var(--featuretwomode-bordercolor);
}


/* -------------------------------- FEATURETHREEE BUTTONS -------------------------------- */

.llama-featurethreemode #llama-themesButton {
	background-color: transparent;
	border: 0px;
}

.llama-featurethreemode #llama-gamesButton {
	background-color: #51bc02;
	border-color: #111;
	border-top: 0px !important;
}

</style>
<div class="llama-themesButton" id="llama-themesButton"><span><img src="https://raw.githubusercontent.com/snwh/paper-icon-theme/master/Paper/512x512/apps/preferences-color.png" width="20px" style="margin-top:3px;"></span></div>
</div></div></div>
<!--- END OF THEMES --->

<!--- START OF HIDING --->

<style>
#llama-hidinglist>a {
	background-color: #002f3e;
	border: 1px solid #c1c1c17d;
	border-bottom-right-radius: 5px;
	color: #fff;
	text-decoration: none;
	padding: 5px;
	position: absolute;
	left: -2px;
	box-shadow: -1px 1px 5px 0px #000;
}

</style>

<div id="llama-hiding" style="display:none;">
   <div id="llama-hidingBox" class="hidden">
      <div id="llama-hidinglist">
         <a href="https://smokeyllama.glitch.me/game_list.html" target="gamelist">«
         RETURN TO GAME LIST</a><!-- Copy and Paste Me --><iframe allow="geolocation; microphone; camera; midi; vr; encrypted-media" src="https://smokeyllama.glitch.me/game_list.html" name="gamelist" style="border:0px;padding:0px;margin:0px;padding-top:10px;"/></iframe>
      </div>
   </div>
   <div id="llama-hidingGear" title="Games">
      <div class="llama-hidingButton" id="llama-hidingButton"><span style="margin-left:10px;">
         </span>
      </div>
   </div>
</div>

<!--- END OF HIDING --->

<!--- START OF GAMES --->

<style>
#llama-gameslist>a {
	background-color: #002f3e;
	border: 1px solid #c1c1c17d;
	border-bottom-right-radius: 5px;
	color: #fff;
	text-decoration: none;
	padding: 5px;
	position: absolute;
	left: -2px;
	box-shadow: -1px 1px 5px 0px #000;
}

</style>

<div id="llama-emojis" style="">
   <div id="llama-emojisBox" class="hidden">
      <div id="llama-emojislist" style="position: absolute;bottom: 30px;right: 7px;height: 220px;background-color: #191919;z-index: 100;border-radius: 10px;border: 1px solid #313131;">
         <iframe allow="geolocation; microphone; camera; midi; vr; encrypted-media" src="https://smokeyllama.glitch.me/emoji_list.html" name="gamelist" style="border: 0px; padding: 0px; margin: 0px; height: 100%; border-radius: 10px;"/></iframe>
      </div>
   </div>
   <div id="llama-emojisGear" title="Emojis">
      <div class="llama-emojisButton" id="llama-emojisButton"><span style="margin-left:10px;">
         </span>
      </div>
   </div>
</div>
<div id="llama-games" style="">
   <div id="llama-gamesBox" class="hidden">
      <div id="llama-gameslist">
         <a href="https://smokeyllama.glitch.me/game_list.html" target="gamelist">«
         RETURN TO GAME LIST</a><!-- Copy and Paste Me --><iframe allow="geolocation; microphone; camera; midi; vr; encrypted-media" src="https://smokeyllama.glitch.me/game_list.html" name="gamelist" style="border:0px;padding:0px;margin:0px;padding-top:10px;"/></iframe>
      </div>
   </div>
   <div id="llama-gamesGear" title="Games">
      <div class="llama-gamesButton" id="llama-gamesButton"><span style="margin-left:10px;">
         </span>
      </div>
   </div>
</div>
<!--- END OF GAMES --->
<div id="llama-settings">
   <div id="llama-settingsBox" class="hidden">
      <p id="title">Settings - - - - <a href="http://www.smokeyllama.com">SmokeyLlama.com</a></p>
      <div id="llama-settings-mentions" class="llama-setting-container">
         <input type="checkbox"><span class="label">Alert phrases <span class="info" data-title='A comma-separated list of phrases to alert/highlight for. Example of 3 phrases: "hello,Google Chrome,sky"'>?</span></span>
         <div class="inputcontainer"><input class="text"><button class="save blue-button">save</button></div>
      </div>
      <div id="llama-settings-autoscroll" class="llama-setting-container"><input type="checkbox"><span class="label">Autoscroll </span></div>
      <div id="llama-settings-notifications" class="llama-setting-container"><input type="checkbox"><span class="label">Hide notifications </span></div>
      <div id="llama-settings-changefont" class="llama-setting-container"><input type="checkbox"><span class="label">Improve font <span class="info" data-title='The default font is too thin in some browsers'>?</span></span></div>
      <div id="llama-settings-chatbelow" class="llama-setting-container"><input type="checkbox"><span class="label">Chat on Bottom <span class="info" data-title='!! BETA !! ------ If cams dont resize, hit the arrow on the side of the chatlog to force resize.'>*</span></span></div>
      <!-- RIGHT SIDE --><!-- <div id="llama-settings-messageanim" class="llama-setting-container"><input type="checkbox"><span class="label">Disable message animation </span></div>-->
      <div id="llama-settings-borderlesscams" class="llama-setting-container right" style="position:absolute;right:100px;"><input type="checkbox"><span class="label">Remove cam spacing </span></div>
   </div>
   <div id="llama-updateNotifier"><a class="llama-exitButtonSmall">✕</a><span style="padding:8px;border-color:cyan;right: -39px;">Updated Overall Theme Code!</span></div>
   <div id="llama-settingsGear" title="Settings"><span style=""><img src="https://cdn1.iconfinder.com/data/icons/MetroStation-PNG/128/MB__Llama.png" width="20px"></span></div>
</div>
</div></div></div><!--- START OF TEST --->
<div id="llama-settings-miniyt" class="llama-setting-container right" style="position:absolute;right:100px;"><label class="llama-miniyt-container"><input type="checkbox"">
   <span class="checkmark" title="Toggle Mini Youtube"></span><span class="label"><img src="https://i.ibb.co/x5wQDvb/MiniYT.png"><span class="info" data-title='Mini Youtube : After Toggle, Press the arrow button on the side of the chatbox to fix cams!'>? </span></span></label>
</div>

<style>
/*-TEST----*/

#llama-settings-miniyt>label:hover {
	background: transparent;
}

.checkmark .feature1:hover {
	background-color: #00ff00;
}

.llama-pinkmode #llama-settings-miniyt {
	background-color: var(--pinkmode-bordercolor);
}

.llama-greenmode #llama-settings-miniyt {
	background-color: var(--greenmode-bordercolor);
}

.llama-bluemode #llama-settings-miniyt {
	background-color: var(--bluemode-bordercolor);
}

.llama-purplemode #llama-settings-miniyt {
	background-color: var(--purplemode-bgcolor);
}

.llama-orangemode #llama-settings-miniyt {
	background-color: var(--orangemode-bordercolor);
}

.llama-redmode #llama-settings-miniyt {
	background-color: var(--redmode-bordercolor);
}

.llama-darkpurplemode #llama-settings-miniyt {
	background-color: var(--darkpurplemode-bordercolor);
}

.llama-whitemode #llama-settings-miniyt {
	background-color: var(--whitemode-bordercolor);
}

.llama-featureonemode #llama-settings-miniyt {
	background-color: var(--featureonemode-bordercolor);
}

.llama-featuretwomode #llama-settings-miniyt {
	background-color: var(--featuretwomode-bordercolor);
}

.llama-featurethreemode #llama-settings-miniyt {
	background-color: var(--featurethreemode-bordercolor);
}


/* On mouse-over, add a grey background color */

.llama-miniyt-container:hover input~.checkmark {
	background-color: transparent;
	border-right: 1px solid #fff;
	border-bottom: 1px solid #fff;
	border-bottom-right-radius: 10px;
	border-left: 0px;
	width: 25px;
	height: 25px;
}


/* When the checkbox is checked, add a blue background */

.llama-miniyt-container input:checked~.checkmark {
	background-color: transparent;
	border: 0px solid #FFFFFF;
	border-top-right-radius: 100px;
	border-bottom-right-radius: 100px;
	border-left: 0px;
	width: 25px;
}


/* Create the checkmark/indicator (hidden when not checked) */

.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}


/* Show the checkmark when checked */

.llama-miniyt-container input:checked~.checkmark:after {
	display: block;
}


/* Style the checkmark/indicator */

#llama-settings-miniyt>label>span.checkmark:after {
	left: 8px;
	top: 1px;
	width: 3px;
	height: 8px;
	border: solid #ffffff;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}


/*-TEST---------*/

#llama-settings-miniyt>label>input[type=checkbox] {
	position: absolute;
	opacity: 0;
	cursor: pointer;
}

.checkmark2 {
	position: absolute;
	top: 0;
	left: 0;
	height: 14px;
	width: 15px;
	background-color: transparent;
	border-radius: 3px;
}

#llama-settings-miniyt .info {
	position: absolute;
	top: 0px;
	left: 0px;
	color: transparent;
	font-weight: bold;
	font-family: Arial;
	border: transparent 1px solid;
	border-radius: 16px;
	height: 1.5em;
	width: 1.5em;
	text-align: center;
	display: inline-block;
}

#llama-settings-miniyt .info:hover:after {
	font-weight: normal;
	padding: 4px 7px 4px 7px;
	border-radius: 7px;
	color: white;
	background: #0085ad;
	content: attr(data-title);
	display: inline-block;
	position: absolute;
	top: 25px;
	left: 0;
	width: 200px;
	z-index: 9;
}

</style>

</div>
<!--- END OF TEST --->
		`);

                        titleElem.getElementById("llama-settingsGear").addEventListener("click", toggleSettingsDisplay);
                        titleElem.getElementById("llama-themesGear").addEventListener("click", toggleThemesDisplay);
                        titleElem.getElementById("llama-gamesGear").addEventListener("click", toggleGamesDisplay);
                        titleElem.getElementById("llama-emojisGear").addEventListener("click", toggleEmojisDisplay);
                        titleElem.getElementById("llama-hidingGear").addEventListener("click", toggleHidingDisplay);
                        titleElem.getElementById("llama-updateNotifier").addEventListener("click", function() {
                            toggleSettingsDisplay("updateNotifier");
                        });
                        if (!freshInstall && GM_getValue("llama-updateNotifSeen") != "2018.155") titleElem.getElementById("llama-updateNotifier").classList.add("visible");
                        titleElem.querySelector("#llama-settings #llama-settings-mentions button.save").addEventListener("click", function() {
                            mentionsManager("save");
                        });
                        mentionsManager("load");

                        settingsCheckboxUpdate();
                        titleElem.querySelector("#llama-settings-pinkmode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-pinkmode");
                        });
                        titleElem.querySelector("#llama-settings-greenmode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-greenmode");
                        });
                        titleElem.querySelector("#llama-settings-bluemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-bluemode");
                        });
                        titleElem.querySelector("#llama-settings-purplemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-purplemode");
                        });
                        titleElem.querySelector("#llama-settings-darkpurplemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-darkpurplemode");
                        });
                        titleElem.querySelector("#llama-settings-whitemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-whitemode");
                        });
                        titleElem.querySelector("#llama-settings-orangemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-orangemode");
                        });
                        titleElem.querySelector("#llama-settings-redmode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-redmode");
                        });
                        titleElem.querySelector("#llama-settings-featureonemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-featureonemode");
                        });
                        titleElem.querySelector("#llama-settings-featuretwomode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-featuretwomode");
                        });
                        titleElem.querySelector("#llama-settings-featurethreemode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-featurethreemode");
                        });
                        titleElem.querySelector("#llama-settings-defaultmode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-defaultmode");
                        });

                        titleElem.querySelector("#llama-settings-borderlesscams input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-borderlesscams");
                        });
                        titleElem.querySelector("#llama-settings-miniyt input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-miniyt");
                        });

                        titleElem.querySelector("#llama-settings-autoscroll input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-autoscroll");
                        });
                        titleElem.querySelector("#llama-settings-mentions input:first-of-type").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-mentions");
                        });
                        titleElem.querySelector("#llama-settings-notifications input:first-of-type").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-notifications");
                        });
                        titleElem.querySelector("#llama-settings-changefont input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-changefont");
                        });
                        titleElem.querySelector("#llama-settings-chatbelow input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-chatbelow");
                        });
                        titleElem.querySelector("#llama-settings-nightmode input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-nightmode");
                        });


                        titleElem.querySelector("#llama-settings-maxcamposition input").addEventListener("click", function() {
                            settingsCheckboxUpdate("llama-settings-maxcamposition");
                        });

                        notificationHider();
                    }
                } catch (e) {
                    tcl("error waitForSettings: " + e.message);
                }
            }

            function nightmodeToggle(arg) {
                try {
                    var nightmodeClasses = ["llama-nightmode"];

                    if (settingsQuick["NightModeBlack"]) nightmodeClasses.push("blacknight");

                    if (arg == true) {
                        bodyElem.classList.add(...nightmodeClasses);
                        titleCSS.classList.add(...nightmodeClasses);
                        sidemenuCSS.classList.add(...nightmodeClasses);
                        userlistCSS.classList.add(...nightmodeClasses);
                        webappCSS.classList.add(...nightmodeClasses);
                        videolistCSS.classList.add(...nightmodeClasses);
                        videomoderationCSS.classList.add(...nightmodeClasses);
                        chatlistCSS.classList.add(...nightmodeClasses);
                        chatlogCSS.classList.add(...nightmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...nightmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...nightmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...nightmodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["NightModeBlack"] && settingsQuick["NightMode"]) nightmodeClasses = ["blacknight"];

                        bodyElem.classList.remove(...nightmodeClasses);
                        titleCSS.classList.remove(...nightmodeClasses);
                        sidemenuCSS.classList.remove(...nightmodeClasses);
                        userlistCSS.classList.remove(...nightmodeClasses);
                        webappCSS.classList.remove(...nightmodeClasses);
                        videolistCSS.classList.remove(...nightmodeClasses);
                        videomoderationCSS.classList.remove(...nightmodeClasses);
                        chatlistCSS.classList.remove(...nightmodeClasses);
                        chatlogCSS.classList.remove(...nightmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...nightmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...nightmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...nightmodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error nightmodeToggle: " + e.message);
                }
            }

            function pinkmodeToggle(arg) {
                try {
                    var pinkmodeClasses = ["llama-pinkmode"];

                    if (settingsQuick["PinkModeBlack"]) pinkmodeClasses.push("pinknight");

                    if (arg == true) {
                        bodyElem.classList.add(...pinkmodeClasses);
                        titleCSS.classList.add(...pinkmodeClasses);
                        sidemenuCSS.classList.add(...pinkmodeClasses);
                        userlistCSS.classList.add(...pinkmodeClasses);
                        webappCSS.classList.add(...pinkmodeClasses);
                        videolistCSS.classList.add(...pinkmodeClasses);
                        videomoderationCSS.classList.add(...pinkmodeClasses);
                        chatlistCSS.classList.add(...pinkmodeClasses);
                        chatlogCSS.classList.add(...pinkmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...pinkmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...pinkmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...pinkmodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["PinkModeBlack"] && settingsQuick["PinkMode"]) pinkmodeClasses = ["pinknight"];

                        bodyElem.classList.remove(...pinkmodeClasses);
                        titleCSS.classList.remove(...pinkmodeClasses);
                        sidemenuCSS.classList.remove(...pinkmodeClasses);
                        userlistCSS.classList.remove(...pinkmodeClasses);
                        webappCSS.classList.remove(...pinkmodeClasses);
                        videolistCSS.classList.remove(...pinkmodeClasses);
                        videomoderationCSS.classList.remove(...pinkmodeClasses);
                        chatlistCSS.classList.remove(...pinkmodeClasses);
                        chatlogCSS.classList.remove(...pinkmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...pinkmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...pinkmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...pinkmodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error pinkmodeToggle: " + e.message);
                }
            }

            function whitemodeToggle(arg) {
                try {
                    var whitemodeClasses = ["llama-whitemode"];

                    if (settingsQuick["WhiteModeBlack"]) whitemodeClasses.push("whitenight");

                    if (arg == true) {
                        bodyElem.classList.add(...whitemodeClasses);
                        titleCSS.classList.add(...whitemodeClasses);
                        sidemenuCSS.classList.add(...whitemodeClasses);
                        userlistCSS.classList.add(...whitemodeClasses);
                        webappCSS.classList.add(...whitemodeClasses);
                        videolistCSS.classList.add(...whitemodeClasses);
                        videomoderationCSS.classList.add(...whitemodeClasses);
                        chatlistCSS.classList.add(...whitemodeClasses);
                        chatlogCSS.classList.add(...whitemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...whitemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...whitemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...whitemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["WhiteModeBlack"] && settingsQuick["WhiteMode"]) whitemodeClasses = ["whitenight"];

                        bodyElem.classList.remove(...whitemodeClasses);
                        titleCSS.classList.remove(...whitemodeClasses);
                        sidemenuCSS.classList.remove(...whitemodeClasses);
                        userlistCSS.classList.remove(...whitemodeClasses);
                        webappCSS.classList.remove(...whitemodeClasses);
                        videolistCSS.classList.remove(...whitemodeClasses);
                        videomoderationCSS.classList.remove(...whitemodeClasses);
                        chatlistCSS.classList.remove(...whitemodeClasses);
                        chatlogCSS.classList.remove(...whitemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...whitemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...whitemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...whitemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error whitemodeToggle: " + e.message);
                }
            }

            function greenmodeToggle(arg) {
                try {
                    var greenmodeClasses = ["llama-greenmode"];

                    if (settingsQuick["GreenModeBlack"]) greenmodeClasses.push("greennight");

                    if (arg == true) {
                        bodyElem.classList.add(...greenmodeClasses);
                        titleCSS.classList.add(...greenmodeClasses);
                        sidemenuCSS.classList.add(...greenmodeClasses);
                        userlistCSS.classList.add(...greenmodeClasses);
                        webappCSS.classList.add(...greenmodeClasses);
                        videolistCSS.classList.add(...greenmodeClasses);
                        videomoderationCSS.classList.add(...greenmodeClasses);
                        chatlistCSS.classList.add(...greenmodeClasses);
                        chatlogCSS.classList.add(...greenmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...greenmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...greenmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...greenmodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["GreenModeBlack"] && settingsQuick["GreenMode"]) nightmodeClasses = ["greennight"];

                        bodyElem.classList.remove(...greenmodeClasses);
                        titleCSS.classList.remove(...greenmodeClasses);
                        sidemenuCSS.classList.remove(...greenmodeClasses);
                        userlistCSS.classList.remove(...greenmodeClasses);
                        webappCSS.classList.remove(...greenmodeClasses);
                        videolistCSS.classList.remove(...greenmodeClasses);
                        videomoderationCSS.classList.remove(...greenmodeClasses);
                        chatlistCSS.classList.remove(...greenmodeClasses);
                        chatlogCSS.classList.remove(...greenmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...greenmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...greenmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...greenmodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error greenmodeToggle: " + e.message);
                }
            }

            function bluemodeToggle(arg) {
                try {
                    var bluemodeClasses = ["llama-bluemode"];

                    if (settingsQuick["BlueModeBlack"]) bluemodeClasses.push("bluenight");

                    if (arg == true) {
                        bodyElem.classList.add(...bluemodeClasses);
                        titleCSS.classList.add(...bluemodeClasses);
                        sidemenuCSS.classList.add(...bluemodeClasses);
                        userlistCSS.classList.add(...bluemodeClasses);
                        webappCSS.classList.add(...bluemodeClasses);
                        videolistCSS.classList.add(...bluemodeClasses);
                        videomoderationCSS.classList.add(...bluemodeClasses);
                        chatlistCSS.classList.add(...bluemodeClasses);
                        chatlogCSS.classList.add(...bluemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...bluemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...bluemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...bluemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["BlueModeBlack"] && settingsQuick["BlueMode"]) nightmodeClasses = ["bluenight"];

                        bodyElem.classList.remove(...bluemodeClasses);
                        titleCSS.classList.remove(...bluemodeClasses);
                        sidemenuCSS.classList.remove(...bluemodeClasses);
                        userlistCSS.classList.remove(...bluemodeClasses);
                        webappCSS.classList.remove(...bluemodeClasses);
                        videolistCSS.classList.remove(...bluemodeClasses);
                        videomoderationCSS.classList.remove(...bluemodeClasses);
                        chatlistCSS.classList.remove(...bluemodeClasses);
                        chatlogCSS.classList.remove(...bluemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...bluemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...bluemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...bluemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error bluemodeToggle: " + e.message);
                }
            }

            function orangemodeToggle(arg) {
                try {
                    var orangemodeClasses = ["llama-orangemode"];

                    if (settingsQuick["OrangeModeBlack"]) orangemodeClasses.push("orangenight");

                    if (arg == true) {
                        bodyElem.classList.add(...orangemodeClasses);
                        titleCSS.classList.add(...orangemodeClasses);
                        sidemenuCSS.classList.add(...orangemodeClasses);
                        userlistCSS.classList.add(...orangemodeClasses);
                        webappCSS.classList.add(...orangemodeClasses);
                        videolistCSS.classList.add(...orangemodeClasses);
                        videomoderationCSS.classList.add(...orangemodeClasses);
                        chatlistCSS.classList.add(...orangemodeClasses);
                        chatlogCSS.classList.add(...orangemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...orangemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...orangemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...orangemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["OrangeModeBlack"] && settingsQuick["OrangeMode"]) nightmodeClasses = ["orangenight"];

                        bodyElem.classList.remove(...orangemodeClasses);
                        titleCSS.classList.remove(...orangemodeClasses);
                        sidemenuCSS.classList.remove(...orangemodeClasses);
                        userlistCSS.classList.remove(...orangemodeClasses);
                        webappCSS.classList.remove(...orangemodeClasses);
                        videolistCSS.classList.remove(...orangemodeClasses);
                        videomoderationCSS.classList.remove(...orangemodeClasses);
                        chatlistCSS.classList.remove(...orangemodeClasses);
                        chatlogCSS.classList.remove(...orangemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...orangemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...orangemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...orangemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error orangemodeToggle: " + e.message);
                }
            }

            function redmodeToggle(arg) {
                try {
                    var redmodeClasses = ["llama-redmode"];

                    if (settingsQuick["RedModeBlack"]) redmodeClasses.push("rednight");

                    if (arg == true) {
                        bodyElem.classList.add(...redmodeClasses);
                        titleCSS.classList.add(...redmodeClasses);
                        sidemenuCSS.classList.add(...redmodeClasses);
                        userlistCSS.classList.add(...redmodeClasses);
                        webappCSS.classList.add(...redmodeClasses);
                        videolistCSS.classList.add(...redmodeClasses);
                        videomoderationCSS.classList.add(...redmodeClasses);
                        chatlistCSS.classList.add(...redmodeClasses);
                        chatlogCSS.classList.add(...redmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...redmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...redmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...redmodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["RedModeBlack"] && settingsQuick["RedMode"]) nightmodeClasses = ["rednight"];

                        bodyElem.classList.remove(...redmodeClasses);
                        titleCSS.classList.remove(...redmodeClasses);
                        sidemenuCSS.classList.remove(...redmodeClasses);
                        userlistCSS.classList.remove(...redmodeClasses);
                        webappCSS.classList.remove(...redmodeClasses);
                        videolistCSS.classList.remove(...redmodeClasses);
                        videomoderationCSS.classList.remove(...redmodeClasses);
                        chatlistCSS.classList.remove(...redmodeClasses);
                        chatlogCSS.classList.remove(...redmodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...redmodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...redmodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...redmodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error redmodeToggle: " + e.message);
                }
            }

            function featureonemodeToggle(arg) {
                try {
                    var featureonemodeClasses = ["llama-featureonemode"];

                    if (settingsQuick["FeatureOneModeBlack"]) featureonemodeClasses.push("featureonenight");

                    if (arg == true) {
                        bodyElem.classList.add(...featureonemodeClasses);
                        titleCSS.classList.add(...featureonemodeClasses);
                        sidemenuCSS.classList.add(...featureonemodeClasses);
                        userlistCSS.classList.add(...featureonemodeClasses);
                        webappCSS.classList.add(...featureonemodeClasses);
                        videolistCSS.classList.add(...featureonemodeClasses);
                        videomoderationCSS.classList.add(...featureonemodeClasses);
                        chatlistCSS.classList.add(...featureonemodeClasses);
                        chatlogCSS.classList.add(...featureonemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...featureonemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...featureonemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...featureonemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["FeatureOneModeBlack"] && settingsQuick["FeatureOneMode"]) nightmodeClasses = ["featureonenight"];

                        bodyElem.classList.remove(...featureonemodeClasses);
                        titleCSS.classList.remove(...featureonemodeClasses);
                        sidemenuCSS.classList.remove(...featureonemodeClasses);
                        userlistCSS.classList.remove(...featureonemodeClasses);
                        webappCSS.classList.remove(...featureonemodeClasses);
                        videolistCSS.classList.remove(...featureonemodeClasses);
                        videomoderationCSS.classList.remove(...featureonemodeClasses);
                        chatlistCSS.classList.remove(...featureonemodeClasses);
                        chatlogCSS.classList.remove(...featureonemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...featureonemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...featureonemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...featureonemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error featureonemodeToggle: " + e.message);
                }
            }

            function featuretwomodeToggle(arg) {
                try {
                    var featuretwomodeClasses = ["llama-featuretwomode"];

                    if (settingsQuick["FeatureTwoModeBlack"]) featuretwomodeClasses.push("featuretwonight");

                    if (arg == true) {
                        bodyElem.classList.add(...featuretwomodeClasses);
                        titleCSS.classList.add(...featuretwomodeClasses);
                        sidemenuCSS.classList.add(...featuretwomodeClasses);
                        userlistCSS.classList.add(...featuretwomodeClasses);
                        webappCSS.classList.add(...featuretwomodeClasses);
                        videolistCSS.classList.add(...featuretwomodeClasses);
                        videomoderationCSS.classList.add(...featuretwomodeClasses);
                        chatlistCSS.classList.add(...featuretwomodeClasses);
                        chatlogCSS.classList.add(...featuretwomodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...featuretwomodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...featuretwomodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...featuretwomodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["FeatureTwoModeBlack"] && settingsQuick["FeatureTwoMode"]) nightmodeClasses = ["featuretwonight"];

                        bodyElem.classList.remove(...featuretwomodeClasses);
                        titleCSS.classList.remove(...featuretwomodeClasses);
                        sidemenuCSS.classList.remove(...featuretwomodeClasses);
                        userlistCSS.classList.remove(...featuretwomodeClasses);
                        webappCSS.classList.remove(...featuretwomodeClasses);
                        videolistCSS.classList.remove(...featuretwomodeClasses);
                        videomoderationCSS.classList.remove(...featuretwomodeClasses);
                        chatlistCSS.classList.remove(...featuretwomodeClasses);
                        chatlogCSS.classList.remove(...featuretwomodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...featuretwomodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...featuretwomodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...featuretwomodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error featuretwomodeToggle: " + e.message);
                }
            }

            function featurethreemodeToggle(arg) {
                try {
                    var featurethreemodeClasses = ["llama-featurethreemode"];

                    if (settingsQuick["FeatureThreeModeBlack"]) featurethreemodeClasses.push("featurethreenight");

                    if (arg == true) {
                        bodyElem.classList.add(...featurethreemodeClasses);
                        titleCSS.classList.add(...featurethreemodeClasses);
                        sidemenuCSS.classList.add(...featurethreemodeClasses);
                        userlistCSS.classList.add(...featurethreemodeClasses);
                        webappCSS.classList.add(...featurethreemodeClasses);
                        videolistCSS.classList.add(...featurethreemodeClasses);
                        videomoderationCSS.classList.add(...featurethreemodeClasses);
                        chatlistCSS.classList.add(...featurethreemodeClasses);
                        chatlogCSS.classList.add(...featurethreemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...featurethreemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...featurethreemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...featurethreemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["FeatureThreeModeBlack"] && settingsQuick["FeatureThreeMode"]) nightmodeClasses = ["featurethreenight"];

                        bodyElem.classList.remove(...featurethreemodeClasses);
                        titleCSS.classList.remove(...featurethreemodeClasses);
                        sidemenuCSS.classList.remove(...featurethreemodeClasses);
                        userlistCSS.classList.remove(...featurethreemodeClasses);
                        webappCSS.classList.remove(...featurethreemodeClasses);
                        videolistCSS.classList.remove(...featurethreemodeClasses);
                        videomoderationCSS.classList.remove(...featurethreemodeClasses);
                        chatlistCSS.classList.remove(...featurethreemodeClasses);
                        chatlogCSS.classList.remove(...featurethreemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...featurethreemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...featurethreemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...featurethreemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error featurethreemodeToggle: " + e.message);
                }
            }

            function darkpurplemodeToggle(arg) {
                try {
                    var darkpurplemodeClasses = ["llama-darkpurplemode"];

                    if (settingsQuick["DarkPurpleModeBlack"]) darkpurplemodeClasses.push("darkpurplenight");

                    if (arg == true) {
                        bodyElem.classList.add(...darkpurplemodeClasses);
                        titleCSS.classList.add(...darkpurplemodeClasses);
                        sidemenuCSS.classList.add(...darkpurplemodeClasses);
                        userlistCSS.classList.add(...darkpurplemodeClasses);
                        webappCSS.classList.add(...darkpurplemodeClasses);
                        videolistCSS.classList.add(...darkpurplemodeClasses);
                        videomoderationCSS.classList.add(...darkpurplemodeClasses);
                        chatlistCSS.classList.add(...darkpurplemodeClasses);
                        chatlogCSS.classList.add(...darkpurplemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...darkpurplemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...darkpurplemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...darkpurplemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["DarkPurpleModeBlack"] && settingsQuick["DarkPurpleMode"]) nightmodeClasses = ["darkpurplenight"];

                        bodyElem.classList.remove(...darkpurplemodeClasses);
                        titleCSS.classList.remove(...darkpurplemodeClasses);
                        sidemenuCSS.classList.remove(...darkpurplemodeClasses);
                        userlistCSS.classList.remove(...darkpurplemodeClasses);
                        webappCSS.classList.remove(...darkpurplemodeClasses);
                        videolistCSS.classList.remove(...darkpurplemodeClasses);
                        videomoderationCSS.classList.remove(...darkpurplemodeClasses);
                        chatlistCSS.classList.remove(...darkpurplemodeClasses);
                        chatlogCSS.classList.remove(...darkpurplemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...darkpurplemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...darkpurplemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...darkpurplemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error darkpurplemodeToggle: " + e.message);
                }
            }

            function purplemodeToggle(arg) {
                try {
                    var purplemodeClasses = ["llama-purplemode"];

                    if (settingsQuick["PurpleModeBlack"]) purplemodeClasses.push("purplenight");

                    if (arg == true) {
                        bodyElem.classList.add(...purplemodeClasses);
                        titleCSS.classList.add(...purplemodeClasses);
                        sidemenuCSS.classList.add(...purplemodeClasses);
                        userlistCSS.classList.add(...purplemodeClasses);
                        webappCSS.classList.add(...purplemodeClasses);
                        videolistCSS.classList.add(...purplemodeClasses);
                        videomoderationCSS.classList.add(...purplemodeClasses);
                        chatlistCSS.classList.add(...purplemodeClasses);
                        chatlogCSS.classList.add(...purplemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.add(...purplemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.add(...purplemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.add(...purplemodeClasses);

                                if (camItemCSS.querySelector("#camItemCSS") == null) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);
                            }
                        }
                    }
                    if (arg == false) {
                        if (!settingsQuick["PurpleModeBlack"] && settingsQuick["PurpleMode"]) nightmodeClasses = ["purplenight"];

                        bodyElem.classList.remove(...purplemodeClasses);
                        titleCSS.classList.remove(...purplemodeClasses);
                        sidemenuCSS.classList.remove(...purplemodeClasses);
                        userlistCSS.classList.remove(...purplemodeClasses);
                        webappCSS.classList.remove(...purplemodeClasses);
                        videolistCSS.classList.remove(...purplemodeClasses);
                        videomoderationCSS.classList.remove(...purplemodeClasses);
                        chatlistCSS.classList.remove(...purplemodeClasses);
                        chatlogCSS.classList.remove(...purplemodeClasses);
                        chatlogElem.querySelector("#chat-wider").classList.remove(...purplemodeClasses);
                        // Messages:
                        if (chatlogElem.querySelector(messageQueryString) != null) {
                            var messageElems = chatlogElem.querySelectorAll(messageQueryString);
                            for (i = 0; i < messageElems.length; i++) {
                                var messageItem = messageElems[i].querySelector("tc-message-html").shadowRoot;
                                var messageItemCSS = messageItem.querySelector(".message");
                                messageItemCSS.classList.remove(...purplemodeClasses);
                            }
                        }
                        // Cams:
                        if (videolistElem.querySelector(camQueryString) != null) {
                            var camElems = videolistElem.querySelectorAll(camQueryString);
                            for (i = 0; i < camElems.length; i++) {
                                var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                                var camItemCSS = camItem.querySelector(".video");
                                camItemCSS.classList.remove(...purplemodeClasses);
                            }
                        }
                    }
                } catch (e) {
                    tcl("error purplemodeToggle: " + e.message);
                }
            }


            function showUpdateNotifier(text) {
                try {

                    var updateNotifier = titleElem.querySelector("#llama-updateNotifier");
                    updateNotifier.querySelector("span").innerHTML = text;
                    updateNotifier.classList.add("visible");
                    if (settingsVisible == true) toggleSettingsDisplay();

                } catch (e) {
                    tcl("error showUpdateNotifier: " + e.message);
                }
            }

            function toggleSettingsDisplay(arg) {
                try {
                    if (arg == "updateNotifier") {
                        titleElem.querySelector("#llama-updateNotifier").classList.remove("visible");
                        GM_setValue("llama-updateNotifSeen", "2018.155");
                    }

                    if (settingsVisible == true) {
                        titleElem.getElementById("llama-settingsBox").classList.add("hidden");
                        titleElem.getElementById("llama-settings").classList.remove("llama-open");
                        settingsVisible = false;
                    } else {
                        titleElem.getElementById("llama-settingsBox").classList.remove("hidden");
                        titleElem.getElementById("llama-settings").classList.add("llama-open");
                        settingsVisible = true;
                    }
                } catch (e) {
                    tcl("error toggleSettingsDisplay: " + e.message);
                }
            }

            function toggleThemesDisplay(arg) {

                if (settingsVisible == true) {
                    titleElem.getElementById("llama-themesBox").classList.add("hidden");
                    titleElem.getElementById("llama-themes").classList.remove("llama-open");
                    titleElem.getElementById("llama-themesButton").classList.remove("llama-themes-open");
                    settingsVisible = false;
                } else {
                    titleElem.getElementById("llama-themesBox").classList.remove("hidden");
                    titleElem.getElementById("llama-themes").classList.add("llama-open");
                    titleElem.getElementById("llama-themesButton").classList.add("llama-themes-open");
                    settingsVisible = true;
                }

            }

            function toggleGamesDisplay(arg) {

                if (settingsVisible == true) {
                    titleElem.getElementById("llama-gamesBox").classList.add("hidden");
                    titleElem.getElementById("llama-games").classList.remove("llama-open");
                    titleElem.getElementById("llama-gamesButton").classList.remove("llama-games-open");
                    settingsVisible = false;
                } else {
                    titleElem.getElementById("llama-gamesBox").classList.remove("hidden");
                    titleElem.getElementById("llama-games").classList.add("llama-open");
                    titleElem.getElementById("llama-gamesButton").classList.add("llama-games-open");
                    settingsVisible = true;
                }

            }

            function toggleEmojisDisplay(arg) {

                if (settingsVisible == true) {
                    titleElem.getElementById("llama-emojisBox").classList.add("hidden");
                    titleElem.getElementById("llama-emojis").classList.remove("llama-open");
                    titleElem.getElementById("llama-emojisButton").classList.remove("llama-emojis-open");
                    settingsVisible = false;
                } else {
                    titleElem.getElementById("llama-emojisBox").classList.remove("hidden");
                    titleElem.getElementById("llama-emojis").classList.add("llama-open");
                    titleElem.getElementById("llama-emojisButton").classList.add("llama-emojis-open");
                    settingsVisible = true;
                }

            }

            function toggleHidingDisplay(arg) {

                if (settingsVisible == true) {
                    titleElem.getElementById("llama-hidingBox").classList.add("hidden");
                    titleElem.getElementById("llama-hiding").classList.remove("llama-open");
                    titleElem.getElementById("llama-hidingButton").classList.remove("llama-hiding-open");
                    settingsVisible = false;
                } else {
                    titleElem.getElementById("llama-hidingBox").classList.remove("hidden");
                    titleElem.getElementById("llama-hiding").classList.add("llama-open");
                    titleElem.getElementById("llama-hidingButton").classList.add("llama-hiding-open");
                    settingsVisible = true;
                }

            }

            function settingsCheckboxUpdate(settingName = null, value = null) {
                try {
                    if (settingName == null && value == null) {
                        titleElem.getElementById("llama-settings-borderlesscams").querySelector("input").checked = settingsQuick["BorderlessCams"];
                        titleElem.getElementById("llama-settings-miniyt").querySelector("input").checked = settingsQuick["miniyt"];

                        titleElem.getElementById("llama-settings-autoscroll").querySelector("input").checked = settingsQuick["Autoscroll"];
                        titleElem.getElementById("llama-settings-mentions").querySelector("input").checked = settingsQuick["MentionsMonitor"];
                        titleElem.getElementById("llama-settings-notifications").querySelector("input").checked = settingsQuick["NotificationsOff"];
                        titleElem.getElementById("llama-settings-changefont").querySelector("input").checked = settingsQuick["ChangeFont"];
                        titleElem.getElementById("llama-settings-chatbelow").querySelector("input").checked = settingsQuick["ChatBelow"];
                        titleElem.getElementById("llama-settings-nightmode").querySelector("input").checked = settingsQuick["NightMode"];
                        titleElem.getElementById("llama-settings-maxcamposition").querySelector("input").checked = settingsQuick["MaxedCamLeft"];

                        titleElem.getElementById("llama-settings-defaultmode").querySelector("input").checked = settingsQuick["DefaultMode"];
                        titleElem.getElementById("llama-settings-pinkmode").querySelector("input").checked = settingsQuick["PinkMode"];
                        titleElem.getElementById("llama-settings-greenmode").querySelector("input").checked = settingsQuick["GreenMode"];
                        titleElem.getElementById("llama-settings-bluemode").querySelector("input").checked = settingsQuick["BlueMode"];
                        titleElem.getElementById("llama-settings-purplemode").querySelector("input").checked = settingsQuick["PurpleMode"];
                        titleElem.getElementById("llama-settings-darkpurplemode").querySelector("input").checked = settingsQuick["DarkPurpleMode"];
                        titleElem.getElementById("llama-settings-whitemode").querySelector("input").checked = settingsQuick["WhiteMode"];
                        titleElem.getElementById("llama-settings-orangemode").querySelector("input").checked = settingsQuick["OrangeMode"];
                        titleElem.getElementById("llama-settings-redmode").querySelector("input").checked = settingsQuick["RedMode"];
                        titleElem.getElementById("llama-settings-featureonemode").querySelector("input").checked = settingsQuick["FeatureOneMode"];
                        titleElem.getElementById("llama-settings-featuretwomode").querySelector("input").checked = settingsQuick["FeatureTwoMode"];
                        titleElem.getElementById("llama-settings-featurethreemode").querySelector("input").checked = settingsQuick["FeatureThreeMode"];

                        return;
                    }

                    if (settingName == "llama-settings-autoscroll") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-autoscroll").querySelector("input").checked;
                            settingsQuick["Autoscroll"] = newValue;
                            GM_setValue("llama-Autoscroll", newValue.toString());
                        }
                    }
                    if (settingName == "llama-settings-mentions") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-mentions").querySelector("input:first-of-type").checked;
                            // if (newValue) {
                            // titleElem.getElementById("llama-settings-mentions").getAttribute("class").includes("setting-disabled");
                            // }
                            settingsQuick["MentionsMonitor"] = newValue;
                            GM_setValue("llama-MentionsMonitor", newValue.toString());
                        }
                    }
                    if (settingName == "llama-settings-notifications") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-notifications").querySelector("input").checked;
                            settingsQuick["NotificationsOff"] = newValue;
                            GM_setValue("llama-NotificationsOff", newValue.toString());
                            notificationHider();
                        }
                    }
                    if (settingName == "llama-settings-changefont") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-changefont").querySelector("input").checked;
                            settingsQuick["ChangeFont"] = newValue;
                            GM_setValue("llama-ChangeFont", newValue.toString());
                            fontToggle(newValue);
                        }
                    }
                    if (settingName == "llama-settings-chatbelow") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-chatbelow").querySelector("input").checked;
                            settingsQuick["ChatBelow"] = newValue;
                            GM_setValue("llama-ChatBelow", newValue.toString());
                            chatBelowToggle(newValue);
                        }
                    }
                    if (settingName == "llama-settings-nightmode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-nightmode").querySelector("input").checked;
                            settingsQuick["NightMode"] = newValue;
                            GM_setValue("llama-NightMode", newValue.toString());
                            nightmodeToggle(newValue);
                        }
                    }
                    if (settingName == "llama-settings-nightmode-black") {
                        if (value == null) {
                            var newValue = titleElem.querySelector("#llama-settings-nightmode #black input").checked;
                            titleElem.querySelector("#llama-settings-nightmode #gray input").checked = (!newValue);
                            settingsQuick["NightModeBlack"] = newValue;
                            GM_setValue("llama-NightModeBlack", newValue.toString());
                            nightmodeToggle(newValue);
                            nightmodeToggle(true);

                            if (titleElem.querySelector("#llama-settings-nightmode #black input").checked || titleElem.querySelector("#llama-settings-nightmode #gray input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }

                    if (settingName == "llama-settings-maxcamposition") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-maxcamposition").querySelector("input").checked;
                            settingsQuick["MaxedCamLeft"] = newValue;
                            GM_setValue("llama-MaxedCamLeft", newValue.toString());
                            maxCamPositionToggle(newValue);
                        }
                    }
                    if (settingName == "llama-settings-miniyt") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-miniyt").querySelector("input").checked;
                            settingsQuick["miniyt"] = newValue;
                            GM_setValue("llama-miniyt", newValue.toString());
                            miniytToggle(newValue);
                        }
                    }

                    if (settingName == "llama-settings-borderlesscams") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-borderlesscams").querySelector("input").checked;
                            settingsQuick["BorderlessCams"] = newValue;
                            GM_setValue("llama-BorderlessCams", newValue.toString());
                            borderlessCamsToggle(newValue);
                        }
                    }

                    if (settingName == "llama-settings-pinkmode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-pinkmode").querySelector("input").checked

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["PinkMode"] = newValue;
                            GM_setValue("llama-PinkMode", newValue.toString());
                            pinkmodeToggle(newValue);
                            pinkmodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            featureonemodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            redmodeToggle(false);
                            purplemodeToggle(false);
                            whitemodeToggle(false);
                            darkpurplemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-pinkmode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-whitemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-whitemode").querySelector("input").checked

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["WhiteMode"] = newValue;
                            GM_setValue("llama-WhiteMode", newValue.toString());
                            whitemodeToggle(newValue);
                            whitemodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            featureonemodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            redmodeToggle(false);
                            purplemodeToggle(false);
                            pinkmodeToggle(false);
                            darkpurplemodeToggle(false);
                            featurethreemodeToggle(false);


                            if (titleElem.getElementById("llama-settings-whitemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-greenmode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-greenmode").querySelector("input").checked;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["GreenMode"] = newValue;
                            GM_setValue("llama-GreenMode", newValue.toString());
                            greenmodeToggle(newValue);
                            greenmodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            featureonemodeToggle(false);
                            pinkmodeToggle(false);
                            orangemodeToggle(false);
                            redmodeToggle(false);
                            bluemodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-greenmode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-bluemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-bluemode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["BlueMode"] = newValue;
                            GM_setValue("llama-BlueMode", newValue.toString());
                            bluemodeToggle(newValue);
                            bluemodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            featureonemodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            orangemodeToggle(false);
                            redmodeToggle(false);
                            pinkmodeToggle(false);
                            greenmodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-bluemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-orangemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-orangemode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["OrangeMode"] = newValue;
                            GM_setValue("llama-OrangeMode", newValue.toString());
                            orangemodeToggle(newValue);
                            orangemodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            featureonemodeToggle(false);
                            bluemodeToggle(false);
                            redmodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            pinkmodeToggle(false);
                            greenmodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-orangemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-redmode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-redmode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["RedMode"] = newValue;
                            GM_setValue("llama-RedMode", newValue.toString());
                            redmodeToggle(newValue);
                            redmodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            featureonemodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            pinkmodeToggle(false);
                            greenmodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-redmode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-darkpurplemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-darkpurplemode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = newValue;
                            GM_setValue("llama-DarkPurpleMode", newValue.toString());
                            darkpurplemodeToggle(newValue);
                            darkpurplemodeToggle(true);
                            toggleThemesDisplay(false);
                            featureonemodeToggle(false);
                            featuretwomodeToggle(false);
                            purplemodeToggle(false);
                            pinkmodeToggle(false);
                            redmodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-darkpurplemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-purplemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-purplemode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["PurpleMode"] = newValue;
                            GM_setValue("llama-PurpleMode", newValue.toString());
                            purplemodeToggle(newValue);
                            purplemodeToggle(true);
                            toggleThemesDisplay(false);
                            featureonemodeToggle(false);
                            featuretwomodeToggle(false);
                            darkpurplemodeToggle(false);
                            pinkmodeToggle(false);
                            redmodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-purplemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-featureonemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-featureonemode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["FeatureOneMode"] = newValue;
                            GM_setValue("llama-FeatureOneMode", newValue.toString());
                            featureonemodeToggle(newValue);
                            featureonemodeToggle(true);
                            toggleThemesDisplay(false);
                            featuretwomodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            pinkmodeToggle(false);
                            redmodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-featureonemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                    if (settingName == "llama-settings-featuretwomode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-featuretwomode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = newValue;
                            GM_setValue("llama-FeatureTwoMode", newValue.toString());
                            featuretwomodeToggle(newValue);
                            featuretwomodeToggle(true);
                            toggleThemesDisplay(false);
                            featureonemodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            pinkmodeToggle(false);
                            redmodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-featuretwomode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }

                    if (settingName == "llama-settings-featurethreemode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-featurethreemode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["DefaultMode"] = (false);
                            GM_setValue("llama-DefaultMode", (false).toString());
                            titleElem.querySelector("#llama-settings-defaultmode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = newValue;
                            GM_setValue("llama-FeatureThreeMode", newValue.toString());
                            featurethreemodeToggle(newValue);
                            featurethreemodeToggle(true);
                            toggleThemesDisplay(false);
                            featureonemodeToggle(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            pinkmodeToggle(false);
                            redmodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            whitemodeToggle(false);
                            featuretwomodeToggle(false);

                            if (titleElem.getElementById("llama-settings-featurethreemode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }

                    if (settingName == "llama-settings-defaultmode") {
                        if (value == null) {
                            var newValue = titleElem.getElementById("llama-settings-defaultmode").querySelector("input").checked;

                            settingsQuick["PinkMode"] = (false);
                            GM_setValue("llama-PinkMode", (false).toString());
                            titleElem.querySelector("#llama-settings-pinkmode input").checked = false;

                            settingsQuick["GreenMode"] = (false);
                            GM_setValue("llama-GreenMode", (false).toString());
                            titleElem.querySelector("#llama-settings-greenmode input").checked = false;

                            settingsQuick["PurpleMode"] = (false);
                            GM_setValue("llama-PurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-purplemode input").checked = false;

                            settingsQuick["DarkPurpleMode"] = (false);
                            GM_setValue("llama-DarkPurpleMode", (false).toString());
                            titleElem.querySelector("#llama-settings-darkpurplemode input").checked = false;

                            settingsQuick["OrangeMode"] = (false);
                            GM_setValue("llama-OrangeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-orangemode input").checked = false;

                            settingsQuick["RedMode"] = (false);
                            GM_setValue("llama-RedMode", (false).toString());
                            titleElem.querySelector("#llama-settings-redmode input").checked = false;

                            settingsQuick["FeatureThreeMode"] = (false);
                            GM_setValue("llama-FeatureThreeMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featurethreemode input").checked = false;

                            settingsQuick["FeatureOneMode"] = (false);
                            GM_setValue("llama-FeatureOneMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featureonemode input").checked = false;

                            settingsQuick["FeatureTwoMode"] = (false);
                            GM_setValue("llama-FeatureTwoMode", (false).toString());
                            titleElem.querySelector("#llama-settings-featuretwomode input").checked = false;

                            settingsQuick["WhiteMode"] = (false);
                            GM_setValue("llama-WhiteMode", (false).toString());
                            titleElem.querySelector("#llama-settings-whitemode input").checked = false;

                            settingsQuick["BlueMode"] = (false);
                            GM_setValue("llama-BlueMode", (false).toString());
                            titleElem.querySelector("#llama-settings-bluemode input").checked = false;

                            settingsQuick["DefaultMode"] = newValue;
                            GM_setValue("llama-DefaultMode", newValue.toString());
                            nightmodeToggle(newValue);
                            nightmodeToggle(true);
                            toggleThemesDisplay(false);
                            purplemodeToggle(false);
                            darkpurplemodeToggle(false);
                            featureonemodeToggle(false);
                            featuretwomodeToggle(false);
                            redmodeToggle(false);
                            pinkmodeToggle(false);
                            greenmodeToggle(false);
                            bluemodeToggle(false);
                            orangemodeToggle(false);
                            whitemodeToggle(false);
                            featurethreemodeToggle(false);

                            if (titleElem.getElementById("llama-settings-defaultmode").querySelector("input").checked) {
                                titleElem.querySelector("#llama-settings-nightmode > input").checked = true;
                                GM_setValue("llama-NightMode", true.toString());
                                settingsQuick["NightMode"] = true;
                            }
                        }
                    }
                } catch (e) {
                    tcl("error settingsCheckboxUpdate: " + e.message);
                }
            }

            function fontToggle(arg) {
                try {
                    arg ? bodyElem.classList.add("llama-changefont") : bodyElem.classList.remove("llama-changefont");
                } catch (e) {
                    tcl("error fontToggle: " + e.message);
                }
            }

            function borderlessCamsToggle(arg) {

                if (videolistElem.querySelector(camQueryString) != null) {
                    var camElems = videolistElem.querySelectorAll(camQueryString);
                    for (i = 0; i < camElems.length; i++) {
                        var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                        var camElem = camItem.querySelector(".video");
                        arg ? camElem.classList.add("llama-borderlesscams") : camElem.classList.remove("llama-borderlesscams");
                    }
                }
                arg ? videolistCSS.classList.add("llama-borderlesscams") : videolistCSS.classList.remove("llama-borderlesscams");
            }

            function maxCamPositionToggle(arg) {
                try {
                    arg ? videolistCSS.classList.add("llama-leftcam") : videolistCSS.classList.remove("llama-leftcam");
                } catch (e) {
                    tcl("error maxCamPositionToggle: " + e.message);
                }
            }

            function miniytToggle(arg) {
                try {
                    arg ? videolistCSS.classList.add("llama-miniyt") : videolistCSS.classList.remove("llama-miniyt");
                } catch (e) {
                    tcl("error miniytToggle: " + e.message);
                }
            }

            function chatBelowToggle(arg) {
                try {
                    arg ? chatlogOuter.classList.add("llama-chatbelow") : chatlogOuter.classList.remove("llama-chatbelow");
                    arg ? videosFooter.classList.add("llama-chatbelow") : chatlogOuter.classList.remove("llama-chatbelow");
                } catch (e) {
                    tcl("error chatBelowToggle: " + e.message);
                }
            }

            function notificationHider() {
                try {
                    chatlogContainer = chatlogElem.querySelector("#chat-content");
                    settingsQuick["NotificationsOff"] ? chatlogContainer.classList.add("llama-notif-off") : chatlogContainer.classList.remove("llama-notif-off");
                } catch (e) {
                    tcl("error notificationHider: " + e.message);
                }
            }

            function copyChatlog(opt = null) {
                try {
                    if (opt == "close") {
                        chatlogDisplayElem.classList.remove("show");
                        chatlogDisplayClose.classList.remove("show");
                        setTimeout(function() {
                            chatlogDisplayCont.classList.remove("show");
                        }, 300);
                        return;
                    }

                    var filename = "tinychat_" + roomName + "_" + joinDate + "_" + joinTime.replace(/:/g, ".") + "-chatlog.log";
                    var chatlogText = "Tinychat room " + roomName + " on " + joinDate + " " + joinTime + newline + "Users (" + usersCountInitial + "): " + userlistInitial + newline + chatlogMain;

                    var downloadLink = 'data:text/plain;charset=utf-8,' + encodeURIComponent(chatlogText);
                    var downloadElem = document.createElement('a');
                    downloadElem.setAttribute("href", downloadLink);

                    downloadElem.setAttribute("download", filename);

                    if (opt == "download") {
                        if (browserFirefox) showUpdateNotifier("Chat log downloading doesn't work in Firefox yet.");
                        else downloadElem.click();
                    }
                    if (opt == "view" || opt == null) {
                        if (typeof chatlogDisplayCont == "undefined") {
                            chatlogDisplayCont = chatlogElem.querySelector("#llama-chatlogDisplay");
                            chatlogDisplayElem = chatlogDisplayCont.querySelector("textarea");
                            chatlogDisplayClose = chatlogDisplayCont.querySelector("#close");
                        }
                        chatlogDisplayElem.value = chatlogText;
                        chatlogDisplayCont.classList.add("show");
                        setTimeout(function() {
                            chatlogDisplayElem.classList.add("show");
                            chatlogDisplayClose.classList.add("show");
                        }, 50);
                        chatlogDisplayElem.scrollTop = chatlogDisplayElem.scrollHeight;
                    }
                } catch (e) {
                    tcl("error copyChatlog: " + e.message);
                }
            }

            function getFormattedDateTime(d, opt = null) {
                try {
                    if (opt == "time") return d.toLocaleTimeString('en-US', {
                        hour12: false
                    });
                    else return d.toLocaleDateString('zh-CN', {
                        'year': 'numeric',
                        'month': '2-digit',
                        'day': '2-digit'
                    }).replace(/\//g, "-");
                } catch (e) {
                    tcl("error getFormattedDateTime: " + e.message);
                }
            }

            function mentionsManager(mode) {
                try {
                    var inputElem = titleElem.querySelector("#llama-settings #llama-settings-mentions input.text");
                    // phrases = inputElem.value.split(",");
                    var phrase = inputElem.value;
                    if (phrase.endsWith(",")) {
                        phrase = phrase.slice(0, -1);
                    }
                    if (phrase.startsWith(",")) {
                        phrase = phrase.slice(1);
                    }

                    if (mode == "save") {
                        GM_setValue("llama-Mentions", phrase);
                        settingMentions = phrase.split(",");
                        inputElem.value = phrase;
                    }
                    if (mode == "load") {
                        var loadedMentions = GM_getValue("llama-Mentions");
                        if (loadedMentions != undefined) {
                            inputElem.value = loadedMentions;
                            settingMentions = loadedMentions.split(",");
                        }
                    }
                    return;

                    var phrase = phrase.toString();
                    if (mode == "save") {
                        settingMentions.push(phrases);
                        GM_setValue("llama-Mentions", JSON.stringify(setting_Mentions));
                    }
                    if (mode == "load") {
                        var mentions = JSON.parse(GM_getValue("llama-Mentions"));
                        settingMentions = mentions;
                        inputElem.value = settingMentions.join();
                    }
                } catch (e) {
                    tcl("error mentionsManager: " + e.message);
                }
            }


            function declareGlobalVars() {

                try {
                    globalCSS = `:root {
		--textcolor: black;
		--bgcolor: white;

/*--------------------------------------------------DEFAULTTT--------------------------------------------------------*/
		--nightmode-bgcolor: #2d373a;
		--nightmode-trimcolor: #3c4a4e;
		--nightmode-textcolor: #9faaad;
		--nightmode-textSecondarycolor: #4e5f65;
		--nightmode-headerButtonscolor: #3986a7;

		--nightmodeBlack-bgcolor: black;
		--nightmodeBlack-trimcolor: #222;
/*--------------------------------------------------PINKKK1--------------------------------------------------------*/
		--pinkmode-bgcolor: #ffd1dc;
		--pinkmode-bordercolor: #ea98ab;
		--pinkmode-lightbgcolor: #ffe1e6;
		--pinkmode-textcolor: #aa8991;

/*--------------------------------------------------GREENNN1--------------------------------------------------------*/
		--greenmode-bgcolor: #042500;
		--greenmode-bordercolor: #217c16;
		--greenmode-lightbgcolor: #00500d;
		--greenmode-textcolor: #000000;

/*--------------------------------------------------BLUEEE1--------------------------------------------------------*/
		--bluemode-bgcolor: #111949;
		--bluemode-bordercolor: #596ce0;
		--bluemode-lightbgcolor: #2a388b;
		--bluemode-textcolor: #000000;

/*--------------------------------------------------PURPLEEE1--------------------------------------------------------*/
		--purplemode-bgcolor: #9168b2;
		--purplemode-bordercolor: #cac0d2;
		--purplemode-lightbgcolor: #BF8FE5;
		--purplemode-textcolor: #000000;

/*--------------------------------------------------ORANGEEE1--------------------------------------------------------*/
		--orangemode-bgcolor: #b33700;
		--orangemode-bordercolor: #ff8d10;
		--orangemode-lightbgcolor: #ff4f00;
		--orangemode-textcolor: #000000;

/*--------------------------------------------------REDDD1--------------------------------------------------------*/
		--redmode-bgcolor: #590000;
		--redmode-bordercolor: #d02323;
		--redmode-lightbgcolor: #860000;
		--redmode-textcolor: #000000;

/*--------------------------------------------------DARKPURPLEEE1--------------------------------------------------------*/
		--darkpurplemode-bgcolor: #280048;
		--darkpurplemode-bordercolor: #b14fff;
		--darkpurplemode-lightbgcolor: #550098;
		--darkpurplemode-textcolor: #000000;

/*--------------------------------------------------WHITEEE1--------------------------------------------------------*/
		--whitemode-bgcolor: #2d373a;
		--whitemode-bordercolor: #cbcfcf;
		--whitemode-lightbgcolor: #FFFFFF;
		--whitemode-textcolor: #000000;
		--whitemode-headerbg: #f5f5f5;
		--whitemode-darkbgcolor: #091316;
		--whitemode-tcblue: #04caff;

/*--------------------------------------------------FEATUREONEEE1--------------------------------------------------------*/
		--featureonemode-bgcolor: #000000;
		--featureonemode-bordercolor: #005900;
		--featureonemode-lightbgcolor: #000000;
		--featureonemode-textcolor: #000000;
		--featureonemode-headerbg: url(https://i.ibb.co/jDC8w3C/weed-wallpaper-1920x1080.jpg);
		--featureonemode-roombg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
		--featureonemode-userbg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
		--featureonemode-chatbg: url(https://i.ibb.co/5YKLsSK/wp2565886.jpg);
		--featureonemode-ptt: url(https://i.ibb.co/W2tyNNs/cannabis-PNG17.png);

/*--------------------------------------------------FEATURETWOOO1--------------------------------------------------------*/
		--featuretwomode-bgcolor: #282828;
		--featuretwomode-bordercolor: #3c3c3c;
		--featuretwomode-lightbgcolor: #282828;
		--featuretwomode-textcolor: #FFFFFF;
		--featuretwomode-headerbg: url(https://i.ibb.co/BK1CXz4/smashlogo.jpg);
		--featuretwomode-roombg: url(https://i.ibb.co/JxkgSdj/melee-minimal-wallpaper-by-browniehooves-d8lwcvk.png);
		--featuretwomode-userbg: url(https://i.ibb.co/nRNHL9C/20444930186-7a639da784-o.png);
		--featuretwomode-chatbg: url(https://i.ibb.co/ZSYHQs7/chat.jpg);
		--featuretwomode-ptt: url(https://i.ibb.co/7KSTsdj/smash-clipart-87526.png);

/*--------------------------------------------------FEATURETHREEE1--------------------------------------------------------*/
		--featurethreemode-bgcolor: #282828;
		--featurethreemode-bordercolor: #3c3c3c;
		--featurethreemode-lightbgcolor: #282828;
		--featurethreemode-textcolor: #FFFFFF;
		--featurethreemode-headerbg: url(https://i.ibb.co/XsTjVk0/splay-bg-header2.png);
		--featurethreemode-roombg: url(https://i.ibb.co/C18JNgK/splatbg.jpg);
		--featurethreemode-userbg: url(https://i.ibb.co/7nrB9LT/test.png);
		--featurethreemode-chatbg: url(https://i.ibb.co/TrKBZFn/splat-chat-bg3.png);
		--featurethreemode-ptt: url(https://i.ibb.co/3dHQVhC/splat-mic2.png);
		--featurethreemode-innerchatbg: url(https://i.ibb.co/vBXky7C/splat-chat-bg.png);
		--featurethreemode-messagebg: url(https://i.ibb.co/FWFnhc4/messagebg.png);
		--featurethreemode-squid: url(https://i.ibb.co/FKNpP6D/squid.png);
		--featurethreemode-squid2: url(https://i.ibb.co/KLGF7FH/squid2.png);
		--featurethreemode-squid3: url(https://i.ibb.co/Wc9D0Xj/squid3.png);

;

	}


	* {
	  scrollbar-color: #ccc transparent;
	  scrollbar-width: thin;
	}
	.llama-nightmode * { scrollbar-color: #242C2E transparent; }
	.llama-nightmode.blacknight * { scrollbar-color: #111 transparent; }
.icon-resize {
    left: 50%;
    margin-left: -11px;display:none;
}

.llama-featurethreemode #room-content {
background-color:transparent !important;
}

:host, #videolist {
    background-color: transparent;
}
@media screen and (max-width: 600px){

:host, #videolist {
height: 0px !important;
}}

.video.blacknight div.ratio-4-3 {
	border-radius: 10px;
}
/*--------------------------------------------------MINIYT--------------------------------------------------------*/
.llama-miniyt .videos-items:first-child:not(.hidden) {
    width: 100px !important;
    position: absolute;
    top: -20px;
    left: -24px;
    height: 75px !important;
    z-index: 1;
    opacity: 0.5;}

.llama-miniyt #icon-seek {display:none;}

@media only screen and (min-width: 1920px) {
.llama-miniyt #videos.row > .videos-items:last-child {
    width: 100%;}
}

	`;

                    camItemCSShtml = `
		<style id="camItemCSS">` + globalCSS + `

			.icon-llama-max {
				position: absolute;
				top: -40%;
				right: 0;
				z-index: 9;
				background: none;
				border: 0;
			}
			.icon-llama-max:hover { cursor: pointer; }
			.icon-llama-max path { fill: #04caff; }

			.video:hover .icon-llama-max {
				top: 40%;
				transition: top .2s ease .2s,
						right .2s ease .2s,
						left .2s ease .2s,
						opacity .2s;
				}
			.icon-llama-close {
				position: absolute;
				top: -40%;
				left:3%;
				z-index: 9;
				background: none;
				border: 0;
			}

			.icon-llama-close:hover { cursor: pointer; }
			.icon-llama-close path { fill: #ff0000; }

			.video:hover .icon-llama-close {
				top: 40%;
				transition: top .2s ease .2s,
						left .2s ease .2s,
						right .2s ease .2s,
						opacity .2s;
				}
		.video > div > .overlay {
				border-radius: 40px;
			}

			.video:after { border: 0px !important; border-color:#2a2c2c !important;}

			/* Disable cam border
			.video:after { border: none; border-color:#2a2c2c}
			.video > div { background-color: unset; }
			video,
			.video > div > .overlay {
				border-radius: 10px;
			}
			*/
			.video { transition: .4s; }
			.llama-borderlesscams.video { padding: 0; }
			.llama-leftcam.llama-close.llama-closedCam.video > div > .overlay {	border-radius: 100px;}
			.llama-borderlesscams.video:after { display: none; }

			.llama-nightmode.video:after { border-color: var(--nightmode-bgcolor); }
			.llama-nightmode.blacknight.video:after { border-color: var(--nightmodeBlack-bgcolor); }
.llama-pinkmode.blacknight.video:after,
.llama-greenmode.blacknight.video:after,
.llama-bluemode.blacknight.video:after,
.llama-purplemode.blacknight.video:after,
.llama-orangemode.blacknight.video:after,
.llama-redmode.blacknight.video:after,
.llama-darkpurplemode.blacknight.video:after,
.llama-whitemode.blacknight.video:after
{ border-color: transparent; }




			.llama-nightmode.blacknight.video > div > .waiting { background: #111; }
			.llama-nightmode.blacknight.video > div { background-color: #111; }
		</style>
	`;

                    camMaxCSShtml = `
	<style id="camMaxCSS">` + globalCSS + `
		.llama-max .js-video {
			width: 15%!important;
			z-index: 1;
		}
		.llama-leftcam .llama-max .js-video {
			float: right;
			order: 2;
		}
		.llama-leftcam .llama-max .llama-maxedCam {
			float: left;
			order: 1;
		}

		div[data-video-count="5"] .llama-max .js-video:not(.llama-maxedCam),
		div[data-video-count="6"] .llama-max .js-video:not(.llama-maxedCam),
		div[data-video-count="7"] .llama-max .js-video:not(.llama-maxedCam)
		{ width: 20%!important; }
		.llama-max.llama-camCount2 .js-video { width: 30%!important; }
		.llama-max.llama-camCount10-11 .js-video { width: 16%!important; }
		.llama-max.llama-camCount12 .js-video { width: 14%!important; }

		:not(.hidden) + .llama-max.llama-camCount12 .js-video,
		:not(.hidden) + .llama-max.llama-camCount10-11 .js-video,
		:not(.hidden) + .llama-max .js-video
		{ width: 30%!important; }
		:not(.hidden) + .llama-max.llama-camCount2 .js-video { width: 60%!important; }

		.llama-max .js-video.llama-maxedCam,
		:not(.hidden) + .llama-max .js-video.llama-maxedCam { width: 70%!important; }

		@media screen and (max-width: 1400px) {
			.llama-max .js-video { width: 20%!important; }

			.llama-max.llama-camCount2 .js-video { width: 40%!important; }
			.llama-max.llama-camCount10-11 .js-video { width: 18%!important; }
			.llama-max.llama-camCount12 .js-video { width: 15%!important; }

			.llama-max .js-video.llama-maxedCam,
			:not(.hidden) + .llama-max .js-video.llama-maxedCam { width: 60%!important; }
		}
	`;

                    camMaxButtonHtml = `
		<button class="icon-llama-max" id="maxbutton-camName">
			<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.37 12.95l3.335 3.336a1.003 1.003 0 1 1-1.42 1.42L12.95 14.37a8.028 8.028 0 1 1 1.42-1.42zm-6.342 1.1a6.02 6.02 0 1 0 0-12.042 6.02 6.02 0 0 0 0 12.042zM6.012 9.032a.996.996
				0 0 1-.994-1.004c0-.554.452-1.003.994-1.003h4.033c.55 0 .994.445.994 1.003 0 .555-.454 1.004-.995 1.004H6.012z" fill-rule="evenodd"></path>
				<path d="M0 .99C0 .445.444 0 1 0a1 1 0 0 1 1 .99v4.02C2 5.555 1.556 6 1 6a1 1 0 0 1-1-.99V.99z" transform="translate(7 5)" fill-rule="evenodd"></path>
			</svg>
		</button>
	`;
                    camCloseCSShtml = `
	<style id="camCloseCSS">` + globalCSS + `
		.llama-close .js-video {
			z-index: 1;
		}
		.llama-leftcam .llama-close .js-video {
			float: right;
			order: 2;
		}


/*---------CLOSED ITEM--------*/
.llama-leftcam .llama-close .llama-closedCam {
    width: 8% !important;
    z-index: 12;
    position: absolute;
    top: -130px;
    right: 100px;
    height: 5px !important;
    margin: 0;
    padding: 0;
    opacity: 0.5;
    float: left;
    order: 1;}




		div[data-video-count="5"] .llama-close .js-video:not(.llama-closedCam),
		div[data-video-count="6"] .llama-close .js-video:not(.llama-closedCam),
		div[data-video-count="7"] .llama-close .js-video:not(.llama-closedCam)
		{}
		.llama-close.llama-camCount2 .js-video {}
		.llama-close.llama-camCount10-11 .js-video {}
		.llama-close.llama-camCount12 .js-video {}

		:not(.hidden) + .llama-close.llama-camCount12 .js-video,
		:not(.hidden) + .llama-close.llama-camCount10-11 .js-video,
		:not(.hidden) + .llama-close .js-video
		{}
		:not(.hidden) + .llama-close.llama-camCount2 .js-video {}

/*---------CLOSED ITEM--------*/
		.llama-max .js-video.llama-closedCam,
		:not(.hidden) + .llama-close .js-video.llama-closedCam {}



		@media screen and (max-width: 1400px) {
			.llama-close .js-video {}

			.llama-close.llama-camCount2 .js-video {}
			.llama-close.llama-camCount10-11 .js-video {}
			.llama-close.llama-camCount12 .js-video {}


/*---------CLOSED ITEM--BIG SCREEN------*/
			.llama-close .js-video.llama-closedCam,
			:not(.hidden) + .llama-close .js-video.llama-closedCam {}
		}
	`;

                    camCloseButtonHtml = `
		<button class="icon-llama-close" id="closebutton-camName" style="">
			<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.63 12.024C1.474 10.5.52 8.65.52 8.65c-.657-.9-.68-2.417-.128-3.362C.392 5.288 2.452 0 10 0c1.94 0 3.52.35 4.79.867l.594-.592a.945.945 0 0 1 1.34.006.953.953
				0 0 1 .004 1.34L4.616 13.724a.945.945 0 0 1-1.34-.006.953.953 0 0 1-.004-1.34l.357-.356zm9.598-9.594c-.942-.28-2.013-.43-3.23-.43-2.797
				0-4.83.803-6.288 2.125-.496.45-.888.928-1.183 1.4-.163.26-.25.436-.27.49L2.2 6.16l-.08.137c-.17.29-.15.946.017 1.176l.09.123.07.136c.042.08.168.29.378.58A9.167
				9.167 0 0 0 4.058 9.82c.32.28.656.535 1.01.766l8.16-8.156zm-6.08 11.222l1.713-1.714c.368.04.747.062 1.14.062 2.423 0 4.374-.814 5.942-2.185a9.2 9.2
				0 0 0 1.386-1.51c.212-.293.338-.5.38-.583l.057-.108.07-.1c.19-.282.217-.94.07-1.17L17.8 6.18l-.072-.184a3.74 3.74 0 0 0-.268-.485 6.577 6.577
				0 0 0-.972-1.2l1.415-1.414c1.244 1.225 1.69 2.374 1.69 2.374.6.94.512 2.465-.107 3.37 0 0-2.774 5.36-9.487 5.36-1.046 0-1.995-.13-2.853-.348z" fill-rule="evenodd"></path>
			</svg>
		</button>
	`;
                } catch (e) {
                    tcl("error declareGlobalVars: " + e.message);
                }
            }

            function injectCSS(cssName = null) {
                try {
                    // Indenting is purposely wrong, for readability
                    var insertPosition = "beforeend";
                    headElem = document.querySelector("head");
                    browserSpoofedChrome = (headElem.innerHTML.includes("Shady DOM styles for") ? true : false);
                    if (browserSpoofedChrome) tcl("browserSpoofedChrome");
                    var firefoxCSS = "";

                    { // titleCSS
                        if (browserFirefox) var firefoxCSS = `
		#llama-settings-nightmode .nightmode-colors:after { display: none; }
		#llama-settings-nightmode .nightmode-colors {

		}
		#llama-settings-nightmode > span {
			position: relative;
			top: -4px;
		}
		#llama-settings-nightmode .label { margin-right: 3px; }
		#llama-settings-nightmode .sublabel {
			margin-left: unset;
			position: relative;
			top: -2px;
		}
		#llama-settings-nightmode .colorCont {
			position: relative;
			top: -2px;
		}
	`;

                        titleCSShtml = `
	<style id="titleCSS" scope="tinychat-title">` + globalCSS + `

#llama-ColorChoice {
    position:absolute;
    top:10px;
    background-color:#00ff00;}

.foo {
    float: left;
    width: 90px;
    height: 13px;
    margin-left: 25px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 0px;
    text-align: center;
    font-weight: bold;}

.foo2 {
    float: left;
    width: 25px;
    height: 15px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    text-align: center;
    font-weight: bold;
    border: 0PX SOLID #313131;}

.foo3 {
    float: left;
    width: 65px;
    height: 50px;
    /*  border: 1px solid rgba(0, 0, 0, .2); */
    border-radius: 3px;
    text-align: center;
    font-weight: bold;
    border: 1px solid #C1C1C1;
    margin-left: 5px;}

.pick {font-size: 11px;
    position: relative;
    top: 2px;
    left: 20px;
    float: left;
    color: #313131;}


.pink {background: #ffadc1;
    color: #952c46;}
.green {background: #00500d;
    color: #952c46;}
.blue {background: #2a388b;
    color: #952c46;}
.purple {background: #BF8FE5;
    color: #952c46;}
.darkpurple {background: #550098;
    color: #952c46;}
.orange {background: #ff4f00;
    color: #952c46;}
.red {background: #860000;
    color: #952c46;}
.white {background: #ffffff;
    color: #952c46;}
.featureone {
    color: #952c46;}
.featuretwo {
    color: #952c46;}
.featurethree {
    color: #952c46;}
.default {background: #191919;
}

.feature1 {
    width: 30px !important;
    height: 33px !important;
}

.feature1:hover {
background-color:#00ff00;
    width: 30px !important;
    height: 33px !important;
}
.featureone {
    background-image: url(https://i.ibb.co/0Dp3Knx/weed-logo2.png);
    background-size: 36px;
    position: relative;
    right: 8px;
    background-position: top left;
    background-repeat: no-repeat;
    color: #952c46;
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;}


.feature2 {
    width: 30px !important;
    height: 33px !important;
}

.feature2:hover {
background-color:#00ff00;
    width: 30px !important;
    height: 33px !important;
}
.featuretwo {
    background-image: url(https://i.ibb.co/7KSTsdj/smash-clipart-87526.png);
    background-size: 36px;
    position: relative;
    right: 8px;
    background-position: top left;
    background-repeat: no-repeat;
    color: #952c46;
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;}

.feature3 {
    width: 30px !important;
    height: 33px !important;
}

.feature3:hover {
background-color:#00ff00;
    width: 30px !important;
    height: 33px !important;
}
.featurethree {
    background-image: var(--featurethreemode-ptt);
    background-size: 36px;
    position: relative;
    right: 8px;
    background-position: top left;
    background-repeat: no-repeat;
    color: #952c46;
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;}


@keyframes ease-to-left {
    0% {right: -50px; opacity: 0;}
    100% {right: 0; opacity: 1;}}

@keyframes ease-to-right {
    0% {right:auto;}
    100% {right:0;}}

@keyframes ease-to-bottom-21px {
    0% {top:-300px; opacity: 0;}
    100% {top:0; opacity: 1;}}
    width: 446px;

#content {
    padding: 0px;
    background-color:#111111;}

#room-header-gifts-buttons > #get-coins {
    background-color: #111111;
    border-color: #313131;
    color: #313131;}

#room-header-gifts-buttons > #get-coins:hover {
    background-color: #313131;
    border-color: #111111;
    color: #111111;}

#room-header-gifts-buttons > a {
    background-color: #111111;
    border-color: #313131;
    color: #313131;}

#room-header-gifts-buttons > a:hover {
    background-color: #313131;
    border-color: #111111;
    color: #111111;}

#llama-header-grabber {
    position: absolute;
    top: 88px;
    right: 50%;
    background: white;
    width: 60px;
    height: 20px;
    border-color: #313131;
    border-top: 1px solid #313131;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    border-radius: 19px;
    text-align: center;
    color: #b4c1c5;
    cursor: pointer;
    transition: all .4s ease-in-out;
    background-color:#111111;
    z-index:9;}

#llama-fullscreen-grabber {
    position: absolute;
    top: 50px;
    right: 18%;#room-header *
    background: white;
    width: 20px;
    height: 20px;
    border: #313131 1px solid;
    border-radius: 19px;
    text-align: center;
    color: #b4c1c5;
    cursor: pointer;
    transition: all .4s ease-in-out;
    background-color:#111111;}

#llama-header-grabber:before{    content: '';
    position: absolute;
    display: block;
    height: 0;
    width: 0;
    top: 50%;
    left: 50%;
    margin: -7px 0 0 -2px;
    border-width: 4px 4px 4px 0;
    border-style: solid;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid transparent;
    transition: .8s;}

.llama-headerCollapsed #llama-header-grabber:before {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    top: 12px;}

.llama-headerCollapsed #llama-header-grabber {
    top: 0px;
    background: #111111;
    border-top: 0;
    z-index: 9;
    border-radius: 11px;
    line-height: 15px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 15px;}

.llama-headerCollapsed:hover #llama-header-grabber {
    height: 29px;
    line-height: 43px;}

.llama-nightmode #llama-settings > div#llama-updateNotifier {
    border-color: #5d7883;}

.llama-nightmode #llama-settings > div#llama-updateNotifier {
    background-color: transparent;
    border-color: #145876;
    color:#191919;
    top: -100px;}

-------

#llama-settings > div#llama-updateNotifier {
    top: -200px;
    margin-right: -33px;
    float: left;
    border: #53b6ef 1px solid;
    border-radius: 8px 0 0px 8px;
    padding: 5px;
    padding-right: 32px;
    height: auto;
    transition: visibility 0s, opacity 0.5s linear;
    background: white;}

#llama-settings.llama-open > div#llama-updateNotifier {
    visibility: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;}

#llama-settings > div#llama-updateNotifier:hover {
    cursor: pointer;}

.llama-exitButtonSmall {
    float: left;
    padding-right: 37px;
    /* margin: 0px; */
    color: #191919;
    padding-left: 5px;
    padding-top: 9px;
    padding-bottom: 7px;
    background-color: cyan;
    border-radius: 50px;
    height: 20px;
    margin-right: 7px;
    position: relative;
    top: -36px;
    right: -82px;
    font-size: 12pt;
    font-weight: bold;}

#llama-settings > div#llama-updateNotifier.visible {
    top: 38px;
    color: #ffffff !important;
    text-transform: uppercase;
    background-color: transparent;
    border-color:cyan;
    padding: 5px;
    padding-top: 10px;
    padding-right: 40px;
    padding-bottom: 10px;
    border-radius: 20px;}

.llama-exitButtonSmall:hover {
    color: #7ccefe;
    background-color: #2b2b2b;
    border-radius: 50px;
    border:1px solid cyan;
    height: 20px;
    padding-bottom: 5px;}


------

input {
    border: 1px solid #c4d4dc;
    line-height: 16px;
    padding-left: 3px;}

.label ~ input {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;}

input ~ button {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;}

input[type="button"], button {
    display: inline;
    padding: 0 15px;
    border: 0;
    box-sizing: border-box;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    transition: .2s;
    outline: none;}

.blue-button {
    color: #fff;
    background-color: #333333;}

.blue-button:hover {
    background-color: #54ccf3;}

.blue-button:active {
    background-color: #38a8dd;}

.llama-setting-container {
    line-height: initial;}

#llama-settings > div {
    animation: ease-to-bottom-21px .2s ease 0s 1;
    position: relative;
    top: 0px;
}

#llama-settings > div > span {
    position: relative;
    top: -23px;
    background-color: #111111;
    border: 1px solid #313131;
    border-radius: 100px;
    padding-left: 5px;
    padding-right: 5px;}


@media screen and (max-width: 1000px) {
#llama-settings > div {
    height: 92px;}
}

#llama-settings .hidden {
    display: none;}

#llama-themes .hidden {
    display: none;}

#llama-games .hidden {
    display: none;}

#llama-emojis .hidden {
    display: none;}

#llama-hiding .hidden {
    display: none;}

#llama-settings #title {
    font-weight: bold;
    color:#ffffff;
    text-transform:uppercase;}

.llama-whitemode #llama-settings #title {
    font-weight: bold;
    color:#000000;
    text-transform:uppercase;}


#llama-settings {
    width: 390px;
    transition: all .4s ease-in-out;
    animation: ease-to-bottom-21px .2s ease 0s 1;
    /*max-height: 10%;*/
    font-size: 11px;
    flex: none;
    overflow: hidden;
    z-index: 5;
    position: absolute;
    top: 0px;
		/*	right: ` + (giftsElemWidth + 10).toString() + `px; */}



#llama-themes.llama-sidemenuCollapsed {position:absolute;left:0px !important;}
#llama-themes {
    width: 25px;
	/*		transition: all .4s ease-in-out;*/
    /*		animation: ease-to-bottom-21px .2s ease 0s 1;*/
    /*max-height: 10%;*/
    font-size: 11px;
    flex: none;
    z-index: 9;
    position: absolute;
    top: 5px;
    left:161px;}


#llama-themesGear > div {
    background-color: #111111;
    border:1px solid #313131;
    height: 25px;
    border-bottom-right-radius:20px;
    border-top-right-radius:20px;
    border-left:0px;
    text-align: center;
    font-weight: bold;
    color: #C1C1C1;
    line-height: 20px;
    font-size: 13px;}

    /*

#llama-themesGear > div:hover{
    background-color: #04caff;
    height: 25px;
    border-bottom-right-radius:20px;
    border-top-right-radius:20px;
    cursor:pointer;
    text-align: center;
    color:#fff;}*/

#llama-themesButton > span > img:hover{
    -webkit-animation-name: rotate;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: rotate;
    -moz-animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@-webkit-keyframes rotate {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}

@-moz-keyframes rotate {
    from {-moz-transform: rotate(0deg);}
    to {-moz-transform: rotate(360deg);}
}

@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}


#llama-hiding {
    width: 53px;
    font-size: 11px;
    flex: none;
    z-index: 9;
    position: absolute;
    top: 199px;
    right: 0px;}

#llama-hidingGear > div {
    background-color: #111111;
    background-image: url(https://i.ibb.co/FXrx1X9/Video-Game-Controller-Icon-IDV-edit-green-svg.png);
    background-position: top center;
    background-position-y: -6px;
    background-size: 27px;
    background-repeat: no-repeat;
    border: 1px solid #313131;
    height: 24px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    /* border-left: 0px; */
    text-align: center;
    font-weight: bold;
    color: #C1C1C1;
    line-height: 20px;
    font-size: 13px;;}

#llama-hidingGear > div:hover {
    background-color: #04caff;
    height: 20px;
    cursor:pointer;
    text-align: center;
    color:#fff;}

#llama-games {display:none;
    width: 33px;
    font-size: 11px;
    flex: none;
    z-index: 9;
    position: absolute;
    top: 99px;
    right: 0px;}

#llama-emojis {
    width: 33px;
    font-size: 11px;
    flex: none;
    z-index: 9;
    position: absolute;
    bottom: 35px;
    right: 335px;}

.llama-headerCollapsed #llama-games {
    top:-1px;
right:36px;
z-index:10;
}


#llama-gamesGear > div {
    background-color: #111111;
    background-image: url(https://i.ibb.co/FXrx1X9/Video-Game-Controller-Icon-IDV-edit-green-svg.png);
    background-position: top center;
    background-position-y: -6px;
    background-size: 27px;
    background-repeat: no-repeat;
    border: 1px solid #313131;
    height: 24px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    /* border-left: 0px; */
    text-align: center;
    font-weight: bold;
    color: #C1C1C1;
    line-height: 20px;
    font-size: 13px;;}

#llama-gamesGear > div:hover {
    background-color: #04caff;
    height: 20px;
    cursor:pointer;
    text-align: center;
    color:#fff;}


#llama-emojisGear > div {
background-color: #111111;
    background-image: url(https://cdn.glitch.com/e82ef8ae-b7d2-4511-8d06-23bc75bc02eb%2FEmoji-BG.jpg?v=1561428846260);
    background-position: left center;
    background-position-x: -18px;
    background-position-y: -6px;
    background-size: 266px;
    background-repeat: no-repeat;
    border: 1px solid #313131;
    height: 20px;
    width: 20px;
    border-radius: 53px;
    /* border-left: 0px; */
    text-align: center;
    font-weight: bold;
    color: #C1C1C1;
    line-height: 20px;
    font-size: 13px;}

#llama-emojisGear > div:hover {
    background-color: #04caff;
    height: 20px;
    cursor:pointer;
    text-align: center;
    color:#fff;}


#llama-colors {
    width: 70px;
    height: 300px;
    transition: all .4s ease-in-out;
    animation: ease-to-bottom-21px .2s ease 0s 1;
    /*max-height: 10%;*/
    font-size: 11px;
    flex: none;
    overflow: hidden;
    z-index: 8;
    position: absolute;
    top: 26px;
    left:1px;

    /*background-color: #111111;*/
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    /*border: 1px solid #313131;*/

       /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
}

#llama-gameslist {
    width: 350px;
    height: 620px;
    transition: all .4s ease-in-out;
    animation: ease-to-bottom-21px .2s ease 0s 1;
    /* max-height: 10%; */
    font-size: 11px;
    flex: none;
    overflow: hidden;
    z-index: 8;
    position: absolute;
    top: 24px;
    right: 5px;resize:vertical;
    background-color: #191919;
    border: 2px solid #c1c1c17d;
    border-radius: 10px;
    background-position: center center;
    background-image: url(https://anceldesigns.000webhostapp.com/img/arcade2.jpg);}
.footer_wrapper {background-color:#fff;}
#llama-gameslist > iframe {
    height:600px;
    width:350px;}

@media screen and (max-width: 1000px) {
#llama-settings {
    right: 37px!important;
    top: -20px;}

#llama-settings.llama-open {
    top: 6px;}

#llama-settingsGear {
    font-size: 52px!important;}

#room-header-gifts-items {
    padding: 0 11px;
    border-radius: 12px;
    background-color: #2a2a2a;
    font-size: 0;
    text-align: center;
    white-space: nowrap;}
}

@media screen and (max-width: 600px) {
#llama-settings {
    right: -4px!important;
    top: 19px;}
}

#llama-settings:hover {
    overflow: visible;}

#llama-settings-mentions .inputcontainer {
    float: right;
    position: relative;
    top: -3px;}

#llama-settingsGear {
    font-size: 40px;
    color: #53b6ef;
    float: right;}

#llama-settingsGear:hover {
    cursor: pointer;
    color: #7ccefe;}

.llama-open #llama-settingsGear {
    background: none;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    border: #53b6ef 0px solid;
    border-left: 0;
    top: -30px;
}

.llama-open #llama-settingsGear span img{
    fill: red;}
    /*transition: all .2s linear;*/}

#llama-settingsGear span {
    display: block;
    transition: transform 0.4s ease-in-out;}

#llama-settingsBox.hidden {
    animation: ease-to-right .2s ease 0s 1;
    display: visible;
    /*position: relative; right: -1000px;*/}

		/*** Inline with header ***/

#llama-settingsBox {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;}

#llama-settingsBox {
    background: #191919;
    padding: 0px 10px 0px 10px;
    float: left;
    border: #313131 1px solid;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    animation: ease-to-left .2s ease 0s 1;
    right: 0;}

#llama-settingsGear {
    display: table;}

#llama-settingsGear span {
    display: table-cell;
    vertical-align: middle;}
------

		/*** ******RIGHT SIDE*******   ***/

#llama-settings .right {
    position: absolute;
    left: 189px;}

#llama-settings .right .label {
    margin-left: 22px;}

#llama-settings .right .head {
    position: relative;
    top: -10px;
    left: -6px;
    width: 110%;
    color: #000;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;}

#llama-settings-maxcamposition { top: 54px; }
#llama-settings-borderlesscams { top: 67px; }
#llama-settings-miniyt {
    top: 100px;
    left: 162px;
    z-index: 2;
    background-color: #000000;
    width: 25px;height:25px;
    color: #fff;
    border-bottom-right-radius: 10px;}
#llama-settings-miniyt > span > img {position: relative;
    top: 9px;
    left: -6px;}
.llama-headerCollapsed #llama-settings-miniyt {
    top:-1px;
    right:36px;
    left: 210px;border-bottom-left-radius:10px}
.llama-sidemenuCollapsed #llama-settings-miniyt {
    top:-1px;
    right:36px;
    left: 0px;}

.llama-sidemenuCollapsed.llama-headerCollapsed #llama-settings-miniyt {
    left: 33px;}


		/***------------------------------------FEATURETWOOO------------------------------------***/
#llama-settings-pinkmode {
    top: 4px !important;
    position: relative;}

		/***------------------------------------GREEBNNN------------------------------------***/
#llama-settings-greenmode {
position:absolute;
    top: 22px !important;}

		/***------------------------------------BLUEEE------------------------------------***/
#llama-settings-bluemode {
position:absolute;
    top: 39px !important;}

		/***------------------------------------PURPLEEE------------------------------------***/
#llama-settings-purplemode {
position:absolute;
    top: 56px !important;}

		/***------------------------------------ORANGEEE------------------------------------***/
#llama-settings-orangemode {
position:absolute;
    top: 73px !important;}

		/***------------------------------------REDDD------------------------------------***/
#llama-settings-redmode {
position:absolute;
    top: 90px !important;}

		/***------------------------------------DARKPURPLEEE------------------------------------***/
#llama-settings-darkpurplemode {
position:absolute;
    top: 107px !important;}

		/***------------------------------------DEFAULTTTT------------------------------------***/
#llama-settings-defaultmode {
position:absolute;
    top: 123px !important;}

		/***------------------------------------WHITEEE------------------------------------***/
#llama-settings-whitemode {
position:absolute;
    top: 140px !important;}

		/***------------------------------------FEATUREONEEE------------------------------------***/
#llama-settings-featureonemode {
position:absolute;
    top: 157px !important;}

		/***------------------------------------FEATURETWOOO------------------------------------***/
#llama-settings-featuretwomode {
position:absolute;
    top: 194px !important;}
		/***------------------------------------FEATURETHREEE------------------------------------***/
#llama-settings-featurethreemode {
position:absolute;
    top: 231px !important;}

.llama-featurethreemode #llama-themes {background-color:transparent}



#llama-settings-featuredmode {
    position:absolute;
    left: 0px !important;
    top:30px !important;
    background-color: #04caff;
    width: 100%;
    text-align: center;
    font-weight:bold;}

/* The container */
.llama-color-container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;}

/* Hide the browser's default checkbox */
#llama-settings-defaultmode > label > input[type="checkbox"],
#llama-settings-pinkmode > label > input[type="checkbox"],
#llama-settings-greenmode > label > input[type="checkbox"],
#llama-settings-bluemode > label > input[type="checkbox"],
#llama-settings-orangemode > label > input[type="checkbox"],
#llama-settings-redmode > label > input[type="checkbox"],
#llama-settings-featureonemode > label > input[type="checkbox"],
#llama-settings-featuretwomode > label > input[type="checkbox"],
#llama-settings-darkpurplemode > label > input[type="checkbox"],
#llama-settings-purplemode > label > input[type="checkbox"],
#llama-settings-whitemode > label > input[type="checkbox"],
#llama-settings-featurethreemode > label > input[type="checkbox"]   {
    position: absolute;
    opacity: 0;
    cursor: pointer;}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 15px;
    background-color: transparent;
    border-radius:3px;}
.checkmark .feature1:hover {background-color:#00ff00;}


/* On mouse-over, add a grey background color */
.llama-color-container:hover input ~ .checkmark {
    background-color:  transparent;
    border:1px solid #FFFFFF;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-left:0px;
    width:25px;
}
.feature .llama-color-container:hover input ~ .checkmark {
    background-color:  transparent;
    border:1px solid #00ff00;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-left:0px;
    width:20px;
}

/* When the checkbox is checked, add a blue background */
.llama-color-container input:checked ~ .checkmark {
    background-color: transparent;
    border: 0px solid #FFFFFF;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-left: 0px;
    width:25px;}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;}

/* Show the checkmark when checked */
.llama-color-container input:checked ~ .checkmark:after {
    display: block;}

/* Style the checkmark/indicator */
#llama-settings-defaultmode > label > span.checkmark:after,
#llama-settings-purplemode > label > span.checkmark:after,
#llama-settings-darkpurplemode > label > span.checkmark:after,
#llama-settings-bluemode > label > span.checkmark:after,
#llama-settings-greenmode > label > span.checkmark:after,
#llama-settings-orangemode > label > span.checkmark:after,
#llama-settings-redmode > label > span.checkmark:after,
#llama-settings-featuretwomode > label > span.checkmark:after,
#llama-settings-pinkmode > label > span.checkmark:after,
#llama-settings-whitemode > label > span.checkmark:after,
#llama-settings-featurethreemode > label > span.checkmark:after {
    left: 8px;
    top: 1px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);}

#llama-settings-featureonemode > label > span.checkmark:after {
left: 44px;
    top: -5px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);}

label {
    border:0px solid #ccc;
    padding:0px;
    display:block;}

label:hover {
    background:#53b6ef;
    border-radius:5px;
    cursor:pointer;}

#modes {
    padding: 5px;
    background-color: #111111;
    border: #ffffff 1px solid;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(255,255,255,0.27), 0 6px 20px 0 rgba(255,255,255,0.27);}

.llama-pinkmode #modes {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}

.llama-greenmode #modes {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}

.llama-bluemode #modes {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}

#llama-settings .llama-setting-container input[type=checkbox] {
    margin: 0;
    margin-right: 1px;
    float: left;
    position: absolute;
    left: 8px;}

#llama-settings .label{
    margin-right: 4px;
    margin-left: 12px;
    color:#ffffff;
    position: relative;
    top: -2px;}

.llama-whitemode #llama-settings .label{
color:#000000;
}

#llama-settings .info{
    margin-left: 3px;
    color: #0d94e3;
    font-weight: bold;
    font-family: Arial;
    border: #0d94e3 1px solid;
    border-radius: 16px;
    height: 1em;
    width: 1em;
    text-align: center;
    display: inline-block;}

#llama-settings .info:hover:after{
    font-weight: normal;
    padding: 4px 7px 4px 7px;
    border-radius: 7px;
    color: white;
    background: #61787f;
    content: attr(data-title);
    display: inline-block;
    position: absolute;
    top: 52px;
    left: 0;
    z-index: 9;}

/*#llama-settings .label:hover:before{
    border: solid;
    border-color: #61787f transparent;
    border-width: 0px 6px 6px 6px;
    top: 10px;
    content: "";
    left: 8%;
    position: relative;
    display: inline-block;}*/

#llama-settings a:visited, #llama-settings a:link {
    text-decoration: none;
    color: inherit;}

#llama-settings a:hover {
    color: #53b6ef;}



#room-header {
z-index:9;
    height: 100px;
    max-height: unset;
    min-height: unset;
    transition: all .4s ease-in-out;
    background-color:#191919;
    border-bottom: 1px solid #313131;}

#room-header-gifts-items {
    padding: 0 11px;
    border-radius: 12px;
    background-color: transparent;
    font-size: 0;
    text-align: center;
    white-space: nowrap;}

#room-header-gifts-items > a > img {
    height: 75%;
    width: 75%;
    border-radius: 50px;
    border: 4px solid #313131;}

#room-header.llama-headerCollapsed {
    height: 0px;
    margin-top: -10px;}

.llama-featurethreemode #room-header.llama-headerCollapsed {
    height: 0px;
    margin-top: -10px;}


#room-header.llama-headerCollapsed:hover {
    /*	height: 25px;*/}

@media screen and (max-width: 600px) {

#room-header {
    min-height: 0px !important;
    max-height: 0px !important;    height: 0px !important;
}
}

#room-header-info {
    padding: 0;
    color: #ffffff;}

#room-header-info > h1 {
    color: #ffffff;
    text-transform: uppercase;}

#room-header-info > h1:after {
    visibility: hidden;
    hidden: none;}

#room-header-info-text:after{
    visibility: hidden;
    hidden: none;}

#room-header-info-text {
    height: auto;}

@media screen and (max-width: 600px) {
#room-header-info-text {
    height: inherit;}
}

#room-header-avatar {
    margin: 2px 10px 0 35px;
    height: 90px;
    min-width: 90px;
    max-width: 90px;
    transition: all .5s linear;}

.llama-headerCollapsed:hover #room-header-avatar:hover {
    z-index: 9;}

#room-header-gifts {
    padding: 10px 10px;}

#room-header-avatar:hover {
    border-radius: unset;}

.llama-headerCollapsed #llama-settingsGear {
    font-size: 33px;}

.llama-headerCollapsed #llama-settings > div {
    height: fit-content;}

#room-header-avatar > img {left:-22px;}

.llama-headerCollapsed #llama-settingsBox {
    border-width: 1px;
    border-radius: 7px;
    border-top-right-radius: 0;
    padding-bottom: 7px;}

.llama-headerCollapsed #llama-settings {
    top: 0px;
    right: 0;}


																													/*** ---COLORSSSSSSS--- ***/



		/***------------------------------------PINKKK THEMEBOX + HEADER------------------------------------***/

.llama-pinkmode #llama-settings > div > span {
background-color: var(--pinkmode-bgcolor);
border-color: var(--pinkmode-bordercolor);}

#room-header.llama-pinkmode
{   background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);}

.llama-pinkmode #llama-settingsBox,
.llama-pinkmode #llama-header-grabber
{   background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);}

.llama-pinkmode #room-header-info,
.llama-pinkmode #room-header-info > h1
{   color:  var(--pinkmode-bordercolor);}

.llama-pinkmode #room-header-gifts-buttons > a,
.llama-pinkmode #room-header-gifts-buttons > #get-coins
{   background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bgcolor);
    color: var(--pinkmode-textcolor);}

.llama-pinkmode #room-header-gifts-buttons > a:hover,
.llama-pinkmode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);
    color: var(--pinkmode-textcolor);}

.llama-pinkmode #room-header-gifts-items > a > img
{   border-color: var(--pinkmode-bgcolor);}

.llama-pinkmode #llama-header-grabber:before
{   border-color: transparent transparent var(--pinkmode-bordercolor) transparent;}

		/***------------------------------------GREENNN THEMEBOX + HEADER------------------------------------***/

.llama-greenmode #llama-settings > div > span {
background-color: var(--greenmode-bgcolor);
border-color: var(--greenmode-bordercolor);}

#room-header.llama-greenmode
{   background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

.llama-greenmode #llama-settingsBox,
.llama-greenmode #llama-header-grabber
{   background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);}

.llama-greenmode #room-header-info,
.llama-greenmode #room-header-info > h1
{   color:  var(--greenmode-bordercolor);}

.llama-greenmode #room-header-gifts-buttons > a,
.llama-greenmode #room-header-gifts-buttons > #get-coins
{   background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bgcolor);
    color: var(--greenmode-bordercolor);}

.llama-greenmode #room-header-gifts-buttons > a:hover,
.llama-greenmode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);
    color: var(--greenmode-bordercolor);}

.llama-greenmode #room-header-gifts-items > a > img
{   border-color: var(--greenmode-bgcolor);}

.llama-greenmode #llama-header-grabber:before
{   border-color: transparent transparent var(--greenmode-bordercolor) transparent;}

		/***------------------------------------BLUEEE THEMEBOX + HEADER------------------------------------***/

.llama-bluemode #llama-settings > div > span {
background-color: var(--bluemode-bgcolor);
border-color: var(--bluemode-bordercolor);}

#room-header.llama-bluemode
{   background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);}

.llama-bluemode #llama-settingsBox,
.llama-bluemode #llama-header-grabber
{   background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);}

.llama-bluemode #room-header-info,
.llama-bluemode #room-header-info > h1
{   color:  var(--bluemode-bordercolor);}

.llama-bluemode #room-header-gifts-buttons > a,
.llama-bluemode #room-header-gifts-buttons > #get-coins
{   background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bgcolor);
    color: var(--bluemode-bordercolor);}

.llama-bluemode #room-header-gifts-buttons > a:hover,
.llama-bluemode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);
    color: var(--bluemode-bordercolor);}

.llama-bluemode #room-header-gifts-items > a > img
{   border-color: var(--bluemode-bgcolor);}

.llama-bluemode #llama-header-grabber:before
{   border-color: transparent transparent var(--bluemode-bordercolor) transparent;}

		/***------------------------------------PURPLEEE THEMEBOX + HEADER------------------------------------***/

.llama-purplemode #llama-settings > div > span {
background-color: var(--purplemode-bgcolor);
border-color: var(--purplemode-bordercolor);}

#room-header.llama-purplemode
{   background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);}

.llama-purplemode #llama-settingsBox,
.llama-purplemode #llama-header-grabber
{   background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);}

.llama-purplemode #room-header-info,
.llama-purplemode #room-header-info > h1
{   color:  var(--purplemode-bordercolor);}

.llama-purplemode #room-header-gifts-buttons > a,
.llama-purplemode #room-header-gifts-buttons > #get-coins
{   background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bgcolor);
    color: var(--purplemode-bordercolor);}

.llama-purplemode #room-header-gifts-buttons > a:hover,
.llama-purplemode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);
    color: var(--purplemode-bordercolor);}

.llama-purplemode #room-header-gifts-items > a > img
{   border-color: var(--purplemode-bgcolor);}

.llama-purplemode #llama-header-grabber:before
{   border-color: transparent transparent var(--purplemode-bordercolor) transparent;}

		/***------------------------------------ORANGEEE THEMEBOX + HEADER------------------------------------***/

.llama-orangemode #llama-settings > div > span {
background-color: var(--orangemode-bgcolor);
border-color: var(--orangemode-bordercolor);}

#room-header.llama-orangemode
{   background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);}

.llama-orangemode #llama-settingsBox,
.llama-orangemode #llama-header-grabber
{   background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);}

.llama-orangemode #room-header-info,
.llama-orangemode #room-header-info > h1
{   color:  var(--orangemode-bordercolor);}

.llama-orangemode #room-header-gifts-buttons > a,
.llama-orangemode #room-header-gifts-buttons > #get-coins
{   background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bgcolor);
    color: var(--orangemode-bordercolor);}

.llama-orangemode #room-header-gifts-buttons > a:hover,
.llama-orangemode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);
    color: var(--orangemode-bordercolor);}

.llama-orangemode #room-header-gifts-items > a > img
{   border-color: var(--orangemode-bgcolor);}

.llama-orangemode #llama-header-grabber:before
{   border-color: transparent transparent var(--orangemode-bordercolor) transparent;}

		/***------------------------------------REDDD THEMEBOX + HEADER------------------------------------***/

.llama-redmode #llama-settings > div > span {
background-color: var(--redmode-bgcolor);
border-color: var(--redmode-bordercolor);}

#room-header.llama-redmode
{   background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);}

.llama-redmode #llama-settingsBox,
.llama-redmode #llama-header-grabber
{   background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);}

.llama-redmode #room-header-info,
.llama-redmode #room-header-info > h1
{   color:  var(--redmode-bordercolor);}

.llama-redmode #room-header-gifts-buttons > a,
.llama-redmode #room-header-gifts-buttons > #get-coins
{   background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bgcolor);
    color: var(--redmode-bordercolor);}

.llama-redmode #room-header-gifts-buttons > a:hover,
.llama-redmode #room-header-gifts-buttons > #get-coins:hover {
background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);
    color: var(--redmode-bordercolor);}

.llama-redmode #room-header-gifts-items > a > img {
border-color: var(--redmode-bgcolor);}

.llama-redmode #llama-header-grabber:before {
border-color: transparent transparent var(--redmode-bordercolor) transparent;}

		/***------------------------------------DARKPURPLEEE THEMEBOX + HEADER------------------------------------***/

.llama-darkpurplemode #llama-settings > div > span {
background-color: var(--darkpurplemode-bgcolor);
border-color: var(--darkpurplemode-bordercolor);}

#room-header.llama-darkpurplemode {
background-color: var(--darkpurplemode-lightbgcolor);
    border-color: var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode #llama-settingsBox,
.llama-darkpurplemode #llama-header-grabber {
background-color: var(--darkpurplemode-bgcolor);
    border-color: var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode #room-header-info,
.llama-darkpurplemode #room-header-info > h1 {
color:  var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode #room-header-gifts-buttons > a,
.llama-darkpurplemode #room-header-gifts-buttons > #get-coins {
background-color: var(--darkpurplemode-bgcolor);
    border-color: var(--darkpurplemode-bgcolor);
    color: var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode #room-header-gifts-buttons > a:hover,
.llama-darkpurplemode #room-header-gifts-buttons > #get-coins:hover {
background-color: var(--darkpurplemode-bgcolor);
    border-color: var(--darkpurplemode-bordercolor);
    color: var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode #room-header-gifts-items > a > img {
border-color: var(--darkpurplemode-bgcolor);}

.llama-darkpurplemode #llama-header-grabber:before {
border-color: transparent transparent var(--darkpurplemode-bordercolor) transparent;}

		/***------------------------------------WHITEEE THEMEBOX + HEADER------------------------------------***/

.llama-whitemode #llama-settings > div > span {
background-color: var(--whitemode-lightbgcolor);
border-color: var(--whitemode-bordercolor);}

#room-header.llama-whitemode
{   background-color: var(--whitemode-headerbg);
    border-color: var(--whitemode-bordercolor);}

.llama-whitemode #llama-settingsBox,
.llama-whitemode #llama-header-grabber
{   background-color: var(--whitemode-lightbgcolor);
    border-color: var(--whitemode-bordercolor);}

.llama-whitemode #room-header-info,
.llama-whitemode #room-header-info > h1
{   color:  var(--whitemode-bordercolor);}

.llama-whitemode #room-header-gifts-buttons > a,
.llama-whitemode #room-header-gifts-buttons > #get-coins
{   background-color: var(--whitemode-lightbgcolor);
    border-color: var(--whitemode-bordercolor);
    color: var(--whitemode-bordercolor);}

.llama-whitemode #room-header-gifts-buttons > a:hover,
.llama-whitemode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--whitemode-lightbgcolor);
    border-color: var(--whitemode-bgcolor);
    color: var(--whitemode-bordercolor);}

.llama-whitemode #room-header-gifts-items > a > img
{   border-color: var(--whitemode-bgcolor);}

.llama-whitemode #llama-header-grabber:before
{   border-color: transparent transparent var(--whitemode-bordercolor) transparent;}

		/***------------------------------------FEATUREONEEE THEMEBOX + HEADER------------------------------------***/

.llama-featureonemode #llama-settings > div > span {
background-color: var(--featureonemode-bgcolor);
border-color: var(--featureonemode-bordercolor);}

#room-header.llama-featureonemode
{   background-color: var(--featureonemode-headerbg);
    border-color: var(--featureonemode-bordercolor);
    background-position: center center;
    background-image: var(--featureonemode-headerbg);}

.llama-featureonemode #llama-settingsBox,
.llama-featureonemode #llama-header-grabber
{   background-color: var(--featureonemode-lightbgcolor);
    border-color: var(--featureonemode-bordercolor);}

.llama-featureonemode #room-header-info,
.llama-featureonemode #room-header-info > h1
{   color:  var(--featureonemode-bordercolor);}

.llama-featureonemode #room-header-gifts-buttons > a,
.llama-featureonemode #room-header-gifts-buttons > #get-coins
{   background-color: var(--featureonemode-bgcolor);
    border-color: var(--featureonemode-bgcolor);
    color: var(--featureonemode-bordercolor);}

.llama-featureonemode #room-header-gifts-buttons > a:hover,
.llama-featureonemode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--featureonemode-bgcolor);
    border-color: var(--featureonemode-bordercolor);
    color: var(--featureonemode-bordercolor);}

.llama-featureonemode #room-header-gifts-items > a > img
{   border-color: var(--featureonemode-bgcolor);}

.llama-featureonemode #llama-header-grabber:before
{   border-color: transparent transparent var(--featureonemode-bordercolor) transparent;}

		/***------------------------------------FEATURETWOOO THEMEBOX + HEADER------------------------------------***/

.llama-featuretwomode #llama-settings > div > span {
background-color: var(--featuretwomode-bgcolor);
border-color: var(--featuretwomode-bordercolor);}

#room-header.llama-featuretwomode
{   background-color: #282828;
    border-color: var(--featuretwomode-bordercolor);
    background-position: right center;
    background-size: 240px;
background-repeat:no-repeat;
    background-image: var(--featuretwomode-headerbg);}

.llama-featuretwomode #llama-settingsBox,
.llama-featuretwomode #llama-header-grabber
{   background-color: var(--featuretwomode-lightbgcolor);
    border-color: var(--featuretwomode-bordercolor);}

.llama-featuretwomode #room-header-info,
.llama-featuretwomode #room-header-info > h1
{   color:  var(--featuretwomode-textcolor);}

.llama-featuretwomode #room-header-gifts-buttons > a, .llama-featuretwomode #room-header-gifts-buttons > #get-coins {display:none;}

.llama-featuretwomode #room-header-gifts-buttons > a,
.llama-featuretwomode #room-header-gifts-buttons > #get-coins

{   display:none !important;background-color: var(--featuretwomode-bgcolor);
    border-color: var(--featuretwomode-textcolor);
    color: var(--featuretwomode-bordercolor);}

.llama-featuretwomode #room-header-gifts-buttons > a:hover,
.llama-featuretwomode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--featuretwomode-bgcolor);
    border-color: var(--featuretwomode-bordercolor);
    color: var(--featuretwomode-bordercolor);}

.llama-featuretwomode #room-header-gifts-items > a > img
{   border-color: var(--featuretwomode-bgcolor);}

.llama-featuretwomode #llama-header-grabber:before
{   border-color: transparent transparent var(--featuretwomode-bordercolor) transparent;}

		/***------------------------------------FEATURETHREEE THEMEBOX + HEADER------------------------------------***/

.llama-featurethreemode #llama-settings > div > span {
background-color: var(--featurethreemode-bgcolor);
border-color:#51bc02;}

#room-header.llama-featurethreemode
{   background-color: transparent;
    border: 0px;
    background-position: right center;
background-repeat:no-repeat;
border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    background-image: var(--featurethreemode-headerbg);}

#room-header.llama-featurethreemode.llama-headerCollapsed {
    position: unset !important;
    left: unset !important;
    height: 0px;
    margin-top: -150px;
}

#room-header.llama-featurethreemode.llama-sidemenuCollapsed {
position:relative;
left:-1px;
}

#room-header.llama-featurethreemode.llama-sidemenuCollapsed + .llama-headerCollapse{
position:relative;
left:-1px;
    height: 0px;
    margin-top: -15px;
}


.llama-featurethreemode #llama-header-grabber {
    background-image: var(--featurethreemode-squid);
    background-size: 25px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-color: var(--featurethreemode-bordercolor);
    height: 30px;
    width: 25px;
top: 81px;
}

.llama-featurethreemode #llama-header-grabber:hover {background-color:#51bc02;}


.llama-featurethreemode.llama-headerCollapsed #llama-header-grabber {
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
border-radius:50px;
top: -13px !important;
}

.llama-featurethreemode #llama-settingsBox
{   background-color: var(--featurethreemode-lightbgcolor);
    border-color: #51bc02;
    background-image: url(https://i.imgur.com/kR2eClp.jpg);
    background-size: cover;    background-size: cover;}


.llama-featurethreemode #room-header-info,
.llama-featurethreemode #room-header-info > h1
{   color:  var(--featurethreemode-textcolor);top:4px;}

.llama-featurethreemode #room-header-gifts-buttons > a, .llama-featurethreemode #room-header-gifts-buttons > #get-coins {display:none;}

.llama-featurethreemode #room-header-gifts-buttons > a,
.llama-featurethreemode #room-header-gifts-buttons > #get-coins

{   display:none !important;background-color: var(--featurethreemode-bgcolor);
    border-color: var(--featurethreemode-textcolor);
    color: var(--featurethreemode-bordercolor);}

.llama-featurethreemode #room-header-gifts-buttons > a:hover,
.llama-featurethreemode #room-header-gifts-buttons > #get-coins:hover
{   background-color: var(--featurethreemode-bgcolor);
    border-color: var(--featurethreemode-bordercolor);
    color: var(--featurethreemode-bordercolor);}

.llama-featurethreemode #room-header-gifts-items > a > img
{   border-color: var(--featurethreemode-bgcolor);}

.llama-featurethreemode #llama-header-grabber:before
{   border-color: transparent transparent var(--featurethreemode-bordercolor) transparent;displaY:none;}


 ` + firefoxCSS + `
	</style>
	`;
                        titleCSS.insertAdjacentHTML(insertPosition, titleCSShtml);
                    }

                    { // videolistCSS
                        videolistCSShtml = `
	<style id="videolistCSS" scope="tc-videolist">` + globalCSS + `
#videolist.llama-sidemenuCollapsed {
    width: 100%;}

.video > div > .blured  {opacity:0 !important; visibility: hidden !important;}
.video > div > video  {filter:none !important;}

#videos-footer {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 0px;
    min-height: 0px;
    width: 170px;
    position: fixed;
    bottom: 0;
    left: 10px !important;
    padding: 0 30px 0px;
    box-sizing: border-box;
    font-size: 0;
    z-index: 3;
    left: auto;
    background-color:#111111;}

#videos-footer.llama-sidemenuCollapsed{
    position: relative;
    bottom: 0;
    right: 50px;}

.llama-sidemenuCollapsed#videos-footer{
    position: relative;
    bottom: 0;
    right: 50px;}

#youtube.video:after {
    border: none;}

.video:after {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border: 5px solid #111;
    border-radius: 10px;
    box-sizing: border-box;
    pointer-events: none;}

#video::after {
    border: 5px solid #111;}

#video:after {
    border: 5px solid #111;}

#videos > .video {
    position: relative;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    font-size: 0;
    overflow: hidden;
    background-color: #ffffff !important;}

.video > div > iframe {
    width:100%;}

#videos-header {
    height: 10px;
    min-height: 10px;
    background-color:#111111;}

#videos-content {
    background-color:#111111;}

@media screen and (max-width: 600px) {
#submenu-icons > div {
    width: 32% !important;
    position: fixed !important;
    top: -3px !important;
    left: 4px !important;}
#videos-footer-broadcast {display:none !important;}
#videos-footer-youtube {
}

#videos-footer-broadcast {display:none;}
#videos-footer-submenu {opacity: 1 !important;
    visibility: visible !important;background-color: transparent !important;}

#videos-footer-submenu > span {opacity: 0 !important;
    visibility: hidden !important;    }
}

}

#videos-footer-youtube {
    background-color: green !important;
    background-size: 36% !important;
}

#videos-footer-youtube {
    background-color: red;
    background-position: top center;
    background-size: 36%;
    background-repeat: no-repeat;
    position: relative;
    left: -20px;
    top: -2px;
    }

#videos-footer-youtube > svg, #videos-footer-soundcloud > svg {
    vertical-align: middle;
    display:none;}

#videos-footer-push-to-talk > svg {
    vertical-align: middle;
    pointer-events: none;
    display:none;}

#videos-footer-youtube, #videos-footer-soundcloud {
    height: 42px;
    width: 10px !important;
    min-width: 115px !important;
    margin-right: -63px !important;
    margin-top: -150px;
    border-radius: 11px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    overflow: hidden;
    transition: .2s;}

.llama-sidemenuCollapsed #videos-footer {
    position: fixed;
    top: 205px;}
.llama-sidemenuCollapsed #videos-footer-push-to-talk {    position: fixed !important;
    bottom: 22px !important;
    right: 7px !important;
    width: 60px !important;
    min-width: 10px !important;
    height: 45px !important;
top:unset !important;
border-top-left-radius: 11px !important;
    border-top-right-radius: 11px !important;
}

.llama-sidemenuCollapsed #videos-footer-broadcast {
    position: fixed;
    bottom: 1px;
    right: 210px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    top: unset;
    left: unset;
    width: 120px !important;
    min-width: 10px !important;
    height: 18px;
    font-size: 12px;
    line-height: 20px;
}
.llama-chatbelow #videos-footer-youtube {
    display:none;
}
.llama-sidemenuCollapsed #videos-footer-youtube {
    position: fixed;
    bottom: 31px;
    right: 405px;
    border-top-right-radius: 0px;
    top: unset;
    left: unset;
    width: 30px !important;
    min-width: 10px !important;
    height: 30px;
    background-image: url(https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png);
    background-position: top center;
    background-position: 1px;
    background-size: 30px;
    background-repeat: no-repeat;}

#videos-footer-push-to-talk {
    height: 55px;
    margin-top: 4px;
    background-image: url(https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png);
    background-position: center center;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    }

#videos-footer-push-to-talk.llama-sidemenuCollapsed {
    height: 55px;
    margin-top: -14px;}

#videos-footer-broadcast-wrapper.llama-sidemenuCollapsed {
    position: relative;
    right: 10px;}

#videos-footer-broadcast-wrapper {
    position: relative;
    right: 90px;
    margin-top: -105px;
    display: unset;
    flex-direction: row;
    align-items: unset;
    width: unset;
    padding-left: 0px !important;}

#videos-footer-broadcast-wrapper > #videos-footer-submenu-button {
    height: 15px;
    margin-bottom: 0px;
    background-color: #328332;
    position: absolute;
    top: -15px;
    left: -9px;
    display: block;
    width: 20px;
    min-width: 10px;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    cursor: pointer;
    transition: .2s;}

#videos-footer-submenu {
    position: absolute;
    width: 250px;
    bottom: 100px;
    left: 150px;
    right: 0px;
    padding: 7px;
    border-radius: 4px;
    background-color: #fff;
    font-size: 14px;
    color: #000;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .09);
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    transition: .2s;}

#videos-footer-submenu:before, #videos-footer-submenu:after {
    content: '';
    position: absolute;
    display: block;
    height: 0;
    width: 0;
    right: unset;
    bottom: unset;
    border-width: 7px 7px 0 7px;
    border-style: solid;
    border-color: rgba(0, 0, 0, .06) transparent;}

#videos-footer-broadcast-wrapper > #videos-footer-submenu-button:before {
    content: '';
    position: absolute;
    display: block;
    height: 0;
    width: 0;
    top: 4px;
    right: 3px;
    border-width: 0 5px 6px;
    border-style: solid;
    border-color: #fff transparent;
    opacity: 1;
    visibility: visible;
    transition: .2s;}

#videos-footer-broadcast {
    position: relative;
    display: block;
    right: 5px;
    height: 39px;
    min-width: 162px;
    max-width: 100%;
    padding-left: 0px;
    border-radius: 0px 5px 5px 0px;
    box-sizing: unset;
    background-color: #13a832;
    font-size: 15px;
    font-weight: 550;
    color: #fff;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    text-transform: uppercase;
    transition: .2s;}

#videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button {
    z-index:-1;}

#videos-footer-broadcast-wrapper > .waiting {
    position: absolute;
    width: 125px;
    height: 55px;
    top: 45px;
    bottom: 0;
    left: 10px;
    right: 0;
    border-radius: 11px;
    background-color: #38cd57;
    opacity: 0;
    visibility: hidden;
    transition: .2s;}

#videos-footer-youtube.hidden, #videos-footer-soundcloud.hidden {
    width: 0;
    min-width: 0;
    margin-right: 0;
    visibility: hidden;}
}

#Fvideolist * {
    width: 75%!important;
    display: contents;
    float: right;
    flex-direction: column;}

#Fvideos {
    flex-direction: unset;
    flex-wrap: unset;}

#videos-header > span {
    line-height: initial;
    position: relative;
    top: 1px;
    background: none;}

#videos-header > span > svg {
    height: 16px;
    padding: 0;}

.videos-header-volume {
    position: absolute;
    height: 128px;
    width: 24px;
    top: 2px;
    left: 50%;
    margin-left: -14px;
    margin-top: 15px;
    border-width: 50px 22px 22px;
    border-style: solid;
    border-color: #111;
    border-radius: 5px;
    box-shadow: 10px 1px 4px 0 rgba(0, 0, 0, .09);
    opacity: 0;
    visibility: hidden;
    transition: .2s;}

.videos-header-volume-level > div {
    position: absolute;
    display: block;
    height: 12px;
    width: 24px;
    top: 0px;
    left: 0px;
    border-radius: 0;
    background-color:#313131;}

.videos-header-volume:before {
    background-color: #111;}




		/***------------------------------------PINKKK VIDEO HEADER------------------------------------***/

.llama-pinkmode #videos-header,
.llama-pinkmode #videos-content
{    background-color: var(--pinkmode-bgcolor);}

.llama-pinkmode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-pinkmode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-pinkmode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--pinkmode-bordercolor);}


		/***------------------------------------GREENNN VIDEO HEADER------------------------------------***/

.llama-greenmode #videos-header,
.llama-greenmode #videos-content
{    background-color: var(--greenmode-bgcolor);}

.llama-greenmode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-greenmode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-greenmode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--greenmode-bordercolor);}


		/***------------------------------------BLUEEE VIDEO HEADER------------------------------------***/

.llama-bluemode #videos-header,
.llama-bluemode #videos-content
{    background-color: var(--bluemode-bgcolor);}

.llama-bluemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-bluemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-bluemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--bluemode-bordercolor);}


		/***------------------------------------PURPLEEE VIDEO HEADER------------------------------------***/

.llama-purplemode #videos-header,
.llama-purplemode #videos-content
{    background-color: var(--purplemode-bgcolor);}

.llama-purplemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-purplemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-purplemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--purplemode-bgcolor);    border-color: var(--purplemode-bordercolor);}

		/***------------------------------------ORANGEEE VIDEO HEADER------------------------------------***/

.llama-orangemode #videos-header,
.llama-orangemode #videos-content
{    background-color: var(--orangemode-bgcolor);}

.llama-orangemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-orangemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-orangemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--orangemode-bordercolor);}

		/***------------------------------------REDDD VIDEO HEADER------------------------------------***/

.llama-redmode #videos-header,
.llama-redmode #videos-content
{    background-color: var(--redmode-bgcolor);}

.llama-redmode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-redmode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-redmode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--redmode-bordercolor);}

		/***------------------------------------DARKPURPLEEE VIDEO HEADER------------------------------------***/

.llama-darkpurplemode #videos-header,
.llama-darkpurplemode #videos-content
{    background-color: var(--darkpurplemode-bgcolor);}

.llama-darkpurplemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-darkpurplemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-darkpurplemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--darkpurplemode-bordercolor);}

		/***------------------------------------WHITEEE VIDEO HEADER------------------------------------***/

.llama-whitemode #videos-header,
.llama-whitemode #videos-content
{    background-color: var(--whitemode-lightbgcolor);}

.llama-whitemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-whitemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-whitemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--whitemode-darkbgcolor);}

		/***------------------------------------FEATUREONEEE VIDEO HEADER------------------------------------***/

.llama-featureonemode #videos-header
{   min-height: 0px;
    height: 0px;
    background-color:transparent;}

.llama-featureonemode #videos-content
{   background-color:transparent;
    background-image: var(--featureonemode-roombg);
    background-position: center center;
    background-size: cover;}

.llama-featureonemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-featureonemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-featureonemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--featureonemode-bordercolor);}

.llama-featureonemode #videos-footer-push-to-talk {
    background-image: var(--featureonemode-ptt) !important;
    background-size: 50px;}

		/***------------------------------------FEATURETWOOO VIDEO HEADER------------------------------------***/

.llama-featuretwomode #videos-header
{   min-height: 0px;
    height: 0px;
    background-color:transparent;}

.llama-featuretwomode #videos-content
{   background-color:transparent;
    background-image: var(--featuretwomode-roombg);
    background-position: right center;
    background-size: cover;}

.llama-featuretwomode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-featuretwomode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-featuretwomode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--featuretwomode-bordercolor);}

.llama-featuretwomode #videos-footer-push-to-talk {
    background-image: var(--featuretwomode-ptt) !important;
    background-size: 50px;}

		/***------------------------------------FEATURETHREEE VIDEO HEADER------------------------------------***/

.llama-featurethreemode#videos-footer-broadcast-wrapper {
background-image: var(--featurethreemode-ptt);
}


.llama-featurethreemode.llama-sidemenuCollapsed #videos-footer-broadcast {
background-color: #bd1071;
    right: 184px;

}

.llama-featurethreemode.llama-sidemenuCollapsed #videos-footer-youtube{
    right: 383px;
    border: 1px solid #51bc02;
}
.llama-featurethreemode #videos-header
{   min-height: 0px;
    height: 0px;
    background-color:transparent;}

.llama-featurethreemode #videos-content
{   background-color:transparent;
    background-image: none;
    background-position: right center;
    background-size: cover;}

.llama-featurethreemode #videos-footer-broadcast-wrapper.active > #videos-footer-broadcast,
.llama-featurethreemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button,
.llama-featurethreemode #videos-footer-broadcast-wrapper.active > #videos-footer-submenu-button:focus
{    background-color: var(--featurethreemode-bordercolor);}

.llama-featurethreemode #videos-footer-push-to-talk {
    background-image: var(--featurethreemode-ptt) !important;
    background-size: 89px;}

.llama-featurethreemode #videos-footer-broadcast-wrapper.show-ptt > #videos-footer-push-to-talk {
    height: 50px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    position: relative;
    top: -4px;}
	</style>
	`;
                        videolistCSS.insertAdjacentHTML(insertPosition, videolistCSShtml);
                    }

                    { // chatlistCSS
                        chatlistCSShtml = `
	<style id="chatlistCSS" scope="tinychat-chatlist">` + globalCSS + `
#chatlist {margin-top:-25px;}
#chatlist.llama-orangemode > div > span {
    color:#000000;}

#chatlist.llama-redmode > div > span {
    color:#000000;}

.llama-redmode #chat-wider:before {
    color:#860000;}

#chatlist > div > span {
    padding-left: 10px;}

#chatlist > #header {
    top: 3px;
    height: auto;}

		/*** --- this block is in chatlistCSS & userlistCSS --- ***/

.list-item > span > img {
    right: 13px;
    left: auto;}

.list-item > span[data-status]:before {
    left: auto;
    right: 0;}

.list-item > span > span {
    background: none!important;
    box-shadow: none!important;}

/*** ---                                        --- ***/

.close-instant > path {
    fill: white;}

.list-item > span > span { /* gift and close buttons */
    right: 16px;}

.list-item > span:hover > span { /* gift and close buttons */
    right: 16px;
    background: none!important;}

	</style>
	`;
                        chatlistCSS.insertAdjacentHTML(insertPosition, chatlistCSShtml);
                    }

                    { // userlistCSS
                        userlistCSShtml = `
	<style id="userlistCSS" scope="tinychat-userlist">` + globalCSS + `
#userlist > div > span {
	padding-left: 2px;
	padding-right: 2px;
    position: relative;
    display: inline-block;
    height: 30px;
    width: 100%;
    border-radius: 0 0 0 0;
    box-sizing: border-box;
    font-size: 14px;
    color: #7b868a;
    line-height: 30px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    transition: .2s;}

.llama-sidemenuCollapsed #button-banlist {
    left: -100px;
    width: 10px;}

#chatlist > div > span {
    position: relative;
    display: inline-block;
    height: 30px;
    width: 100%;
    padding-left: 36px;
    border-radius: 0 30px 30px 0;
    box-sizing: border-box;
    font-size: 14px;
    color: #02bcff;
    line-height: 30px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    transition: .2s;}

.list-item > span > span {
	right: auto;
	padding: 0 5px;}

.list-item > span > .nickname {
	padding-right: 3px;}

		/*** --- this block is in chatlistCSS & userlistCSS --- ***/

.list-item > span > img {
	right: 13px;
	left: auto;}

.list-item > span[data-status]:before {
	left: auto;
	right: 0;}

.list-item > span > span {
	background: none;
	box-shadow: none;}

		/*** ---                                        --- ***/

.list-item > span > span[data-moderator="1"]:before {
	filter: hue-rotate(226deg) saturate(4000%);}

#userlist > #header {
	top: auto;
	height: auto;}

#userlist > #header > span {
    display: block;
    border-color: black;
    background-color: #111111;
    text-align: center;
    top: 4px;}

#chatlist > #header {
    color: #111111;}

#button-banlist {
	padding: 0 12px;
    text-indent: -9999px;
    background-image: url(https://www.freeiconspng.com/uploads/red-x-png-4.png);
    background-size: 15px;
    background-position: center center;
    background-repeat: no-repeat;
    white-space: nowrap;
    background-color:transparent;}

.list-item > span[data-status]:before {
    left: auto;
    right: 0;
    border-radius:10px;}

.list-item > span > span[data-cam="1"]:after
{   background-image: url(https://i.ibb.co/RjLdY26/63629-3.png) !important;
    background-size: 10px;}

		/*** ---                                START COLOR MODES                                       --- ***/


		/***------------------------------------PINKKK USERS------------------------------------***/

#userlist.llama-pinkmode  > div > span:hover
{   background-color: var(--pinkmode-bgcolor);
    color: var(--pinkmode-bordercolor);}

.llama-pinkmode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-pinkmode > span > span > .send-gift:hover
{   background-color: var(--pinkmode-bgcolor);}

#userlist.llama-pinkmode > #header > span
{   background-color: var(--pinkmode-bordercolor);
    color:#ffffff}


		/***------------------------------------GREENNN USERS------------------------------------***/

#userlist.llama-greenmode  > div > span:hover
{   background-color: var(--greenmode-bgcolor);
    color: var(--greenmode-bordercolor);}

.llama-greenmode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-greenmode > span > span > .send-gift:hover
{   background-color: var(--greenmode-bgcolor);}

#userlist.llama-greenmode > #header > span
{   background-color: var(--greenmode-bordercolor);
    color:#ffffff}

		/***------------------------------------BLUEEE USERS------------------------------------***/

#userlist.llama-bluemode  > div > span:hover
{   background-color: var(--bluemode-bgcolor);
    color: var(--bluemode-bordercolor);}

.llama-bluemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-bluemode > span > span > .send-gift:hover
{   background-color: var(--bluemode-bgcolor);}

#userlist.llama-bluemode > #header > span
{   background-color: var(--bluemode-bordercolor);
    color:#ffffff}

		/***------------------------------------PURPLEEE USERS------------------------------------***/

#userlist.llama-purplemode  > div > span:hover
{   background-color: var(--purplemode-bgcolor);
    color: var(--purplemode-bordercolor);}

.llama-purplemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-purplemode > span > span > .send-gift:hover
{   background-color: var(--purplemode-bgcolor);}

#userlist.llama-purplemode > #header > span
{   background-color: var(--purplemode-bgcolor);
    color:#ffffff}

		/***------------------------------------ORANGEEE USERS------------------------------------***/

#userlist.llama-orangemode  > div > span:hover
{   background-color: var(--orangemode-bgcolor);
    color: var(--orangemode-bordercolor);}

.llama-orangemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-orangemode > span > span > .send-gift:hover
{   background-color: var(--orangemode-bgcolor);}

#userlist.llama-orangemode > #header > span
{   background-color: var(--orangemode-bordercolor);
    color:#ffffff}

		/***------------------------------------REDDD USERS------------------------------------***/

#userlist.llama-redmode  > div > span:hover
{   background-color: var(--redmode-bgcolor);
    color: var(--redmode-bordercolor);}

.llama-redmode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-redmode > span > span > .send-gift:hover
{   background-color: var(--redmode-bgcolor);}

#userlist.llama-redmode > #header > span
{   background-color: var(--redmode-bordercolor);
    color:#ffffff}

		/***------------------------------------DARKPURPLEEE USERS------------------------------------***/

#userlist.llama-darkpurplemode  > div > span:hover
{   background-color: var(--darkpurplemode-bgcolor);
    color: var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-darkpurplemode > span > span > .send-gift:hover
{   background-color: var(--darkpurplemode-bgcolor);}

#userlist.llama-darkpurplemode > #header > span
{   background-color: var(--darkpurplemode-bordercolor);
    color:#ffffff}

		/***------------------------------------WHITEEE USERS------------------------------------***/

#userlist.llama-whitemode  > div > span:hover
{   background-color: var(--whitemode-lightbgcolor);
    color: var(--whitemode-bordercolor);}

.llama-whitemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-whitemode > span > span > .send-gift:hover
{   background-color: var(--whitemode-bgcolor);}

#userlist.llama-whitemode > #header > span
{   background-color: var(--whitemode-bgcolor);
    color:#ffffff}

		/***------------------------------------FEATUREONEEE USERS------------------------------------***/

#userlist.llama-featureonemode > #header > span {
    background-color:#005900;
    color:#000;}

#userlist.llama-featureonemode  > div > span:hover
{   background-color: var(--featureonemode-lightbgcolor);
    color: var(--featureonemode-bordercolor);}

.llama-featureonemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-featureonemode > span > span > .send-gift:hover
{   background-color: var(--featureonemode-bgcolor);}

#userlist.llama-featureonemode > #header > span
{   background-color: var(--featureonemode-bgcolor);
    color:#ffffff}

		/***------------------------------------FEATURETWOOO USERS------------------------------------***/

#userlist.llama-featuretwomode > #header > span {
    background-color:#005900;
    color:#000;}

#userlist.llama-featuretwomode  > div > span
{   background-color: #2a2a2abd;
    color: var(--featuretwomode-textcolor);}

#userlist.llama-featuretwomode  > div > span:hover
{   background-color: var(--featuretwomode-lightbgcolor);
    color: var(--featuretwomode-bordercolor);}

.llama-featuretwomode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-featuretwomode > span > span > .send-gift:hover
{   background-color: var(--featuretwomode-bgcolor);}

#userlist.llama-featuretwomode > #header > span {
    background-color: var(--featuretwomode-bgcolor);
    color:#ffffff}

.llama-featuretwomode #userlist > div > span {background-color:#00ff00;}

		/***------------------------------------FEATURETHREEE USERS------------------------------------***/
.llama-featurethreemode .llama-myNick {
    color:#ffffff;
    text-shadow: 0px 0px #000000;
    background-image: url(https://i.ibb.co/hWh32Cp/19-190402-paint-brush-strokes-png-graphic-transparent-library-png.png);
    background-size: 54px;
    background-position: left center;
    background-repeat: no-repeat;
}
.llama-myNick {
    color:#ff0000;
}


#chatlist.llama-featurethreemod > div > span{color:#00ff00;}

#userlist.llama-featurethreemode  > div > span {width:98%;}
#userlist.llama-featurethreemode {margin-left:2%;}

.llama-featurethreemode .nickname {margin-left:5px; !important;}
#userlist.llama-featurethreemode > #header > span {
background-image:none;
background-color: #0d0d0d;
    border-radius: 100px;
    color: #ffffff;
    top: 0px;
    border: 1px solid #51bc02;}

#userlist.llama-featurethreemode  > div > span
{       border-color: var(--featurethreemode-bordercolor);
    background-image: var(--featurethreemode-messagebg);
    border-radius: 14px;
    margin-top: 2px;
    color: var(--featurethreemode-textcolor);
font-weight: bold;
    text-shadow: 1px 2px #2b6600;}

#userlist.llama-featurethreemode  > div > span:hover
{       border:1px solid #51bc02;  background-color: #0d0d0d;;
background-image:none;
    color: var(--featurethreemode-textcolor);
    text-shadow: 1px 2px #000000;}

.llama-featurethreemode .list-item > span:hover > span
{   background: none;
    box-shadow: none;}

.list-item.llama-featurethreemode > span > span > .send-gift:hover
{   background-color: var(--featurethreemode-bgcolor);}

.llama-featurethreemode #userlist > div > span {background-color:#00ff00;}

	</style>
	`;
                        userlistCSS.insertAdjacentHTML(insertPosition, userlistCSShtml);
                    }

                    { // userContextmenuCSS
                        userContextmenuCSShtml = `
	<style id="userContextmenuCSS" scope="tinychat-user-contextmenu">` + globalCSS + `
		#main {
			border: 1px solid rgba(0, 0, 0, .1);
		}
	</style>
	`;
                        userContextmenuCSS.insertAdjacentHTML(insertPosition, userContextmenuCSShtml);
                    }

                    { // bodyCSS
                        bodyCSShtml = `
	<style id="bodyCSS">` + globalCSS + `

/*** ---                                START COLOR MODES                                      --- ***/


		/***------------------------------------PINKKK BODY---------------------------------***/

body.llama-pinkmode
{   overflow: hidden;
    background-color: var(--pinkmode-bgcolor)}

		/***------------------------------------GREENNN BODY---------------------------------***/

body.llama-greenmode
{   overflow: hidden;
    background-color: var(--greenmode-bgcolor)}

		/***------------------------------------BLUEEE BODY---------------------------------***/

body.llama-bluemode
{   overflow: hidden;
    background-color: var(--bluemode-bgcolor)}

		/***------------------------------------PURPLEEE BODY---------------------------------***/

body.llama-purplemode
{   overflow: hidden;
    background-color: var(--purplemode-bgcolor)}

		/***------------------------------------ORANGEEE BODY---------------------------------***/

body.llama-orangemode
{   overflow: hidden;
    background-color: var(--orangemode-bgcolor)}

		/***------------------------------------REDDD BODY---------------------------------***/

body.llama-redmode
{   overflow: hidden;
    background-color: var(--redmode-bgcolor)}

		/***------------------------------------DARKPURPLEEE BODY---------------------------------***/

body.llama-darkpurplemode
{   overflow: hidden;
    background-color: var(--darkpurplemode-bgcolor)}

		/***------------------------------------WHITEEE BODY---------------------------------***/

body.llama-whitemode
{   overflow: hidden;
    background-color: var(--whitemode-bgcolor)}

		/***------------------------------------FEATUREONEEE BODY---------------------------------***/

body.llama-featureonemode
{   overflow: hidden;
    background-color: var(--featureonemode-bgcolor)}

		/***------------------------------------FEATURETWOOO BODY---------------------------------***/

body.llama-featuretwomode
{   overflow: hidden;
    background-color: var(--featuretwomode-bgcolor)}

		/***------------------------------------FEATURETHREEE BODY---------------------------------***/

body.llama-featurethreemode
{   overflow: hidden;
    background-color: var(--featurethreemode-bgcolor);
background-image: var(--featurethreemode-roombg);

background-size:cover;}

.message {color:red;}




/*** ---                                END COLOR MODES                                      --- ***/

body{
    overflow: hidden;
    background-color:#111111;}

#nav-static-wrapper {
    width: 2px;
    opacity: .7;
    display:none;
    visibility:hidden;}

#nav-static-wrapper {
    width: 2px;
    opacity: .7;
    display:none;
    visibility:hidden;}

#nav-static-wrapper.llama-sidemenuCollapsed{
    display:none;
    visibility:hidden;}

@media screen and (max-width: 1000px) {
#nav-static-wrapper {
    width: 82px;
    opacity: 1;}
}


#menu-icon {
    transition: 1s;
    display:none;}

.llama-sidemenuCollapsed #menu-icon {
    z-index: -1;
    opacity: 0;
    display:none;}

.llama-sidemenuCollapsed #header-user {
    display: none;}

@media screen and (max-width: 1000px) {
#header-user {
    left: 21px;}

#videos-footer-youtube.llama-sidemenuCollapsed{
    padding: 0px;
    left:100px;
    background-color:#f07629;}


body.llama-changefont {
    font-family: sans-serif;}

#header-user {
    left: 62px;}

@media screen and (max-width: 1000px) {
#header-user {
    left: 21px;}
}

@media screen and (max-width: 600px) {
#header-user {
    left: auto;
    right: 54px;}
}

@media screen and (min-width: 1000px) {
#menu-icon:hover {
    opacity: 1;}

#menu-icon {
    top: 4px;
    left: 19px;
    height: 12px;
    width: 109px;
    font-size: 10px;
    background: #04caff;
    border-radius: 6px;
    opacity: .8;
    visibility: hidden;
    display:none;}

#menu-icon:after {
    position: absolute;
    top: 3px;
    left: 51px;
    content: "";
    height: 7px;
    width: 7px;
    border-width: 2px 2px 0px 0px;
    border-style: solid;
    border-color: #fff;
    box-sizing: border-box;
    transform: rotate(45deg);
    transition: .2s;
    visibility: hidden;}

#menu-icon:hover:after {
    border-width: 0px 0px 2px 2px;
    visibility: hidden;}

#menu-icon > svg {
    opacity: 0;
    visibility: hidden;}
}

#menu-icon {
    visibility: hidden;
    display:none;}
	</style>
	`;
                        bodyCSS.insertAdjacentHTML(insertPosition, bodyCSShtml);
                    }

                    messageCSS = `
.llama-nightmode { color: var(--nightmode-textcolor);}

.llama-nightmode.blacknight { color: white;}

.llama-mention-message { color: red !important; }

.llama-featurethreemode #chat-content > .message.system {
   color: #51bc02;}

.llama-nightmode.llama-mention-message { color: #e44a3f; }
.llama-nightmode.message.system,
.llama-nightmode #chat-content > .message.system {
	background-color: #313c3f;
	color: #677174;}

.llama-nightmode.blacknight.message.system,
.llama-nightmode.blacknight #chat-content > .message.system {
	background-color: transparent;
	color: #4d4d4d;}

body.llama-pinkmode {
	overflow: hidden;
	background-color: var(--pinkmode-bgcolor)!important;}

.message.llama-orangemode,.message.llama-featurethreemode {
    color: black;}

.message.system {
    font-size: 12px;
    font-weight: 600;
    color: #8f999c;
    left: 0px;}

.o
		.llama-mention-message { color: red; }
.on-white-scroll {
    padding-left: 16px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: hidden;}

.llama-featurethreemode.message {
    font-size: 14px;
    color: #000000;
    white-space: pre-line;
    word-wrap: break-word;
    position: relative;
    right: 12px;
font-weight:bold;
    top: 3px;}


.message {
    font-size: 14px;
    color: #ffffff;
    white-space: pre-line;
    word-wrap: break-word;
    position: relative;
    right: 12px;
font-weight:bold;
    top: 3px;}

	`;

                    { // chatlogCSS
                        chatlogCSShtml = `
	<style id="chatlogCSS" scope="tinychat-chatlog">` + globalCSS + `
/* HERE IS THE OTHER GRABBER */
#llama-chat-grabber {
    position: absolute;
    top: 88px;
    right: 50%;tinychat-chatlog *
    background: white;
    width: 60px;
    height: 20px;
    border: #313131 1px solid;
    border-radius: 19px;
    text-align: center;
    color: #b4c1c5;
    cursor: pointer;
    transition: all .4s ease-in-out;
    background-color:#111111;}

.llama-chatCollapsed #llama-chat-grabber {
    top: 0px;
    background: #111111;
    border-top: 0;
    z-index: 9;
    border-radius: 11px;
    line-height: 15px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 15px;}

.llama-chatCollapsed:hover #llama-chat-grabber {
    height: 29px;
    line-height: 43px;}

:host, #chat-wrapper.llama-chatCollapsed {
}

@media screen and (max-width: 600px){

:host, #chat-wrapper, #chat-wider + #chat-wrapper, #chat-wider.active + #chat-wrapper {
    position: relative;
    min-width: 320px;
    top: -8px;
}

#users-icon {

    right:0px !important;

}

}
/* END */

		.message a:first-child,
		.message a:first-child img:first-child {
			transition: .1s;
		}
		.message a:first-child:hover {
			width: 100px!important;
			height: 75px!important;
			z-index: 1000;
		}
		.message a:first-child:hover img:first-child {
			width: 100px;
			height: 79px!important;
		}
#chat-instant .message.common > a > .avatar, #chat-content > .message.common > a > .avatar:hover {border-radius:100%;}
#chat-instant .message.common > a > .avatar, #chat-content > .message.common > .avatar{width:30px;height:30px;}
#chat-instant .message.common > .avatar > div > img, #chat-content > .message.common > .avatar > div > img {border-radius:100%;}

#chat-instant .message.common > a > .status-icon, #chat-content > .message.common > a > .status-icon {
    position: absolute;
    height: 15px;
    width: 15px;
    top: 0px;
    left: 315px;
    padding: 3px;
    border-radius: 100%;
    background-color: #fff;}

.llama-featurethreemode #chat-content > .message.common > a > .status-icon {
left:293px;}

#chat-content > .message.system > .content {
    font-size: 12px;
    font-weight: 600;
    color: #00ff00;
    margin:10px;}
@media screen and (max-width: 600px) {
#chat-wrapper {border:0px !important;}
#chat-content > .message.common > .nickname {right:5px !important;}

#users-icon, #input-users:checked ~ #users-icon, #input-menu:checked ~ #input-users ~ #users-icon {left: 17px !important;}
#videos-header-fullscreen {display:none;}
}


#chat-wrapper {
    min-width: 350px;
    border-left: 0px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    background-color: #111111;
    transition: .8s;}
#chat-wrapper.llama-whitemode {
    min-width: 350px;
    border-left: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    background-color: #111111;
    transition: .8s;}

#chat-content > .message.common {
    padding-bottom: 0;
    padding-top: 0!important;
    margin-bottom: 5px;
    min-height: 0px!important;
    color: #ff0000 !important;}

		/*
#chat-content > .message:hover {
    background: rgba(0, 0, 0, 0.03);
    color: #ffffff;}
		*/

#chat-content > .message.common {
    margin-bottom: 5px;
    margin-right: 10px;
    padding-bottom: 9px;
    color: #353535 !important;
    background-color: #2a2a2a;
    border: 1px solid;
    border-radius: 20px;}

#chat-content > .message.system {
    box-sizing: border-box;
    background-color: #0000006b;
    cursor: default;
    border: 1px solid #8f999c;
    color: #8f999c;
    border-radius:24px;
    padding: 0px 0px;}
}

#chat-content.llama-notif-off > .message.system {
    display: none;}

#chat-content.llama-notif-off > .message.system.dontHide {
    display: initial;}

#chat-instant .message.common > a:first-child,
#chat-content > .message.common > a:first-child {
    top: 5px; left: 2px;}

#chat-position #input:before {
    background: none;}

#input {
    position: relative;
    display: block;
    padding-top: 10px;
    margin-right: 25px;
    overflow-wrap: break-word;}

#input > textarea{
    overflow-y:auto;
    background-color:#111111;
    border:1px solid #313131;
    color:#ffffff;}

#input:after {
    content: "";
    position: absolute;
    display: block;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0px solid #cbcfcf;
    border-radius: 12px;
    box-sizing: border-box;
    pointer-events: none;}

#input > .waiting {
    position: absolute;
    width: auto;
    top: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 12px;
    background-color: #e9eaea;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: .2s;}

#chat-position {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    top: 20px;
    left: 10px;
    right: -20px;
    bottom: 19px;}

#chat-wider {
    font-size: 0;
    background-color: transparent;
    border: 1px solid #313131;
    cursor: pointer;
    z-index: 1;
    padding-top: 10px;
    color: #3b3b3b;
    position: absolute;
    top: 47%;}

#chat-wider.active + #chat-wrapper {
    min-width: 0px;}

#chat-wider.active {
    left: -15px;
    border-radius: 10px 0 0 10px;}

#chat-wider:before {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);}

#chat-wider.active:before {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);}

#chat-wider:hover {
    background: #333;
    color: #5c5c5c;
    cursor: pointer;
    border:0px;}

#chat-instant .message.common > a > .avatar,
#chat-content > .message.common > a > .avatar {
    width:75%;
    height:100%;
    background-color: #666666;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    overflow: hidden;}

#abovefiller{
    border-radius: unset;}

#timestamp {
    font-size: 11px;
    color: #999999;
    float: right;
    position: absolute;
    right: 0;
    padding-top: 3px;
    padding-right: 20px;
    font-weight: 600;}

#chat-content > .message.common > .nickname {
    overflow: initial;
    line-height: initial;
    position: relative;
    right: 15px;
    color: #00abfa;}

#chat-content div.message.common:last-of-type {
    margin-bottom: 10px;
    margin-right: 10px;}

#chat-instant-button.llama-loading {
    border: 0;
    font-size: x-large;
    animation: spin .5s linear infinite;}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }}

#llama-chatlogDisplay {
    display: none;
    position: fixed;
    top: 121px;
    left: 177px;
    width: 90%;
    height: 80%;
    z-index: 7;
    cursor: default;}

#llama-chatlogDisplay.show {
    display: unset; }

#llama-chatlogDisplay * {
    float: left;
    height: 50%;}

#llama-chatlogDisplay textarea {
    transition: .2s;
    opacity: 0;
    border-radius: 6px;
    width: 90%;}

#llama-chatlogDisplay textarea.show {
    opacity: 1;}

#llama-chatlogDisplay textarea.show {
    background-color:#111111;
    color:#17ff00;}

#llama-chatlogDisplay #close {
    opacity: 0;
    transition: .2s;
    width: 30px;
    background: #313131;
    height: 30px;
    border-radius: 10px;
    position: relative;
    color: white;
    top: -1%;
left:-21px;
    vertical-align: middle;
    font-size: 22px;
    text-align: center;
    padding-top: 0px;
    cursor: pointer;}

#llama-chatlogDisplay #close:hover {
    background: #990000;}

#llama-chatlogDisplay #close.show {
    opacity: 1;
border:1px solid #990000;}

#llama-chatlogButtons {
    position: absolute;
    top: 2px;
    left: 6px;
    font: 15px monospace;
    display: none;}

.llama-chatlogBut {
    padding: 2px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border: silver 0px solid;
    color: silver;
    transition: .3s;
    width: 10px;
    height: 10px;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    float: left;}

.llama-chatlogBut:hover {
    color: black;
    border-color: #17ff00;}

.llama-chatlogBut ~ .llama-chatlogBut {
    margin-left: 2px;}

.llama-chatlogBut .icon {
    width: 10px;}

.llama-chatlogBut .label {
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: .3s;
    display: block;
    position: relative;
    top: -2px;
    left: 13px;
    font: 11px sans-serif;
    color: black;}

.llama-chatlogBut:hover .label {
    opacity: 1;
color: #17ff00;}

.llama-chatboxPM #llama-chatlogSave {
    opacity: 0;
    z-index: -5;
		}
#llama-chatlogSave .icon {
    /* transform: scaleY(.6); */
    position: absolute;
    top: -1px;
    left: 4px;}

#llama-chatlogSave .icon svg {
    width: 19px;
    height: 19px;
    position: relative;
    left: -3px;}

#llama-chatlogSave .icon path {
    transform: scale(.08) scaleX(1.2) rotate(180deg);
    fill: #ccc;
    transform-origin: 11px 12px;}

#llama-chatlogSave:hover .icon path {
    fill: #17ff00;
border}

#llama-chatlogSave:hover {
}

#llama-chatlogSave:hover .label {
}

#llama-chatlogView .icon {
    font-size: 10px;
    top: 1px;
    position: absolute;}

#llama-chatlogView:hover {
    color:#17ff00;}


		/*** ---                                START COLOR MODES                                      --- ***/

		/***------------------------------------PINKKK CHAT---------------------------------***/

.llama-pinkmode #input > textarea
{   background-color: var(--pinkmode-bordercolor);
    border-color: var(--pinkmode-bordercolor);
    color:#000000;}

.llama-pinkmode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-pinkmode #chat-wider:before,
#chat-wider.llama-pinkmode
{   background-color: var(--pinkmode-bgcolor);
    border:1px solid var(--pinkmode-bordercolor) !important;}

.llama-pinkmode #chat-wider:hover
{   background-color: var(--pinkmode-bordercolor);
    border:1px solid var(--pinkmode-bgcolor) !important;}

#chat-wrapper.llama-pinkmode
{   background-color:var(--pinkmode-bgcolor);}

.llama-pinkmode #chat-content > .message.common
{   border-color: var(--pinkmode-bordercolor);
    background-color: var(--pinkmode-bordercolor);}

.llama-pinkmode #timestamp
{   color: var(--pinkmode-bgcolor);}

.llama-pinkmode#chat-wider:before
{ border-color: transparent  var(--pinkmode-bordercolor);}


		/***------------------------------------GREENNN CHAT---------------------------------***/

.llama-greenmode #input > textarea
{   background-color: var(--greenmode-bordercolor);
    border-color: var(--greenmode-bordercolor);
    color:#000000;}

.llama-greenmode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-greenmode #chat-wider:before,
#chat-wider.llama-greenmode
{   background-color: var(--greenmode-bgcolor);
    border: 1px solid  var(--greenmode-bordercolor) !important;}

.llama-greenmode #chat-wider:hover
{   background-color: var(--greenmode-bordercolor);
    border: 1px solid var(--greenmode-bgcolor) !important;}

#chat-wrapper.llama-greenmode
{   background-color:var(--greenmode-bgcolor);}

.llama-greenmode #chat-content > .message.common
{   border-color: var(--greenmode-bordercolor);
    background-color: var(--greenmode-bordercolor);}

.llama-greenmode #timestamp
{   color: var(--greenmode-bgcolor);}

.llama-greenmode#chat-wider:before
{ border-color: transparent  var(--greenmode-bordercolor);}

		/***------------------------------------BLUEEE CHAT---------------------------------***/

.llama-bluemode #input > textarea
{   background-color: var(--bluemode-bordercolor);
    border-color: var(--bluemode-bordercolor);
    color:#000000;}

.llama-bluemode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-bluemode #chat-wider:before,
#chat-wider.llama-bluemode
{   background-color: var(--bluemode-bgcolor);
    border: 1px solid var(--bluemode-bordercolor) !important;}

.llama-bluemode #chat-wider:hover
{   background-color: var(--bluemode-bordercolor);
    border: 1px solid var(--bluemode-bgcolor) !important;}

#chat-wrapper.llama-bluemode
{   background-color:var(--bluemode-bgcolor);}

.llama-bluemode #chat-content > .message.common
{   border-color: var(--bluemode-bordercolor);
    background-color: var(--bluemode-bordercolor);}

.llama-bluemode #timestamp
{   color: var(--bluemode-bgcolor);}

.llama-bluemode#chat-wider:before
{ border-color: transparent  var(--bluemode-bordercolor);}

		/***------------------------------------PURPLEEE CHAT---------------------------------***/

.llama-purplemode #input > textarea
{   background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-lightbgcolor);
    color:#000000;}

.llama-purplemode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-purplemode #chat-wider:before,
#chat-wider.llama-purplemode
{   background-color: var(--purplemode-bgcolor);
    border: 1px solid var(--purplemode-bordercolor) !important;}

.llama-purplemode #chat-wider:hover
{   background-color: var(--purplemode-bordercolor);
    border: 1px solid var(--purplemode-bgcolor) !important;}

#chat-wrapper.llama-purplemode
{   background-color:var(--purplemode-bgcolor);}

.llama-purplemode #chat-content > .message.common
{   border-color: var(--purplemode-lightbgcolor);
    background-color: var(--purplemode-lightbgcolor);}

.llama-purplemode #timestamp
{   color: var(--purplemode-bgcolor);}

.llama-purplemode#chat-wider:before
{ border-color: transparent  var(--purplemode-bordercolor);}

		/***------------------------------------ORANGEEE CHAT---------------------------------***/

.llama-orangemode #input > textarea
{   background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-lightbgcolor);
    color:#000000;}

.llama-orangemode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-orangemode #chat-wider:before,
#chat-wider.llama-orangemode
{   background-color: var(--orangemode-bgcolor);
    border: 1px solid var(--orangemode-bordercolor) !important;}

.llama-orangemode #chat-wider:hover
{   background-color: var(--orangemode-bordercolor);
    border: 1px solid var(--orangemode-bgcolor) !important;}

#chat-wrapper.llama-orangemode
{   background-color:var(--orangemode-bgcolor);}

.llama-orangemode #chat-content > .message.common
{   border-color: var(--orangemode-lightbgcolor);
    background-color: var(--orangemode-lightbgcolor);}

.llama-orangemode #timestamp
{   color: var(--orangemode-bgcolor);}

.llama-orangemode#chat-wider:before
{ border-color: transparent  var(--orangemode-bordercolor);}

		/***------------------------------------REDDD CHAT---------------------------------***/

.llama-redmode #input > textarea
{   background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-lightbgcolor);
    color:#000000;}

.llama-redmode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-redmode #chat-wider:before,
#chat-wider.llama-redmode
{   background-color: var(--redmode-bgcolor);
    border: 1px solid var(--redmode-bordercolor) !important;}

.llama-redmode #chat-wider:hover
{   background-color: var(--redmode-bordercolor);
    border: 1px solid var(--redmode-bgcolor) !important;}

#chat-wrapper.llama-redmode
{   background-color:var(--redmode-bgcolor);}

.llama-redmode #chat-content > .message.common
{   border-color: var(--redmode-lightbgcolor);
    background-color: var(--redmode-lightbgcolor);}

.llama-redmode #timestamp
{   color: var(--redmode-bgcolor);}

.llama-redmode#chat-wider:before
{ border-color: transparent  var(--redmode-bordercolor);}


		/***------------------------------------DARKPURPLEEE CHAT---------------------------------***/

.llama-darkpurplemode #input > textarea
{   background-color: var(--darkpurplemode-lightbgcolor);
    border-color: var(--darkpurplemode-lightbgcolor);
    color:#000000;}

.llama-darkpurplemode #input > textarea::placeholder
{    color:#FFFFFF;}

.llama-darkpurplemode #chat-wider:before,
#chat-wider.llama-darkpurplemode
{   background-color: var(--darkpurplemode-bgcolor);
    border: 1px solid var(--darkpurplemode-bordercolor) !important;}

.llama-darkpurplemode #chat-wider:hover
{   background-color: var(--darkpurplemode-bordercolor);
    border: 1px solid var(--darkpurplemode-bgcolor) !important;}

#chat-wrapper.llama-darkpurplemode
{   background-color:var(--darkpurplemode-bgcolor);}

.llama-darkpurplemode #chat-content > .message.common
{   border-color: var(--darkpurplemode-lightbgcolor);
    background-color: var(--darkpurplemode-lightbgcolor);}

.llama-darkpurplemode #timestamp
{   color: var(--darkpurplemode-bgcolor);}

.llama-darkpurplemode#chat-wider:before
{ border-color: transparent  var(--darkpurplemode-bordercolor);}

		/***------------------------------------WHITEEE CHAT---------------------------------***/

.llama-whitemode #input > textarea
{   background-color: var(--whitemode-bordercolor);
    border-color: var(--whitemode-bordercolor);
    color:#000000;}

.llama-whitemode #input > textarea::placeholder
{    color:#000000;}

.llama-whitemode #chat-wider:before,
#chat-wider.llama-whitemode
{   background-color: var(--whitemode-lightbgcolor);
    border: 1px solid var(--whitemode-bordercolor) !important;}

.llama-whitemode #chat-wider:hover
{   background-color: var(--whitemode-bordercolor);
    border: 1px solid var(--whitemode-bgcolor) !important;}

#chat-wrapper.llama-whitemode
{   background-color:var(--whitemode-lightbgcolor);}

.llama-whitemode #chat-content > .message.common
{   border-color: var(--whitemode-bgcolor);
    background-color: var(--whitemode-bgcolor);}

.llama-whitemode #timestamp
{   color: var(--whitemode-bgcolor);}

.llama-whitemode#chat-wider:before
{ border-color: transparent  var(--whitemode-bordercolor);}

		/***------------------------------------FEATUREONEEE CHAT---------------------------------***/

.llama-featureonemode #input > textarea
{   background-color: var(--featureonemode-bordercolor);
    border-color: var(--featureonemode-bordercolor);
    color:#000000;}

.llama-featureonemode #input > textarea::placeholder
{    color:#000000;}

.llama-featureonemode #chat-wider:before,
#chat-wider.llama-featureonemode
{   background-color: var(--featureonemode-lightbgcolor);
    border: 1px solid var(--featureonemode-bordercolor) !important;}

.llama-featureonemode #chat-wider:hover
{   background-color: var(--featureonemode-bordercolor);
    border: 1px solid var(--featureonemode-bgcolor) !important;}

#chat-wrapper.llama-featureonemode
{   background-color:var(--featureonemode-lightbgcolor);}

.llama-featureonemode #chat-content > .message.common
{   border-color: var(--featureonemode-bgcolor);
    background-color: var(--featureonemode-bgcolor);}

.llama-featureonemode #timestamp
{   color: var(--featureonemode-bgcolor);}

.llama-featureonemode#chat-wider:before
{ border-color: transparent  var(--featureonemode-bordercolor);}

#chat-wrapper.llama-featureonemode {
    background-color: #242424;
    background-image: var(--featureonemode-chatbg);
    background-position: center center;
    background-blend-mode: overlay;
    background-size: cover;}

		/***------------------------------------FEATURETWOOO CHAT---------------------------------***/

.llama-featuretwomode #input > textarea
{   background-color: var(--featuretwomode-bordercolor);
    border-color: var(--featuretwomode-bordercolor);
    color:#000000;}

.llama-featuretwomode #input > textarea::placeholder
{    color:#000000;}

.llama-featuretwomode #chat-wider:before,
#chat-wider.llama-featuretwomode
{   background-color: var(--featuretwomode-lightbgcolor);
    border: 1px solid var(--featuretwomode-bordercolor) !important;}

.llama-featuretwomode #chat-wider:hover
{   background-color: var(--featuretwomode-bordercolor);
    border: 1px solid var(--featuretwomode-bgcolor) !important;}

#chat-wrapper.llama-featuretwomode
{   background-color:var(--featuretwomode-lightbgcolor);
border-left: 1px solid var(--featuretwomode-bordercolor);}

.llama-featuretwomode #chat-content > .message.common
{   border-color: var(--featuretwomode-bordercolor);
background-color: #2a2a2abd;}

.llama-featuretwomode #timestamp
{   color: var(--featuretwomode-textcolor);}

.llama-featuretwomode#chat-wider:before
{ border-color: transparent  var(--featuretwomode-bordercolor);}

#chat-wrapper.llama-featuretwomode {
    background-color: #242424;
    background-image: var(--featuretwomode-chatbg);
    background-position: center center;
    background-size: cover;}

		/***------------------------------------FEATURETHREEE CHAT---------------------------------***/

.llama-featurethreemode #input > textarea
{   background-color: transparent;
    border-color: #51bc02;
    color:#FFFFFF;
width: 95%;
    margin-left: 17px;}

.llama-featurethreemode #input > textarea::placeholder
{    color:#51bc02;}



.llama-featurethreemode#chat-wider{
    background-image: var(--featurethreemode-squid2);
    background-size: 25px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-color: var(--featurethreemode-bordercolor);
    height: 13px;
    width: 26px;
border-left:0px;
border-top:0px;
border-bottom:0px;}

.llama-featurethreemode#chat-wider:hover {background-color:#00ff00;}


 #chat-wider.llama-featurethreemode.active {
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
border-radius:50px;
}


.llama-featurethreemode.message{color#000000 !important;}
.llama-featurethreemode .message{color#000000 !important;}
.message.llama-featurethreemode{color#000000 !important;}
.message .llama-featurethreemode{color#000000 !important;}



.llama-featurethreemode.llama-sidemenuCollapsed#chat-wider {
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
border-radius:50px;
}

----



.llama-featurethreemode#chat-wider:before {
    background-color: var(--featurethreemode-lightbgcolor);
    border: 1px solid var(--featurethreemode-bordercolor) !important;
    display:none !important;}

.llama-featurethreemode #chat-wider:hover {
    background-color: var(--featurethreemode-bordercolor);
    border: 1px solid var(--featurethreemode-bgcolor) !important;}

#chat-wrapper.llama-featurethreemode {
    min-width:344px;background-color:var(--featurethreemode-lightbgcolor);
    border-left: 0px solid var(--featurethreemode-bordercolor);
}
@keyframes animatedBackground {
	from { background-position: 0 0; }
	to { background-position: 0 100%; }
}




/*--------------*/

.llama-featurethreemode #chat-content > .message.common {
    border-color: var(--featurethreemode-bordercolor);
    background-image: var(--featurethreemode-messagebg);
    background-color: #51bc02;
    margin-left:17px;}

.llama-featurethreemode #chat-content > .message {
   border-color: #51bc02;margin-left:10px;color: #51bc02 !important;}

.llama-featurethreemode #chat-content > .system {
   color: #51bc02 !important;}
.llama-featurethreemode #chat-content > .blacknight {
   color: #51bc02 !important;}

.llama-featurethreemode #chat-content > .system {
   border-color: #51bc02;margin-left:10px;color: #51bc02 !important;}

.llama-featurethreemode #timestamp{   color: var(--featurethreemode-textcolor);}

.llama-featurethreemode#chat-wider:before{ border-color: transparent  var(--featurethreemode-bordercolor);}

#chat-wrapper.llama-featurethreemode {
border-radius: 18px;
    background-color: transparent;
    background-image: var(--featurethreemode-chatbg);
    background-position: center center;
	background-position: 0px 0px;
	background-repeat: repeat-y;

	animation: animatedBackground 10s linear infinite;
}

#chat-content.llama-featurethreemode > .message {
    box-sizing: border-box;
    background-color: #0000006b;
    cursor: default;
    border: 1px solid #000000;
    color: #000000;
    border-radius:24px;
    padding: 0px 0px;}
}

/*#chat-content > .message > .nickname {
color:#000000;
}*/

.llama-featurethreemode#chat-content > .llama-featurethreemode.message > .llama-featurethreemode.nickname {color:#000000;}

.llama-featurethreemode #chat-content > .message > .nickname {color:#000000;}



	</style>
	`;
                        chatlogCSS.insertAdjacentHTML(insertPosition, chatlogCSShtml);
                    }

                    { // sidemenuCSS
                        var firefoxCSS = "";
                        if (browserSpoofedChrome) {
                            firefoxCSS = `
			#sidemenu {
				left: 0!important;
transition: all .4s ease-in-out;
			}
		`;
                        }
                        sidemenuCSShtml = `
	<style id="sidemenuCSS" scope="tinychat-sidemenu">` + globalCSS + `
#sidemenu {
    min-width: 162px;
    max-width: 162px;
    left: 0px;
    background-color: #191919;
    /* 	background-image:url('http://i68.tinypic.com/2rp4ncm.png'); */
    background-position: right top;
    background-size: 100%;
    border-right:1px solid #313131;
transition: all .4s ease-in-out;
    z-index:3;}
		` + firefoxCSS +
                            `
#sidemenu-content {
    height: 90%;
    padding-top: 30px;
    box-sizing: border-box;
    padding-left: 0px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #191919;
    /* background-image:url('http://i68.tinypic.com/2rp4ncm.png'); */
    background-position: right top;
    background-size: 100%;
    border-right:0px solid;}

#user-info {
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 20px 30px 20px 20px;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    background-color: #2a2a2a;
    display: none; visibility:hidden;}

@media screen and (max-width: 1000px) {
#sidemenu {
    left: -188px;transition: all .4s ease-in-out;}
}

#live-directory-wrapper {
    padding: 0;}

#top-buttons-wrapper {
    padding: 0;}

.logged-in #user-info {
    padding: 0;
    height: auto;
    text-align: center;
    visibility: hidden;
    display: none;}

#user-info button {
    opacity: .8;}

#user-info:hover button {
    opacity: 1;}

.logged-in #user-info > a {
    display: none;
    visibility:hidden;}

@media screen and (min-width: 1000px) {
#live-directory {
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    opacity: .8;
    margin-left: 24px;
    width: 150px;
    background-color:#111111;
    border:1px solid #313131;
    position: relative;
    top: -25px;}

#upgrade {
    height: 0px;
    line-height: 0px;
    font-size: 13px;
    opacity: .8;}

#live-directory:before {
    height: 8px;
    width: 8px;
    top: 0px;}

#upgrade {
    margin-top: 0px;
    visibility: hidden;
    display: none;}

#live-directory:hover, #upgrade:hover {
    opacity: 1;
    background-color:#222222;}
}

#sidemenu.llama-sidemenuCollapsed {
    min-width: 0px;
    max-width: 0px;
    border:0px;}


#llama-sidemenu-grabber {
    position: absolute;
    top: 47%;
    right: 0;
    left: 153px;
    background: #111111;
    color: #536165;
    z-index: 3;
    border-radius: 10px;
    border-right: 0px;
    border-bottom: 0px;
    border-top: 0px;
    height: 34px;
    padding-top: 19px;
    width: 16px;
    text-align: center;
transition: all .4s ease-in-out;
    border-left: #313131 1px solid;}

#llama-sidemenu-grabber:before {
    content: '';
    position: absolute;
    display: block;
    height: 0;
    width: 0;
    top: 50%;
    left: 50%;
    margin: -4px 0 0 -2px;
    border-width: 4px 4px 4px 0;
    border-style: solid;
    border-color: #cbcfcf;
    transition: .8s;}

#llama-sidemenu-grabber:hover {
    background: #333;
    color: #5c5c5c;
    cursor: pointer;}

.llama-sidemenuCollapsed #llama-sidemenu-grabber{
    border-radius: 0 10px 10px 0;
    right: -15px;
    left: -4px;}
#llama-sidemenu-grabber:before {border-color: transparent #cbcfcf;}

#sidemenu.llama-nightmode{
    background: #191919;}

.llama-nightmode #sidemenu-content::-webkit-scrollbar-track {
    background: transparent;}
#sidemenu-content::-webkit-scrollbar-track {
    background: transparent;}

.llama-nightmode #llama-sidemenu-grabber {
    background: #111111;}

.llama-nightmode #llama-sidemenu-grabber:hover {
    background: #333;
    color: #5c5c5c;}

.llama-sidemenuCollapsed #llama-sidemenu-grabber:before {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);}

.llama-nightmode #user-info {
    background: black;}

.llama-nightmode #user-info > button {
    background: #035268;
    color: #aaa;}

.llama-nightmode #user-info > button:hover {
    background: #0080a3;
    color: white;}

.llama-nightmode #sidemenu-content::-webkit-scrollbar-thumb {
    border: 1px solid #191919;
    width:50%;
    background-color: #111;}

.llama-nightmode #sidemenu-content::-webkit-scrollbar {
    width: 5px;}

		/*** ---                                START COLOR MODES                      --- ***/


		/***------------------------------------PINKKK SIDEMENU------------------------------------***/

#sidemenu.llama-pinkmode,
.llama-pinkmode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--pinkmode-lightbgcolor);}

.llama-pinkmode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--pinkmode-bgcolor);
    background-color: var(--pinkmode-bgcolor);
    width:50%;}

.llama-pinkmode #llama-sidemenu-grabber:before {
    border-color: transparent var(--pinkmode-bordercolor);}

#sidemenu.llama-pinkmode > #llama-sidemenu-grabber
{   background-color: var(--pinkmode-bgcolor);
    border-color: var(--pinkmode-bordercolor);}

#sidemenu.llama-pinkmode
{   background-color: var(--pinkmode-lightbgcolor);
    border-color: var(--pinkmode-bordercolor);}

#sidemenu.llama-pinkmode > #sidemenu-content
{    background-color: var(--pinkmode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-pinkmode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--pinkmode-bgcolor);
    border:1px solid var(--pinkmode-bordercolor);}

.llama-pinkmode #llama-sidemenu-grabber,
#chat-wrapper.llama-pinkmode
{    background-color: var(--pinkmode-bgcolor);}

		/***------------------------------------GREENNN SIDEMENU------------------------------------***/

#sidemenu.llama-greenmode,
.llama-greenmode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--greenmode-lightbgcolor);}

.llama-greenmode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--greenmode-bgcolor);
    background-color: var(--greenmode-bgcolor);
    width:50%;}

.llama-greenmode #llama-sidemenu-grabber:before {
    border-color: transparent var(--greenmode-bordercolor);}

#sidemenu.llama-greenmode > #llama-sidemenu-grabber
{   background-color: var(--greenmode-bgcolor);
    border-color: var(--greenmode-bordercolor);}

#sidemenu.llama-greenmode
{   background-color: var(--greenmode-lightbgcolor);
    border-color: var(--greenmode-bordercolor);}

#sidemenu.llama-greenmode > #sidemenu-content
{    background-color: var(--greenmode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-greenmode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--greenmode-bgcolor);
    border:1px solid var(--greenmode-bordercolor);}

.llama-greenmode #llama-sidemenu-grabber,
#chat-wrapper.llama-greenmode
{    background-color: var(--greenmode-bgcolor);}

		/***------------------------------------BLUEEE SIDEMENU------------------------------------***/

#sidemenu.llama-bluemode,
.llama-bluemode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--bluemode-lightbgcolor);}

.llama-bluemode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--bluemode-bgcolor);
    background-color: var(--bluemode-bgcolor);
    width:50%;}

.llama-bluemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--bluemode-bordercolor);}

#sidemenu.llama-bluemode > #llama-sidemenu-grabber
{   background-color: var(--bluemode-bgcolor);
    border-color: var(--bluemode-bordercolor);}

#sidemenu.llama-bluemode
{   background-color: var(--bluemode-lightbgcolor);
    border-color: var(--bluemode-bordercolor);}

#sidemenu.llama-bluemode > #sidemenu-content
{    background-color: var(--bluemode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-bluemode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--bluemode-bgcolor);
    border:1px solid var(--bluemode-bordercolor);}

.llama-bluemode #llama-sidemenu-grabber,
#chat-wrapper.llama-bluemode
{    background-color: var(--bluemode-bgcolor);}


		/***------------------------------------PURPLEEE SIDEMENU------------------------------------***/

#sidemenu.llama-purplemode,
.llama-purplemode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--purplemode-lightbgcolor);}

.llama-purplemode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--purplemode-bgcolor);
    background-color: var(--purplemode-bgcolor);
    width:50%;}

.llama-purplemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--purplemode-bordercolor);}

#sidemenu.llama-purplemode > #llama-sidemenu-grabber
{   background-color: var(--purplemode-bgcolor);
    border-color: var(--purplemode-bordercolor);}

#sidemenu.llama-purplemode
{   background-color: var(--purplemode-lightbgcolor);
    border-color: var(--purplemode-bordercolor);}

#sidemenu.llama-purplemode > #sidemenu-content
{    background-color: var(--purplemode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-purplemode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--purplemode-bgcolor);
    border:1px solid var(--purplemode-bordercolor);}

.llama-purplemode #llama-sidemenu-grabber,
#chat-wrapper.llama-purplemode
{    background-color: var(--purplemode-bgcolor);}

		/***------------------------------------ORANGEEE SIDEMENU------------------------------------***/

#sidemenu.llama-orangemode,
.llama-orangemode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--orangemode-lightbgcolor);}

.llama-orangemode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--orangemode-bgcolor);
    background-color: var(--orangemode-bgcolor);
    width:50%;}

.llama-orangemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--orangemode-bordercolor);}

#sidemenu.llama-orangemode > #llama-sidemenu-grabber
{   background-color: var(--orangemode-bgcolor);
    border-color: var(--orangemode-bordercolor);}

#sidemenu.llama-orangemode
{   background-color: var(--orangemode-lightbgcolor);
    border-color: var(--orangemode-bordercolor);}

#sidemenu.llama-orangemode > #sidemenu-content
{    background-color: var(--orangemode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-orangemode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--orangemode-bgcolor);
    border:1px solid var(--orangemode-bordercolor);}

.llama-orangemode #llama-sidemenu-grabber,
#chat-wrapper.llama-orangemode
{    background-color: var(--orangemode-bgcolor);}

		/***------------------------------------REDDD SIDEMENU------------------------------------***/

#sidemenu.llama-redmode,
.llama-redmode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--redmode-lightbgcolor);}

.llama-redmode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--redmode-bgcolor);
    background-color: var(--redmode-bgcolor);
    width:50%;}

.llama-redmode #llama-sidemenu-grabber:before {
    border-color: transparent var(--redmode-bordercolor);}

#sidemenu.llama-redmode > #llama-sidemenu-grabber
{   background-color: var(--redmode-bgcolor);
    border-color: var(--redmode-bordercolor);}

#sidemenu.llama-redmode
{   background-color: var(--redmode-lightbgcolor);
    border-color: var(--redmode-bordercolor);}

#sidemenu.llama-redmode > #sidemenu-content
{    background-color: var(--redmode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-redmode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--redmode-bgcolor);
    border:1px solid var(--redmode-bordercolor);}

.llama-redmode #llama-sidemenu-grabber,
#chat-wrapper.llama-redmode
{    background-color: var(--redmode-bgcolor);}

		/***------------------------------------DARKPURPLEEE SIDEMENU------------------------------------***/

#sidemenu.llama-darkpurplemode,
.llama-darkpurplemode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--darkpurplemode-lightbgcolor);}

.llama-darkpurplemode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--darkpurplemode-bgcolor);
    background-color: var(--darkpurplemode-bgcolor);
    width:50%;}

.llama-darkpurplemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--darkpurplemode-bordercolor);}

#sidemenu.llama-darkpurplemode > #llama-sidemenu-grabber
{   background-color: var(--darkpurplemode-bgcolor);
    border-color: var(--darkpurplemode-bordercolor);}

#sidemenu.llama-darkpurplemode
{   background-color: var(--darkpurplemode-lightbgcolor);
    border-color: var(--darkpurplemode-bordercolor);}

#sidemenu.llama-darkpurplemode > #sidemenu-content
{    background-color: var(--darkpurplemode-lightbgcolor);}

@media screen and (min-width: 1000px)
{.llama-darkpurplemode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--darkpurplemode-bgcolor);
    border:1px solid var(--darkpurplemode-bordercolor);}

.llama-darkpurplemode #llama-sidemenu-grabber,
#chat-wrapper.llama-darkpurplemode
{    background-color: var(--darkpurplemode-bgcolor);}

		/***------------------------------------WHITEEE SIDEMENU------------------------------------***/

#sidemenu.llama-whitemode,
.llama-whitemode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--whitemode-lightbgcolor);}

.llama-whitemode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--whitemode-bgcolor);
    background-color: var(--whitemode-bgcolor);
    width:50%;}

.llama-whitemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--whitemode-bordercolor);}

#sidemenu.llama-whitemode > #llama-sidemenu-grabber
{   background-color: var(--whitemode-bgcolor);
    border-color: var(--whitemode-bordercolor);}

#sidemenu.llama-whitemode
{   background-color: var(--whitemode-bgcolor);
    border-color: var(--whitemode-bordercolor);}

#sidemenu.llama-whitemode > #sidemenu-content
{    background-color: var(--whitemode-bgcolor);}

@media screen and (min-width: 1000px)
{.llama-whitemode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--whitemode-tcblue);
    border:1px solid var(--whitemode-bordercolor);}

.llama-whitemode #llama-sidemenu-grabber,
#chat-wrapper.llama-whitemode
{    background-color: var(--whitemode-bgcolor);}

		/***------------------------------------FEATUREONEEE SIDEMENU------------------------------------***/

#sidemenu.llama-featureonemode,
.llama-featureonemode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--featureonemode-lightbgcolor);}

.llama-featureonemode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--featureonemode-bgcolor);
    background-color: var(--featureonemode-bgcolor);
    width:50%;}

.llama-featureonemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--featureonemode-bordercolor);}

#sidemenu.llama-featureonemode > #llama-sidemenu-grabber
{   background-color: var(--featureonemode-bgcolor);
    border-color: var(--featureonemode-bordercolor);}

#sidemenu.llama-featureonemode,#sidemenu.llama-featureonemode {
    border-color: var(--featureonemode-bordercolor);
    background-image: var(--featureonemode-roombg);
    background-position: right center;
    background-size: cover;}

#sidemenu.llama-featureonemode > #sidemenu-content
{    background-color: transparent;}

@media screen and (min-width: 1000px)
{.llama-featureonemode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--featureonemode-tcblue);
    border:1px solid var(--featureonemode-bordercolor);}

.llama-featureonemode #llama-sidemenu-grabber,
#chat-wrapper.llama-featureonemode
{    background-color: var(--featureonemode-bgcolor);}

		/***------------------------------------FEATURETWOOO SIDEMENU------------------------------------***/

#sidemenu.llama-featuretwomode,
.llama-featuretwomode #sidemenu-content::-webkit-scrollbar-track
{   background: var(--featuretwomode-lightbgcolor);}

.llama-featuretwomode #sidemenu-content::-webkit-scrollbar-thumb
{   border-color: var(--featuretwomode-bgcolor);
    background-color: var(--featuretwomode-bgcolor);
    width:50%;}

.llama-featuretwomode #llama-sidemenu-grabber:before {
    border-color: transparent var(--featuretwomode-bordercolor);}

#sidemenu.llama-featuretwomode > #llama-sidemenu-grabber
{   background-color: var(--featuretwomode-bgcolor);
    border-color: var(--featuretwomode-bordercolor);}

#sidemenu.llama-featuretwomode,#sidemenu.llama-featuretwomode {
border-color: var(--featuretwomode-bordercolor);
    background-image: var(--featuretwomode-userbg);
    background-attachment: fixed;
background-position:left;
    background-size: 900px;
    background-repeat: no-repeat;}

#sidemenu.llama-featuretwomode > #sidemenu-content
{    background-color: transparent;}

@media screen and (min-width: 1000px)
{.llama-featuretwomode #live-directory
{   margin-left:10px;
    width:175px;
    background-color: var(--featuretwomode-tcblue);
    border:1px solid var(--featuretwomode-bordercolor);}

.llama-featuretwomode #llama-sidemenu-grabber,
#chat-wrapper.llama-featuretwomode
{    background-color: var(--featuretwomode-bgcolor);}

		/***------------------------------------FEATURETHREEE SIDEMENU------------------------------------***/

#sidemenu.llama-featurethreemode,
.llama-featurethreemode #sidemenu-content::-webkit-scrollbar-track {
   background: var(--featurethreemode-lightbgcolor);}

.llama-featurethreemode #sidemenu-content::-webkit-scrollbar-thumb {
    border-color: var(--featurethreemode-bgcolor);
    background-color: var(--featurethreemode-bgcolor);
    width:50%;}

.llama-featurethreemode #llama-sidemenu-grabber:before {
    border-color: transparent var(--featurethreemode-bordercolor);display:none;}

#sidemenu.llama-featurethreemode > #llama-sidemenu-grabber {
background-image: var(--featurethreemode-squid3);
    background-size: 25px;
    background-repeat: no-repeat;
    background-color: transparent;
    border-color: var(--featurethreemode-bordercolor);
    height: 5px;
    width: 30px;
left: 145px;}

#sidemenu.llama-featurethreemode > #llama-sidemenu-grabber:hover {background-color:#00ff00;}

.llama-featurethreemode.llama-sidemenuCollapsed #llama-sidemenu-grabber {
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
border-radius:50px;
left: -15px !important;
}

#sidemenu.llama-featurethreemode,#sidemenu.llama-featurethreemode {
    background-color:transparent;
    border: 0px;
    background-image: var(--featurethreemode-userbg);
    background-attachment: fixed;
    background-position:left;
    border-radius: 30px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
height: 99%;}

#sidemenu.llama-featurethreemode > #sidemenu-content {
    background-color: transparent;}

@media screen and (min-width: 1000px)
{.llama-featurethreemode #live-directory {
background-image: var(--featurethreemode-roombg);
background-position:top left;
      margin-left: 5px;
    width: 152px;
    background-color: #6cff00;
color:#000000;
    border:0px solid var(--featurethreemode-bordercolor);}
.llama-featurethreemode #live-directory:before {
color:#000000;
border-color:#000000;
}
.llama-featurethreemode #live-directory:hover
{color:#51bc02;border:1px solid #51bc02;
}
.llama-featurethreemode #live-directory:before::hover
{color:#51bc02;
}

.llama-featurethreemode #llama-sidemenu-grabber,
#chat-wrapper.llama-featurethreemode
{    background-color: var(--featurethreemode-bgcolor);}
	</style>
	`;
                        sidemenuCSS.insertAdjacentHTML(insertPosition, sidemenuCSShtml);
                    }

                    { // videomoderationCSS
                        videomoderationCSShtml = `
	<style id="videomoderationCSS" scope="tc-video-moderation">` + globalCSS + `
#moderatorlist {
    padding-left: 0;
    z-index: 7;
    max-height:22px;}

#moderatorlist:hover {
    position: absolute;
    background: white;
    z-index: 1000;
    width: 300px;
    min-height: 155px;
    flex-direction: column;
    position: absolute;
    background: #111;
    z-index: 1000;
    width: 350px;
    max-height: fit-content!important;
    left: 15px;
    border-radius: 13px;
    border: #fff 1px solid;
    top: 30px;
    left:0px;}

#moderatorlist:after {
    top: 2px;
    right: 1px;}

#moderatorlist:hover #header {
	height: unset;
	top: unset;
    padding-left:0 !important;}

#moderatorlist > #header {
    top: 2px !important;
    width: 100%;
    height:20px;}

#moderatorlist > #header > span > button {
    border-radius:10px;
    width: unset !important;
    height:unset !important;
    background-color: unset;}

#moderatorlist.llama-nightmode > #header > span > button {
    background: var(--nightmodeBlack-bgcolor);}

#moderatorlist.llama-nightmode:hover {
	border-color: #333;}

.video:after{
    border:0px;}

	</style>
	`;
                        videomoderationCSS.insertAdjacentHTML(insertPosition, videomoderationCSShtml);
                    }

                    { // webappCSS
                        webappCSShtml = `
	<style id="webappCSS" scope="tinychat-webrtc-app">` + globalCSS + `
.input-menu{display:none;}


#room {
    padding: 0;
    padding-left: 80px;}

#room.llama-sidemenuCollapsed {
    margin-left: -161px;
    width: 110%;}



@media screen and (max-width: 1000px) {
:host > #room {
    padding-left: 82px;}
}

@media screen and (max-width: 600px) {
:host > #room {
    padding-left: 0;width: 450px !important;}

#room-content {padding-top:0px !important;}
}

#room-content.llama-chatbelow {
    flex-direction: column !important;
    margin-bottom: -10px !important;}




.llama-nightmode tc-videolist { background: var(--nightmode-bgcolor); }
.llama-nightmode.blacknight tc-videolist { background: transparent; }

	</style>
	`;
                        webappCSS.insertAdjacentHTML(insertPosition, webappCSShtml);
                    }
                } catch (e) {
                    tcl("error injectCSS: " + e.message);
                }
            }

            function injectElements() {
                try {
                    headerGrabberParElem = titleElem.querySelector("#room-header");
                    headerGrabberParElem.insertAdjacentHTML("beforeend", `<div id="llama-header-grabber"></div>`);
                    headerGrabberElem = headerGrabberParElem.querySelector("#llama-header-grabber");
                    headerGrabberElem.addEventListener("click", headerGrabber);

                    sidemenuOverlayElem = bodyElem.querySelector("#menu-icon");
                    sidemenuOverlayElem.addEventListener("click", function() {
                        sidemenuOverlayElem.classList.toggle("expanded");
                    });

                    chatlogButtonsHTML = `
		<div id="llama-chatlogButtons">
			<div id="llama-chatlogSave" class="llama-chatlogBut">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
						<path d="m0,50l50,-50l50,50l-25,0l0,50l-50,0l0,-50l-25,0z"></path>
					</svg>
				</span><!-- ⇩ -->
				<span class="label">download</span>
			</div>
			<div id="llama-chatlogView" class="llama-chatlogBut">
				<span class="icon">☰</span>
				<span class="label">view</span>
			</div>
			<div id="llama-chatlogDisplay">
				<textarea spellcheck="false"></textarea>
				<div id="close">✕</div>
			</div>
		</div>`;

                    selectAllButton = chatlogElem.querySelector("#chat-wrapper").insertAdjacentHTML("afterbegin", chatlogButtonsHTML);
                    chatlogElem.querySelector("#llama-chatlogSave").addEventListener("click", function() {
                        copyChatlog("download")
                    });
                    chatlogElem.querySelector("#llama-chatlogView").addEventListener("click", function() {
                        copyChatlog("view")
                    });
                    chatlogElem.querySelector("#llama-chatlogDisplay #close").addEventListener("click", function() {
                        copyChatlog("close")
                    });

                    if (!isPaidAccount) {
                        sidemenuGrabberParElem = sidemenuElem.querySelector("#sidemenu");
                        sidemenuGrabberElem = document.createElement("div");
                        sidemenuGrabberElem.setAttribute("id", "llama-sidemenu-grabber");
                        sidemenuGrabberElem.innerHTML = "";
                        sidemenuGrabberElem.addEventListener("click", sidemenuGrabber);
                        sidemenuGrabberParElem.appendChild(sidemenuGrabberElem);
                        sidemenuGrabberElem = sidemenuElem.querySelector("#llama-sidemenu-grabber");
                    }
                } catch (e) {
                    tcl("error injectElements: " + e.message);
                }
            }

            function sidemenuGrabber() {
                try {
                    sidemenuGrabberParElem.classList.toggle("llama-sidemenuCollapsed");
                    sidemenuGrabberParElem.classList.contains("llama-sidemenuCollapsed") ? sidemenuGrabberElem.innerHTML = "" : sidemenuGrabberElem.innerHTML = "";

                    userlistElem.querySelector("#userlist").classList.toggle("llama-sidemenuCollapsed");
                    videolistElem.querySelector("#videolist").classList.toggle("llama-sidemenuCollapsed");
                    webappElem.querySelector("#room").classList.toggle("llama-sidemenuCollapsed");
                    bodyElem.classList.toggle("llama-sidemenuCollapsed");
                    titleElem.querySelector("#llama-themes").classList.toggle("llama-sidemenuCollapsed");
                    titleElem.querySelector("#llama-settings-miniyt").classList.toggle("llama-sidemenuCollapsed");
                    titleElem.querySelector("#room-header").classList.toggle("llama-sidemenuCollapsed");
                } catch (e) {
                    tcl("error sidemenuGrabber: " + e.message);
                }
            }

            function chatlogGrabber() {
                try {
                    chatlogGrabberParElem.classList.toggle("llama-chatCollapsed");
                    chatlogGrabberParElem.classList.contains("llama-chatCollapsed") ? chatlogGrabberElem.innerHTML = "" : chatlogGrabberElem.innerHTML = "";
                } catch (e) {
                    tcl("error sidemenuGrabber: " + e.message);
                }
            }

            function headerGrabber() {
                try {
                    headerGrabberParElem.classList.toggle("llama-headerCollapsed");
                    headerGrabberParElem.classList.contains("llama-headerCollapsed") ? headerGrabberElem.innerHTML = "" : headerGrabberElem.innerHTML = "";
                } catch (e) {
                    tcl("error headerGrabber: " + e.message);
                }
            }

            function updateScroll() {
                try {
                    scrollbox.scrollTop = scrollbox.scrollHeight;
                    scrollbox.scrollTop = scrollbox.scrollTop + 5;
                } catch (e) {
                    tcl("error updateScroll: " + e.message);
                }
            }

            function userHasScrolled(e) {
                try {
                    var scrollwheelAmount = e.deltaY;

                    if (scrollwheelAmount < 0) {
                        autoScrollStatus = false;
                        totalScrolledUp += scrollwheelAmount * -1;
                    } else {
                        totalScrolledUp -= scrollwheelAmount;
                    }

                    if (autoScrollStatus === false && scrollbox.scrollHeight - scrollbox.scrollTop == scrollbox.offsetHeight) {
                        autoScrollStatus = true;
                        totalScrolledUp = 0;
                    }
                } catch (e) {
                    tcl("error userHasScrolled: " + e.message);
                }
            }

            function newMessageAdded() {
                try {
                    if (autoScrollStatus === true && settingsQuick["Autoscroll"]) {
                        updateScroll();
                    }
                    timestampAdd();
                    messageParser();
                } catch (e) {
                    tcl("error newMessageAdded: " + e.message);
                }
            }

            function userContextmenuUpdated() {
                try {
                    var elemBottom = 0;
                    var topPos = userContextmenuCSS.getBoundingClientRect().top;
                    var elemBottom = topPos + userContextmenuCSS.offsetHeight;
                    if (elemBottom > (window.innerHeight - 82)) {
                        // userContextmenuCSS.style.top = (userContextmenuCSS.style.top - userlistElem.querySelector("#userlist").scrollTop - 200) + "px";
                        // userContextmenuCSS.style.top = (userlistElem.querySelector("#userlist").scrollTop - window.innerHeight) + "px";
                        userContextmenuCSS.style.top = (window.innerHeight - 82 - userContextmenuCSS.offsetHeight - 15) + "px";
                        // tcl("Change: " + userContextmenuCSS.style.top);
                    }

                    // tcl("elemBottom: " + elemBottom + ". Max: " + (window.innerHeight - 82) + ". offsetHeight: " + userContextmenuCSS.offsetHeight + ". New top: " + (window.innerHeight - 82 - userContextmenuCSS.offsetHeight));
                } catch (e) {
                    tcl("error userContextmenuUpdated: " + e.message);
                }
            }

            function messageParserCheckCSS() {
                try {
                    var messages = chatlogElem.querySelectorAll(messageQueryString);
                    var messagesAmount = messages.length;
                    chatboxHeight = chatlogElem.querySelector("#chat").offsetHeight;
                    var messagesToCheck = messageHeight ? parseInt(chatboxHeight / messageHeight) + 3 : 20;

                    if (messagesAmount > 0) {
                        for (i = messagesAmount - 1; i > ((messagesAmount - messagesToCheck) - 1); i--) {
                            if (i == 0) break;
                            var tcMessageHtmlElem = messages[i].querySelector("tc-message-html").shadowRoot;
                            if (!tcMessageHtmlElem.querySelector("#messageCSS")) tcMessageHtmlElem.appendChild(messageParserAddCSS());
                            if (settingsQuick["NightMode"]) tcMessageHtmlElem.querySelector("#html").classList.add("llama-nightmode");
                            if (settingsQuick["NightModeBlack"]) tcMessageHtmlElem.querySelector("#html").classList.add("blacknight");
                        }
                    }
                } catch (e) {
                    tcl("error messageParserCheckCSS: " + e.message);
                }
            }

            function messageParserAddCSS(elem = null) {
                try {
                    var node = document.createElement("style");
                    var textnode = document.createTextNode(messageCSS);
                    node.appendChild(textnode);
                    node.setAttribute("id", "messageCSS");

                    if (elem) {
                        elem.appendChild(node);
                    } else {
                        return node;
                    }
                } catch (e) {
                    tcl("error messageParserAddCSS: " + e.message);
                }
            }

            function messageParser() {
                try {
                    latestMessageElem = chatlogElem.querySelector(messageQueryString + ":last-of-type");

                    var typeSystem = false;

                    if (latestMessageElem != null) {
                        if (!messageHeight) {
                            messageHeight = latestMessageElem.scrollHeight;
                            chatboxHeight = chatlogElem.querySelector("#chat").offsetHeight;
                        }

                        if (latestMessageElem.classList.contains("system")) typeSystem = true;
                        latestMessageElem.setAttribute("id", "msg-" + messageCount);
                        messageCount++;

                        if (!typeSystem) {
                            var latestMessageNickElem = latestMessageElem.querySelector(".nickname");
                            var latestMessageNick = latestMessageNickElem.innerHTML;
                        } else {
                            latestMessageNick = "&system";
                        }

                        tcMessageHtmlElem = latestMessageElem.querySelector("tc-message-html").shadowRoot;
                        latestMessageContentElem = tcMessageHtmlElem.querySelector("#html");

                        if (!tcMessageHtmlElem.querySelector("#messageCSS")) {
                            messageParserAddCSS(tcMessageHtmlElem);
                        }
                        if (settingsQuick["NightMode"]) latestMessageContentElem.classList.add("llama-nightmode");
                        if (settingsQuick["NightModeBlack"]) latestMessageContentElem.classList.add("blacknight");


                        latestMessageContent = latestMessageContentElem.innerHTML;

                        latestMessageContent.includes(" banned ") || latestMessageContent.includes(" kicked ") ? latestMessageElem.classList.add("dontHide") : void(0);

                        if (settingsQuick["MentionsMonitor"]) {
                            if (!(settingMentions.length == 1 && settingMentions[0] == "")) {
                                for (i = 0; i < settingMentions.length; i++) {
                                    if (latestMessageContent.toLowerCase().includes(settingMentions[i].toLowerCase())) {
                                        latestMessageContentElem.classList.add("llama-mention-message");
                                        if (settingsQuick["PinkMode"]) {
                                            pinkPop.play();
                                        }
                                        if (settingsQuick["FeatureOneMode"]) {
                                            weedPop.play();
                                        } else {
                                            audioPop.play();
                                        }
                                        tcl('MENTION: "' + settingMentions[i] + '" : ' + latestMessageContent);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {
                    tcl("error messageParser: " + e.message);
                }
            }


            var messagesMO = new MutationObserver(function(e) {
                if (e[0].addedNodes) newMessageAdded();
            });
            messagesMO.observe(chatlogElem.querySelector("#chat-content"), {
                childList: true
            });

            var camsMO = new MutationObserver(function(e) {
                if (e[0].addedNodes) newCamAdded();
            });
            camsMO.observe(videolistElem.querySelector(".videos-items:last-child"), {
                childList: true
            });

            var userContextmenuMO = new MutationObserver(function(e) {
                if (e[0].addedNodes) userContextmenuUpdated();
            });
            userContextmenuMO.observe(userContextmenuCSS, {
                attributes: true
            });

            var chatTextboxMO = new MutationObserver(function(e) {
                if (e[0].addedNodes) chatboxSwitch();
            });
            chatTextboxMO.observe(chatlogElem.querySelector("#chat-instant"), {
                attributes: true,
                attributeFilter: ['class'],
                childList: false,
                characterData: false
            });

            var userlistMO = new MutationObserver(function(e) {
                if (e[0].addedNodes) newUserAdded();
            });
            userlistMO.observe(userlistElem.querySelector("#userlist"), {
                childList: true
            });

            function chatboxSwitch() {
                messageParserCheckCSS();
                return;

                // if (chatlistElem.querySelector("#chat-instant-button")) chatlistElem.querySelector("#chat-instant-button").classList.add("llama-loading");
                try {
                    chatboxPM = (chatlogElem.querySelector("#chat-instant").getAttribute("class") == "show");
                    chatboxPM ? chatlogCSS.classList.add("llama-chatboxPM") : chatlogCSS.classList.remove("llama-chatboxPM");
                    messageParserCheckCSS();
                } catch (e) {
                    tcl("error chatboxSwitch: " + e.message)
                };
            }

            function timestampAdd(opt = null) {
                try {
                    var SHOW_SECONDS = true;

                    var date = new Date();
                    var hours = date.getHours();
                    var minutes = date.getMinutes().toString();
                    var secs = date.getSeconds().toString();

                    if (hours > 11) {
                        hours = (hours % 12 || 12);
                        var period = "pm";
                    } else {
                        var period = "am";
                    }

                    if (hours == "0") {
                        hours = "12";
                    }
                    if (minutes == "0") {
                        minutes = "00";
                    }
                    if (minutes.length == 1) {
                        minutes = "0" + minutes;
                    }
                    if (secs.length == 1) {
                        secs = "0" + secs;
                    }

                    if (SHOW_SECONDS == true) {
                        var timestamp = hours + ":" + minutes + ":" + secs + "" + period;
                    } else {
                        var timestamp = hours + ":" + minutes + period;
                    }

                    if (opt == "return") return;

                    var queryString = messageQueryString + ".common:last-of-type .nickname";
                    if (chatlogElem.querySelector(queryString) != null) {
                        var recentMsgNickname = chatlogElem.querySelector(queryString);
                        recentMsgNickname.insertAdjacentHTML("afterend", "<span id='timestamp'> " + timestamp + "</span>");
                    }
                } catch (e) {
                    tcl("error timestampAdd: " + e.message);
                }
            }

            function newUserAdded(opt = null) {
                try {
                    if (!userlistElem.querySelector("#userlist .list-item")) return;
                    var usersElems = userlistElem.querySelectorAll("#userlist .list-item");
                    userCount = usersElems.length;

                    setTimeout(function() {
                        for (i = 0; i < usersElems.length; i++) {
                            var userNickItem = usersElems[i].querySelector(".nickname");
                            var userNick = userNickItem.innerHTML;

                            userNickItem.classList.remove("llama-myNick");
                            //if (userNick == myNick) {
                            //	userNickItem.classList.add("llama-myNick");
                            //}
                        }
                    }, 500);

                    if (opt == "scanOnly") {
                        return;
                    } else {
                        if (!userlistElem.querySelector("#llama-userCount")) {
                            userCountParElem = userlistElem.querySelector("#header > span");
                            userCountElem = document.createElement("span");
                            userCountElem.setAttribute("id", "llama-userCount");
                            userCountElem.innerHTML = "(" + userCount + ")";
                            userCountParElem.appendChild(userCountElem);
                            userCountElem = userlistElem.querySelector("#llama-userCount");
                        } else {
                            userCountElem.innerHTML = "(" + userCount + ")";
                        }
                    }
                } catch (e) {
                    tcl("error newUserAdded: " + e.message);
                }
            }

            function newCamAdded() {
                try {
                    if (videolistElem.querySelector(camQueryString)) var camElems = videolistElem.querySelectorAll(camQueryString);
                    else return;

                    camsCount = 0;

                    for (i = 0; i < camElems.length; i++) {
                        camsCount = i + 1;
                        var camItem = camElems[i].querySelector("tc-video-item").shadowRoot;
                        var camItemCSS = camItem.querySelector(".video");
                        if (settingsQuick["NightMode"]) camItemCSS.classList.add("llama-nightmode");
                        else camItemCSS.classList.remove("llama-nightmode");
                        if (settingsQuick["NightModeBlack"]) camItemCSS.classList.add("blacknight");
                        else camItemCSS.classList.remove("blacknight");
                        if (settingsQuick["BorderlessCams"]) camItemCSS.classList.add("llama-borderlesscams");
                        else camItemCSS.classList.remove("llama-borderlesscams");

                        if (!camItem.querySelector("#camItemCSS")) camItemCSS.insertAdjacentHTML("afterbegin", camItemCSShtml);

                        var camName = camItem.querySelector(".nickname").getAttribute("title");
                        camElems[i].setAttribute("id", "camUser-" + camName);

                        // Cam maxing
                        try {
                            if (camItem.querySelector(".icon-llama-max")) {
                                var maxbutton = camItem.querySelector(".icon-llama-max");
                                maxbutton.parentNode.removeChild(maxbutton);
                            }
                            camItem.querySelector(".icon-resize").insertAdjacentHTML("beforebegin", camMaxButtonHtml);
                            camItem.querySelector(".icon-llama-max").setAttribute("id", "maxbutton-" + camName);
                            var maxCamVar = function(maxCamVarArg) {
                                videolistElem.querySelector(".videos-items:last-child").classList.remove("llama-max-noAnim");
                                maximizeCam(maxCamVarArg, "buttonpress");
                            };
                            camItem.querySelector("#maxbutton-" + camName).addEventListener("click", maxCamVar.bind(this, camName));

                            if (camMaxedCurrent == camName) {
                                camElems[i].classList.add("llama-maxedCam");
                                camElems[i].parentElement.classList.add("llama-max");
                            }
                            if (!videolistElem.querySelector(".llama-maxedCam")) camElems[i].parentElement.classList.remove("llama-max");

                            if (videolistCSS.querySelector("#camMaxCSS")) {
                                var maxcss = videolistCSS.querySelector("#camMaxCSS");
                                maxcss.parentNode.removeChild(maxcss);
                            }
                            videolistCSS.insertAdjacentHTML("beforeend", camMaxCSShtml);

                        } catch (e) {
                            tcl("error newCamAdded: " + e.message);
                        }

                        // Cam closing
                        try {
                            if (camItem.querySelector(".icon-llama-close")) {
                                var closebutton = camItem.querySelector(".icon-llama-close");
                                closebutton.parentNode.removeChild(closebutton);
                            }
                            camItem.querySelector(".icon-resize").insertAdjacentHTML("beforebegin", camCloseButtonHtml);
                            camItem.querySelector(".icon-llama-close").setAttribute("id", "closebutton-" + camName);
                            var closeCamVar = function(closeCamVarArg) {
                                videolistElem.querySelector(".videos-items:last-child").classList.remove("llama-close-noAnim");
                                closeimizeCam(closeCamVarArg, "buttonpress2");
                            };
                            camItem.querySelector("#closebutton-" + camName).addEventListener("click", closeCamVar.bind(this, camName));

                            if (camClosedCurrent == camName) {
                                camElems[i].classList.add("llama-closedCam");
                                camElems[i].parentElement.classList.add("llama-close");
                            }
                            if (!videolistElem.querySelector(".llama-closedCam")) camElems[i].parentElement.classList.remove("llama-close");

                            if (videolistCSS.querySelector("#camCloseCSS")) {
                                var closecss = videolistCSS.querySelector("#camCloseCSS");
                                closecss.parentNode.removeChild(closecss);
                            }
                            videolistCSS.insertAdjacentHTML("beforeend", camCloseCSShtml);

                        } catch (e) {
                            tcl("error newCamAdded: " + e.message);
                        }

                        if (settingsQuick["HideAllCams"] == "true" || urlPars.get("hideallcams") == "") {
                            camItem.querySelector("button.icon-visibility").click();
                            tcl("Cam hide: " + camName);
                        }

                        camCounter(camElems[i]);
                    }
                } catch (e) {
                    tcl("error newCamAdded: " + e.message);
                }
            }

            function maximizeCam(camName, opt = null) {
                try {
                    if (camName != camMaxedCurrent && camMaxedCurrent != null) {
                        maximizeCam(camMaxedCurrent);
                        maximizeCam(camName);
                        return;
                    }

                    var camElem = videolistElem.querySelector("#camUser-" + camName);
                    if (camElem == null) {
                        camMaxedCurrent = null;
                        return;
                    }

                    if (opt == "bbuttonpress") {
                        camElem.parentElement.classList.remove("llama-max-noAnim");
                    }

                    if (camElem.classList.contains("llama-maxedCam")) {
                        camElem.classList.remove("llama-maxedCam");
                        camElem.parentElement.classList.remove("llama-max");
                        camMaxedCurrent = null;
                    } else {
                        camElem.classList.add("llama-maxedCam");
                        camElem.parentElement.classList.add("llama-max");
                        camMaxedCurrent = camName;
                        setTimeout(function() {
                            camElem.parentElement.classList.add("llama-max-noAnim");
                        }, 500);
                    }
                    camCounter(camElem);
                } catch (e) {
                    tcl("error maximizeCam: " + e.message);
                }
            }

            function closeimizeCam(camName, opt = null) {
                try {
                    if (camName != camClosedCurrent && camClosedCurrent != null) {
                        closeimizeCam(camClosedCurrent);
                        closeimizeCam(camName);
                        return;
                    }

                    var camElem = videolistElem.querySelector("#camUser-" + camName);
                    if (camElem == null) {
                        camClosedCurrent = null;
                        return;
                    }

                    if (opt == "bbuttonpress2") {
                        camElem.parentElement.classList.remove("llama-close-noAnim");
                    }

                    if (camElem.classList.contains("llama-closedCam")) {

                        camElem.parentElement.classList.remove("llama-close");
                        camClosedCurrent = null;
                    } else {
                        camElem.classList.add("llama-closedCam");
                        camElem.parentElement.classList.add("llama-close");
                        camClosedCurrent = camName;
                        setTimeout(function() {
                            camElem.parentElement.classList.add("llama-close-noAnim");
                        }, 500);
                    }
                    camCounter(camElem);
                } catch (e) {
                    tcl("error closeimizeCam: " + e.message);
                }
            }

            function closeimizeYoutube(camName, opt = null) {
                try {
                    if (camName != camClosedCurrent && camClosedCurrent != null) {
                        closeimizeCam(camClosedCurrent);
                        closeimizeCam(camName);
                        return;
                    }

                    var camElem = videolistElem.querySelector("#camUser-" + camName);
                    if (camElem == null) {
                        camClosedCurrent = null;
                        return;
                    }

                    if (opt == "bbuttonpress2") {
                        camElem.parentElement.classList.remove("llama-close-noAnim");
                    }

                    if (camElem.classList.contains("llama-closedCam")) {
                        camElem.classList.remove("llama-closedCam");
                        camElem.parentElement.classList.remove("llama-close");
                        camClosedCurrent = null;
                    } else {
                        camElem.classList.add("llama-closedCam");
                        camElem.parentElement.classList.add("llama-close");
                        camClosedCurrent = camName;
                        setTimeout(function() {
                            camElem.parentElement.classList.add("llama-close-noAnim");
                        }, 500);
                    }
                    camCounter(camElem);
                } catch (e) {
                    tcl("error closeimizeCam: " + e.message);
                }
            }

            function camCounter(camElem) {
                try {
                    if (camsCount == 12) {
                        camElem.parentElement.classList.remove("llama-camCount10-11");
                        camElem.parentElement.classList.remove("llama-camCount2");

                        camElem.parentElement.classList.add("llama-camCount12");
                    } else if (camsCount > 9 && camsCount < 12) {
                        camElem.parentElement.classList.remove("llama-camCount12");
                        camElem.parentElement.classList.remove("llama-camCount2");

                        camElem.parentElement.classList.add("llama-camCount10-11");
                    } else if (camsCount == 2) {
                        camElem.parentElement.classList.remove("llama-camCount12");
                        camElem.parentElement.classList.remove("llama-camCount10-11");

                        camElem.parentElement.classList.add("llama-camCount2");
                    } else {
                        camElem.parentElement.classList.remove("llama-camCount12");
                        camElem.parentElement.classList.remove("llama-camCount10-11");
                        camElem.parentElement.classList.remove("llama-camCount2");
                    }
                } catch (e) {
                    tcl("error camCounter: " + e.message);
                }
            }
        } catch (e) {
            tcl("error runLLAMA: " + e.message);
        }
        /* End main function */
        return {
            newUserAdded: newUserAdded
        };
    }

    function tcl(m) {
        try {
            if (m.includes("error ")) {
                var m = m.split("error ")[1];
                console.log("%LLAMA " + "%cerror" + "%c" + ": " + m, "font-weight: bold; color: #53b6ef;", "color: red;", "");
            } else {
                console.log("%LLAMA: " + "%c" + m, "font-weight: bold; color: #53b6ef;", "");
            }
        } catch (e) {
            console.log("------ LLAMA error tcl: " + e.message);
        }
    }

    function play() {
        try {
            var audio = document.getElementById("audio");
            audio.play();
        } catch (e) {
            console.log("Audio Error" + e.message);
        }
    }

    function LLAMAwsParser() {
        try {
            wsdata = [];
            chatlogMain = "";
            userlistLog = {};
            usernamesLog = [];
            userlistLogQuits = {};
            newline = `
`;
            WebSocket.prototype._send = WebSocket.prototype.send;
            WebSocket.prototype.send = function(data) {
                try {
                    this._send(data);
                    this.addEventListener('message', function(msg) {
                        if (msg.data.includes('"tc":"joined"')) {
                            var joined = JSON.parse(msg.data);
                            myNick = joined["self"]["nick"];
                            myHandle = joined["self"]["handle"];
                        }
                        if (msg.data.includes('"tc":"msg"') && msg.data.includes('"handle"')) {
                            var messageArr = JSON.parse(msg.data);
                            var handle = messageArr["handle"];
                            chatlogAdd(userlistLog[handle]["nick"] + ": " + messageArr["text"]);
                        }
                        if (msg.data.includes('"item"')) {
                            if (msg.data.includes('tc":"yut_play"')) {
                                var youtubeArr = JSON.parse(msg.data);
                                var id = youtubeArr["item"]["id"];
                                chatlogAdd("- YouTube video started: " + "https://youtube.com/watch?v=" + id);
                            }
                            if (msg.data.includes('tc":"yut_stop"')) chatlogAdd("- YouTube video stopped.");
                        }
                        if (msg.data.match(/"tc":"(?:un)?publish"/)) {
                            var publishArr = JSON.parse(msg.data);
                            var action = (publishArr["tc"] == "publish") ? "is" : "stopped";
                            var handle = publishArr["handle"];

                            if (userlistLog[handle]) var nick = userlistLog[handle]["nick"];
                            else var nick = userlistLogQuits[handle]["nick"];

                            chatlogAdd("- " + nick + " " + action + " broadcasting.");
                        }
                        if (msg.data.includes('"tc":"sysmsg"')) {
                            var systext = JSON.parse(msg.data)["text"];
                            chatlogAdd("-- " + systext);
                        }
                        if (msg.data.includes('"tc":"userlist"')) {
                            userlistArr = JSON.parse(msg.data)["users"];
                            for (i = 0; i < userlistArr.length; i++) {
                                var nick = userlistArr[i]["nick"];
                                var handle = userlistArr[i]["handle"];
                                var username = userlistArr[i]["username"];
                                var isMod = userlistArr[i]["mod"];
                                userlistLog[handle] = {
                                    "nick": nick,
                                    "username": username,
                                    "mod": isMod
                                };
                                var isMod = isMod == true ? "[MOD]" : "";
                                var logtext = username == "" ? nick : nick + "(" + username + ")";
                                logtext += isMod;
                                usernamesLog.push(logtext);
                            }

                            userlistInitial = usernamesLog.join(', ');
                            usersCountInitial = usernamesLog.length;
                        }
                        if (msg.data.includes('"tc":"join","username":"')) {
                            var userArr = JSON.parse(msg.data)
                            var nick = userArr["nick"];
                            var handle = userArr["handle"];
                            var username = userArr["username"];
                            var isMod = userArr["mod"];
                            userlistLog[handle] = {
                                "nick": nick,
                                "username": username,
                                "mod": isMod
                            };
                        }
                        if (msg.data.includes('"tc":"quit"')) {
                            var userArr = JSON.parse(msg.data);
                            var handle = userArr["handle"];
                            userlistLogQuits[handle] = userlistLog[handle];
                            delete userlistLog[handle];
                        }
                        if (msg.data.includes('"tc":"nick"')) {
                            var userArr = JSON.parse(msg.data);
                            var handle = userArr["handle"];
                            var nick = userArr["nick"];

                            userlistLog[handle]["nick"] = nick;
                            if (handle == myHandle) {
                                myNick = nick;
                            }
                            LLAMAapp.newUserAdded("scanOnly");
                        }
                    }, false);
                    this.send = function(data) {
                        this._send(data);
                    };

                } catch (e) {
                    tcl("error WebSocket.prototype.send: " + e.message);
                }
            }

            function chatlogAdd(arg) {
                var timestamp = new Date().toLocaleTimeString('en-US', {
                    hour12: false
                });
                chatlogMain += "[" + timestamp + "] " + arg + newline;
            }

        } catch (e) {
            tcl("error LLAMAwsParser: " + e.message);
        }
    }



} else

{
    (function() {
        var css = [
            ".left-arrow.active:before, .right-arrow.active:before {",
            "    border-color: #111111 !important;",
            "}",
            ".left-arrow:before, .right-arrow:before {",
            "    border-color: #111111 !important;",
            "}",
            "body {",
            "        background-color: #333333 !important;",
            "}",
            "",
            "#welcome-wrapper {",
            "    width: 100% !important;",
            "    max-width: none !important;",
            "    padding: 0 !important;",
            "    border-bottom: 1px solid #e5e5e5 !important;",
            "    box-sizing: border-box !important;",
            "    background-color: #666666 !important;",
            "    height: 10px !important;",
            "    display: none !important;",
            "}",
            "#navigation {",
            "    position: relative !important;",
            "    display: block !important;",
            "    top: -25px !important;",
            "    left: 0px !important;",
            "    right: 30px !important;",
            "    margin: 0 auto !important;",
            "    font-size: 0 !important;",
            "    text-align: center !important;",
            "    z-index: 6 !important;",
            "    width: 650px !important;",
            "}",
            "#promoted-wrapper > #promote-button {",
            "    max-width: 200px !important;",
            "    margin: 10px auto 0px !important;",

            "}",
            "#nav-static-wrapper {",
            "    position: relative !important;",
            "    height: 87px !important;",
            "    width: 100% !important;",
            "    background-color: #222222 !important;",
            "    opacity: 0.95 !important;",
            "    z-index: 2 !important;",
            "    border:0px !important;",
            "}",
            "#nav-static {",
            "    position: relative !important;",
            "    height: 100% !important;",
            "    max-width: 1300px !important;",
            "    margin: 0 auto !important;",
            "    padding: 0 30px !important;",
            "    border-bottom: 2px solid #000 !important;",
            "    box-sizing: border-box !important;",
            "    line-height: 87px !important;",
            "    vertical-align: middle !important;",
            "    border-radius:10px !important;",
            "}",
            "#nav-fixed {",
            "    position: relative !important;",
            "    height: 60px !important;",
            "    max-width: 1300px !important;",
            "    margin: auto !important;",
            "    padding: 0 30px !important;",
            "    border-bottom: 1px solid #111111 !important;",
            "    line-height: 60px !important;",
            "}",
            "#nav-fixed-wrapper {",
            "    position: fixed !important;",
            "    height: 60px !important;",
            "    width: 100% !important;",
            "    top: -400px !important;",
            "    left: 0 !important;",
            "    font-family: \"Open Sans\" !important;",
            "    background-color: #111111 !important;",
            "    opacity: 0.95 !important;",
            "    z-index: 2 !important;",
            "    transition: top .3s !important;",
            "        border-bottom: 0px solid #e9e9e9 !important;",
            "}",
            ".tile-header {",
            "    height: 195px !important;",
            "    outline: 0px solid #111111 !important;",
            "",
            "}",
            ".tile-header > img {",
            "    height: 195px !important;",
            "    outline: 0px solid #111111 !important;",
            "",
            "}",
            ".tile {",
            "    position: relative !important;",
            "    border-radius: 15px !important;",
            "    background-color: #222222 !important;",
            "    border:0px solid #666666 !important;",
            "    box-shadow: 0 2px 15px 0 #111111 !important;",
            "    overflow: hidden !important;",
            "",
            "}",
            "#promoted-left-arrow, #promoted-right-arrow {",
            "    display: none !important;",
            "}",
            "#promoted-tiles {",
            "    position: relative !important;",
            "    left: -100px !important;",
            "    overflow: visible !important;",
            "}",
            ".trended-tiles {",
            "    position: relative !important;",
            "    border-radius: 4px !important;",
            "    background-color: #222222 !important;",
            "    border:2px solid #111111 !important;",
            "    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1) !important;",
            "    overflow: hidden;",
            "",
            "}",
            ".tile-content {",
            "    display: block !important;",
            "    width: 100% !important;",
            "    padding: 29px 23px 35px 17px !important;",
            "    box-sizing: border-box !important;",
            "    /* text-align: left !important; */",
            "    overflow: hidden !important;",
            "}",
            ".tile-content-info{",
            "    height: 40px !important;",
            "}",
            "",
            ".tile-content-info-text{",
            "    color: #666666 !important;",
            "    position: relative !important;",
            "    bottom: 20px !important;",
            "}",
            "",
            ".tile-name {",
            "   /* background-color:#111111 !important;*/ ",
            "    padding-top: 0px !important;",
            "    font-size: 20px !important;",
            "    white-space: nowrap !important;",
            "    position: relative;",
            "    left: 80px;",
            "    top: 160px;",
            "   /* box-shadow: 0 2px 15px 0 #111111 !important;*/",
            "    border-bottom: 0px solid #666666 !important;",
            "}",
            ".tile-content > img {",
            "    position: relative !important;",
            "    bottom: 20px !important;",
            "    padding-top: 0px !important;",
            "    border-radius: 10PX !important;",
            "/*DISPLAY: NONE !important;8",
            "VISIBILITY: HIDDEN !important;*/",
            "}",
            ".tile-info {",
            "    position: absolute !important;",
            "    display: block !important;",
            "    height: 195px !important;",
            "    width: 110% !important;",
            "    bottom: 0 !important;",
            "    left: -20px !important;",
            "    font-weight: 600 !important;",
            "    color: #ffffff !important;",
            "    text-shadow: 0 1px 3px rgba(0, 0, 0, .4) !important;",
            "    box-shadow: 0 2px 15px 0 #111111 !important;",
            "}",
            "#catalog-wrapper {",
            "    position: relative;",
            "    display: block;",
            "    max-width: none;",
            "    padding: 10px 160px 50px;",
            "    margin-top: -145px;",
            "}",
            ".tile-statistic {",
            "    border-radius: 10px !important;",
            "    text-align: left !important;",
            "    position: relative !important;",
            "    top: 135px !important;",
            "    left:0px !important;",
            "    padding-top: 0px !important;",
            "    width:100px !important;",
            "    height: 25px !important;",
            "    font-size: 0 !important;",
            "    text-shadow: 0 1px 3px rgba(0, 0, 0, .4) !important;",
            "    background-color:#111111 !important; ",
            "    white-space: nowrap !important;",
            "    border: 1px solid #232323 !important;",
            "}",
            "",
            "#promoted-wrapper, #trended-wrapper {",
            " ",
            "    position: relative !important;",
            "    display: none;",
            "    width: 100% !important;",
            "    max-width: 1360px !important;",
            "    margin: 0 auto !important;",
            "    padding-bottom:20px !important;",
            "    border-bottom:3px solid #ffb000 !important;",
            "    border-radius: 15px !important;",
            "",
            "}",
            "",
            "#promoted .tile-promoted, #trended .tile-promoted {",
            "    position: absolute !important;",
            "    bottom: 20px !important;",
            "/* display:none; */",
            "/* visibility: hidden !important;*/}",
            "",
            "#no-rooms-error {",
            "    padding-top: 33px !important;",
            "    font-family: Roboto !important;",
            "    font-weight: 300 !important;",
            "    font-size: 40px !important;",
            "    color: #ffffff !important;",
            "}",
            "#footer-content {",
            "    max-width: 1300px !important;",
            "    margin: 0 auto !important;",
            "    padding: 0px 0px 0px !important;",
            "    font-size: 11px !important;",
            "    color: #333333 !important;",
            "}",
            "#footer-content-wrapper {",
            "    background-color: #333333 !important;",
            "    display: none !important;",
            "    visibility: hidden !important;",
            "}",
            "#footer {",
            "    position: relative !important;",
            "    height: 0px !important;",
            "    width: 100% !important;",
            "    padding: 0 !important;",
            "    background-color: #333333 !important;",
            "    border-top: 1px solid #111111 !important;",
            "    display: none !important;",
            "    visibility: hidden !important;",
            "}",
            "#footer-social {",
            "    position: absolute !important;",
            "    width: 650px !important;",
            "    min-height: 54px !important;",
            "    top: -30px !important;",
            "    left: 30px !important;",
            "    right: 30px !important;",
            "    margin: 0 auto !important;",
            "    text-align: center !important;",
            "    border: 1px solid #e1e1e1 !important;",
            "    background-color: #fff !important;",
            "    color: transparent !important;",
            "    display: none !important;",
            "    visibility: hidden !important;",
            "}",
            ".nav-menu-links, .nav-menu-links {",
            "	font-weight: bold !important;",
            "	display: none !important;",
            "}",
            ".nav-menu-links > a {",
            "    position: relative !important;",
            "    height: 100% !important;",
            "    padding: 0 1% !important;",
            "    box-sizing: border-box !important;",
            "    color: #FFFFFF !important;",
            "    transition: color .2s !important;",
            "    	font-weight: bold !important;",
            "}",
            ".nav-menu-links > a:before {",
            "    content: \"\" !important;",
            "    position: absolute !important;",
            "    display: block !important;",
            "    height: 4px !important;",
            "    width: 100% !important;",
            "    bottom: -1px !important;",
            "    left: 0 !important;",
            "    color: #111111 !important;",
            "    background-color: #111111 !important;",
            "    cursor: default !important;",
            "    opacity: 0 !important;",
            "    transition: opacity .2s !important;",
            "}",
            ".nav-menu-links > a:hover, .nav-menu-links > a.active {",
            "    color: #111111 !important;",
            "}",
            ".nav-btn-sign-on {",
            "    position: absolute !important;",
            "    right: -30px !important;",
            "    top: 25px;",
            "}",
            ".nav-btn-instant-room {",
            "    font-family: \"Open Sans\" !important;",
            "    border: 1px solid #111111 !important;",
            "    background-color: #111111 !important;",
            "    color: #fff !important;",
            "    margin-right: 20px !important;",
            "    position: absolute !important;",
            "    right: 50px !important;",
            "    top: 25px;",
            "}",
            "#navigation > .not-selectable:hover {",
            "    background-color: #111111 !important;",
            "    border: 1px solid #FFFFFF !important;",
            "    color: white !important;",
            "}",
            "#promoted-wrapper > h2, #trended-wrapper > h2, #header-for-all {",
            "    padding: 0 0 11px 5px !important;",
            "    font-size: 20px !important;",
            "    line-height: 27px !important;",
            "    color: #fff !important;",
            "    text-transform: uppercase !important;",
            "    text-align: left !important;",
            "    font-weight: bold !important;",
            "    text-shadow: 0 1px 3px rgba(0, 0, 0, .4) !important;",
            "}",
            "#input-catalog-menu-all:checked ~ #navigation > label[for=\"input-catalog-menu-all\"], #input-catalog-menu-near-you:checked ~ #navigation > label[for=\"input-catalog-menu-near-you\"], #input-catalog-menu-most-gifted:checked ~ #navigation > label[for=\"input-catalog-menu-most-gifted\"] {",
            "    background-color: #111111 !important;",
            "    border:1px solid #111111 !important;",
            "    z-index: 1 !important;",
            "    font-weight: bold !important;",
            "    border-radius:25px;",
            "    margin:5px;",
            "}",
            "#navigation > label[for=\"input-catalog-navigation\"] {",
            "    display: none !important;",
            "    border-radius:25px;",
            "    margin:5px;",
            "}",
            "#navigation > label {",
            "    position: relative !important;",
            "    display: inline-block !important;",
            "    height: 40px !important;",
            "    width: 193px !important;",
            "    background-color: #222222 !important;",
            "    border: 1px solid #fff !important;",
            "    font-size: 17px !important;",
            "    color: #fff !important;",
            "    cursor: pointer !important;",
            "    z-index: 1 !important;",
            "    transition: .2s !important;",
            "    border-radius:25px;",
            "    margin:5px;",
            "}",
            ".nav-sandwich-menu-button:before {",
            "    height: 5px !important;",
            "    width: 100% !important;",
            "    top: 4px !important;",
            "    left: 0 !important;",
            "    background-color: #111111 !important;",
            "}",
            ".nav-sandwich-menu-button {",
            "",
            "    background-color: #222222 !important;",
            "",
            "}",
            ".nav-sandwich-menu-button:after {",
            "    height: 5px !important;",
            "    width: 100% !important;",
            "    top: 4px !important;",
            "    left: 0 !important;",
            "    background-color: #111111 !important;",
            "    bottom: 4px !important;",
            "}",
            "#loadmore {",
            "    height: 48px !important;",
            "    font-size: 16px !important;",
            "    color: #fff !important;",
            "    background-color: #111111 !important;",
            "    line-height: 48px !important;",
            "    vertical-align: middle !important;",
            "    transition: background-color .2s !important;",
            "}",
            "#content > h1 {",
            "    text-transform: uppercase;",
            "    font-weight: 600 !important;",
            "    color: #fff !important;",
            "}",
            "#content > #wrapper-forms {",
            "    background-color: #222222 !important;",
            "}",
            "#content {",
            "    background-color: #333333 !important;",
            "    padding-bottom: 0px !important;",
            "}",
            "#content-page-content {",
            "    background-color: transparent !important;",
            "}",
            "#content {",
            "    top:100px !important;",
            "}",
            "#content-page-menu {",
            "    background-color: #666666 !important;",
            "    box-shadow: 0 2px 15px 0 #111111 !important;",
            "}",
            "#content-page-menu > a:hover, #content-page-menu > a.active {",
            "    background-color: #333333 !important;",
            "    color: #fff !important;",
            "}",
            "#wrapper {",
            "    background-color: #222222 !important;",
            "}",
            "#up-button-content:hover {",
            "    background-color:#000 !important;",
            "}",
            "#content > * {",
            "    background-color: #222222 !important;",
            "	 /*background-image: url(https://image.ibb.co/mCRLCT/Wallpaper_Here.jpg);*/",
            "    background-attachment: fixed;",
            "    background-position: center;",
            "}",
            "#live-broadcasts-wrapper > div {",
            "    background-color: #222222 !important;",
            "}",
            ".tile-gold, .tile-extreme, .tile-pro {",
            "    text-align: left; !important;",
            "    top: 2px !important;",
            "}",
            "#live-broadcasts-wrapper {",
            "    background-color: #222222 !important;",
            "}"
        ].join("\n");
        if (typeof GM_addStyle != "undefined") {
            GM_addStyle(css);
        } else if (typeof PRO_addStyle != "undefined") {
            PRO_addStyle(css);
        } else if (typeof addStyle != "undefined") {
            addStyle(css);
        } else {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css));
            var heads = document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(node);
            } else {
                // no head yet, stick it whereever
                document.documentElement.appendChild(node);
            }
        }
    })();
}
