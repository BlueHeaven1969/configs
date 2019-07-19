/*  DEFAULT SETTINGS */
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("keyword.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.sessionhistory.max_entries", 10);
user_pref("signon.rememberSignons", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
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

/*  STARTUP PAGES */
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

/*  ACTIVITY PAGE */
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]

/*  TELEMETRY */
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE] above FF58+
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.hybridContent.enabled", false); // [FF59+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [FF58+]
user_pref("extensions.pocket.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
user_pref("network.connectivity-service.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("browser.send_pings", false); // [DEFAULT: false]
user_pref("browser.send_pings.require_same_host", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.tls.enable_0rtt_data", false);
user_pref("accessibility.force_disabled", 1);
user_pref("beacon.enabled", false);

/*  PLUGINS */
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
user_pref("plugin.state.flash", 0);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.eme.enabled", false);


/*  CACHING */
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.enable", false);

/*  PRIVACY */
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.webservice.discoverURL", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
user_pref("layout.css.visited_links_enabled", false);
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("extensions.screenshots.upload-disabled", true); // [FF60+]
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("media.autoplay.default", 1); // [DEFAULT: 1 in FF67+]
user_pref("media.autoplay.enabled.user-gestures-needed", false);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

/*  COOKIES */
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]

/*  UPDATES */
user_pref("app.update.auto", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("browser.search.update", false);
user_pref("extensions.update.enabled", false);

/*  NETWORK AND HTTP */
ser_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [HIDDEN PREF]
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+]
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disableIPv6", true);
user_pref("network.http.redirection-limit", 10);


