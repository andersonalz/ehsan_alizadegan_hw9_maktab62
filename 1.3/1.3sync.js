const fs = require('fs')
try {
   fs.writeFileSync('newfile.txt', 'hello')
   console.log('don');
} catch (error) {
   console.log(error);
}