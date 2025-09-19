document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fale_conosco");
  const nome = document.getElementById("nome");
  const assunto = document.getElementById("assunto");
  const recado = document.getElementById("recado");
  const enviar = document.getElementById("enviar");
  const limpar = document.getElementById("limpar");

  [nome, assunto, recado].forEach(campo => {
    campo.addEventListener("focus", () => {
      campo.style.boxShadow = "0 0 8px #009b3a";
      campo.style.borderColor = "#009b3a";
    });

    campo.addEventListener("blur", () => {
      campo.style.boxShadow = "none";
      campo.style.borderColor = "#ccc";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nome.value.trim() === "" || recado.value.trim() === "" || assunto.value === "Selecione o Assunto") {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    alert(`Obrigado, ${nome.value}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
  });

  limpar.addEventListener("click", () => {
    [nome, assunto, recado].forEach(campo => {
      campo.style.boxShadow = "none";
      campo.style.borderColor = "#ccc";
    });
  });
});

