/*jshint esversion: 6 */

const box = document.getElementById('box');
const TL = document.getElementById('TL');
const TR = document.getElementById('TR');
const BR = document.getElementById('BR');
const BL = document.getElementById('BL');
const TA = document.getElementById('TA');
const ALL = document.getElementById('ALL');

function updateBox() {
  if (ALL.checked) {
    TR.value = BR.value = BL.value = TL.value;
  }
  box.style = `border-radius: ${TL.value}px ${TR.value}px ${BR.value}px ${BL.value}px`;
  TA.innerHTML = `border-radius: ${box.style.borderRadius};
-webkit-border-radius: ${box.style.borderRadius};`;
}

function checkAll() {
  if (ALL.checked) {
    TR.value = BR.value = BL.value = TL.value;
    updateBox();
  } else {
    TR.value = BR.value = BL.value = 0;
    updateBox();
  }
}

function clipboard() {
  if (TA.value) {
    /* Select the text field */
    TA.select();
    TA.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert(`The text: 

${TA.value}

 has been copied to clipboard!`);
  }
}