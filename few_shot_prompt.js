function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    const str = input.trim();
    if (!str) return '';
    if (!/[^A-Za-z0-9]/.test(str)) {
        if (str.toUpperCase() === str) return str.toLowerCase();
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    const parts = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';
    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join('');
    return first + rest;
}
module.exports = toCamelCase;
function toCamelCase(input) {
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error("Input must be a string");
    }
    const str = input.trim();
    if (str.length === 0) {
        throw new Error("Input cannot be an empty string");
    }
    if (!/[^A-Za-z0-9]/.test(str)) {
        if (str.toUpperCase() === str) return str.toLowerCase();
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    const parts = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) throw new Error("Input cannot be an empty string");
    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join('');
    return first + rest;
}
module.exports = toCamelCase;
