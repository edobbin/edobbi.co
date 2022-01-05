
var email;
var name;
var number;

const submitBut = document.getElementById("subBut");

// submitBut.addEventListener("click", submit());

submitBut.onclick = submit();

function submit(){
   let email = document.forms["sub"]["email_address"].value;
   let name = document.forms["sub"]["name"].value;
   let number = document.forms["sub"]["phone_number"].value;
      if(name =="" || email == ""){
         if(name==""){
            alert("Name must be filled out");
         }
         else if( email = ""){
            alert("Email must be filled out");
         }

         else if(name==""&&email==""){
            alert("Name and email must be filled out");
         }
         
         return false;

      }
}
