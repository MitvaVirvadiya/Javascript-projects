// use indicator width
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress")
  const progressPercentage = document.querySelector(".progressPercentage")

  document.addEventListener("scroll", (event) => {
    event.preventDefault()

    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const progress = (scrollTop / scrollHeight) * 100
    
    const progressPercentageInput = Math.floor(progress)
    console.log(progressPercentageInput)
    
    progressBar.style.width = `${progress}%`
    progressPercentage.textContent = `${progressPercentageInput}%`
  })
})