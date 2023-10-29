let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = dateInfo.getMonth();
let date = dateInfo.getDate();
let hours = dateInfo.getHours();
let minutes = dateInfo.getMinutes();

function format(a) {
  if (a < 10) {
    return (a = `0${a}`);
  }
  return a;
}
let formatHours = format(hours);
let formatMinutes = format(minutes);
console.log(`${year}-${month}-${date} ${formatHours}:${formatMinutes}`);
