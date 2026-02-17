function enviarWhats() {

  let nome = document.getElementById("nome").value;
  let whatsapp = document.getElementById("whatsapp").value;
  let bairro = document.getElementById("bairro").value;
  let aparelho = document.getElementById("aparelho").value;
  let problema = document.getElementById("problema").value;

  if(nome === "" || whatsapp === "" || bairro === "" || aparelho === ""){
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  let mensagem = `🔧 *SOLICITAÇÃO DE ORÇAMENTO* 🔧

👤 Nome: ${nome}
📱 WhatsApp: ${whatsapp}
📍 Bairro: ${bairro}
🛠 Aparelho: ${aparelho}
📝 Problema: ${problema}

Gostaria de saber o valor do conserto e a previsão de atendimento.`;

  let numeroEmpresa = "5548999724358";

  let url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
