let val;

 val = document;
 val = document.doctype;
 val = document.head;
 val = document.body;
 val = document.URL;

 val = document.links; //HTMLCOLLECTION
 val = document.links[0];
 val = document.links[3];
 val = document.links[0].id;
 val = document.links[0].className;
 val = document.links[0].classList; //DOMTOKENLIST
 val = document.links[0].classList[1];
 val = document.links[0].classList[0];

 val = document.forms; //HTMLCOLLECTION
 val = document.forms[0];
 val = document.forms[0].id;
 val = document.forms[0].className;
 val = document.forms[0].classList;
 val = document.forms[0].classList[0];
 val = document.forms[0].action;
 val = document.forms[0].method;

 val = document.images; //HTMLCOLLECTION
 val = document.images[0];
 val = document.images[0].src;
 val = document.images[0].className;
 val = document.images[0].classList;
 val = document.images[0].classList;
 val = document.images[0].alt;
 val = document.images[0].getAttribute('asd');

 val = document.scripts; //HTMLCOLLECTION
 val = document.scripts[0];
 val = document.scripts[0].src;
 val = document.scripts[0].type;
 val = document.scripts[0].getAttribute('src');
 val = document.scripts[0].getAttribute('type');

 // console.log(val);


 // Change Styling
 document.getElementById('tasktitle').style.background='grey';
 // document.getElementById('tasktitle').style.color='#fff';
 document.getElementById('tasktitle').style.padding='5px';

  // Change Content
  document.getElementById('tasktitle').innerContent="My List"; //cannot write html code
  document.getElementById('tasktitle').innerText="My Task"; //cannot write html code
  document.getElementById('tasktitle').innerHTML=`<span style="color:yellow">My Job</span>`; //just only can write

  //Call to Class Name
  let lis = document.getElementsByClassName('list-group-item'); //HTML Collection
  // console.log(lis);
  // console.log(lis[0]);
  // lis[0].style.color='blue';
  // lis[1].innerText='Have to vist';

  //Call to Tag
  let litags = document.getElementsByTagName('li'); //HTML Collection
  // console.log(litags);
  // console.log(litags[0]);
  // litags[0].style.color='red';
  // litags[1].innerText='Have to cook';

  //querySelector
  console.log(document.querySelector('#tasktitle'));
  console.log(document.querySelector('.card-title'));
  console.log(document.querySelector('h3'));


  //querySelector
  // console.log(document.querySelector('li'));
  // document.querySelector('li').style.color='violet';
  // document.querySelector('ul li').style.color='blue';
  // document.querySelector('ul li:nth-child(odd)').style.color='red';
  // document.querySelector('ul li:nth-child(even)').style.color='gold';
  // document.querySelector('ul li:last-of-type').style.color='green';
  // document.querySelector('ul li:nth-of-type(3)').textContent='Have to read';
  // document.querySelector('ul li:nth-of-type(4)').innerHTML="<span style='color:gold'>Have to read</span>";

const listitems = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listitems);

// document.querySelector('ul li:nth-child(odd)').style.background='pink';
// document.querySelector('ul li:nth-child(even)').style.background='violet';

// console.log(typeof listitems);

let arritems = Array.from(listitems);
console.log(arritems);

arritems.forEach(function(arritem,index){
    // console.log(arritem);
    // arritems.textContent = 'Hello';
    // arritem.innerText = `${index} : Hello`
});

//querySelectorAll

let its = document.querySelector('ul.list-group li.list-group-item');
console.log(its);

let itms = document.querySelectorAll('ul.list-group li.list-group-item');
console.log(itms);
// console.log(itms[0]);

// itms.forEach(function(itm,index){
    // console.log(itm);
    // itm.textContent = 'Hello';
    // itm.innerText = `${index} : Hello World`;
// });

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');
// console.log(lieven);

// liodd.forEach(function(li,index){
//     console.log(li);
//     li.style.background = 'grey';
// });

// for(let i=0;i<lieven.length;i++){
//     console.log(i);
//     console.log(lieven[i]);
//     lieven[i].style.background='silver';
// };

// Children

let chl;

const getul = document.querySelector('ul.list-group');
console.log(getul);
const getli = document.querySelector('li.list-group-item:first-child');
// console.log(getli);

chl = getul.children; //HTML Collection
// console.log(chl);
// console.log(chl[0]);
chl = getul.children[1];
// console.log(chl);

