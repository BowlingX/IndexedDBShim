(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(idbModules);
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(idbModules);
    } else {
        factory(idbModules)(root);
    }
}(this, function (idbModules) {
    'use strict';
    return function (window) {
