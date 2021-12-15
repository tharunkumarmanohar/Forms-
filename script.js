function createElement(element) {
    return document.createElement(element);
  }
  
  function append(element) {
    return document.body.append(element);
  }
  
  function appendChild(element, child) {
    return element.appendChild(child);
  }

  function appendChildren(element, ...children) {
    console.log(children);
    return element.append(...children);
  }
  
  function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
  }

  
//create table
  let tableData = [];

let container = createElement('div');
setAttribute(container, 'class', 'container');
append(container);

//create row

let row = createElement('div');
setAttribute(row, 'class', 'row');
appendChild(container, row);

//create coloum-1
let col1 = createElement('div');
setAttribute(col1, 'class', 'col-lg-4 col-md-4 col-sm-3 d-none d-sm-block');
appendChild(row, col1);

//create coloum-2
let col2 = createElement('div');
setAttribute(col2, 'class', 'col-lg-4 col-md-4 col-sm-6 col-xs-12');
appendChild(row, col2);

//create form

let form = createElement('form');
setAttribute(form, 'id', 'my-form');
appendChild(col2, form);

//First Name
let fName = createElement('div');
setAttribute(fName, 'class', 'form-group');
appendChild(form, fName);

let fNameLabel = createElement('label');
setAttribute(fNameLabel, 'for', 'fName');
fNameLabel.innerText = 'First Name';
appendChild(fName, fNameLabel);

let fNameInput = createElement('input');
setAttribute(fNameInput, 'type', 'text');
setAttribute(fNameInput, 'class', 'form-control');
setAttribute(fNameInput, 'id', 'fName');
setAttribute(fNameInput, 'aria-describedby', 'fName');
setAttribute(fNameInput, 'placeholder', 'Enter First Name');
appendChild(fName, fNameInput);
//end of first Name

//Last Name
let lName = createElement('div');
setAttribute(lName, 'class', 'form-group');
appendChild(form, lName);

let lNameLabel = createElement('label');
setAttribute(lNameLabel, 'for', 'lName');
lNameLabel.innerText = 'Last Name';
appendChild(lName, lNameLabel);

let lNameInput = createElement('input');
setAttribute(lNameInput, 'type', 'text');
setAttribute(lNameInput, 'class', 'form-control');
setAttribute(lNameInput, 'id', 'lName');
setAttribute(lNameInput, 'aria-describedby', 'lName');
setAttribute(lNameInput, 'placeholder', 'Enter Last Name');
appendChild(lName, lNameInput);
//end of Last Name

//address
let addr = createElement('div');
setAttribute(addr, 'class', 'form-group');
appendChild(form, addr);

let addrLabel = createElement('label');
setAttribute(addrLabel, 'for', 'addr');
addrLabel.innerText = 'Address';
appendChild(addr, addrLabel);

let addrInput = createElement('input');
setAttribute(addrInput, 'type', 'text');
setAttribute(addrInput, 'class', 'form-control');
setAttribute(addrInput, 'id', 'addr');
setAttribute(addrInput, 'aria-describedby', 'addr');
setAttribute(addrInput, 'placeholder', 'Enter Address');
appendChild(addr, addrInput);
//end of address


//pincode
let pin = createElement('div');
setAttribute(pin, 'class', 'form-group');
appendChild(form, pin);

let pinLabel = createElement('label');
setAttribute(pinLabel, 'for', 'pincode');
pinLabel.innerText = 'Pincode';
appendChild(pin, pinLabel);

let pinInput = createElement('input');
setAttribute(pinInput, 'type', 'number');
setAttribute(pinInput, 'class', 'form-control');
setAttribute(pinInput, 'id', 'pincode');
setAttribute(pinInput, 'aria-describedby', 'pincode');
setAttribute(pinInput, 'placeholder', 'Enter Pincode');
appendChild(pin, pinInput);
//end of pincode





// create submit button

let submit = createElement('button');
setAttribute(submit, 'type', 'submit');
setAttribute(submit, 'class', 'btn btn-secondary');
setAttribute(submit, 'onclick', 'submitform(event)');
submit.innerText = 'Submit';
appendChild(form, submit);
//create break 
let br1 = createElement('br');
appendChild(form, br1);
//create break
let br2 = createElement('br');
appendChild(form, br2);






// form submit
function submitform(event) {
  event.preventDefault();
  let firstName = document.querySelector('#fName').value;
  let lastName = document.querySelector('#lName').value;
  let addrValue = document.querySelector('#addr').value;
  let pincodeValue = document.querySelector('#pincode').value;
  
  
}

$(function() {
  $('form').submit(function() {
     console.log('Input 1: ' + $('#fName[name="fNameInput"]').value() + ' Input 2: ' + $('#lName[name="lNameInput"]').value() + 'Input 3: ' + $('#addr[name="addrInput"]').value() + 'Input 4: ' + $('#pincode[name="pinInput"]').value()); // etc.
  });
});

