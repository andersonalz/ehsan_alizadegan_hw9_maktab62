try {
   let data =fs.readFileSync('./from.txt', 'utf-8')
fs.writeFileSync('./to.txt', data ) 
} catch (error) {
   console.log(error);
}