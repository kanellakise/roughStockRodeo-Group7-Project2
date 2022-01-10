//static javascript for login

//function that handles login submission

//syntactic sugar for error handling
// async helps asynchronus code use async/await
async function loginFormHandler(event) {
    event.preventDefault();

// grabbing data from from to POST
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //clientside validation 
    //control statement to confirm user has given BOTH email and password before making POST request
    if (email && password) {
        
        //async happening here
        //making a request with login api
        //assigning the result of the promise to a variable
        const response = await fetch('/api/users/login', {
          
          //post request for user name and email
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        //check response status
        if (response.ok) {
            document.location.replace('/dashboard');
            //replaced 'dashboard'
        } else {
            // throw error if response is not ok
            alert(response.statusText);
        }
    }
}

//listener for submit event from the form
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);