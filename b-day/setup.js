

const btn = document.getElementById("startBtn");

if (!btn) {
  alert("Button not found!");
} else {
  btn.addEventListener("click", () => {
    

    const name = document.getElementById("nameInput").value;
    const color = document.getElementById("colorInput").value;

    localStorage.setItem("userName", name);
    localStorage.setItem("bgColor", color);

    window.location.href = "wish.html";
  });
}

