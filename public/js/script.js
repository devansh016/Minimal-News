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
        setCookie('theme','',30);
    }
    else{
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        setCookie('theme','dark',30);
    }
}