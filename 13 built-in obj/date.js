const now = new Date();
console.log(now.toString()); // Current date and time as a string
console.log(now.toDateString()); // Only the date part
console.log(now.toTimeString()); // Only the time part


const date = new Date();
console.log(date.getFullYear()); // Year (e.g., 2024)
console.log(date.getMonth());    // Month (0 = January, 11 = December)
console.log(date.getDate());     // Day of the month (1-31)
console.log(date.getDay());      // Day of the week (0 = Sunday, 6 = Saturday)
console.log(date.getHours());    // Hours (0-23)
console.log(date.getMinutes());  // Minutes (0-59)
console.log(date.getSeconds());  // Seconds (0-59)
console.log(date.getMilliseconds()); // Milliseconds (0-999)

