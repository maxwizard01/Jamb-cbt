
var changePageContent=function(subject,term){
  var newPage=window.open('','_self')
  newPage.document.write(
  `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jamb quiz</title>
    <link rel="icon" type="image/x-icon" href="../Quiz Images/Pencil_15px.png">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
     <link rel="stylesheet" href="../style/taymiyah.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"><\/script>
  <link rel="stylesheet" type="text/css" href="../style/subject.css">
<\/head>

<body>
  <div id="myDiv" class="animate-bottom" style="display:block">
    <!--Welcome page-->
    <div class="welcome display-1" >
      <p>welcome ! <br>
          Take the Quiz </p>
      <button class="buttonStart" onclick="swapSubject('${subject}')">Start </button>  
    </div>

    <!--Quiz Container-->
      
</div>
   <hr style="color: white;">
<script type="text/javascript" src="../script/quizElement.js"><\/script>  
<script type="text/javascript" src="../script/subjects.js"><\/script>
</body>
</html>

`)
}

//Function to display loader 
var myVar;

function myloader() {
myVar = setTimeout(showPage, 2000);
}

function showPage() {
document.querySelector(".lds-ellipsis").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}

//Scroll up
//Get the button
var mybutton = document.getElementById("myUpBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


