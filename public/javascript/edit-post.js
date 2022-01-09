//syntactic sugar for error handling
// async helps asynchronus code use async/await
async function editFormHandler(event) {
    event.preventDefault();

    //grabbing data from form for deleting
    const name = document.querySelector('input[name="post-name"]').value.trim();
    console.log(name)
   
    //getting post id from URL string
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //async happening here
        //making a request with post api
        //assigning the result of the promise to a variable
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
//check response status
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
//event listener for edit post submission
document.querySelector('.edit-post-btn').addEventListener('submit', editFormHandler);