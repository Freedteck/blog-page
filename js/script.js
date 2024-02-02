const data = [
    {
        name: "Name 1",
        profileImg: "url",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
        image: "url"
    },
    {
        name: "Name 2",
        profileImg: "url",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
        image: "url"
    },
    {
        name: "Name 3",
        profileImg: "url",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ea blanditiis iste laborum iusto perferendis quasi alias fugit consequuntur voluptatibus labore natus illo ex, deleniti quod corporis quae saepe?",
        image: "url"
    }
]


const main = document.querySelector('.main-post')

async function getPost() {
    // const data = fetch('data.json', { mode: "cors" })
    const response = await data
    return response
}
function createPost() {
    getPost().then(response => {
        for (const index of response) {
            const post = document.createElement('div')
            post.classList.add('post')
            const image = document.createElement('div')
            image.classList.add('image')
            const img = new Image()
            img.src = index.profileImg
            const name = document.createElement('div')
            name.textContent = index.name
            name.classList.add('name')
            const info = document.createElement('div')
            info.classList.add('info')
            const nameText = document.createElement('div')
            nameText.classList.add('name-text')
            const text = document.createElement('div')
            text.classList.add('text')
            text.textContent = index.content
            const postImage = document.createElement('div')
            postImage.classList.add('post-image')
            const icons = document.createElement('div')
            icons.classList.add('icons')
            const comment = document.createElement('i')
            comment.classList.add('fa-regular')
            comment.classList.add('fa-message')
            const like = document.createElement('i')
            like.classList.add('fa-regular')
            like.classList.add('fa-heart')
            const share = document.createElement('i')
            share.classList.add('fa-solid')
            share.classList.add('fa-share-nodes')

            image.appendChild(img)
            image.appendChild(name)
            nameText.appendChild(text)
            
            info.appendChild(nameText)
            info.appendChild(postImage)
            info.appendChild(icons)

            icons.appendChild(comment)
            icons.appendChild(like)
            icons.appendChild(share)

            post.appendChild(image)
            post.appendChild(info)
            main.appendChild(post)
        }
    })
}

createPost()