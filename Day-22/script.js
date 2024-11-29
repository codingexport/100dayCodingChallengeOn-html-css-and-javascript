function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${period} `;
}

// Update the clock every second
setInterval(updateTime, 1000);
updateTime();
