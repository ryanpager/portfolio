export const configurationCode: string = 
`//  The below is an example of a static configuration js file which can be 
//  included before your regular application. Since this registering a 
//  variable in the global space, we need to inject this into the angular 
//  application (see below).

//  make sure that we have the application object available
if (!angular.isDefined(application)) {
    var application = {};
}

//  setup a base object that can be inherited
application.config = {};
application.config.branding = {};
application.config.branding.palette = {};

//  branding settings (images)
application.config.branding.icon = "../path/to/icon";
application.config.branding.background = "../path/to/background";

//  branding pallette (colors)
application.config.branding.palette.primary = "5E7585";
application.config.branding.palette.secondary = "438BD9";
application.config.branding.palette.success = "71BC4B";
application.config.branding.palette.failure = "D80000";`