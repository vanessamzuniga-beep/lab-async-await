// Write your code here!

// display fetched data
async function displayPosts(posts) {
    const postList = document.querySelector('#post-list')
    posts.forEach(post => {
        const listItem = document.createElement('li')
        const heading = document.createElement('h1')
        heading.textContent = post.title

        const paragraph = document.createElement('p')
        paragraph.textContent = post.body
        listItem.appendChild(heading)
        listItem.appendChild(paragraph)

        postList.appendChild(listItem)
    })
}


// fetch data
async function fetchPosts() {

    try{
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        const posts = await response.json()

        displayPosts(posts)

        return posts
    } catch (error) {
    console.error("Error fetching data:", error)
    }
}
fetchPosts()
