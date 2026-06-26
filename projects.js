// 1. Lista de todos os seus projetos (Facilidade total para adicionar ou deletar)
const projects = [
  {
    title: "AppBank",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://bank-sigma-lilac.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Discoteca",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://github.com/Andre-StudioNerd/Discoteca",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Planets",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://github.com/Andre-StudioNerd/Planets",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Tech",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://techboard-sigma.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Ckecklist de tarefas",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://checklist-de-tarefas.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Site do Kame",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/kame/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Site Viagens",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Viagens/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Page Tech",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/PageTechBoard/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Pesquisa Tabajara",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Culturama/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Jogo da Velha",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Jogo-Da-Velha/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Jogo da Forca",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Jogo-da-Forca/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "CRUD",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/simple_crud/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "SlideShow",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Slider/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Jogo Tetris",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Tetris-Game/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Freelando",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://freelando-app.vercel.app/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Python - POO",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/pythonObj",
    techs: ["Python"],
  },
  {
    title: "Laravel",
    iconClass: "fa-brands fa-php icon_port_php",
    link: "https://github.com/Andre-StudioNerd/projeto_Laravel",
    techs: ["PHP | Laravel"],
  },
  {
    title: "Jogo da Memória",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/DBZ_Memoria",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Player Video",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://video-flow-wine.vercel.app",
    techs: ["Javascript | React", "HTML5 | CSS3"],
  },
  {
    title: "IA",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/Python_IA",
    techs: ["Python"],
  },
  {
    title: "Chat",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/python_zap",
    techs: ["Python"],
  },
  {
    title: "Bateria",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/bateria/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Login Code",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/login_code/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Automação",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/auto_tarefa",
    techs: ["Python"],
  },
  {
    title: "Insights",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/Insights",
    techs: ["Python"],
  },
  {
    title: "Turtles Pizzaria",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://pizza-tn.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Agenda Tech",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://agenda-tech-six.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Restaurante Aluroni",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://aluroni-theta.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Tela de Login",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://sistema-login-rouge.vercel.app/",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Mattos",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "https://mattosadv.com.br",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Clima Tempo",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/ClimaApp/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Gerador de Senha",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/GeradorSenha/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Super Burguer",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://superburguer.vercel.app/",
    techs: ["HTML5 | CSS3 | Javascript", "React"],
  },
  {
    title: "Food Green",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/foodgreen/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Dev Barbearia",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/devbarber/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Relógio Digital",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/relogio/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Pixel Art",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/pixeart/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Projeto Sentinela",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "projeto-sentinela.vercel.app",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Agenta de Tarefas",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://agendatarefaandre.netlify.app",
    techs: ["React | Node.js | MongoDB", "HTML5 | CSS3"],
  },
  {
    title: "Celebre o Sim",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "https://celebreosim.com.br",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3"],
  },
  {
    title: "Jogo da Cobra",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Cobra/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Sitessauro",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Sitessauro/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Nubank LP",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/nubank/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "CDZ",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/cdz/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Andreia T.",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "http://andreiateixeira.adv.br",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3"],
  },
  {
    title: "C. Atos",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "https://clinicamedicaatos.com.br",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3"],
  },
  {
    title: "Pokédex",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/pokedex/",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Em. Imóveis",
    iconClass: "fa-brands fa-php icon_port_php",
    link: "https://empresarialimoveis.com.br",
    techs: ["HTML5 | CSS3", "PHP | Mysql"],
  },
  {
    title: "Athenas",
    iconClass: "fa-brands fa-php icon_port_php",
    link: "https://athenasimoveisrp.com.br",
    techs: ["HTML5 | CSS3", "PHP | Mysql"],
  },
  {
    title: "Temperatura",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/conversor_temperatura/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Peso",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/peso/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Vendas",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/DoublePage/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "QR-Code",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Gerador_QRcode/",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
];

// 2. Função para renderizar os projetos organizados em grupos de até 4 itens (como no seu layout original)
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = ""; // Limpa o contêiner

  // Agrupa os projetos de 4 em 4 para manter a estrutura CSS das suas classes antigas
  for (let i = 0; i < projects.length; i += 5) {
    const chunk = projects.slice(i, i + 5);

    // Cria a estrutura de blocos herdada do seu HTML original
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "section-container1";

    const aboutDetails = document.createElement("div");
    aboutDetails.className = "about-details-container";

    const aboutContainers = document.createElement("div");
    aboutContainers.className = "about-containers";

    // Mapeia e gera os cards dos projetos
    chunk.forEach((project) => {
      // Cria a lista de parágrafos de tecnologias dinamicamente
      const techParagraphs = project.techs
        .map((tech) => `<p class="details-proj">${tech}</p>`)
        .join("");

      const projectCard = document.createElement("div");
      projectCard.className = "details-container";
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p class="${project.iconClass.split(" ").pop()}"><i class="${project.iconClass}"></i></p>
        <a href="${project.link}" target="_blank" class="btnlink">
          Acessar o Site
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        ${techParagraphs}
      `;
      aboutContainers.appendChild(projectCard);
    });

    aboutDetails.appendChild(aboutContainers);
    sectionContainer.appendChild(aboutDetails);
    container.appendChild(sectionContainer);
  }
}

// Executa a função assim que a página carregar
document.addEventListener("DOMContentLoaded", renderProjects);
