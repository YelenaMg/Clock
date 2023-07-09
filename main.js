function addZero(num) {
  return num < 10 ? '0' + num : num
}

window.onload = function () {
  window.setInterval(
    function myClock() {
      let t = new Date()

      let year = t.getFullYear()
      let month = addZero(t.getMonth() + 1)
      let date = addZero(t.getDate())

      let hour = addZero(t.getHours())
      let min = addZero(t.getMinutes())
      let sec = addZero(t.getSeconds())

      let clock = `${date}.${month}.${year} ${hour}:${min}:${sec}`
      document.querySelector('.out').innerHTML = clock
    },1000,
  )
}
