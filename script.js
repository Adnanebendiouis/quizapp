const submitButton = document.getElementById("submitbtn");
let checkbox1 = document.getElementById("choice1");
let checkbox2 = document.getElementById("choice2");
let checkbox3 = document.getElementById("choice3");
let checkbox4 = document.getElementById("choice4");
let checkboxRight = checkbox1;
let updatePic = document.getElementById("img");
let nextButton = document.getElementById("nextbtn");
let previous = document.getElementById("previousbtn");
let sol1 = document.getElementById("lable1");
let sol2 = document.getElementById("lable2");
let sol3 = document.getElementById("lable3");
let sol4 = document.getElementById("lable4");
let counter = 1;
const pagecount = document.getElementById("myP");

function handleSubmit() {
  if (checkboxRight.checked) {
    counter++;
    window.alert("You got the right answer!");

    handleNext();
  } else {
    window.alert("Wrong, try again.");
  }
}

function handleNext() {
  switch (counter) {
    case 2:
      updatePic.src = "images/image.png";
      checkboxRight = checkbox3;
      sol1.textContent = `*p=10, vg=20
                          Dans f_l : vl=30
                          Apres f_l : vg=40
                          Apres f_g: vg=50
                          vl = 110`;
      sol2.textContent = `*p=10, vg=20
                          Dans f_l : vl=30
                          Apres f_l : vg=40
                          Apres f_g: vg=50
                          vl = 140`;
      sol3.textContent = `*p=10, vg=20
                          Dans f_l : vl=30
                          Apres f_l : vg=40
                          Apres f_g: vg=50
                          vl = 80`;
      sol4.textContent = `*p=10, vg=20
                          Dans f_l : vl=30
                          Apres f_l : vg=40
                          Apres f_g: vg=50
                          vl = 170`;
      break;
    case 3:
      updatePic.src = "images/3.png";
      checkboxRight = checkbox2;
      sol1.textContent = `1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12 | 11 | 12 |`;
      sol2.textContent = `1 | 2 | 3 | 6 | 5 | 4 | 7 | 8 | 9 | 12 | 11 | 12 |`;
      sol3.textContent = `1 | 2 | 3 | 6 | 5 | 4 | 9 | 8 | 7 | 12 | 11 | 12 |`;
      sol4.textContent = `1 | 3 | 2 | 6 | 5 | 4 | 9 | 8 | 7 | 12 | 11 | 12 |`;
      break;
    case 4:
      updatePic.src = "images/4.png";
      checkboxRight = checkbox4;
      sol1.textContent = `m=o,T[m]=3`;
      sol2.textContent = `m=L,T[m]=2`;
      sol3.textContent = `m=l,T[m]=2`;
      sol4.textContent = `m=T,T[m]=2`;
      break;
    case 5:
      updatePic.src = "images/5.png";
      checkboxRight = checkbox1;
      sol1.textContent = `A = -13
                            A = -16
                            A = -19
                            Faux`;
      sol2.textContent = `A = -12
                          A = -15
                          A = -18
                          Vrai`;
      sol3.textContent = `A = -12
                          A = -15
                          A = -18
                          Faux`;   
      sol4.textContent = ``;                  
      break;
    default:
      break;
  }
  [checkbox1, checkbox2, checkbox3, checkbox4].forEach((checkbox) => {
    checkbox.checked = false;
  });
  pagecount.textContent = `${counter}/10`;
}
function uncheckOthers(selectedCheckbox) {
  [checkbox1, checkbox2, checkbox3, checkbox4].forEach((checkbox) => {
    if (checkbox !== selectedCheckbox) {
      checkbox.checked = false;
    }
  });
}
[checkbox1, checkbox2, checkbox3, checkbox4].forEach((checkbox) => {
  checkbox.addEventListener("change", () => uncheckOthers(checkbox));
});
submitButton.addEventListener("click", handleSubmit);
nextButton.addEventListener("click", handleNext);
