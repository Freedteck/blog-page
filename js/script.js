const data = [
  {
    title: "Blog One",
    name: "Name 1",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZtBHjp7N7nD6XVoONp-rgP0-ox22E8pZLlHUVEqWXiGf7suByIAurM0k7af4kFqVdJCW6UMKilxzzdDWGl-zZ1Jon8wtr3iqAVnWIIhR36vyy7xv_KMF8lm8fBQKNOHFWuFXypsUORiKtn0LTdXTt3hd-tP1vWxLUURNUWaj2EAJgCn8kt8Nouw77/s1920/mason-jars-2742757_1920.jpg",
    following: false,
    comments: [
      {
        author: "Commenter one",
        message: "Wow! this is a nice blog",
      },
      {
        author: "Commenter two",
        message: "I'll like to know more",
      },
      {
        author: "Commenter three",
        message: "Interesting one",
      },
    ],
  },
  {
    title: "Blog Two",
    name: "Name 2",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEpIyiPQtRbBR38DVAHm9IIpR5FUjxr1gNEWZjEeRbXUsxAzyLukUlaBQPftOGqg_ZwM6fWLTevxWsjoQFKCMyjBa9_zTOftU95lHMPH5ovazEseABgMSqCKAXjSV3yl9y-HkIGuiAQ1mVv1U00NkO2UUhGzybwS2hThhNFLuOhSel9qHufL_lM9Mi/w600-h300-p-k-no-nu/shelf-1285186_1920.jpg",
    following: false,
    comments: [
      {
        author: "Commenter one",
        message: "Wow! this is a nice blog",
      },
      {
        author: "Commenter two",
        message: "Keep going",
      },
      {
        author: "Commenter three",
        message: "Super one",
      },
    ],
  },
  {
    title: "Blog Three",
    name: "Name 3",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b0016932223adbd79ab2_sddefault-2.jpeg",
    following: false,
    comments: [
      {
        author: "Commenter one",
        message: "Wow! nice try",
      },
      {
        author: "Commenter two",
        message: "Deep one",
      },
    ],
  },
  {
    title: "Blog Four",
    name: "Name 4",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://independent.ng/wp-content/uploads/Leslie-Jamison-576x430.jpg",
    following: false,
    comments: [
      {
        author: "Commenter two",
        message: "Wow! How can I join?",
      },
      {
        author: "Commenter three",
        message: "When will this be over?",
      },
    ],
  },
  {
    title: "Blog Five",
    name: "Name 5",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://assets-global.website-files.com/606a802fcaa89bc357508cad/65c0f97a1835d6213299c8c5_Boosting%20your%20freelancing%20game_%20AI%20tools%20for%20enhanced%20efficiency.jpg",
    following: false,
    comments: [
      {
        author: "Commenter one",
        message: "Excellent Topic",
      },
      {
        author: "Commenter two",
        message: "I will be there!!!",
      },
      {
        author: "Commenter three",
        message: "Let's Engage",
      },
    ],
  },
];

const mainContent = document.querySelector(".main-content");
const followingTab = document.querySelector(".right");
const allTab = document.querySelector(".left");
const topTabs = document.querySelectorAll(".main-top > div");
const dialog = document.querySelector(".dialog");
const newBolg = document.querySelector("#new");
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");
const latestBlog = document.querySelector('.side-content .latest')

function getLatestPost() {
  let id = 0;
  getPost(data).then((response) => {
    const latestData = response.slice(response.length - 3)
    for (const index of latestData) {
      const info = document.createElement('div')
      
      info.innerHTML = `<div class="info">
      <h3 class="title">${index.title}</h3>
      <p class="desc">${index.content.slice(0, 50)} ...'
      </p>
    </div>`
    latestBlog.appendChild(info)
      id++;

      // post.addEventListener("click", (e) => {
      //   if (e.target !== like && e.target !== comment && e.target !== share) {
      //     viewPost(index);
      //   }
      // });
    }
  });
}

getLatestPost()

newBolg.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.showModal();
});

async function getPost(info) {
  // const data = fetch('data.json', { mode: "cors" })
  const response = await info;
  return response;
}

function createPost() {
  mainContent.innerHTML = "";
  let id = 0;
  getPost(data).then((response) => {
    for (const index of response) {
      const post = document.createElement("div");
      post.classList.add("post");
      post.id = id;
      const image = document.createElement("div");
      image.classList.add("image");
      const img = new Image();
      img.src = index.profileImg;
      const name = document.createElement("p");
      name.textContent = index.name;
      name.classList.add("name");
      const info = document.createElement("div");
      info.classList.add("info");
      const nameText = document.createElement("div");
      nameText.classList.add("name-text");
      const blogTitle = document.createElement("h2");
      blogTitle.textContent = index.title;
      const text = document.createElement("div");
      text.classList.add("text");
      text.textContent = index.content.slice(0, 100);
      const postImage = document.createElement("div");
      const postImg = new Image();
      postImg.src = index.image;
      postImage.classList.add("post-image");
      postImage.appendChild(postImg);
      const icons = document.createElement("div");
      icons.classList.add("icons");
      const comment = document.createElement("i");
      const noOfComments = document.createElement("div");
      const count = document.createElement("p");
      comment.classList.add("fa-regular");
      comment.classList.add("fa-message");
      const like = document.createElement("i");
      like.classList.add("fa-regular");
      like.classList.add("fa-heart");
      const share = document.createElement("i");
      share.classList.add("fa-solid");
      share.classList.add("fa-share-nodes");

      noOfComments.style.display = "flex"
      noOfComments.style.gap = "8px"
      noOfComments.style.alignItems = "center"

      count.textContent = `${index.comments.length} comments`
      count.style.fontSize = ".9rem"
      count.style.color = "grey"

      image.appendChild(img);
      image.appendChild(name);
      nameText.appendChild(text);

      info.appendChild(postImage);
      info.appendChild(blogTitle);
      info.appendChild(nameText);
      info.appendChild(icons);

      noOfComments.appendChild(comment)
      noOfComments.appendChild(count)

      icons.appendChild(noOfComments);
      icons.appendChild(like);
      icons.appendChild(share);

      post.appendChild(image);
      post.appendChild(info);
      mainContent.appendChild(post);
      id++;

      like.addEventListener("click", (e) => {
        handleFollow(e);
        index.following = true;
      });

      post.addEventListener("click", (e) => {
        if (e.target !== like && e.target !== comment && e.target !== share) {
          viewPost(index);
        }
      });
    }
  });
}

