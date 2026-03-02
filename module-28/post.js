const loadPost =()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res =>res.json())
    .then(data=>{
        // console.log(data);
        displayPosts(data);
    });
};

// const displayPosts = (posts) =>{
// //    for(let i=0; i < posts.length; i++ ){
// //     console.log(posts[i]);
// //    }

// // 1. get the container
//    const postContainer = document.getElementById('post-container');
//    postContainer.innerHTML = "";
// //    console.log(postContainer);

// posts.forEach((post) =>{
//     console.log(post.title);
//     //2. create HTMl element
//     const li = document.createElement('li');
//     li.innerText = post.title;
//     console.log(li);
//     // 3. add li into container
//     postContainer.appendChild(li);
// });
// };

const displayPosts=(posts)=>{
    // 1. get the container and empty container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    posts.forEach((post)=>{
        // 2. create element
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
        `;
        // 3. add to the container
        postContainer.append(postCard);
    });

};
loadPost();