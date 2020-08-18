const tech = [
    {
        id:"1",
        img:"Images/html1.png",
        name:"Html",
        title:"Structure of the web",
        summary:"HTML (or Hypertext Markup Language)  is a computer language designed to create websites that later can be explored by anybody who accesses the Internet. HTML is normally employed to structure a web document. It defines such elements as headlines or paragraphs and enables embedding images, video, and other media.",
    },
    {
        id:"1",
        img:"Images/css1.png",
        name:"Css",
        title:"Beautifies the web",
        summary:"CSS (or Cascading Style Sheets) is a style sheet language. It’s applied to define how HTML elements are supposed to be presented on a webpage in terms of design, layout, and variations for diverse devices with different screen sizes. CSS masters the layout of numerous different web pages at a time."

    },
    {
        id:"1",
        img:"Images/stuff.png",
        name:"Javascript",
        title:"Gets the web working",
        summary:"JavaScript (JS) is one of the most popular scripting languages. It’s mostly renowned for providing a full stack of technologies for both front-end and back-end development. As we are talking about the first one, it’s applied to make web pages dynamic."

    },
    {
        id:"1",
        img:"Images/jquery1.png",
        name:"jQuery",
        title:"Javascript Library",
        summary:"jQuery, in turn, is aimed at controlling HTML documents. It has a simple API to control events and design animation in browsers. Aside from that, jQuery is applied to manipulate the Document Object Model (DOM) and serves as a plugin development tool as well. It also comes with a lighter cross-browser library."

    },
    {
        id:"1",
        img:"Images/bootstrap1.png",
        name:"Bootstrap",
        title:"Write less css code",
        summary:"A CSS framework that has a set of default CSS and HTML files. It extends a front-end developer’s capabilities for website design. In addition to assisting while building a responsive design, It also present distinct and symmetric layouts, saving developers from writing code from ground zero at every occasion."

    },
    {
        id:"1",
        img:"Images/react1.png",
        name:"React",
        title:"Javascript framework",
        summary:"React is an open-source library for building dynamic user interfaces, born and bred by Facebook. The framework is applied to create web-applications with multiple dynamic components. It relies on JavaScript and JSX, a Facebook PHP language extension. React enables building reusable HTML elements for the front end."

    }
];

const image = document.getElementById("image");
const name = document.getElementById("name");
const title = document.getElementById("title");
const summary = document.getElementById("summary");
const lead = document.querySelector(".LeaD");
const btnSuccess = document.querySelector(".btn-success");

// previous and next buttons

const previous = document.getElementById("previous");
const next = document.getElementById("next");

let count = 0;

window.addEventListener("DOMContentLoaded",function(){
 
currentContent();


});


function currentContent(){
   
    const item = tech[count];
    image.src = item.img;
    name.textContent = item.name;
    title.textContent = item.title;
    summary.textContent = item.summary;
    if(count === 1){
        previous.style.display = "block";
    }
    if(count === 5){
        previous.style.display = "none";
        lead.style.display = "block";
        btnSuccess.style.display = "block";
        next.style.display = "none";

    }
}
 
next.addEventListener('click',function(){
    count ++;
  
    currentContent(count);

})
previous.addEventListener('click',function(){
    count --;
    currentContent(count);
})


// testing the spread operator

// const a = ["a","b","c"];
// const b = ["d","e"]

// console.log(b)

// testing the this function

const car = {
    Manufacturer:'Toyota',
    Name:"Camry",
    full: function(){
        return `The make is ${this.Manufacturer} and the Name is ${this.Name}`
    }
}

console.log(car.full());