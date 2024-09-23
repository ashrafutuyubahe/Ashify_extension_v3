const API_KEY = 'AIzaSyA0BpOwZ-7GNb2BXdtYoaZoT2dG1bSckug'; // Replace with your API key

async function fetchVideos(query, type) {
    const searchType = type === 'music' ? 'video' : 'video'; // Both will fetch video type
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=${searchType}&videoCategoryId=${type === 'music' ? '10' : ''}&maxResults=10&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items.map(item => ({
            title: item.snippet.title,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            thumbnail: item.snippet.thumbnails.default.url,
            videoId: item.id.videoId
        }));
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
}

async function displayVideos(videos) {
    const videoList = document.getElementById("video-list");
    videoList.innerHTML = ''; // Clear previous results
    
    videos.forEach(video => {
        const listItem = document.createElement("li");
        const thumbnail = document.createElement("img");
        
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;
        thumbnail.onclick = () => playVideo(video.videoId); // Set click handler for playing video
        
        const title = document.createElement("span");
        title.textContent = video.title;
        
        listItem.appendChild(thumbnail);
        listItem.appendChild(title);
        videoList.appendChild(listItem);
    });
}

function playVideo(videoId) {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoPlayer.style.display = 'block'; // Show the video player
}

async function searchVideos(type) {
    const query = document.getElementById("searchQuery").value;
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }

    const loader = document.getElementById("loader");
    loader.style.display = "block"; // Show the loader

    const videos = await fetchVideos(query, type);
    
    // Display results
    displayVideos(videos);
    
    // Hide loader
    loader.style.display = "none";
}
