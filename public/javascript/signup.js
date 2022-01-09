//static javascript for signup


//syntactic sugar for error handling
// async helps asynchronus code use async/await
const signupFormHandler = async (event) => {
    event.preventDefault();

    //grabbing data from form for signup
    const username = document.querySelector('#userInfo').value.trim();
    const email = document.querySelector('#emailGetter').value.trim();
    const password = document.querySelector('#passwordGetter').value.trim();
    
    //clientside validation 
    //control statement to confirm user has given BOTH email and password before making POST request
    if (username && email && password) {
       
       //async happening here
        //making a request with user api
        //assigning the result of the promise to a variable
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
//check response status
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            //throw alert if response is not ok
            alert(response.statusText);
        }
    }
};

//event listener for signup form submission
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);