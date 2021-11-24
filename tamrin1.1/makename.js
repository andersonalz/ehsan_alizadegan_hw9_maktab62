function  makenameouterfunction(name,lname){
   function makenameinnerfunctin(){
    return `hello ${name}  ${lname}`
 
 };
return makenameinnerfunctin
}
let make = makenameouterfunction ("ali","ahmadi")
console.log(make());