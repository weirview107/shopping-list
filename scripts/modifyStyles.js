

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
//    console.log("Hello World ... stll here");
//    console.log(itemList.className);
//    text.className = 'card dark';
//    console.log(itemList.classList);
//    itemList.classList.forEach((c) => console.log(c));
//    text.classList.add('dark');
//    text.classList.remove('card');
//    text.classList.toggle('hidden');
//    text.classList.toggle('dark');
    
    
//    text.classList.replace('card', 'dark');
//    itemList.style.lineHeight = '3';
//
    items.forEach((item, index) => {
        item.style.color = 'red';
        if (index === 2) {
          item.style.color = 'blue';
        }
    });

}

document.querySelector('button').onclick = run;



