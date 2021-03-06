user_pref("_user.js.parrot", "syntax error @ Rick's Overrides"); // troubleshooting pref - do not edit
/**/
/* 0301b: disable auto-CHECKING for extension and theme updates [ENABLE] ***/
user_pref("extensions.update.enabled", false);
/* 0370: disable Pocket [FF46+] [REVERT] */
user_pref("extensions.pocket.enabled", true); 
/* 0515: disable Screenshots [ENABLE]
 * alternatively in FF60+, disable uploading to the Screenshots server
 * [1] https://github.com/mozilla-services/screenshots
 * [2] https://www.ghacks.net/2017/05/28/firefox-screenshots-integrated-in-firefox-nightly/ ***/
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("extensions.screenshots.upload-disabled", true); // [FF60+]
/* 0901: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Forms & Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);
/* 1220: disable or limit SHA-1 certificates [REVERT] */
user_pref("security.pki.sha1_enforcement_level", 3);
/* 1241: disable insecure passive content (such as images) on https pages [REVERT] ***/
user_pref("security.mixed_content.block_display_content", false);
/* 1401: disable websites choosing fonts (0=block, 1=allow) */
user_pref("browser.display.use_document_fonts", 1);
/* 2010: disable WebGL (Web Graphics Library), force bare minimum feature set if used & disable WebGL extensions [REVERT] */
user_pref("webgl.disabled", false); 
user_pref("webgl.disable-extensions", false); 
user_pref("webgl.min_capability_mode", false);  
/* 2012: disable two more webgl preferences [FF51+] [REVERT] ***/
user_pref("webgl.enable-webgl2", true);
/* 2302: disable service workers [FF32, FF44-compat] [UMATRIX] */
user_pref("dom.serviceWorkers.enabled", true);            
/* 2402: disable website access to clipboard events/content [REVERT] */
user_pref("dom.event.clipboardevents.enabled", true); 
/* 2701: disable 3rd-party cookies and site-data [UMATRIX] */
// user_pref("network.cookie.cookieBehavior", 4);
/* 2803: set what history items to clear on shutdown [REVERT] */
user_pref("privacy.clearOnShutdown.cookies", false);   
user_pref("privacy.clearOnShutdown.history", false);     
user_pref("privacy.clearOnShutdown.formdata", false); 
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.offlineApps", false); 
user_pref("privacy.clearOnShutdown.sessions", false); 
user_pref("privacy.clearOnShutdown.siteSettings", false); 
/* 4501: enable privacy.resistFingerprinting [FF41+] [REVERT] */
user_pref("privacy.resistFingerprinting", false);   
/* 4504: enable RFP letterboxing [FF67+] [REVERT] */
user_pref("privacy.resistFingerprinting.letterboxing", false);
/* 4503: disable mozAddonManager Web API [FF57+] [REVERT] */ 
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); 
/* 5000: PERSONAL BEHAVIOR */
user_pref("browser.tabs.closeWindowWithLastTab", false); 
user_pref("browser.tabs.warnOnClose", false); 
user_pref("browser.tabs.warnOnCloseOtherTabs", false); 
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.search.openintab", true);
user_pref("general.warnOnAboutConfig", false);
user_pref("layout.spellcheckDefault", 2); 
user_pref("network.manage-offline-status", false); 
user_pref("browser.link.open_newwindow.override.external", 3);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.loadInBackground", false);
user_pref("security.webauth.u2f",true);
user_pref("media.autoplay.allow-muted", false);
user_pref("network.negotiate-auth.trusted-uris", ".ra-int.com,.rockwell.com,.rockwellautomation.com");
user_pref("network.automatic-ntlm-auth.trusted-uris", ".ra-int.com,.rockwell.com,.rockwellautomation.com");
/****
END OF THE LINE
****/
user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
