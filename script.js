import { OBR } from "https://cdn.owlbear.rodeo/v1/OBR.min.js";

<script type="module">
  import OBR from "https://unpkg.com/@owlbear-rodeo/sdk";

  // Po załadowaniu rozszerzenia
  OBR.onReady(async () => {
    console.log("AD&D 2e Roller gotowy!");

    // Przykład: wysłanie wiadomości do wszystkich graczy
    document.getElementById("rollButton").addEventListener("click", async () => {
      const result = Math.floor(Math.random() * 20) + 1;
      await OBR.broadcast.sendMessage("2e-roller", { roll: result });
    });

    // Odbieranie wiadomości
    OBR.broadcast.onMessage("2e-roller", (message) => {
      alert(`Gracz wyrzucił: ${message.data.roll}`);
    });
  });
</script>


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
