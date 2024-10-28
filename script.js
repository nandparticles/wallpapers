async function fetchImages() {
    const response = await fetch('https://www.reddit.com/r/wallpapers/top.json?limit=10');
    const data = await response.json();
    const posts = data.data.children;
    const imageGrid = document.getElementById('imageGrid');

    posts.forEach(post => {
        const imgUrl = post.data.url;
        if (imgUrl.endsWith('.jpg') || imgUrl.endsWith('.png')) {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imageGrid.appendChild(imgElement);
        }
    });
}

fetchImages();
