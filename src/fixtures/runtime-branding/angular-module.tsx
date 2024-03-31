export const angularModuleCode: string =
`// angular.constants.js

(function() {
  'use strict';
  
  angular
    .module('[applicationModuleName]')
    .constant('app', application);
    
})();

// angular.js

(function() {
  'use strict';
  
  angular
    .module('[applicationModuleName]', [])
    .config([
      'app',
      '$mdThemingProvider'
      Config
    ])
    .run([
      'app',
      '$rootScope',
      Bootstrap
    ]);
    
  /**
   * This function will go ahead configure the application, and setup the
   * application in whatever environment is needed.
   * 
   * @param {application} app
   * @param {md.$mdThemingProvider} $mdThemingProvider
   */  
  function Config(app, $mdThemingProvider) {
    // Make sure that we are fed a config array, otherwise return a no-op
    //  so nothing happens.
    if (!angular.isDefined(application.config.branding.palette)) {
      return;
    }
  
    // Load in the major theme palletes
    for (const themeName in config.theme.palette) {
      const themeColor = config.theme.palette[themeName];
      $mdThemingProvider
        .definePalette(themeName, {
          '50'   : lighten('#'+themeColor, 50),
          '100'  : lighten('#'+themeColor, 40),
          '200'  : lighten('#'+themeColor, 30),
          '300'  : lighten('#'+themeColor, 20),
          '400'  : lighten('#'+themeColor, 10),
          '500'  : themeColor,
          '600'  : darken('#'+themeColor, 10),
          '700'  : darken('#'+themeColor, 20),
          '800'  : darken('#'+themeColor, 30),
          '900'  : darken('#'+themeColor, 40),
          'A50'  : lighten('#'+themeColor, 50),
          'A100' : lighten('#'+themeColor, 40),
          'A200' : lighten('#'+themeColor, 30),
          'A300' : lighten('#'+themeColor, 20),
          'A400' : lighten('#'+themeColor, 10),
          'A500' : themeColor,
          'A600' : darken('#'+themeColor, 10),
          'A700' : darken('#'+themeColor, 20),
          'A800' : darken('#'+themeColor, 30),
          'A900' : darken('#'+themeColor, 40),
          'contrastDefaultColor': 'light',
          'contrastDarkColors': [
            '50', '100', '200', '300', '400', 'A100'
          ]
        });
    
      // Setup the theme
      $mdThemingProvider.theme(themeName).primaryPalette(themeName);
    }
    
    /**
     * This function will returned a color code based on the color passed and
     * the percentage you want it darkened.
     * 
     * @param {string} hex
     * @param {number} percent
     * 
     * @returns {string}
     */
    function darken(hex, percent) {
      if (parseInt(percent) < 0) {
        percent = 0;
      }
    
      return manipulateColor(hex, -1 * percent);
    };
    
    /**
     * This function will returned a color code based on the color passed and
     * the percentage you want it lightened.
     * 
     * @param {string} hex
     * @param {number} percent
     * 
     * @returns {string}
     */
    function lighten(hex, percent) {
      if (parseInt(percent) < 0) {
        percent = 0;
      }
    
      return manipulateColor(hex, percent);
    };
    
    /**
     * This function will manipulate a color code based on the color passed and
     * the percentage you want it lightened.
     * 
     * @param {string} hex
     * @param {number} percent
     * 
     * @returns {string}
     */
    function manipulateColor(hex, percent) {
      let R = parseInt(hex.substring(1,3),16);
      let G = parseInt(hex.substring(3,5),16);
      let B = parseInt(hex.substring(5,7),16);
    
      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);
    
      R = (R<255)?R:255;  
      G = (G<255)?G:255;  
      B = (B<255)?B:255;  
    
      let RR = ((R.toString(16).length==1) ? "0"+R.toString(16) : R.toString(16));
      let GG = ((G.toString(16).length==1) ? "0"+G.toString(16) : G.toString(16));
      let BB = ((B.toString(16).length==1) ? "0"+B.toString(16) : B.toString(16));
    
      return "#"+RR+GG+BB;
    }
  }
  
  /**
   * This function will bootstrap the application, and kick off any processes
   * which are needed to be run before initial execution. This may include
   * things like OAuth token checks, etc.
   * 
   * @param {application} app 
   * @param {angular.$rootScope} $rootScope
   */
  function Bootstrap(app, $rootScope) {
    // expose the application branding to ALL views so that it can be
    //  used throughout the application.
    $rootScope.branding = app.config.branding;
    
    // ..do some other stuff here
  }
  
})();`