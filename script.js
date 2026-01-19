import OBR from "https://unpkg.com/@owlbear-rodeo/sdk";

// Funkcja do rzutu k20
function rollD20() {
  return Math.floor(Math.random() * 20) + 1;
}

document.getElementById("resultBox").value = roll;

OBR.onReady(async () => {
  console.log("AD&D 2e Roller gotowy!");

  const rollButton = document.getElementById("rollButton");
  const resultDiv = document.getElementById("result");

  rollButton.addEventListener("click", async () => {
    const result = rollD20();
    resultDiv.textContent = `Wynik: ${result}`;

    // Wyślij wynik do wszystkich graczy w sesji
    await OBR.broadcast.sendMessage("2e-roller", { roll: result });
  });

  // Odbieraj wyniki od innych graczy
  OBR.broadcast.onMessage("2e-roller", (message) => {
    alert(`Gracz wyrzucił: ${message.data.roll}`);
  });
});
