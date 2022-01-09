//static javascript for login

//function that handles login submission
async function loginFormHandler(event) {
    event.preventDefault();
// grabbing data from from to POST
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //control statement to confirm user has given BOTH email and password
    if (email && password) {
        const response = await fetch('/api/users/login', {
          
          //post user name and email
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
            //replaced 'dashboard'
        } else {
            alert(response.statusText);
        }
    }
}

//listener for submit event from the form
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);