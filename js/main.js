
let darkmode =document.getElementById("darkmode");
let darkmodeText =document.getElementById("darkmodeText");
let darkmodeImg =document.getElementById("darkmodeImg");
let container= document.querySelector(".container");
let nav=document.querySelector(".navbar"); 
let fileInput = document.querySelector(".file-input");
chooseImgBtn = document.querySelector(".choose-img");
let sturate= document.getElementById("saturate");
let sattnum=document.getElementById('satnum');
let contrast= document.getElementById("contrast");
let contnum=document.getElementById('contnum');
let brightness= document.getElementById("brightness");
let brightnum=document.getElementById("brightnum")
let sepia= document.getElementById("sepia");
let sepnum=document.getElementById("sepnum")
let grayscale= document.getElementById("greyscale");
let greynum=document.getElementById("greynum")
let blurr= document.getElementById("Blur");
let blurnum=document.getElementById("blurnum")
let upload= document.getElementById("upload");
let download= document.getElementById("download") ;
let saveimge=document.querySelector(".save-img");
let img= document.getElementById("img") ;
let canvas=document.getElementById("canv");
const ctx=canvas.getContext('2d');
let reset= document.getElementById("reset") ;
let imgbox= document.querySelector(".img-box") ;
let filters=document.querySelectorAll("ul li input");
let filtersinput=document.querySelectorAll("ul li input[type=range]");
let insertinput=document.querySelectorAll("ul li input[type=number]");
let popup=document.querySelector('.popup');
let form=document.querySelector('.formm');
let formButton=document.getElementById('signin');
let rotateOptions = document.querySelectorAll(".rotate button");
let closepopup=document.querySelector('.popup .close-btn');
let email = document.forms["form"]['email'];
let password = document.forms["form"]['password'];
let emailerror=document.getElementById('email_error');
let passworderror=document.getElementById('password_error');
letuser=false;
let rotate = 0,flipHorizontal = 1, flipVertical = 1 ,sat=100, cont=100,

bright=100, sep=0,grey=0,blu=0;
console.log(nav);
console.log(container);
console.log(brightness);
console.log(sepnum);
console.log(greynum);
console.log(blurnum);
console.log(upload);
console.log(download);
console.log(img);
console.log(reset);
console.log(imgbox);





//screen on load 
window.onload=function(){
  download.style.display="none";
  saveimge.style.display="none";
  reset.style.pointerEvents = "none";

  filters.forEach(element => {
    element.style.pointerEvents = "none";
    element.style.opacity = "0.4";
  });

  rotateOptions.forEach(element => {
    element.style.pointerEvents = "none";
    element.style.opacity = "0.4";
  });
  

  setTimeout(function(){
    popup.classList.add("active");
    nav.style.filter='blur(5px)'
    container.style.filter='blur(5px)'
  }, 3000);
}




//close popup login form

closepopup.addEventListener("click",function(){
  user=false;
  popup.classList.remove("active");
  nav.style.filter='none'
  container.style.filter='none'
  console.log(user);
  popup.style.display='none';

});

darkmode.onclick=function(){

  if(darkmodeText.innerHTML=='Dark'){
     darkmodeText.innerHTML="light"
  darkmodeImg.src="images/sun.png"
  
  document.documentElement.setAttribute('data-theme', 'dark');


  }else{
    darkmodeText.innerHTML="Dark"
  darkmodeImg.src="images/moon.png"
  document.documentElement.setAttribute('data-theme', 'light');
  }
 

}


upload.onchange=function(){
  resetValues();
  download.style.display="block";
  saveimge.style.display="block";
  reset.style.pointerEvents = "auto";

  filters.forEach(element => {
    element.style.pointerEvents = "auto";
    element.style.opacity = "1";
  });

  rotateOptions.forEach(element => {
    element.style.pointerEvents = "auto";
    element.style.opacity = "1";
  });


  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);

  file.onload=function(){
    img.src=file.result;
  }
  // img.onload=function(){
  //   canvas.width=img.width;
  //   canvas.height=img.height;
  //   ctx.drawImage(img,0,0,canvas.width,canvas.height);
  //  img.style.display='none';
  // }
  
}

form.addEventListener('submit',function (params) {
  params.preventDefault();
  let result=validate();
  if(result != false){
    login();
  }
});

email.addEventListener('textInput',email_verify);
 password.addEventListener('textInput',pass_verify);
function email_verify(){
  if(email.value.length >= 8){
    email.style.border="1px solid silver";
    emailerror.style.display="none";
return true;
  }
}

function pass_verify(){
  if(password.value.length >= 8){
    password.style.border="1px solid silver";
    passworderror.style.display="none";
return true;
  }
}




//filters 


