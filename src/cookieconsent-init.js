// obtain plugin
var cc = initCookieConsent();

window.addEventListener('click', (e) => {
  if (e.target.className === 'cc-link' && e.target?.href?.includes('#contact')) cc.hideSettings();
})

// run plugin with your configuration
cc.run({
  current_lang: 'en',
  autoclear_cookies: true,                   // default: false
  page_scripts: true,                        // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  auto_language: 'browser',                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  // hide_from_bots: true,                   // default: true
  // remove_cookie_tables: false             // default: false
  // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
  // cookie_expiration: 182,                 // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  // revision: 0,                            // default: 0

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ...
  },

  onChange: function (cookie, changed_preferences) {
    // ...
  },

  languages: {
    'en': {
      consent_modal: {
        title: 'We use cookies!',
        description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
        primary_btn: {
          text: 'Accept all',
          role: 'accept_all'              // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Reject all',
          role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'Cookie preferences',
        save_settings_btn: 'Save settings',
        accept_all_btn: 'Accept all',
        reject_all_btn: 'Reject all',
        close_btn_label: 'Close',
        cookie_table_headers: [
          { col1: 'Name' },
          { col2: 'Domain' },
          { col3: 'Expiration' },
          { col4: 'Description' }
        ],
        blocks: [
          {
            title: 'Cookie usage ????',
            description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
          }, {
            title: 'Strictly necessary cookies',
            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'Performance and Analytics cookies',
            description: 'These cookies allow the website to remember the choices you have made in the past',
            toggle: {
              value: 'analytics',     // your cookie category
              enabled: false,
              readonly: false
            },
            cookie_table: [             // list of all expected cookies
              {
                col1: '^_ga',       // match all cookies starting with "_ga"
                col2: 'google.com',
                col3: '2 years',
                col4: 'description ...',
                is_regex: true
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'description ...',
              }
            ]
          }, {
            title: 'Advertisement and Targeting cookies',
            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false
            }
          }, {
            title: 'More information',
            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
          }
        ]
      }
    },
    'cs': {
      consent_modal: {
        title: 'Pou????v??m cookies!',
        description: 'Ahoj, tato webov?? str??nka pou????v?? z??kladn?? cookies pro uji??t??n?? spr??vn??ho fungov??n?? a ke sledov??n?? cookies pro pochopen?? jak se na str??nce pohybuje??. Analytick?? cookies budou pou??ity pouze v p????pad??, kdy je povol????. <button type="button" data-cc="c-settings" class="cc-link">Zvolit mo??nosti</button>',
        primary_btn: {
          text: 'P????jmout v??e',
          role: 'accept_all'              // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Odm??tnout v??e',
          role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        }
      },
      settings_modal: {
        title: 'Cookie preference',
        save_settings_btn: 'Ulo??it nastaven??',
        accept_all_btn: 'P????jmout v??e',
        reject_all_btn: 'Odm??tnout v??e',
        close_btn_label: 'Zav????t',
        cookie_table_headers: [
          { col1: 'Name' },
          { col2: 'Domain' },
          { col3: 'Expiration' },
          { col4: 'Description' }
        ],
        blocks: [
          {
            title: 'Cookie pou????t?? ????',
            description: 'Pou????v??m cookies k uji??t??n?? z??kladn?? funk??nosti webu a zlep??en?? u??ivatelsk?? p????v??tivosti. Pro ka??dou kategorii si m????ete kdykoli zvolit mo??nost povolen??/zak??z??n??. Pro v??ce informac?? souvisej??c??ch s cookies a o citliv??ch ??daj??ch si m????ete p??e????st cel?? ??l??nek <a href="#" class="cc-link">privacy policy</a>.'
          }, {
            title: 'Nezbytn?? cookies',
            description: 'Cookies kter?? jsou nezbytn?? pro spr??vn?? fungov??n?? str??nky. Bez t??chto nemus?? webov?? str??nka spr??vn?? fungovat',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'V??konnostn?? a Analytick?? cookies',
            description: 'Tyto si budou pamatovat Va??e p??edchoz?? volby na str??nce',
            toggle: {
              value: 'analytics',     // your cookie category
              enabled: false,
              readonly: false
            },
            cookie_table: [             // list of all expected cookies
              {
                col1: '^_ga',       // match all cookies starting with "_ga"
                col2: 'google.com',
                col3: '2 years',
                col4: 'Pro spr??vn?? fungov??n?? n??stroje google analytics',
                is_regex: true
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'Pro spr??vn?? fungov??n?? n??stroje google analytics',
              }
            ]
          }, {
            title: 'Reklamn?? a C??len?? cookies',
            description: 'Tyto cookies shroma????uj?? informace o tom jak str??nku pou????v??te, kter?? odkaz jste nav??t??vily a kter?? str??nky jste nav??t??vily. V??echna tato data jsou anonymizov??na a nelze V??s podle nich identifikovat.',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false
            }
          }, {
            title: 'V??ce informac??',
            description: 'Pro jak??koli dotazy souvisej??c?? s politikou pou????v??n?? cookies a Va??ich voleb, pros??m <a class="cc-link" data-scroll href="#contact">Kontaktujte m??</a>.',
          }
        ]
      }
    }
  }
});