//check if local storage has items or not

let mainColor = localStorage.getItem("color_option");


if(mainColor !== null){

    // change main color in root to the color that u clicked in it. 

    document.documentElement.style.setProperty('--main-color',mainColor)


    document.querySelectorAll(".coloera-lists li").forEach(el =>{

        // remove class active from lists
        el.classList.remove("active");

        // check whick list equal to main color
        if(el.dataset.color === mainColor ){

            //add active class to list that === main color
            el.classList.add("active")
        }
    })



}


//toggle for setting box

let mySpin = document.querySelector(".toglle-box .fa-cog");

mySpin.onclick =function(){

    //add routation to the icon by adding class  fa-spin
    this.classList.toggle("fa-spin");

    let myBox = document.querySelector(".setting-box");

    myBox.classList.toggle("open")
}

//switch coloer

const collists = document.querySelectorAll(".coloera-lists li");

collists.forEach(li => {

    li.addEventListener('click',(e) => {

        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

        //add color to local storage

        localStorage.setItem("color_option", e.target.dataset.color);

        //remove active class from all childern

        e.target.parentElement.querySelectorAll(".active").forEach(el => {

            el.classList.remove("active");
        })

        //add active class to the color clicked

        e.target.classList.add("active")



    })
})


//change active class in links

let links = document.querySelectorAll(' .landing-page .header-area .links a ');


links.forEach(lin => {

    lin.addEventListener('click', (e) => {

        e.target.parentElement.parentElement.querySelectorAll(".active").forEach(linn =>{

            linn.classList.remove("active")
        })

        e.target.classList.add("active")
    })
})




//get landing padge

let lanndingPage = document.querySelector(".landing-page");

//creat array by the oics u want to add 

let arrayPics = ["6.png" , "2.jpg" ,"3.jpg","4.jpg","5.jpg"];

//random background option
let backgroundOption = true;

//variablr to control background in terval
let backgroundInterval;

//randomize function  
function randomizImg(){

    if(backgroundOption === true){

        //cahange pics in 7 sec

        backgroundInterval = setInterval( () =>{

            // to create random number
            let randomPic = Math.floor(Math.random() * arrayPics.length);
        
            //change pics with css
        
            lanndingPage.style.backgroundImage = 'url("images/' + arrayPics[randomPic]+ '")';
        
        },6000)
        
    }
}




//change background random event

let randomBack = document.querySelectorAll(".random-background span");

//loop for all span
randomBack.forEach(span =>{

    //add click on span
    span.addEventListener('click' , (e) =>{

        //remove active class 
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{

            element.classList.remove("active");
        })
        // add active class
        e.target.classList.add("active")


        if(e.target.dataset.background === 'yes'){

            backgroundOption = true;

            randomizImg();

            localStorage.setItem("background_option",true)
        }else{
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option",false)
        }
    })
})

//check if local storage have background option or not

let backOption = localStorage.getItem("background_option");

//check if random background is not empty

if(backOption !== null){

    if(backOption === 'true'){

        backgroundOption = true;
        
    }else{

        backgroundOption = false;
    }
    
    document.querySelectorAll(".random-background span").forEach(el =>{

        el.classList.remove("active");
    });

    if(backOption === 'true'){

        document.querySelector(".random-background .yes").classList.add("active");
    }else{
        document.querySelector(".random-background .no").classList.add("active");
    }

}
randomizImg();

//animation on progress
let ourSkills = document.querySelector(".skills");


window.onscroll = function (){


    // skill offset top

    let skillOffsetTop = ourSkills.offsetTop;

    // skill outer Height
    let skillOffsetHeight = ourSkills.offsetHeight;

    //window inner Height
    let windowHeight = this.innerHeight;

    // window Scroll Top
    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillOffsetTop + skillOffsetHeight - windowHeight )){

        let ourSpan = document.querySelectorAll(".skill-box .skill-progress span");

        ourSpan.forEach(skill =>{

            skill.style.width = skill.dataset.progress
        })
    }
}

