const Duration = (ev) => {
  const data = new Date(null);
  data.setMinutes(ev);
  const DurationInMinutes = data.toISOString().substr(11, 5);
  return DurationInMinutes;
};

document.querySelector(".play").addEventListener("click", () => {
  const file = document.querySelector(".file");
  const audio = document.querySelector(".audio");
  const tempSegund = document.querySelector(".tempo-em-segundos");
  const tempMinute = document.querySelector(".tempo-em-minutos");
  const reader = new FileReader();

  reader.onloadend = () => {
    audio.src = reader.result;
    audio.load();
    audio.play();
    const readerDuration = new Audio(reader.result);

    readerDuration.onloadedmetadata = () => {
      tempSegund.innerHTML = readerDuration.duration;
      tempMinute.innerHTML = Duration(readerDuration.duration);
    };
  };
  reader.readAsDataURL(file.files[0]);
});

document.querySelector(".pause").addEventListener("click", () => {
  const audio = document.querySelector(".audio");
  audio.pause();
});
