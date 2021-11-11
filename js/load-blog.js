import posts from '../data/posts.js';

const postColumns = document.getElementsByClassName('column-post');
let postsThreshold = 0;
let postsCounter = 0; 
let currentFilter = 'ALL';

let postsToDisplay = posts;

const buttonMorePosts = document.getElementsByClassName('load-more-posts')[0];

addMorePosts();

buttonMorePosts.addEventListener('click', () => addMorePosts());

const filtersPanel = document.getElementsByClassName('navigation-blog')[0];

filtersPanel.addEventListener('click', filterPosts);


function filterPosts(event) {
  if (event.target.localName !== 'span') {
    return;
  }
  const chosenFilter = event.target.innerText;
  if (currentFilter === chosenFilter) {
    return;
  }
  currentFilter = chosenFilter;
  removeAllPosts();

  postsToDisplay = currentFilter === 'ALL' ? posts : posts.filter(post => post.type === currentFilter);
  addMorePosts();
}

function removeAllPosts() {
  for (let i = 0; i < postColumns.length; i++) {
    let postColumn = postColumns[i];

    while (postColumn.children.length > 0) {
      const child = postColumn.children[0];
      postColumn.removeChild(child);
    }
  }
  postsCounter = 0;
  postsThreshold = 0;
  buttonMorePosts.hidden = postsCounter >= postsToDisplay.length;
}

function addMorePosts() {
  postsThreshold += 3;
  for (; postsCounter < postsToDisplay.length && postsCounter < postsThreshold; ) {
    let column;
    if (postsCounter % 2 == 0) {
      column = postColumns[0];
    } else {
      column = postColumns[1];
    }
    const postLink = createPost(postsToDisplay[postsCounter]);
    column.append(postLink); 
    postsCounter++;
  }

  buttonMorePosts.hidden = postsCounter >= postsToDisplay.length;
}


function createPost(post) {
  const postLink = document.createElement('a');
  postLink.setAttribute('href', post.href);
  postLink.setAttribute('target', '_blank');

  const postBlock = document.createElement('div');
  postBlock.className = 'post';
  postLink.append(postBlock);

  const img = document.createElement('img');
  img.setAttribute('src', post.img);
  img.setAttribute('alt', 'post');
  postBlock.append(img);

  const desciptionBlock = document.createElement('div');
  desciptionBlock.className = 'text-under-post';
  postBlock.append(desciptionBlock);

  const title = document.createElement('h3');
  title.innerHTML = post.title;
  desciptionBlock.append(title);

  const date = document.createElement('span');
  date.innerHTML = post.date;
  desciptionBlock.append(date);

  const description = document.createElement('p');
  description.innerHTML = post.description;
  desciptionBlock.append(description);

  return postLink;
}
