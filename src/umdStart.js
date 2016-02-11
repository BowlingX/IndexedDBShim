(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(idbModules, root);
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(idbModules, root);
    } else {
        factory(idbModules, root);
    }
}(this, function (idbModules, window) {
