module.exports = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
