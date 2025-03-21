const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: ""
  };


const form = document.querySelector(".feedback-form");
const textArea = form.querySelector("textarea");
const emailInput = form.querySelector("input[name='email']");

form.addEventListener("submit", handleSubmit);
textArea.addEventListener("input", handeInput);
emailInput.addEventListener("input", handeInput);

populateForm();

function handeInput(event) {
   formData[event.target.name] = event.target.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
}

function populateForm(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if(!savedMessage) return;

    const parsedMessage = JSON.parse(savedMessage);

    if(parsedMessage.email){
        emailInput.value = parsedMessage.email;
    }

    if(parsedMessage.message){
        textArea.value = parsedMessage.message;
    }

    Object.assign(formData, parsedMessage);

    
}

function handleSubmit(event){
    event.preventDefault();

    if(!formData.email || !formData.message){
        alert ("Fill please all fields");
        return;
    }

    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    formData.message = "";

    event.currentTarget.reset();

    
}
