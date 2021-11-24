fs.readFile('./from.txt', 'utf-8', function (error, data) {
   if (error) {

   } else {
      fs.writeFile('./to.txt', data, function (error, data) {
         if (error) {

         } else {
            console.log('done');
         }
      })
   }

})