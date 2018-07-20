// Functions
function createNewPost(input) {
  let newPost = document.createElement("li");
  if (input.value.length <= 0) {
    return null;
  } else {
    newPost.innerHTML = input.value;
    input.value = "";
    return newPost;
  }
}

function createDeleteButton() {
  let deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "&times;"
  return deleteButton;
}

function createPostContainer(post, deleteButton) {
  let container = document.createElement("div");
  container.classList.add("post-container");
  container.append(deleteButton);
  container.append(post);
  return container;
}

function insertNewPost() {
  let post = createNewPost(postInput);
  if(post) {
    let deleteButton = createDeleteButton();
    let container = createPostContainer(post, deleteButton);
    deleteButton.addEventListener("click", function() {
      container.parentNode.removeChild(container);
    })
    postsContainer.prepend(container);
  }
}


// Driver code
let postInput = document.getElementById("post-input");
let postsContainer = document.getElementById("posts-container");

postInput.addEventListener("keydown", function(e) {
  if(e.key === "Enter") {
    insertNewPost();
  };
});
