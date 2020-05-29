function clicked()
{
    var txt;
    var person = prompt("Input your name");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    }
    else {
      txt = "My name is " + person;
    }
    document.getElementById("next").innerHTML = txt;

}