function showFollowersPost() {
  mainContent.innerHTML = "";
  const followers = data.filter((index) => index.following === true);
  if (followers.length === 0) {
    const sorry = document.createElement("p");
    sorry.innerHTML = "You do not Have Any Followers At The Moment!!";
    mainContent.appendChild(sorry);
  }
  let id = 0;
  getPost(followers).then((response) => {
    for (const index of response) {
      const post = document.createElement("div");
      post.classList.add("post");
      post.id = id;
      const image = document.createElement("div");
      image.classList.add("image");
      const img = new Image();
      img.src = index.profileImg;
      const name = document.createElement("p");
      name.textContent = index.name;
      name.classList.add("name");
      const info = document.createElement("div");
      info.classList.add("info");
      const nameText = document.createElement("div");
      nameText.classList.add("name-text");
      const blogTitle = document.createElement("h2");
      blogTitle.textContent = index.title;
      const text = document.createElement("div");
      text.classList.add("text");
      text.textContent = index.content;
      const postImage = document.createElement("div");
      const postImg = new Image();
      postImg.src = index.image;
      postImage.classList.add("post-image");
      postImage.appendChild(postImg);
      const icons = document.createElement("div");
      icons.classList.add("icons");
      const comment = document.createElement("i");
      const noOfComments = document.createElement("div");
      const count = document.createElement("p");
      comment.classList.add("fa-regular");
      comment.classList.add("fa-message");
      const like = document.createElement("i");
      like.classList.add("fa-regular");
      like.classList.add("fa-heart");
      const share = document.createElement("i");
      share.classList.add("fa-solid");
      share.classList.add("fa-share-nodes");

      noOfComments.style.display = "flex"
      noOfComments.style.gap = "8px"
      noOfComments.style.alignItems = "center"

      count.textContent = `${index.comments.length} comments`
      count.style.fontSize = ".9rem"
      count.style.color = "grey"

      image.appendChild(img);
      image.appendChild(name);
      nameText.appendChild(text);

      info.appendChild(postImage);
      info.appendChild(blogTitle);
      info.appendChild(nameText);
      info.appendChild(icons);

      noOfComments.appendChild(comment)
      noOfComments.appendChild(count)

      icons.appendChild(noOfComments);
      icons.appendChild(like);
      icons.appendChild(share);

      post.appendChild(image);
      post.appendChild(info);
      mainContent.appendChild(post);
      id++;

      like.addEventListener("click", (e) => {
        handleFollow(e);
        index.following = false;
        showFollowersPost()
      });

      post.addEventListener("click", (e) => {
        if (e.target !== like && e.target !== comment && e.target !== share) {
          viewPost(index);
        }
      });
    }
  });
}

function handleFollow(e) {
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fa-solid");
  }
}

function viewPost(index) {
  mainContent.innerHTML = "";
  const blogPage = document.createElement("div");
  const blogContent = document.createElement("div");
  const blogTitle = document.createElement("h1");
  const blogAuthor = document.createElement("p");
  const blogArticle = document.createElement("p");
  const blogImage = new Image();
  const comments = document.createElement("div");
  const commentHead = document.createElement("div");
  const commentHeader = document.createElement("h2");
  const addComment = document.createElement("p");
  const allComments = document.createElement("div");

  blogPage.classList.add("blog-page");
  blogContent.classList.add("info");
  blogImage.src = index.image;
  blogImage.classList.add("blog-img");
  blogArticle.classList.add("blog-article");
  commentHead.classList.add("comment-head");
  comments.classList.add("comment");
  allComments.classList.add("latest");
  addComment.classList.add('add-comment')

  blogTitle.textContent = index.title;
  blogAuthor.textContent = index.name;
  blogArticle.textContent = index.content;
  commentHeader.textContent = "Comments";
  addComment.textContent = "+ Add"

  for (const comment of index.comments) {
    const commentSec = document.createElement('div')
    commentSec.innerHTML = `
    <div class="info">
      <h3 class="title">${comment.author}</h3>
      <p class="desc">
        ${comment.message}
      </p>
    </div>`
    allComments.appendChild(commentSec)
  }

  blogContent.appendChild(blogTitle);
  blogContent.appendChild(blogAuthor);
  blogContent.appendChild(blogImage);
  blogContent.appendChild(blogArticle);
  commentHead.appendChild(commentHeader)
  commentHead.appendChild(addComment)
  comments.appendChild(commentHead);
  blogContent.appendChild(comments);
  comments.appendChild(allComments);
  blogPage.appendChild(blogContent);
  mainContent.append(blogPage);
}

topTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    topTabs.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    topTabs[index].classList.add("active");
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const newData = {
    title: document.getElementById("title").value,
    name: "New Person",
    profileImg: "url",
    content: document.getElementById("description").value,
    imageUrl: document.getElementById("image").value,
    following: false,
  };
  data.push(newData);
  createPost();
  dialog.close();
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

allTab.addEventListener("click", createPost);
followingTab.addEventListener("click", showFollowersPost);

createPost();
