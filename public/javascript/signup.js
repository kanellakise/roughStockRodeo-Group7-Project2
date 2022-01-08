const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#userInfo').value.trim();
    const email = document.querySelector('#emailGetter').value.trim();
    const password = document.querySelector('#passwordGetter').value.trim();
    
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);