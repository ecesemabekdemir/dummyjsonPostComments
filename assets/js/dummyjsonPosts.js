
// for(let i=0; i<30; i++){
//   getData(i);
// }

// async function getData(postId) {
  
//     let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
//     let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());

//     commentList.innerHTML += `<h1 class="title">${post.title}</h1>`
//     +comments.map( x => `<li class="fullName">${x.user.fullName}: <span> ${x.body}</span></li>`).join('')
//     +`<p class="body">${post.body}</p>`;  
//   }


 

async function getPost() {
  const {posts} = await fetch('https://dummyjson.com/post/').then(res => res.json());
  return posts;
}


async function getPostComments(postId) {
  const {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());
  return comments;
}

async function render() { 
  const posts = await getPost();
  for(let i=0; i<=posts.length; i++){
    const comments = await getPostComments(posts[i].id);
    commentList.innerHTML += `<h1 class="title">${posts[i].title}</h1><p class="body">${posts[i].body}</p>
    ${comments.map( x => `<li class="fullName">${x.user.fullName}: <span> ${x.body}</span></li>`).join('')}
    ` ;
    }
}

render();