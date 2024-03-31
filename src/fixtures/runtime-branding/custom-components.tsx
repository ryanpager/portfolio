export const customComponentsCode: string =
`(function() {
  'use strict';

  /**
   * The module declaration for the text directive.
   * 
   * @ngdoc module
   * @name application.directive.element.text
   */
  angular
    .module('application.directive.element.text', [
  
    ])
    .directive('appText', [
      TextDirective
    ]);
  
  /**
   * @ngdoc directive
   * @name appText
   * @module application.directive.element.text
   * 
   * @restrict E
   */
  function TextDirective() {
    // Expose the directive
    return {
      restrict: 'E',
      templateUrl: [
        '<p>',
          '<ng-transclude></ng-transclude>',
        '</p>'
      ].join(''),
      transclude: true,
      replace: false,
      link: link
    };
    
    /**
     * This function will set up the dom manipulation, and other action events
     * necessary for this directive.
     * 
     * @param {!angular.$scope} $scope
     * @param {!angular.$element} $element
     * @param {!angular.$attr} $attr
     */
    function link($scope, $element, $attr) {
      if (!angular.isDefined($attr.color)) {
        return;
      }
  
      // Using the color attribute, set the css properties accordingly
      $element.css({ color: '#'+$attr.color };
    };
  }
  
})();`