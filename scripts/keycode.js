// JavaScript Document
const inputSource  = document.querySelector('body');
const findInsertionPoint = document.querySelector('#insert');
const k3 = document.createElement('div');
const k2 = document.createElement('div');
const k1 = document.createElement('div');
findInsertionPoint.insertAdjacentElement('afterend' , k3);
findInsertionPoint.insertAdjacentElement('afterend' , k2);
findInsertionPoint.insertAdjacentElement('afterend' , k1);
k3.className = 'key';
k2.className = 'key';
k1.className = 'key';
k3.style.display = 'none';
k2.style.display = 'none';
k1.style.display = 'none';

const onKeyDown = e => {
	
	k1.innerHTML = `<small>e.key is</small><p>${e.key}</p>`;
	k2.innerHTML = `<small>e.keyCode is</small><p>${e.keyCode}</p>`;
	k3.innerHTML = `<small>e.code is</small><p>${e.code}</p>`;
	k3.style.display = 'inline-flex';
	k2.style.display = 'inline-flex';
	k1.style.display = 'inline-flex';
	findInsertionPoint.style.display = 'none';
}



window.addEventListener('keydown', onKeyDown);

//----------------------------------------------------------------------------
// Method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>

//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;
// });
//----------------------------------------------------------------------------
// Method 2
//function showKeyCodes(e) {
//  const insert = document.getElementById('insert');
//  insert.innerHTML = '';
//
//  const keyCodes = {
//    'e.key': e.key === ' ' ? 'Space' : e.key,
//    'e.keyCode': e.keyCode,
//    'e.code': e.code,
//  };
//  for (let key in keyCodes) {
//    const div = document.createElement('div');
//    div.className = 'key';
//    const small = document.createElement('small');
//
//    const keyText = document.createTextNode(key);
//    const valueText = document.createTextNode(keyCodes[key]);
//
//    small.appendChild(keyText);
//    div.appendChild(valueText);
//    div.appendChild(small);
//
//    insert.appendChild(div);
//  }
//}
//
//----------------------------------------------------------------------------

//window.addEventListener('keydown', showKeyCodes);

//----------------------------------------------------------------------------

