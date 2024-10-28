async function fetchImages(subreddit) {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);
    const data = await response.json();
    return data.data.children.map(post => post.data.url).filter(url => url.endsWith('.jpg') || url.endsWith('.png'));
}

function displayImages(imageUrls) {
    const imageGrid = document.getElementById('imageGrid');
    imageUrls.forEach(url => {
        const imgElement = document.createElement('img');
        imgElement.src = url;
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.appendChild(imgElement);
        imageGrid.appendChild(gridItem);
    });
}

async function init() {
    const images = await fetchImages('pics'); // You can change 'pics' to any subreddit you like
    displayImages(images);
}

init();
