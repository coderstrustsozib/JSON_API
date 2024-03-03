// fetch('https://jsonplaceholder.typicode.com/photos')
// .then( res => res.json())
// .then(data => console.log(data))


function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}


function displayData(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}