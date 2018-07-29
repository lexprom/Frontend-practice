import * as main from "js/main.js"

window.onload(main.FillAll());
document.getElementById('filter').addEventListener('onkeyup',main.Filter());
document.getElementById('add').addEventListener('onsubmit',main.Add());
document.getElementById('close').addEventListener('onclick',main.CloseIn());