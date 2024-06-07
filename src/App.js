function App() {
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const toDayDate = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const formatedDate = `${day} ${toDayDate} ${month} ${year}`;

  setInterval(() => {
    const time = document.querySelector("#watch-time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    let formattedTime = hours > 12 ? hours - 12 : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    let formatedTime = `${formattedTime}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

    time.textContent = formatedTime;
  }, 1000);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="wrapper">
            <div className="watch-display">
              <div id="watch-time">12:00:00 PM</div>
              <div id="watch-date">{formatedDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