// getul.children[1].innerText ='Have to eat';
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-task2" class="delete-task"><i class="fa-solid fa-trash-can"></i></a>`


// children of children

chl = getul.children[1].children; //HTMl Collection
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;//Dom Token list
chl = getul.children[1].children[0].getAttribute('href');

chl = getul.children[0].children[0].children;
chl = getul.children[0].children[0].children[0];


// First Element Child
chl = getul.firstElementChild;

// Last Element Child
chl = getul.lastElementChild;

//Child Element Count

chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;

// console.log(chl);

// Parent Element

const getfirstli = document.querySelector('li')


//Next Element sibling
        // list item 1    list item 2
let sbl = getfirstli.nextElementSibling;

sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(sbl);
        
     // list item 1 list item 2
psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(psbl);

//Create Element 
let newli = document.createElement('li');

//Add ID 
newli.id = 'new-item';


//Add Class
newli.className = 'list-group-item';


//Add Attribute (qualificatedNmae, name)
newli.setAttribute('title','newitem')

// newli.textContent = 'hay';
// newli.innerText='hi';
// newli.innerHTML= `list item 5<a href="#" id="delete-task5" class="delete-task"><i class="fa-solid fa-trash-can"></i></a>`;


//Create Text Node
newli.appendChild(document.createTextNode("Save Myanmar"));

const newlink = document.createElement('a');

newlink.href = '#';

//Add ID 
newlink.id = 'delete-item6';

//Add Class 
newlink.className = 'delete-task';

newlink.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
// console.log(newlink);

newli.appendChild(newlink);
// console.log(newlink);

document.querySelector('ul.list-group').appendChild(newli);



//Replace Element

const newtitle = document.createElement("h2");

//Add ID
newtitle.id = 'tasktitle'

//Create Text Node
newtitle.appendChild(document.createTextNode('All My List'));
// console.log(newtitle);

const oldtitle = document.getElementById('tasktitle');
// console.log(oldtitle);

const getcardaction = document.querySelector('.card-action');

//Peplace Child(new,old)
getcardaction.replaceChild(newtitle,oldtitle);


//Remove Element

const getlis = document.querySelectorAll('li'); //Node List
//console.lod(getlis);
//console.lod(getlis[0]);
// getlis[0].remove();
// getlis[4].remove();


//Remove Child Element (child)
const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// console.log(getlis[5]);

// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[5]);



//Class
const firstli = document.querySelector('li:first-child');
console.log(firstli);
// const firstlink = firstli.children; //HTML Collection
const firstlink = firstli.children[0];
console.log(firstlink);
let firstlnk;
firstlnk = firstlink.className;
console.log(firstlink);
firstlnk = firstlink.classList; //DOM Token List
console.log(firstlink);
console.log(firstlink[0]);
console.log(firstlink[1]);



// firstlink.className = 'delete-myself';
// firstlink.className = 'delete-task delete-myself';
// firstlink.className = 'delete-task delete-me delete-myself';

firstlnk = firstlink.classList; //DOM Token List
// console.log(firstlnk);
// console.log(firstlnk[0]);
// console.log(firstlnk[1]);

// firstlink.classList.add('delete-ourserve');
// firstlink.classList.add('delete-myself');
// firstlink.classList.add('delete-myself','delete-ourserve');
// firstlink.classList.remove('delete-task');
// firstlink.classList.remove('delete-me','delete-myself');

// //replace(old,new);
// firstlink.classList.replace('delete-ourserve','delete-delete');

// if(firstlink.classList.contains("delete-me")){
//     console.log('Yes');
// }else{
//     console.log('Yes');
// }


//Attribute
let getatt = firstlink.getAttribute('href');
//console.log(getatt);
firstlink.setAttribute('href','http://google.com');
getatt = firstlink.hasAttribute('href');
console.log(getatt);//true
getatt = firstlink.hasAttribute('title');
console.log(getatt);//false


//addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector(".clear-task");

//Method 1

// clearbtn.addEventListener("click".function(e){
//     console.log('hay i am waorking');

//     e.preventDefault();
// })


