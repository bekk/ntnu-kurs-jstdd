/**
 * @return true if the string contains the fragment, false otherwise.
 */
String.prototype.contains = function(fragment) {
    return this.indexOf(fragment) !== -1;
};

/**
 * @return true if the string starts with the given fragment
 */
String.prototype.startsWith = function (fragment) {
    return this.slice(0, fragment.length) == fragment;
};