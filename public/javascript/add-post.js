async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="post-name"]').value.trim();
    const event = document.querySelector('input[name="post-event"]').value.trim();
//line 5 changed event from post_url
    const response = await fetch(`/api/posts/`, {
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