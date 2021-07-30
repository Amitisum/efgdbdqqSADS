nameofthestudentarray = []

function submit()
{
   var placenamesarray = []; 

   
   
    for (var j = 1; j <= 4; j++)
     { 
         var nameofthestudent = document.getElementById("name_of_the_student_"+j).value;
     console.log(nameofthestudent);
      nameofthestudentarray.push(nameofthestudent); 
    }

    console.log(nameofthestudentarray);

    for (var k = 0; k < lenghtofnameofstudentsarray; k++)
     { 
         placenamesarray.push("<h4>NAME -"+ nameofthestudentarray[k] + "</h4>");
        console.log(placenamesarray);
     }

     console.log(placenamesarray);
     document.getElementById("displaynamewithcommas").innerHTML = placenamesarray;

     var removecommas = placenamesarray.join(" ");
     console.log(removecommas);
     document.getElementById("displaynamewithcommas").innerHTML = removecommas;


     document.getElementById("submitbutton").style.display = "none";
     document.getElementById("sortbutton").style.display = "inlineblock";



     