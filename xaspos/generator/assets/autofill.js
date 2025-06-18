//
// Copyright (C) 2025 The BBJProjeK Organization
//

document.addEventListener('DOMContentLoaded', function() {
  function formatUTCDate(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getUTCDay()];
    const monthName = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;
  }

  // Current UTC date and format it
  const currentUTCDate = new Date();
  const formattedDate = formatUTCDate(currentUTCDate);

  // Find the input element and set its value
  const dateInput = document.getElementById('date');
  if (dateInput) {
    dateInput.value = formattedDate;
  }
});
