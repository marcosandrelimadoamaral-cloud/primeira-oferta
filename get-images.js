import https from 'https';

https.get('https://educacaokids.com.br/grafomotricidade/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const regex = /https:\/\/educacaokids\.com\.br\/wp-content\/uploads\/[^"'\s>]+\.(png|jpg|webp)/g;
    const matches = [...new Set(data.match(regex))];
    console.log(matches.join('\n'));
  });
});
