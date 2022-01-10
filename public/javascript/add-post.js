
//static javascript for add post

//syntactic sugar for error handling
// async helps asynchronus code use async/await
async function newFormHandler(e) {
    e.preventDefault();

    //grabbing data from form
    const name = document.querySelector('input[name="post-name"]').value.trim();
    const event = document.querySelector('input[name="post-event"]').value.trim();
//line 5 changed event from post_url
//send POST request to /api/posts
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            event
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
//check the response status
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        //throw alert if response is not ok
        alert(response.statusText);
    }
}

//event listener for newpost submission
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);