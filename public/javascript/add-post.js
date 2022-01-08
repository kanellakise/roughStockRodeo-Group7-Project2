async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#post-nameGetter').value;
    const event = document.querySelector('#post-eventGetter').value;
    alert(name);
    console.log(name);
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