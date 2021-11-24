fs.readFile('./from.txt', 'utf-8', function (error, data) {
   if (error) {
     console.log(error);
   } else {
     fs.writeFile('./to.txt', data, function (error, data) {
       if (error) {
         console.log(error);
       } else {
         fs.readFile('./append.txt', data, function (err, data) {
           if (err) {
             console.log(err);
           } else {
             fs.appendFile('./to.txt', data, function (err, data) {
               if (err) {
                 console.log(err);
               } else {
                 console.log('done');
               }
             })
             console.log('don');
           }
         })
       }
     })
   }
 
 })