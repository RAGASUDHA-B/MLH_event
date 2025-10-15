function toCamelCase(str) {
    if (typeof str !== 'string') return '';
    const words = str
        .trim()
        .split(/[^A-Za-z0-9]+/)
        .filter(Boolean)
        .map(w => w.toLowerCase());

    if (words.length === 0) return '';

    return words[0] + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

module.exports = toCamelCase;
module.exports.toCamelCase = toCamelCase;