
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2');

    const tokens = normalized
        .split(/\s+/)
        .map(t => t.replace(/[^\p{L}\p{N}]/gu, ''))
        .filter(Boolean);

    if (tokens.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    return tokens.map(t => t.toLowerCase()).join('.');
}
(function _runDotCaseTests() {
    const cases = [
        ["first name", "first.name"],
        ["user_id", "user.id"],
        ["SCREEN_NAME", "screen.name"],
        ["API_KEY", "api.key"],
        ["version_2_name", "version.2.name"],
        ["mobile-number", "mobile.number"],
        [" hello   WORLD  ", "hello.world"],
        ["hello🚀world", "hello.world"],
        ["camelCaseInput", "camel.case.input"],
        ["HTML_parser_version_2", "html.parser.version.2"],
    ];

    cases.forEach(([input, expected]) => {
        const out = toDotCase(input);
        console.assert(out === expected, `toDotCase("${input}") -> expected "${expected}", got "${out}"`);
    });
    try {
        toDotCase("");
        console.assert(false, 'Expected empty string to throw');
    } catch (e) {
        console.assert(e.message === "Input cannot be an empty string", `Unexpected error message: ${e.message}`);
    }

    try {
        toDotCase(123);
        console.assert(false, 'Expected non-string to throw');
    } catch (e) {
        console.assert(e.message === "Input must be a string", `Unexpected error message: ${e.message}`);
    }

    try {
        toDotCase(null);
        console.assert(false, 'Expected null to throw');
    } catch (e) {
        console.assert(e.message === "Input must be a string", `Unexpected error message: ${e.message}`);
    }
})();