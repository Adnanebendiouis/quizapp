const submitButton = document.getElementById("submitbtn");
let checkboxRight = document.getElementById("choice1");
let checkbox2 = document.getElementById("choice2");
let checkbox3 = document.getElementById("choice3");
let checkbox4 = document.getElementById("choice4");
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
        window.alert("You got the right answer!");
        counter++;
        pagecount.textContent = `${counter}/10`; 
        handleNext();
    } else {
        window.alert("Wrong, try again.");
    }
}

function handleNext() {
    updatePic.src = "images/image.png";
    sol1.textContent = `*p=10, vg=20
    Dans f_l : vl=30
    Apres f_l : vg=40
    Apres f_g: vg=50
    vl = 80`;
    sol2.textContent = `*p=10, vg=20
    Dans f_l : vl=30
    Apres f_l : vg=40
    Apres f_g: vg=50
    vl = 110`;
    sol3.textContent = `*p=10, vg=20
    Dans f_l : vl=30
    Apres f_l : vg=40
    Apres f_g: vg=50
    vl = 140`;
    sol4.textContent = `*p=10, vg=20
    Dans f_l : vl=30
    Apres f_l : vg=40
    Apres f_g: vg=50
    vl = 170`;
    [checkboxRight, checkbox2, checkbox3, checkbox4].forEach(checkbox => {
        checkbox.checked = false;
    });
    pagecount.textContent = `${counter}/10`;
}

function uncheckOthers(selectedCheckbox) {
    [checkboxRight, checkbox2, checkbox3, checkbox4].forEach(checkbox => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}

[checkboxRight, checkbox2, checkbox3, checkbox4].forEach(checkbox => {
    checkbox.addEventListener("change", () => uncheckOthers(checkbox));
});

submitButton.addEventListener("click", handleSubmit);
nextButton.addEventListener("click", handleNext);
