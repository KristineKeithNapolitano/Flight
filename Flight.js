function yes(){

   var fname=document.getElementById("first").value; 
   var lname=document.getElementById("last").value;
   var gender=document.getElementById("gen").value;
   var email=document.getElementById("email").value; 
   var origin=document.getElementById("origin").value; 
   var destination=document.getElementById("dest").value; 
   var departure=document.getElementById("dep").value;
   var date=document.getElementById("ret").value;
   var re = /\S+@\S+\.\S+/;
   var check = 0; 

   if (fname == "" || lname == "" || gender == "" || email == "" || origin == "" || destination == "" || departure == ""|| date ==""){
   alert("One or more fields are empty!");}

  else{
    check += 1;
    if(!re.test(email)){
      alert("Please enter a valid Email Address");
    }
    else{
      check += 1;
    }
    if (date < departure){
      alert("Return date must not be later than your Departure date.");
    }
    else{
      check+=1;
    }
  }
  if (check == 3) {
    alert("Booking information has been set.");
  }

}
