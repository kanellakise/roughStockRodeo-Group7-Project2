//syntactic sugar for error handling
// async helps asynchronus code use async/await
async function deleteFormHandler(event) {
    event.preventDefault();

    //get post id from URL string
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //async happening here
        //making a request with delete api
        //assigning the result of the promise to a variable
    const response = await fetch(`/api/posts/delete/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

//event listener for delete submission
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