//Method 2
// clearbtn.addEventListener("click",myclick);
function myclick(e){
    //console.log("hay iam my click");

    let val;
    val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; //DOM Token LIst

    // e.target.innerText = 'Finished';

        //Event Type


        val = e.type;

            //Coordinates  event - relative to the window
        val = e.clientX;
        val = e.clientY;

        //Coordinates  event - relative to the element
        val = e.offsetX;
        val = e.pffsetY;

    console.log(val);

    // e.preventDefault();
}

//MouseEvent

const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h2");

console.log(clbtn);

// single click
// clbtn.addEventListener("click", mouseeventtype);

// double click
// clbtn.addEventListener("dblclick", mouseeventtype);

// mousedown
// clbtn.addEventListener("mousedown", mouseeventtype);

// mouseup
// clbtn.addEventListener("mouseup", mouseeventtype);

// mouseenter
// clbtn.addEventListener("mouseenter", mouseeventtype);

// mouseover
// card.addEventListener("mouseover", mouseeventtype);

// mouseleave
// card.addEventListener("mouseleave", mouseeventtype);

// mousemove
// card.addEventListener("mousemove", mouseeventtype);

// function mouseeventtype(e) {
//   console.log(`Event type = ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.background = `rgb(${e.offsetX},${e.offsetY},1)`;
//   e.preventDefault();
// }

const formel = document.querySelector("form");

formel.addEventListener("submit", inputeventtype);

function inputeventtype(e) {
  // console.log(`Event type = ${e.type}`);

  // e.preventDefault();
}

const inputtask = document.getElementById("task");
const geth2 = document.querySelector("h2");

// keydown
// inputtask.addEventListener('keydown', inputeventtype);

// keypress
// inputtask.addEventListener('keypress', inputeventtype);

// keyup
// inputtask.addEventListener('keyup', inputeventtype);

// input // same as keyup
// inputtask.addEventListener('keyup', inputeventtype);

// focus
// inputtask.addEventListener('focus', inputeventtype);

// blur
// inputtask.addEventListener('blur', inputeventtype);

// cut
// inputtask.addEventListener('cut', inputeventtype);

// paste
// inputtask.addEventListener('paste', inputeventtype);

// copy
// inputtask.addEventListener('copy', inputeventtype);

// function inputeventtype(e) {
//   console.log(`Event Type = ${e.type}`);
//   console.log(e.target.value);
//   geth2.textContent = e.target.value;
// }

//Event Bubbling

// document.querySelector('.card-title').addEventListener("click",function(){
//     console.log('i am card-title')
// });
// document.querySelector('.card-content').addEventListener("click",function(){
//     console.log('i am card-content')
// });
// document.querySelector('.card').addEventListener("click",function(){
//     console.log('i am card')
// });

//Event Delegation

// const deleitem = document.querySelector(".delete-task");
// deleitem.addEventListener("click",deleteitem);

// function deleteitem(e){
// console.log('i am delete item');
// console.log(e.target);
// e.preventDefault();
// }

document.body.addEventListener("click",evendelg);

function evendelg(e){
    // console.log(' i am working');
    // console.log(e.target);

    // if(e.target.className === 'fa-solid fa-trash-can'){
    //     console.log('hay i am trash can');
    // }

    // if(e.target.parentElement.className === 'delete-task'){
    //     console.log('i am delete item by a tag');
    // }

    // if(e.target.parentElement.className === 'delete-task delete-me'){
    //     console.log('i am delete item by a tag');
    // }

    if(e.target.parentElement.classList.contains('delete-task')){
        console.log('i am delete item by a tag');

        //i
        // e.target.remove();

        //i       a
        // e.target.parentElement.remove();

        //i       a               li
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
};


document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log('ssss');

    const getnewtask = document.getElementById('task').value;
    // console.log(getnewtask);

    // localStorage.setItem('mytask',getnewtask);

    let alltasks;

    if(localStorage.getItem('mytasks')=== null){
        alltasks = [];
    }else{
        alltasks = JSON.parse(localStorage.getItem('mytasks'));
    }


    alltasks.push(getnewtask);

    // console.log(alltasks);

    localStorage.setItem('mytasks',JSON.stringify(alltasks));
});

// console.log(JSON.parse(localStorage.getItem('mytasks')));
// console.log(typeof localStorage.getItem('mytasks'));

let getalltasks = localStorage.getItem('mytasks');
    getalltasks = JSON.parse(getalltasks);
    console.log(getalltasks);

    getalltasks.forEach(function(getalltasks){
        console.log(getalltasks);
    });