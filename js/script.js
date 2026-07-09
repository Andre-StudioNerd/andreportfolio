function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openTab(evt, tabId) {
  // Esconde todos os conteúdos das abas
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove a classe 'active' (ou estilos de ativo) de todos os botões se necessário
  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
    // Se você usa uma classe de estilo diferente para o botão ativo, ajuste aqui
  }

  // Mostra a aba atual e adiciona a classe active ao botão clicado
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.classList.add("active");
}
