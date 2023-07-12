// THIS PART IS THE DISPLAY OF THE FORM ON THE LANDING PAGE

const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector("#cancel-form");
const bgForm = document.querySelector(".bg-form");
let formDarkBg = false;

addBtn.addEventListener("click", (e) => {
  if (formDarkBg === false) {
    bgForm.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    bgForm.style.display = "block";
    console.log("Add Address Is Clicked");
  } else {
    cancelForm();
  }
});

bgForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

cancelBtn.addEventListener("click", cancelForm);
function cancelForm() {
  console.log("form Closed");
  bgForm.style.backgroundColor = "";
  bgForm.style.display = "";
  pError.textContent = "";
}

// THIS PART IS FOR RENDERING THE INPUT VALUE INTO THE ADDRESS BOOK

let formObj = {};
const inputs = document.querySelectorAll("input");
const saveBtn = document.querySelector("#saveBtn");
let hasValue = false;
const error = document.querySelector(".error");
let pError = document.createElement("p");
let pError2 = document.createElement("p");
error.append(pError, pError2);

const formSaved = () => {
  console.log("Saved Form");
  for (let i = 0; i < inputs.length; i++) {
    let inputValue = inputs[i].value;
    const inputName = inputs[i].name;
    formObj[inputName] = inputValue;
    inputs[i].value = "";

    if (inputValue.trim() !== "") {
      hasValue = true;
    } else if (inputValue.trim() === "") {
      pError.textContent = "Please fill in the form";
      let timerId = setTimeout(() => {
        pError.textContent = "";
      }, 3000);
      hasValue = false;
    }
  }

  if (hasValue) {
    showAddress();
    cancelForm();
  }
};

saveBtn.addEventListener("click", formSaved);

const cellParentRow = document.querySelector(".cell");
let count = 0;
const showAddress = () => {
  count++;
  const tableRow = document.createElement("tr");
  cellParentRow.appendChild(tableRow);

  const cellOne = document.createElement("td");
  cellOne.innerText = count;
  tableRow.appendChild(cellOne);

  const cellTwo = document.createElement("td");
  cellTwo.innerHTML = `<span class="bold">${formObj["lastName"]} Family <br/></Span> ${formObj["homeAddress"]}, ${formObj["city"]}`;
  tableRow.appendChild(cellTwo);

  const cellThree = document.createElement("td");
  cellThree.innerText = `${formObj["lastName"]} ${formObj["firstName"]}`;
  tableRow.appendChild(cellThree);

  const cellFour = document.createElement("td");
  cellFour.innerText = formObj["nickName"];
  tableRow.appendChild(cellFour);
  
  const cellFive = document.createElement("td");
  cellFive.innerText = formObj["email"];
  tableRow.appendChild(cellFive);
};
