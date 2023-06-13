
class duration{
  constructor(){
    // Update the count down every 1 second
   setInterval(this.setInt, 1000);     
  }
   setInt() {
    // Get today's date and time
    var now = new Date().getTime();
  
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days + "d " 
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("minutes").innerHTML = minutes + "m " 
    document.getElementById("seconds").innerHTML = seconds + "s ";
    // If the count down is finished, write some text
    console.log();
    if (distance < 0) {
      clearInterval(this.x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }

}
let dur = new duration

// Set the date we're counting down to

class textArea{

  constructor(){
    this.keyUp()
    this.keyDown()
  }
  
    
   keyUp () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
  };
  
   keyDown () {
    var max = 100;
    $("textarea").keydown(function (e) {
        var length = $(this).val().length;
  
        console.log(length);
        console.log(e.key);
        if(length>=100){
        if (e.key !=("Backspace")) {
    e.preventDefault()
  }
  else{
    length--
  }}
        
    })}
  
  }
  let text = new textArea
  

class nav{
  constructor(){
    this.navcontrol()
  }
navcontrol(){
  $(".home i").click(nav.closeNav)
  $(".sidebar i").click(nav.closeNav)
}
  static closeNav(){
  
   if($(".sidebar").css("left")  == "0px"){

    let sidebarwidth = $(".sidebar").innerWidth();
    $(".sidebar").animate({left:-sidebarwidth},500)
      $(".home ").animate({"margin-left":"0px"},500)
   
   }else{ 
    nav.openNav()
  }
  }

  static openNav(){
    let sidebarwidth = $(".sidebar").innerWidth();
    $(".sidebar").animate({left:'0px'},500)
    $(".home ").animate({"margin-left":sidebarwidth},500)
  
  }
}
let navb =new nav


$(".slider h3").click(function(){
 
  $(this).next().slideToggle(500)
  $(".details").not($(this).next()).slideUp(500)
  console.log("hiiii");
  })
  



// $(".home i").click(function(){
//   let sidebarwidth = $(".sidebar").innerWidth();
//   if($(".sidebar").css("left")  == "0px" ){
//   nav.closeNav()
// console.log("heloo");
//   }
//   else{

//     nav.openNav()
// console.log("helooooz");
//   }
// })

// $(".sidebar i").click(function(){
//   nav.closeNav()
// })



