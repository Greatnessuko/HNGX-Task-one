
document.addEventListener('DOMContentLoaded', function() {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayIndex = now.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to update the UTC time in hours, minutes, and seconds
    function updateUTCTime() {
        const now = new Date();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Elements data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    
    // Call the updateUTCTime function initially
    updateUTCTime();
    
    // Update the UTC time every second
    setInterval(updateUTCTime, 1000);
});
