const fs = require('fs')

fs.readFile("./names.txt", "utf-8", (error, data) => {
   if (error) {
      console.log(error)
   }
   else {
      let names = {}
      let lines = data.split("\r\n")
      for (const key of lines) {
         let name = key.split("-");
         names[name[0]] = name[1]
      }
      fs.readFile("./phone.txt", "utf-8", (error, data) => {
         if (error) console.log(error)
         else {
            let numbers = {}
            lines = data.split("\r\n")
            for (let key of lines) {
               let number = key.split("-")
               if (numbers.hasOwnProperty(number[0])) {
                  numbers[number[0]].push(number[1])
               } else {
                  numbers[number[0]] = [number[1]]
               }
            }
            let phonebook = ""
            for (let key in names) {
               let phonebookLine = ""
               let check = Object.keys(numbers).find(el => el === key)
               if (check) {
                  phonebookLine += `${names[key]}'s phone number${numbers[key].length > 1 ? "s are" : " is"} ${numbers[key]}\n`
               } else {
                  phonebookLine += `${names[key]} hasn't any phone number.\n`
               }
               phonebook += phonebookLine
            } fs.writeFile("./phonebook.txt", phonebook, "utf-8", function (erroe) {
               if (error) {
                  console.log(error)
               }
               else {
                  console.log(`create phonenumber succses`)
               }
            })
         }
      })
   }

})

