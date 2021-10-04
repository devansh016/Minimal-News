let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(()=> {
        document.documentElement.classList.remove('transition')
    }, 250)
}

//Function to change Theme
function changeTheme(){
    if(document.documentElement.getAttribute('data-theme') == 'dark'){
        trans();
        document.documentElement.setAttribute('data-theme', '')
        setCookie('theme','',7);
    }
    else{
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        setCookie('theme','dark',7);
    }
}

//Checks the theme cookie whether to set dark theme or not
if(getCookie('theme')=='dark'){
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
    setCookie('theme','dark',7);
}

//Function to Create Cookie
function setCookie(name,value,exp_days) {
    var d = new Date();
    d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get Cookies
function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){  
          return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// function to show back to top button on scroll
window.onscroll = () => {
    let scroll = window.scrollY || document.documentElement.scrollTop
    let button = document.querySelector('.backToTop')
    if(scroll > 800){
        button.style.visibility = "visible"
    }else {
        button.style.visibility = "hidden"
    }
}

// function to back to top 
function backToTop(){
    return window.scrollTo(0,0)
}

// Redirect to country route 
function changeCountry(event){
    var url = `${window.location.origin}/${event.target.value.toLowerCase()}`; 
    window.location = url ;
 }