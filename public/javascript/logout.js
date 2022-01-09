//static javascript for logout


//syntactic sugar for error handling
// async helps asynchronus code use async/await
async function logout() {

    //async happening here
        //making a request with logout api
        //assigning the result of the promise to a variable
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
// check the response status
    if (response.ok) {
        document.location.replace('/');
    } else {
        //throw alert if response is not ok
        alert(response.statusText);
    }
}

//event listener for logout submission and calls logout route
document.querySelector('#logout').addEventListener('click', logout);