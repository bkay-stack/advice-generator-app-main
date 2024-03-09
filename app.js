const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
  
    document.querySelector("#advice p").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".advice-content").innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()