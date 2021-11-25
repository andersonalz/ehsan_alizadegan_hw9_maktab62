let pass = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/g
let value = $("input").val();
$(document).ready(function(){
   $("input").keyUp(function(){
    if( value === "")  {
      $("p").css("color" , "blue")
    }else if (value.match(password)){
       $("p").css("color" , "green").$("p").change("password currect")
    }else{
       $("p").css("color" , "red").$("p").change("password invalid")
    }
    });
  
 });
