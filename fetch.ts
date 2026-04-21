const url = 'https://educacaokids.com.br/grafismofonetico/';
fetch(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    }
}).then(r => {
    console.log("Status:", r.status);
    return r.text();
}).then(html => {
    const urls = new Set();
    // Matches src="url" or src='url'
    const regex = /src=["'](https:\/\/[^"']+\.(png|jpe?g|webp)[^"']*)["']/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
        urls.add(match[1]);
    }
    // Also try data-src
    const dataRegex = /data-src=["'](https:\/\/[^"']+\.(png|jpe?g|webp)[^"']*)["']/gi;
    while ((match = dataRegex.exec(html)) !== null) {
        urls.add(match[1]);
    }
    console.log("Found Images:");
    console.log(Array.from(urls).join('\n'));
}).catch(console.error);
