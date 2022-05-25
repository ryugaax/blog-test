// COOKIE THINGS
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

const setTheme=(val) => {
    // if(getCookie('theme') == "" || getCookie('theme') == null){
        setCookie('theme' , val , '365');
    // }
    // else{
        // getCookie(name);
    // }   

}

//check cookie
let darkTheme = false;
let dark = getCookie('theme');

if(dark){
    if(dark == 'true'){
        darkTheme = true;
    }
    else{
        darkTheme = false;
    }
}
else{
    setTheme(false);
    darkTheme = false;
}

const body = document.getElementsByTagName("BODY")[0];
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');

const makeDark=() => {
    console.log('making dark');
    //toggle button
    document.querySelector('.theme-btn').innerHTML = "<i class='bx bxs-sun'></i>";

    //toggle classes
    body.classList.add("dark-theme");
    navbar.classList.add("navbar-dark");

    //change elements
    document.querySelector('.nav-image').src = "/images/dark-logo.png";
}

const makeLight=()=>{
    console.log('making light');
    //toggle button
    document.querySelector('.theme-btn').innerHTML = "<i class='bx bxs-moon'></i>";

    //togle classes
    body.classList.remove("dark-theme");
    navbar.classList.remove("navbar-dark");



    //change elements
    document.querySelector('.nav-image').src = "/images/logo-wh.png";
}


if(darkTheme == true){
    makeDark();
}
else{
    makeLight();
}







const toggleTheme=() => {

    if(darkTheme){
        darkTheme = false;

        setTheme(false);

        // //toggle button
        // document.querySelector('.theme-btn').innerHTML = "<i class='bx bxs-moon'></i>";

        // //togle classes
        // body.classList.remove("dark-theme");
        // navbar.classList.remove("navbar-dark");


        // //change elements
        // document.querySelector('.nav-image').src = "/images/logo-wh.png";

        makeLight();
    }
    else{
        darkTheme = true;

        setTheme(true);


        // //toggle button
        // document.querySelector('.theme-btn').innerHTML = "<i class='bx bxs-sun'></i>";

        // //toggle classes
        // body.classList.add("dark-theme");
        // navbar.classList.add("navbar-dark");

        // //change elements
        // document.querySelector('.nav-image').src = "/images/dark-logo.png";

        makeDark();
    }

    console.log(getCookie('theme'));
    
}





const toggleDark=(darkstatus) => {

    if(!darkstatus){

        //toggle button
        document.querySelector('.theme-btn').innerHTML = "<i class='bx bxs-moon'></i>";

        //togle classes
        body.classList.remove("dark-theme");
        navbar.classList.remove("navbar-dark");


        //change elements
        document.querySelector('.nav-image').src = "/images/logo-wh.png";
    }
    else{

        //toggle button
        document.querySelector('.theme-btn').innerHTML = "<i class='bx bxs-sun'></i>";

        //toggle classes
        body.classList.add("dark-theme");
        navbar.classList.add("navbar-dark");

        //change elements
        document.querySelector('.nav-image').src = "/images/dark-logo-wh.png";
    }
    
}