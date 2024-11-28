function dataCall() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Api request got failed");
      }
    })
    .then((data) => {
      h3id.textContent=`Advice # ${data.slip.id}`
      pAdvice.textContent=`"${data.slip.advice}"`
    })
    .catch((error) => {
      console.log(error);
    });
}

const getData = document.getElementById("dice");
const h3id= document.getElementById("h3")
const pAdvice= document.getElementById("p")
getData.addEventListener("click", dataCall);

document.addEventListener("DOMContentLoaded", dataCall);