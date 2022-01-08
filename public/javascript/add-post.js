async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-name"]').value;
    const event = document.querySelector('input[name="post-event"]').value;
//line 5 changed event from post_url
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

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
