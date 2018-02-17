$( document ).ready(function() {
    
    var txt1 = "<button> New super button</button>";
    
    $("body").append(txt1);

    
    $("button").click(function(){
    
    console.log("button was clicked");
        
    $("html").toggleClass("important");
    $("img").slideToggle();
                });
    
    console.log("jquery is working");
});






alert("i'm working");



function myFunction() {
    console.log("button clicked");
    var btn = document.createElement("BUTTON");
    var t   =document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}