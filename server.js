const figlet = require('figlet');

figlet("Hello World!", function(err, data) {
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
    
})