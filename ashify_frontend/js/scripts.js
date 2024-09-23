// Replace with your actual API key
const API_KEY = 'AIzaSyA0BpOwZ-7GNb2BXdtYoaZoT2dG1bSckug';

// Replace with the channel ID you want to fetch videos from
const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Example: Google Developers channel ID

// Number of latest videos to fetch
const MAX_RESULTS = 5;

// Fetch the latest videos from YouTube
async function fetchLatestVideos() {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const videoList = document.getElementById('video-list');
        videoList.innerHTML = ''; // Clear any existing content

        data.items.forEach(item => {
            if (item.id.kind === 'youtube#video') {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnail = item.snippet.thumbnails.default.url;
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

                const listItem = document.createElement('li');

                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = thumbnail;
                thumbnailImg.alt = title;

                const link = document.createElement('a');
                link.href = videoUrl;
                link.target = '_blank';
                link.textContent = title;

                listItem.appendChild(thumbnailImg);
                listItem.appendChild(document.createTextNode(' ')); // Space between image and link
                listItem.appendChild(link);

                videoList.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

// Call the function when the page loads
window.onload = fetchLatestVideos;
