console.log("JavaScript loaded!");
function changeText() {
    const paragraph = document.getElementById("dynamic-text");
    paragraph.textContent = "✨ You just changed the text with JavaScript!";
  }
  
  function changeStyle() {
    const styled = document.getElementById("style-paragraph");
    styled.style.color = "crimson";
    styled.style.fontWeight = "bold";
    styled.style.fontSize = "18px";
  }
  
  function toggleElement() {
    const container = document.getElementById("element-container");
    const existing = document.getElementById("toggle-paragraph");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newPara = document.createElement("p");
      newPara.id = "toggle-paragraph";
      newPara.textContent = "This element can be removed and added again.";
      container.appendChild(newPara);
    }
  }
  