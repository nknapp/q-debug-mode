If you're using <b>Q</b> promises, you can include this function in your unit-tests.
It will register a exit-handler that checks if any unhandled rejected promises exist and prints error
messages for each of those.
See <a href="https://github.com/kriskowal/q/issues/625">Debug-Mode to warn for unused promises #625</a> for details.