filtersinput.forEach(filter=>{

  filter.addEventListener("input",function(){
       
       console.log(sturate.value);

       if(sepia.value>200 || sepia.value<0|| sturate.value>200 || sturate.value<0 || contrast.value>200 || contrast.value<0|| brightness.value>200 || brightness.value<0 ){
        alert("Saturate, sepia, Brightness and contrast , value should be between 0 to 200")
        sturate.value="100";
        contrast.value="100";
        sepia.value="100";
        brightness.value="100";
        sattnum.value="100";
        contnum.value="100";
        sepnum.value="0";
        brightnum.value="100";

        img.style.filter=`
        saturate(${sat}%)
        contrast(${cont}%)
        brightness(${bright}%)
        grayscale(${grey})
        sepia(${sep}%)
        blur(${blu}px)
        
        
        
        `
      
      }else{
        console.log(grayscale.value);
        
      sattnum.value=sturate.value;
       contnum.value=contrast.value;
       brightnum.value=brightness.value;
       sepnum.value=sepia.value;
        blurnum.value=blurr.value
        greynum.value=grayscale.value;
       img.style.filter=`
       saturate(${sturate.value}%)
       contrast(${contrast.value}%)
       brightness(${brightness.value}%)
       grayscale(${grayscale.value})
       sepia(${sepia.value}%)
       blur(${blurr.value}px)
       
       
       
       `
       }
       
    
       
       

     })
    


})

insertinput.forEach(filter=>{

  filter.addEventListener("input",function(){
    
       
       console.log(greynum.value);
       if(sepnum.value>200 || sepnum.value<0|| sattnum.value>200 || sattnum.value<0 || contnum.value>200 || contnum.value<0|| brightnum.value>200 || brightnum.value<0 ){
        alert("Saturate, sepia, Brightness and contrast , value should be between 0 to 200")
       
        sturate.value="100";
        contrast.value="100";
        sepia.value="100";
        brightness.value="100";
        sattnum.value="100";
        contnum.value="100";
        sepnum.value="0";
        brightnum.value="100";
        img.style.filter=`
       saturate(${sat}%)
       contrast(${cont}%)
       brightness(${bright}%)
       grayscale(${grey})
       sepia(${sep}%)
       blur(${blu}px)
       
       
       
       `
      
      }else{
       
        sturate.value=sattnum.value;
       contrast.value=contnum.value;
       sepia.value=sepnum.value;
       brightness.value=brightnum.value;
       grayscale.value=greynum.value;
       blurr.value =blurnum.value;
       img.style.filter=`
       saturate(${sattnum.value}%)
       contrast(${contnum.value}%)
       brightness(${brightnum.value}%)
       grayscale(${greynum.value})
       sepia(${sepnum.value}%)
       blur(${blurnum.value}px)
       
       
       
       `
       }
       

     })
    


})






// wrong way cause overlap

// sturate.addEventListener("input",function(){
//   img.style.filter=`saturate(${sturate.value}%)`;
// })



//reset alues 
function resetValues(){
  img.style.filter='none';
  sturate.value='100';
  contrast.value='100';
  brightness.value='100';
  sepia.value='0';
  grayscale.value='0';
  blurr.value='0';
  img.style.transform = `rotate(${0}deg) scale(${1}, ${1})`;


  
}



//rotate



rotateOptions.forEach(option => {
  option.addEventListener("click", () => {
      if(option.id === "left") {
          rotate -= 90;
          console.log('left');
      } else if(option.id === "right") {
          rotate += 90;
          console.log('rigt');
      } else if(option.id === "horizontal") {
          flipHorizontal = flipHorizontal === 1 ? -1 : 1;
      } else {
          flipVertical = flipVertical === 1 ? -1 : 1;
      }
      
      img.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
      console.log(img.width);
  console.log(img.height);
  });
});



function validate(){
  if(email.value.length < 9){
    email.style.border="1px solid red";
    emailerror.style.display="block";
    email.focus();
return false ;

  }
  if(password.value.length < 6){
    password.style.border="1px solid red";
    passworderror.style.display="block";
    password.focus();
return false;

  }

}

download.onclick=function(){


  canvas.width = img.width;
  canvas.height = img.height
  console.log(canvas.width);
  console.log(canvas.height);
     ctx.filter = `
     saturate(${sturate.value}%)
     contrast(${contrast.value}%)
     brightness(${brightness.value}%)
     grayscale(${grayscale.value})
     sepia(${sepia.value}%)
     blur(${blurr.value}px)
     
     
     
     `;
  
    ctx.scale(flipHorizontal, flipVertical);
    ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(rotate* Math.PI / 180); 
  
    
  ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    if(user!=true){
      ctx.font = '20px Arial';
      ctx.fillStyle = '#222';
      const watermarkText = 'Mixel';
      
      const textWidth = ctx.measureText(watermarkText).width;
      const x = (canvas.width - textWidth) / 15;
      const y = canvas.height / 3;
      
      ctx.fillText(watermarkText, x, y);
    }


    img.style.display='block';
    canvas.style.opacity="0";
   

  download.href=canvas.toDataURL();

}

// Log in 
function login(){
  user=true;
  popup.classList.remove("active");
  popup.style.display='none';
  nav.style.filter='none'
  container.style.filter='none'
  console.log(user);
}


reset.addEventListener("click",()=>resetValues());
chooseImgBtn.addEventListener("click", () => fileInput.click());