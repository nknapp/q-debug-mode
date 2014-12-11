function merge(options, defaults) {
    for (key in options) {
        defaults[key] = options[key];
    }
    return defaults;
}

/**
 * If you're using <b>Q</b> promises, you can include this function in your unit-tests.
 * It will register a exit-handler that checks if any unhandled rejected promises exist and prints error
 * messages for each of those.
 * See <a href="https://github.com/kriskowal/q/issues/625">Debug-Mode to warn for unused promises #625</a> for details.
 *
 * @param Q the return value of <code>require("q")</code>
 * @param [options]  {object} configuration options
 * @param [options.longStack] {boolean} enable/disable long stack support (default: true)
 * @param [options.unhandledReasons] {boolean} enable/disable errors for unhandled reasons on processs-exit (default: true)
 */
module.exports = function (Q, options) {
    var _options = merge(options || {}, {
        longStack: true,
        unhandledReasons: true
    });
    // Long stack traces (if not disabled)
    if (_options.longStack) {
        Q.longStackSupport = true;
    }
    // Show unused reasons (if not disabled)
    if (_options.unhandledReasons) {
        process.on("exit", function () {
            Q.getUnhandledReasons().forEach(function (item) {
                console.error("Unhandled error in promise: " + item);
            });
        });
    }

}
