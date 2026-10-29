document.addEventListener("DOMContentLoaded", function () {
  var aviso = document.createElement("div");

  aviso.textContent = "JavaScript externo cargado correctamente";
  aviso.style.cssText = [
    "position:fixed",
    "bottom:20px",
    "right:20px",
    "z-index:999999",
    "padding:12px 18px",
    "background:#dff5e1",
    "color:#174d20",
    "border:1px solid #174d20",
    "border-radius:6px",
    "font:14px sans-serif"
  ].join(";");

  document.body.appendChild(aviso);
});
