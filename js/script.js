const data = [
  {
    name: "Name 1",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZtBHjp7N7nD6XVoONp-rgP0-ox22E8pZLlHUVEqWXiGf7suByIAurM0k7af4kFqVdJCW6UMKilxzzdDWGl-zZ1Jon8wtr3iqAVnWIIhR36vyy7xv_KMF8lm8fBQKNOHFWuFXypsUORiKtn0LTdXTt3hd-tP1vWxLUURNUWaj2EAJgCn8kt8Nouw77/s1920/mason-jars-2742757_1920.jpg",
  },
  {
    name: "Name 2",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEpIyiPQtRbBR38DVAHm9IIpR5FUjxr1gNEWZjEeRbXUsxAzyLukUlaBQPftOGqg_ZwM6fWLTevxWsjoQFKCMyjBa9_zTOftU95lHMPH5ovazEseABgMSqCKAXjSV3yl9y-HkIGuiAQ1mVv1U00NkO2UUhGzybwS2hThhNFLuOhSel9qHufL_lM9Mi/w600-h300-p-k-no-nu/shelf-1285186_1920.jpg",
  },
  {
    name: "Name 3",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b0016932223adbd79ab2_sddefault-2.jpeg",
  },
  {
    name: "Name 4",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://independent.ng/wp-content/uploads/Leslie-Jamison-576x430.jpg",
  },
  {
    name: "Name 5",
    profileImg: "url",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
    image:
      "https://assets-global.website-files.com/606a802fcaa89bc357508cad/65c0f97a1835d6213299c8c5_Boosting%20your%20freelancing%20game_%20AI%20tools%20for%20enhanced%20efficiency.jpg",
  },
];

const mainContent = document.querySelector(".main-content");

async function getPost() {
  // const data = fetch('data.json', { mode: "cors" })
  const response = await data;
  return response;
}
function createPost() {
  getPost().then((response) => {
    for (const index of response) {
      const post = document.createElement("div");
      post.classList.add("post");
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
      comment.classList.add("fa-regular");
      comment.classList.add("fa-message");
      const like = document.createElement("i");
      like.classList.add("fa-regular");
      like.classList.add("fa-heart");
      const share = document.createElement("i");
      share.classList.add("fa-solid");
      share.classList.add("fa-share-nodes");

      image.appendChild(img);
      image.appendChild(name);
      nameText.appendChild(text);

      info.appendChild(postImage);
      info.appendChild(nameText);
      info.appendChild(icons);

      icons.appendChild(comment);
      icons.appendChild(like);
      icons.appendChild(share);

      post.appendChild(image);
      post.appendChild(info);
      mainContent.appendChild(post);
    }
  });
}

createPost();
