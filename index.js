const fs = require('fs');
const {exec} = require('child_process');
const websiteUrl = 'https://freemediatools.com';

var directoryPath = Date.now();

exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -v --include-images -o ${directoryPath}`, (err, stderr, stdout )=>{
        if(err){
            console.log(err);
        }
});