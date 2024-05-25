document.addEventListener('DOMContentLoaded', async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let run = Math.floor(Math.random() * 10);
        let data = await fetch(api);
        let temp = await data.json();
        document.getElementById('quote').innerText = temp[run].text + " - Author: " + (temp[run].author ? temp[run].author : 'Unknown');
    } catch (error) {
        console.error('Error fetching quotes:', error);
        document.getElementById('quote').innerText = 'Error fetching quotes';
    }
});