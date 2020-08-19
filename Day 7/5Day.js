function handleMouseOver() {
    let id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "linear-gradient(purple,pink,crimson)";
    id2Element.style.color = "red";
      
    id2Element.innerHTML ="bbye world";
  }
  
  function handleMouseOut() {
    let id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "linear-gradient(red,pink,orange)";
    id2Element.style.color = "darkgreen";
  
    id2Element.innerHTML ="Hello world";
  }