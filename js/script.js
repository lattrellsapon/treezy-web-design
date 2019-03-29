let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let messageTextArea = document.getElementById('message');

let userConfirmationDiv = document.getElementById('user-confirmation');
let outputMessageP = document.getElementById('output-message');

let submitButton = document.getElementById('submit-btn');



submitButton.addEventListener('click', submitForm);

function sendErrorMessage()
{
    userConfirmationDiv.style.display = 'block';
    userConfirmationDiv.style.background = '#ff6666';
};

function sendSuccessMessage()
{
    userConfirmationDiv.style.display = 'block';
    userConfirmationDiv.style.background = '#4dff4d';
    userConfirmationDiv.style.color = '#333';
}


function submitForm(e)
{
    // This will prevent the form from actually submitting
    e.preventDefault();

    if(firstNameInput.value === '')
    {
        sendErrorMessage();
        outputMessageP.innerHTML = `Please fill in your first name.`;
    }
    else if(lastNameInput.value === '')
    {
        sendErrorMessage();
        outputMessageP.innerHTML = `Please fill in your last name.`;
    }
    else if(emailInput.value === '')
    {   
        sendErrorMessage();
        outputMessageP.innerHTML = `Please fill in your email.`;
    }
    else
    {   
        sendSuccessMessage();
        outputMessageP.innerHTML = `Welcome to the team ${firstNameInput.value} ${lastNameInput.value}. A message has been sent to ${emailInput.value}. I look forward to working with you.`;
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        messageTextArea.value = '';
    }

};