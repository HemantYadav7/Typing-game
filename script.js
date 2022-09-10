const qotescontainer = document.querySelector(".qotes-container");
const textarea = document.querySelector(".textarea");

function randomqotes() {
  const url = "http://api.quotable.io/random";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const datacontent = data.content;
      qotescontainer.innerHTML = "";
      //   console.log(datacontent);
      datacontent.split("").forEach((e) => {
        // console.log(e);
        let spandata = document.createElement("span");
        spandata.innerText = e;
        qotescontainer.append(spandata);
        // console.log(spandata);
      });
    });
}

randomqotes();

function checktext() {
  textarea.addEventListener("input", () => {
    const arrayqotes = document.querySelectorAll("span");
    const arrayvalue = textarea.value.split("");
    // console.log(arrayvalue);
    let correct = true;
    arrayqotes.forEach((e, index) => {
      const textareavalue = arrayvalue[index];
      if (textareavalue === null) {
        e.classList.remove("ifcorrect");
        e.classList.remove("ifincorrect");
        correct = false;
      } else if (textareavalue === e.innerText) {
        e.classList.add("ifcorrect");
        e.classList.remove("ifincorrect");
      } else if (textareavalue != e.innerText) {
        e.classList.add("ifincorrect");
        e.classList.remove("ifcorrect");
        correct = false;
      }
    });
    if (correct) {
      document.location.reload();
    }
  });
}
checktext();
