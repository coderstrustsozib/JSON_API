function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(data){
    const postDetails = document.getElementById('posts')
    for(const post of data){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postDetails.appendChild(div);
    }
}