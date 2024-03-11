const btn = document.querySelector('.icon-btn');
const id = document.querySelector("#advice p")
const adviceBody = document.querySelector(".advice-content p")



const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    return data;
}


  const handleClick = async () => {
    const adviceData = await fetchAdvice()

    id.textContent = `Advice #${adviceData.slip.id}`;
    adviceBody.textContent = `"${adviceData.slip.advice}"`;
  }
  
  
  btn.addEventListener('click', handleClick)

