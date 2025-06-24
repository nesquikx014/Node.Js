fetch('http://espn.nl')
.then(response=> response.text())
.then(data => {
    console.log(data);
    const $ = cheerio.load(data);
    console.log($('h2').text())
})