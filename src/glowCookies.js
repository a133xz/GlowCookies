/*
  GLOW COOKIES
  CREATED BY MANUEL CARRILLO
  https://github.com/manucaralmo/GlowCookies
  2021 - v 3.1.3

  REMIX BY ANTONIO R 2022
  https://github.com/a133xz/GlowCookies
*/

(function () {
  class GlowCookies {
    constructor() {
      // Cookie name
      this.cookieName = "glowCookieStatus";
      // Cookies banner
      this.banner = undefined;
      // Config
      this.config = undefined;
      this.tracking = undefined;
      // DOM ELEMENTS
      this.PreBanner = undefined;
      this.Cookies = undefined;
      this.DOMbanner = undefined;
    }

    render() {
      this.addCss();
      this.createDOMElements();
      this.checkStatus();
    }

    addCss() {
      const stylesheet = document.createElement("link");
      stylesheet.setAttribute("rel", "stylesheet");
      stylesheet.setAttribute(
        "href",
        `https://cdn.jsdelivr.net/gh/a133xz/GlowCookies@master/dist/glowCookies.css`
      );
      document.head.appendChild(stylesheet);
    }

    createDOMElements() {
      // COOKIES BUTTON
      this.PreBanner = document.createElement("div");
      this.PreBanner.innerHTML = `<button type="button" id="prebannerBtn" class="prebanner prebanner__border__${this.config.bannerStyle} glowCookies__${this.config.position} glowCookies__${this.config.border} animation" style="color: ${this.banner.manageCookies.color}; background-color: ${this.banner.manageCookies.background};">
                                  <svg fill="currentColor" style="margin-right: 7px; margin-top: 2px; vertical-align: text-top;" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
                                  </svg>${this.banner.manageCookies.text}</button>`;
      this.PreBanner.style.display = "none";
      document.body.appendChild(this.PreBanner);

      // COOKIES BANNER
      this.Cookies = document.createElement("div");
      this.Cookies.innerHTML = `<div
                                  id="glowCookies-banner"
                                  class="glowCookies__banner glowCookies__banner__${this.config.bannerStyle} glowCookies__${this.config.border} glowCookies__${this.config.position}"
                                  style="background-color: ${this.banner.background};"
                              >
                                  <h3 style="color: ${this.banner.color};">${this.banner.heading}</h3>
                                  <p style="color: ${this.banner.color};">
                                      ${this.banner.description}
                                      <a
                                          href="${this.banner.link}"
                                          target="_blank"
                                          class="read__more"
                                          style="color: ${this.banner.color};"
                                      >
                                          ${this.banner.linkText}
                                      </a>
                                  </p>
                                  <div class="btn__section">
                                      <button type="button" id="acceptCookies" class="btn__accept accept__btn__styles" style="color: ${this.banner.acceptBtn.color}; background-color: ${this.banner.acceptBtn.background};">
                                          ${this.banner.acceptBtn.text}
                                      </button>
                                      <button type="button" id="rejectCookies" class="btn__settings settings__btn__styles" style="color: ${this.banner.rejectBtn.color}; background-color: ${this.banner.rejectBtn.background};">
                                          ${this.banner.rejectBtn.text}
                                      </button>
                                  </div>
                              </div>
                          `;
      document.body.appendChild(this.Cookies);
      this.DOMbanner = document.getElementById("glowCookies-banner");

      // SET EVENT LISTENERS
      document.getElementById("prebannerBtn").addEventListener("click", () => this.openSelector());
      document
        .getElementById("acceptCookies")
        .addEventListener("click", () => this.acceptCookies());
      document
        .getElementById("rejectCookies")
        .addEventListener("click", () => this.rejectCookies());
    }

    checkStatus() {
      const glowCookieStatus = this.getCookie(this.cookieName);
      switch (Math.sign(glowCookieStatus)) {
        case 1:
          this.addAnalytics();
          break;
        case -1:
          this.rejectAnalytics();
          break;
        default:
          this.openSelector();
      }
    }

    openSelector() {
      this.PreBanner.style.display = "none";
      this.DOMbanner.classList.add("glowCookies__show");
    }

    // 1 is Accept, -1 Reject
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    // 1 is Accept, -1 Reject
    setCookieStatus(status) {
      this.setCookie(this.cookieName, status, 365 + 31);
    }

    openManageCookies() {
      this.PreBanner.style.display = this.config.hideAfterClick ? "none" : "block";
      this.DOMbanner.classList.remove("glowCookies__show");
    }

    addAnalytics() {
      this.openManageCookies();
      this.activateTracking();
      this.addCustomScript();
    }

    rejectAnalytics() {
      this.openManageCookies();
      this.disableTracking();
    }

    acceptCookies() {
      this.setCookieStatus(1);
      this.addAnalytics();
    }

    rejectCookies() {
      this.setCookieStatus(-1);
      this.rejectAnalytics();
    }

    activateTracking() {
      // Google Analytics Tracking
      if (this.tracking.AnalyticsCode) {
        let Analytics = document.createElement("script");
        Analytics.setAttribute(
          "src",
          `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`
        );
        document.head.appendChild(Analytics);
        let AnalyticsData = document.createElement("script");
        AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
                              gtag('config', '${this.tracking.AnalyticsCode}');`;
        document.head.appendChild(AnalyticsData);
      }

      // Facebook pixel tracking code
      if (this.tracking.FacebookPixelCode) {
      }

      // Hotjar Tracking
      if (this.tracking.HotjarTrackingCode) {
      }
    }

    disableTracking() {
      // Google Analytics Tracking ('client_storage': 'none')
      if (this.tracking.AnalyticsCode) {
        let Analytics = document.createElement("script");
        Analytics.setAttribute(
          "src",
          `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`
        );
        document.head.appendChild(Analytics);
        let AnalyticsData = document.createElement("script");
        AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('consent', 'default', {
                        ad_storage: 'denied',
                        analytics_storage: 'denied'
                      });
                      gtag('config', '${this.tracking.AnalyticsCode}' , {
                          'client_storage': 'none',
                          'anonymize_ip': true
                      });`;
        document.head.appendChild(AnalyticsData);
      }
    }

    addCustomScript() {
      if (this.tracking.customScript !== undefined) {
        let customScriptTag;

        this.tracking.customScript.forEach((script) => {
          if (script.type === "src") {
            customScriptTag = document.createElement("script");
            customScriptTag.setAttribute("src", script.content);
          } else if (script.type === "custom") {
            customScriptTag = document.createElement("script");
            customScriptTag.text = script.content;
          }

          if (script.position === "head") {
            document.head.appendChild(customScriptTag);
          } else {
            document.body.appendChild(customScriptTag);
          }
        });
      }
    }

    start(languaje, obj) {
      if (!obj) obj = {};
      const lang = new LanguagesGC(languaje);

      this.config = {
        border: obj.border || "border",
        position: obj.position || "left",
        hideAfterClick: obj.hideAfterClick || false,
        bannerStyle: obj.style || 2,
      };

      this.tracking = {
        AnalyticsCode: obj.analytics || undefined,
        FacebookPixelCode: obj.facebookPixel || undefined,
        HotjarTrackingCode: obj.hotjar || undefined,
        customScript: obj.customScript || undefined,
      };

      this.banner = {
        description: obj.bannerDescription || lang.bannerDescription,
        linkText: obj.bannerLinkText || lang.bannerLinkText,
        link: obj.policyLink || "#link",
        background: obj.bannerBackground || "#fff",
        color: obj.bannerColor || "#1d2e38",
        heading: obj.bannerHeading !== "none" ? obj.bannerHeading || lang.bannerHeading : "",
        acceptBtn: {
          text: obj.acceptBtnText || lang.acceptBtnText,
          background: obj.acceptBtnBackground || "#253b48",
          color: obj.acceptBtnColor || "#fff",
        },
        rejectBtn: {
          text: obj.rejectBtnText || lang.rejectBtnText,
          background: obj.rejectBtnBackground || "#E8E8E8",
          color: obj.rejectBtnColor || "#636363",
        },
        manageCookies: {
          color: obj.manageColor || "#1d2e38",
          background: obj.manageBackground || "#fff",
          text: obj.manageText || lang.manageText,
        },
      };

      // If document is already complete you don't need the event
      if (document.readyState === "complete") {
        this.render();
      } else {
        // Draw banner
        window.addEventListener("load", () => {
          this.render();
        });
      }
    }
  }

  class LanguagesGC {
    constructor(code) {
      this.init();
      let lang = this.arrLang[code] || this.arrLang["en"];
      this.bannerHeading = lang["bannerHeading"];
      this.bannerDescription = lang["bannerDescription"];
      this.bannerLinkText = lang["bannerLinkText"];
      this.acceptBtnText = lang["acceptBtnText"];
      this.rejectBtnText = lang["rejectBtnText"];
      this.manageText = lang["manageText"];
    }

    init() {
      this.arrLang = {
        en: {
          bannerHeading: "We use cookies",
          bannerDescription:
            "We use our own and third-party cookies to personalize content and to analyze web traffic.",
          bannerLinkText: "Read more about cookies",
          acceptBtnText: "Accept cookies",
          rejectBtnText: "Reject",
          manageText: "Manage cookies",
        },
        es: {
          bannerHeading: "Uso de cookies",
          bannerDescription:
            "Utilizamos cookies propias y de terceros para personalizar el contenido y para analizar el tráfico de la web.",
          bannerLinkText: "Ver más sobre las cookies",
          acceptBtnText: "Aceptar cookies",
          rejectBtnText: "Rechazar",
          manageText: "Cookies",
        },
      };
    }
  }

  const init = "glowCookies";
  if (typeof window[init] !== "function") {
    window[init] = new GlowCookies();
  }
})();
