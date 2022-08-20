const wrapper =document.querySelector(".wrapper ");
const qrInput = document.querySelector(".form input");
const qrImage=document.querySelector(" .qrImage");
const generateBtn=document.querySelector(".btn-button");
const overlay=document.querySelector('.overlay');
 let qrValue;
generateBtn.addEventListener("click",()=>{
    wrapper.classList.add("active");
   
    qrValue =qrInput.value;
    console.log(qrValue);
    if(!qrValue) return;
    //if the input is empty then return from here
    generateBtn.innerText="Generating QR Code...";
    //getting a QR code of user entered value using the qrserver


    //api and passing the api returned img srd to qrImg
    qrImage.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example=${qrValue} `;

    qrImage.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generating QR Code";
    });
   
});

// this is included so that the height and with qr code could be hide after clicking the 'escape' button
document.addEventListener('keydown',function(e){
    
    if(e.key=='Escape'){
        wrapper.classList.remove("active");
        qrInput.value="";
        

    }
})

// what i included more.

//1.the qr scan will get its initial appearance
//after clicking the "Escape button"

// 2.input text will get automatically emptiec
