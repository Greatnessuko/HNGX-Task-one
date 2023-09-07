
document.addEventListener('DOMContentLoaded', function() {
    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayIndex = now.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to get the current UTC time in hours, minutes, and seconds
    function getCurrentUTCTime() {
        const now = new Date();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    // Update the elements with the appropriate data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});
