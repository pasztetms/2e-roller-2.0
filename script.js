import { OBR } from "https://cdn.owlbear.rodeo/v1/OBR.min.js";

OBR.onReady(() => {
  const btn = document.getElementById("roll");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const thac0 = parseInt(document.getElementById("thac0").value);
    const mod = parseInt(document.getElementById("mod").value);

    const roll = Math.floor(Math.random() * 20) + 1;
    const acHit = thac0 - (roll + mod);

    const text =
      `Rzut: ${roll}  |  Modyfikator: ${mod}\n` +
      `→ Trafiasz AC = ${acHit}`;

    result.textContent = text.replace(/\n/g, "<br>");

    OBR.notification.show(`Trafiasz AC ${acHit} (rzucono ${roll})`, "INFO");
  });
});
