function darkmode(){



var body=document.body;
body.classList.toggle('dark-mode');



var button=document.getElementById('darkmode');
var a=document.getElementById('1');
var b=document.getElementById('2');
var c=document.getElementById('3');
var d=document.getElementById('4');


if (button.innerHTML=='Dark Mode'){
    button.innerHTML='Light Mode';
    document.getElementById('logos').src='logo2.png';
    button.style.cssText ='background-color : rgb(96, 162, 206) ; color : black';
    a.style.cssText='color : rgb(96,162,206)';
    b.style.cssText='color : rgb(96,162,206)';
    c.style.cssText='color : rgb(96,162,206)';
    d.style.cssText='color : rgb(96,162,206)';
    document.getElementById('ccls').src='ccl2.png';
    document.getElementById('공지0').style.cssText='background-color : rgb(96, 162, 206); color : black';
    document.getElementById('공지1').style.cssText='background-color : rgb(59, 91, 138); color : black';
    document.getElementById('공지2').style.cssText='background-color : rgb(59, 91, 138); color : black';
    button.style.cssText ='background-color : rgb(96, 162, 206); color : black';
    

} else {
    button.innerHTML='Dark Mode';
    document.getElementById('logos').src='logo.png';
    button.style.cssText ='background-color : rgb(172, 169, 169) ; color : black';
    a.style.cssText='color : black';
    b.style.cssText='color : black';
    c.style.cssText='color : black';
    d.style.cssText='color : black';
    document.getElementById('ccls').src='ccl.png';
    document.getElementById('공지0').style.cssText='background-color: gray; color : white';
    document.getElementById('공지1').style.cssText='background-color : white; color : black';
    document.getElementById('공지2').style.cssText='background-color : white; color : black';
   
    
}
}


