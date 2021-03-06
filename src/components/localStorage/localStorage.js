(function () {
  'use strict';

  var mod = angular.module('components.localStorage', []);

  mod.factory('LocalStorage', ['$window', function LocalStorage($window) {

    function set(key, value) {
      return $window.localStorage.setItem(key, JSON.stringify(value));
    }

    function get(key) {
      return JSON.parse($window.localStorage.getItem(key));
    }

    function clear() {
      return $window.localStorage.clear();
    }

    return {
      get: get,
      set: set,
      clear: clear
    };
  }]);

}());