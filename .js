document.addEventListener('DOMContentLoaded', function() {
    const workoutForm = document.getElementById('workout-form');
    const goalForm = document.getElementById('goal-form');
    const totalDurationDisplay = document.getElementById('total-duration');
    const goalStatusDisplay = document.getElementById('goal-status');
    const workoutsList = document.getElementById('workouts');

    let totalDuration = 0;
    let weeklyGoal = 0;

    // Handle workout form submission
    workoutForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const type = document.getElementById('type').value;
        const durationHours = parseInt(document.getElementById('duration-hours').value) || 0;
        const durationMinutes = parseInt(document.getElementById('duration-minutes').value) || 0;
        const distance = document.getElementById('distance').value;

        // Convert duration to minutes and update total
        const duration = durationHours * 60 + durationMinutes;
        totalDuration += duration;
        updateProgress();

        // Create and add a new workout item to the list
        const workoutItem = document.createElement('li');
        workoutItem.textContent = `${date} - ${type} - ${durationHours}h ${durationMinutes}m - ${distance}km`;
        workoutsList.appendChild(workoutItem);

        // Reset the form fields
        workoutForm.reset();
    });

    // Handle goal form submission
    goalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        weeklyGoal = parseInt(document.getElementById('goal').value) || 0;
        goalStatusDisplay.textContent = `Goal: ${weeklyGoal} minutes`;
        updateProgress();

        // Reset the form fields
        goalForm.reset();
    });

    // Update progress display based on the total duration and weekly goal
    function updateProgress() {
        totalDurationDisplay.textContent = `Total Duration: ${totalDuration} minutes`;
        if (weeklyGoal > 0) {
            const status = totalDuration >= weeklyGoal ? 'Goal Achieved!' : 'Keep Going!';
            goalStatusDisplay.textContent = `Goal: ${weeklyGoal} minutes - ${status}`;
        } else {
            goalStatusDisplay.textContent = 'Goal Status: Not Set';
        }
    }
});
