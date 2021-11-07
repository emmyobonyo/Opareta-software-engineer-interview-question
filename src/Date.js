import React from 'react';

function Dated() {
  const date = () => {
    let date = '';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    date += `Today is: ${days[now.getDay()]}, ${now.getDate()}, ${months[now.getMonth()]}, ${now.getFullYear()}, ${now.getHours()}, ${now.getMinutes()}: ${now.getSeconds()}`;
    document.getElementById('date').innerHTML = date;
  };

  setInterval(date, 1000);

  return (
    <div id="date" className="display" />
  );
}

export default Dated;
