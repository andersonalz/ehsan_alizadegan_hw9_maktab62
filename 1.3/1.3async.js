const fs = require('fs')

fs.writeFile('newfile.txt', 'hello', function (err) {
  if (err) {
    console.log(err);
  }else{
     console.log('File is created successfully.');
  }

});
