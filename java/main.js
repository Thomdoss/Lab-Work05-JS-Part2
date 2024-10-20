let cancelBtn = document.getElementById('cancel');
let sendBtn = document.getElementById('send');
let calculateBtn = document.getElementById('calculate');

function userForm() {
   event.preventDefault();
   var text = 'Full Name: ';
   text =
      text +
      document.getElementById('fn').value +
      ' ' +
      document.getElementById('ln').value +
      '<br>';
   text = text + 'Email: ' + document.getElementById('email').value + '<br>';
   text = text + 'Address: ' + document.getElementById('address').value + '<br>';
   text =
      text +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
      document.getElementById('ci').value +
      ', ' +
      document.getElementById('pro').value +
      '<br>';

   let member = '';
   if (document.getElementById('Premium').checked) {
      member = 'Premium';
   } else if (document.getElementById('Standart').checked) {
      member = 'Standard';
   } else if (document.getElementById('Basic').checked) {
      member = 'Basic';
   }
   text = text + 'Membership: ' + member + '<br>';
   document.getElementById('output').innerHTML = text;
}

function resetForm() {
   event.preventDefault();
   document.getElementById('output').innerHTML = '';
   document.getElementById('fn').value = '';
   document.getElementById('ln').value = '';
   document.getElementById('ci').value = '';
   document.getElementById('pro').value = '';
   document.getElementById('address').value = '';
   document.getElementById('email').value = '';
   document.getElementById('fn').value = '';
   document.getElementById('Premium').checked = true;
}

function numbersArea() {
   let numbers = document.getElementById('numbers').value;

   let numbersINT = numbers
      .trim() // Delete the first and last space
      .split(/\s+/) // Divide the string by 1 or more space.
      .filter((value) => !isNaN(value)) // Only integer
      .map(Number); // Convert string into Int

   return numbersINT;
}

function autoSum() {
   let numbers = numbersArea();
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum = sum + parseInt(numbers[i]);
   }
   return sum;
}

function average() {
   let numbers = numbersArea();
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
   }
   return sum / numbers.length;
}

function maxim() {
   let numbers = numbersArea();
   let maxi = numbers[0];
   for (let i = 1; i < numbers.length; i++) {
      if (maxi < numbers[i]) {
         maxi = numbers[i];
      }
   }
   return maxi;
}

function minim() {
   let numbers = numbersArea();
   let mini = numbers[0];
   for (let i = 1; i < numbers.length; i++) {
      if (mini > numbers[i]) {
         mini = numbers[i];
      }
   }
   return mini;
}

function calculate() {
   if (numbersArea().length == 0 || document.getElementById('numbers').value.length == 0) {
      document.getElementById('result').innerHTML = 'Incorrect Value !';
      document.getElementById('numbers').value = '';
      return;
   }
   let result = '';
   if (document.getElementById('su').checked) {
      result = autoSum();
   } else if (document.getElementById('av').checked) {
      result = average().toFixed(2);
   } else if (document.getElementById('ma').checked) {
      result = maxim();
   } else if (document.getElementById('mi').checked) {
      result = minim();
   }
   document.getElementById('result').innerHTML = 'Result: ' + result;
}

if (sendBtn != null) {
   sendBtn.addEventListener('click', userForm);
}

if (cancelBtn != null) {
   cancelBtn.addEventListener('click', resetForm);
}

if (calculateBtn != null) {
   calculateBtn.addEventListener('click', calculate);
}