// add popup box to the padge

let ourOverlay = document.querySelectorAll(".gallery img");


ourOverlay.forEach(img =>{

    img.addEventListener('click' , (e) =>{

        //create popup element
        let popupOverlay = document.createElement("div");
        
        //add class to popup element
        popupOverlay.className = 'popup-overlay';
        
        //add popup element to body
        document.body.appendChild(popupOverlay);

        //create popup box elemnt
        let popupBox = document.createElement("div");

        //add class to popup box
        popupBox.className = 'popup-box';

        if (img.alt !== null){

            //create heading
            let popupHeading = document.createElement("h3");

            //add text to heading
            let headingText = document.createTextNode(img.alt);

            //append heading text to heading
            popupHeading.appendChild(headingText);

            //append heading to popup box
            popupBox.appendChild(popupHeading);

        
        }
        //create img element
        let popupImg = document.createElement("img");

        //set img source
        popupImg.src = img.src;
        

        //append img to popup box
        popupBox.appendChild(popupImg);

        //append popup box to body
        document.body.appendChild(popupBox);
    
        //create span 
        let closeButton = document.createElement("span");

        // create text
        let closeButtonText = document.createTextNode("X");

        //append text to Button
        closeButton.appendChild(closeButtonText);

        //add class to close button
        closeButton.className = 'close-button';

        //append close button to popup box
        popupBox.appendChild(closeButton);
    })
})

document.addEventListener('click' , function(e){

    if(e.target.className == "close-button"){

        //remove popup box
        e.target.parentNode.remove();

        //remove popup overlay
        document.querySelector(".popup-overlay").remove();


    }

})



//Seclet all bullets

const navBullets = document.querySelectorAll(".nav-bullet .bullets");

//Seclect all links

const myLinks = document.querySelectorAll(".links a");

function scrollToSetion(elements) {
    elements.forEach(el => {

        el.addEventListener('click' , (e) =>{
            
            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
            
    
        });
    });
} 

scrollToSetion(navBullets);

scrollToSetion(myLinks);




//hide and show bullets

let bulletsSpan = document.querySelectorAll(".show-bullets span");

let bulletsContainer = document.querySelector(".nav-bullet");

let bulletsLocalStrage = localStorage.getItem("bullets-option");

if (bulletsLocalStrage !== null){

    bulletsSpan.forEach(span =>{

        span.classList.remove('active');
    })

    if(bulletsLocalStrage === 'block'){

        bulletsContainer.style.display = "block";
        document.querySelector('.coloer-option .show-bullets .yes').classList.add('active');

    }else{

        bulletsContainer.style.display = "none";
        document.querySelector('.coloer-option .show-bullets .no').classList.add('active');
    }
}

bulletsSpan.forEach(span => {

    span.addEventListener('click' , (e) =>{

        if(span.dataset.disply === 'show'){

            bulletsContainer.style.display = "block";
            localStorage.setItem('bullets-option' , 'block');
        }
        else{
            bulletsContainer.style.display = "none";
            localStorage.setItem('bullets-option' , 'none');
        }
        
        e.target.parentElement.querySelectorAll(".active").forEach(el =>{

            el.classList.remove("active");

        })
        e.target.classList.add('active')
    })
})



//reset options 

document.querySelector(".reset-option").onclick = function(){

    localStorage.removeItem('color_option');
    localStorage.removeItem('bullets-option');
    localStorage.removeItem('background_option');

    window.location.reload();
}



//select toglle btn

let toglleBtn = document.querySelector('.toglle-menu');

//select links

let tLinks = document.querySelector('.links');

toglleBtn.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle('menu-active');

    tLinks.classList.toggle('open')
}

document.addEventListener('click' , (e) => {

    if(e.target !== toglleBtn && e.target !== tLinks){

        if(tLinks.classList.contains('open')){

            toglleBtn.classList.toggle('menu-active');

            tLinks.classList.toggle('open')
        }
    }
})

tLinks.onclick = function(e){

    e.stopPropagation();
}