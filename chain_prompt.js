/**
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-cased string.
 * @throws {Error} If input is not a string or is empty/only spaces.
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim().length === 0) {
        throw new Error('Input cannot be empty');
    }
    let s = input.trim();
    s = s.replace(/([a-z0-9])([A-Z])/g, '$1-$2');
    s = s.replace(/[\s_]+/g, '-');
    s = s.replace(/[^a-zA-Z0-9-]/g, '');
    s = s.replace(/-+/g, '-');
    s = s.replace(/^-|-$/g, '').toLowerCase();
    return s;
}
console.log(toKebabCase('HelloWorldExample')); 
console.log(toKebabCase('  some_text -- here! '));
console.log(toKebabCase('Hello World')); 
console.log(toKebabCase('some_text')); 
console.log(toKebabCase('already-kebab-case')); 
console.log(toKebabCase('helloWorldExample')); 
console.log(toKebabCase('version_2_name')); 
console.log(toKebabCase('fun😊times!!')); 
console.log(toKebabCase('API_KEY'));
console.log(toKebabCase('getHTTPResponse')); 
try {
    toKebabCase(123);
    console.log('ERROR: expected throw for non-string input');
} catch (e) {
    console.log(e.message);
}
try {
    toKebabCase('   ');
    console.log('ERROR: expected throw for empty input');
} catch (e) {
    console.log(e.message); 
}