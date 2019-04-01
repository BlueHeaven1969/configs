user_pref("_user.js.parrot", "syntax error @ Rick's Overrides"); // troubleshooting pref - do not edit
/**/
/* 0301b: disable auto-CHECKING for extension and theme updates ***/
user_pref("extensions.update.enabled", false);
/* 0370: disable Pocket [FF46+] [REVERT] */
user_pref("extensions.pocket.enabled", true); 
/* 0410: disable "Block dangerous and deceptive content" [ENABLE]
 * This covers deceptive sites such as phishing and social engineering
 * [SETTING] Privacy & Security>Security>Deceptive Content and Software Protection ***/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false); // [FF50+]
/* 0411: disable "Block dangerous downloads" [ENABLE]
 * This covers malware and PUPs (potentially unwanted programs)
 * [SETTING] Privacy & Security>Security>Deceptive Content and Software Protection ***/
user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0515: disable Screenshots [ENABLE]
 * alternatively in FF60+, disable uploading to the Screenshots server
 * [1] https://github.com/mozilla-services/screenshots
 * [2] https://www.ghacks.net/2017/05/28/firefox-screenshots-integrated-in-firefox-nightly/ ***/
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("extensions.screenshots.upload-disabled", true); // [FF60+]
/* 0805: disable CSS querying page history - CSS history leak [REVERT] */
user_pref("layout.css.visited_links_enabled", true);   
/* 0850a: disable location bar autocomplete and suggestion types [REVERT] */
user_pref("browser.urlbar.autocomplete.enabled", true);         
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", true);
/* 0850d: disable location bar autofill [REVERT] */
user_pref("browser.urlbar.autoFill", true);
/* 0860: disable search and form history [REVERT] */
user_pref("browser.formfill.enable", true); 
/* 0901: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Forms & Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);
/* 1008: set DNS cache and expiration time (default 400 and 60, same as Tor Browser) [UPDATE] ***/
user_pref("network.dnsCacheExpiration", 3600);              
user_pref("network.dnsCacheExpirationGracePeriod", 3600);    
/* 1023: set the minimum interval between session save operations [UPDATE] */
user_pref("browser.sessionstore.interval", 9999999);   
user_pref("browser.sessionstore.interval.idle", 9999999);
/* 1032: disable favicons in web notifications [REVERT]***/
user_pref("alerts.showFavicons", true);
/* 1202: control TLS versions with min and max [CHANGE] */
user_pref("security.tls.version.max", 3);
/* 1220: disable or limit SHA-1 certificates [REVERT] */
user_pref("security.pki.sha1_enforcement_level", 3);
/* 1241: disable insecure passive content (such as images) on https pages [REVERT] ***/
user_pref("security.mixed_content.block_display_content", false);
/* 1401: disable websites choosing fonts (0=block, 1=allow) [UBLOCK] */
user_pref("browser.display.use_document_fonts", 1); 
/* 1405: disable WOFF2 (Web Open Font Format) [FF35+] [REVERT]***/
user_pref("gfx.downloadable_fonts.woff2.enabled", true);  
/* 1406: disable CSS Font Loading API [REVERT] */
user_pref("layout.css.font-loading-api.enabled", true);  
/* 1603: CROSS ORIGIN: control when to send a referer [SETUP-WEB] [REVERT] */
user_pref("network.http.referer.XOriginPolicy", 0);   
/* 2010: disable WebGL (Web Graphics Library), force bare minimum feature set if used & disable WebGL extensions [REVERT] */
user_pref("webgl.disabled", false); 
user_pref("webgl.disable-extensions", false); 
user_pref("webgl.min_capability_mode", false);  
/* 2012: disable two more webgl preferences [FF51+] [REVERT] ***/
user_pref("webgl.enable-webgl2", true);
/* 2212: limit events that can cause a popup [REVERT] */
user_pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit");
/* 2302: disable service workers [FF32, FF44-compat] [UMATRIX] */
user_pref("dom.serviceWorkers.enabled", true);            
/* 2304: disable web notifications [UMATRIX] */
user_pref("dom.webnotifications.enabled", true);                 
user_pref("dom.webnotifications.serviceworker.enabled", true);   
/* 2402: disable website access to clipboard events/content [REVERT] */
user_pref("dom.event.clipboardevents.enabled", true); 
/* 2508: disable hardware acceleration to reduce graphics fingerprinting [REVERT]*/
user_pref("layers.acceleration.disabled", false); 
/* 2654: disable "open with" in download dialog [FF50+] [REVERT] */
user_pref("browser.download.forbid_open_with", false);
/* 2662: disable webextension restrictions on certain mozilla domains (also see 4503) [FF60+] [ENABLE]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
user_pref("extensions.webextensions.restrictedDomains", "");
/* 2701: disable 3rd-party cookies and site-data [UMATRIX] */
user_pref("network.cookie.cookieBehavior", 4);
/* 2803: set what history items to clear on shutdown [REVERT] */
user_pref("privacy.clearOnShutdown.cookies", false);   
user_pref("privacy.clearOnShutdown.history", false);     
user_pref("privacy.clearOnShutdown.formdata", false); 
/* 2804: reset default history items to clear with Ctrl-Shift-Del (to match 2803) [REVERT] */
user_pref("privacy.cpd.cookies", false); 
user_pref("privacy.cpd.formdata", false);   
user_pref("privacy.cpd.history", false);   
user_pref("privacy.cpd.sessions", false);   
/* 4001: enable First Party Isolation [FF51+] [REVERT] */
user_pref("privacy.firstparty.isolate", false); 
/* 4501: enable privacy.resistFingerprinting [FF41+] [REVERT] */
user_pref("privacy.resistFingerprinting", false);   
/* 4503: disable mozAddonManager Web API [FF57+] [REVERT] */ 
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false); 
/* 5000: PERSONAL BEHAVIOR */
user_pref("browser.tabs.closeWindowWithLastTab", false); 
user_pref("browser.tabs.warnOnClose", false); 
user_pref("browser.tabs.warnOnCloseOtherTabs", false); 
user_pref("browser.tabs.warnOnOpen", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("layout.spellcheckDefault", 2); 
user_pref("network.manage-offline-status", false); 
user_pref("browser.link.open_newwindow.override.external", 3);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.loadInBackground", false);
user_pref("security.webauth.u2f",true);
user_pref("media.autoplay.allow-muted", false);
/****
END OF THE LINE
****/
user_pref("_user.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
