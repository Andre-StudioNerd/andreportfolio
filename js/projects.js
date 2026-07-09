// 1. Lista de todos os seus projetos (Facilidade total para adicionar ou deletar)
const projects = [
  {
    title: "Blog Hog",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://blog-hoqwarts.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "AppBank",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://bank-sigma-lilac.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Discoteca",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://github.com/Andre-StudioNerd/Discoteca",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Planets",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://github.com/Andre-StudioNerd/Planets",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Tech",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://techboard-sigma.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Ckecklist de tarefas",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://checklist-de-tarefas.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Site do Kame",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/kame/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Site Viagens",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Viagens/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Page Tech",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/PageTechBoard/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Pesquisa Tabajara",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Culturama/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Jogo da Velha",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Jogo-Da-Velha/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Jogo da Forca",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Jogo-da-Forca/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "CRUD",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/simple_crud/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "SlideShow",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Slider/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Jogo Tetris",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Tetris-Game/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Freelando",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://freelando-app.vercel.app/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Python - POO",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/pythonObj",
    category: "python", // Corrigido/Adicionado
    techs: ["Python"],
  },
  {
    title: "Laravel",
    iconClass: "fa-brands fa-php icon_port_php",
    link: "https://github.com/Andre-StudioNerd/projeto_Laravel",
    category: "php",
    techs: ["PHP | Laravel"],
  },
  {
    title: "Jogo da Memória",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/DBZ_Memoria",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Player Video",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://video-flow-wine.vercel.app",
    category: "react",
    techs: ["Javascript | React", "HTML5 | CSS3"],
  },
  {
    title: "IA",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/Python_IA",
    category: "python",
    techs: ["Python"],
  },
  {
    title: "Chat",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/python_zap",
    category: "python", // Corrigido/Adicionado
    techs: ["Python"],
  },
  {
    title: "Bateria",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/bateria/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Login Code",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/login_code/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Automação",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/auto_tarefa",
    category: "python", // Corrigido/Adicionado
    techs: ["Python"],
  },
  {
    title: "Insights",
    iconClass: "fa-brands fa-python icon_port_py",
    link: "https://github.com/Andre-StudioNerd/Insights",
    category: "python", // Corrigido/Adicionado
    techs: ["Python"],
  },
  {
    title: "Turtles Pizzaria",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://pizza-tn.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Agenda Tech",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://agenda-tech-six.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Restaurante Aluroni",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://aluroni-theta.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Tela de Login",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://sistema-login-rouge.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3 | Typescript"],
  },
  {
    title: "Mattos",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "https://mattosadv.com.br",
    category: "php",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Clima Tempo",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/ClimaApp/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Gerador de Senha",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/GeradorSenha/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Super Burguer",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://superburguer.vercel.app/",
    category: "react",
    techs: ["HTML5 | CSS3 | Javascript", "React"],
  },
  {
    title: "Food Green",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/foodgreen/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Dev Barbearia",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/devbarber/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Relógio Digital",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/relogio/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Pixel Art",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/pixeart/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Projeto Sentinela",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://projeto-sentinela.vercel.app/",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Agenta de Tarefas",
    iconClass: "fa-brands fa-react icon_port_rt",
    link: "https://agendatarefaandre.netlify.app",
    category: "react",
    techs: ["React | Node.js | MongoDB", "HTML5 | CSS3"],
  },
  {
    title: "Celebre o Sim",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "https://celebreosim.com.br",
    category: "php",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3"],
  },
  {
    title: "Jogo da Cobra",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Cobra/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Sitessauro",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Sitessauro/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Nubank LP",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/nubank/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "CDZ",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/cdz/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Andreia T.",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "http://andreiateixeira.adv.br",
    category: "php",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3"],
  },
  {
    title: "C. Atos",
    iconClass: "fa-brands fa-wordpress icon_port_wp",
    link: "https://clinicamedicaatos.com.br",
    category: "php",
    techs: ["Wordpress | PHP | Mysql", "HTML5 | CSS3"],
  },
  {
    title: "Pokédex",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/pokedex/",
    category: "javascript",
    techs: ["HTML5 | CSS3 | Javascript"],
  },
  {
    title: "Em. Imóveis",
    iconClass: "fa-brands fa-php icon_port_php",
    link: "https://empresarialimoveis.com.br",
    category: "php",
    techs: ["HTML5 | CSS3", "PHP | Mysql"],
  },
  {
    title: "Athenas",
    iconClass: "fa-brands fa-php icon_port_php",
    link: "https://athenasimoveisrp.com.br",
    category: "php",
    techs: ["HTML5 | CSS3", "PHP | Mysql"],
  },
  {
    title: "Temperatura",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/conversor_temperatura/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Peso",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/peso/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Vendas",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/DoublePage/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "QR-Code",
    iconClass: "fa-brands fa-js icon_port_js",
    link: "https://andre-studionerd.github.io/Gerador_QRcode/",
    category: "javascript",
    techs: ["Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Blog Front-End",
    iconClass: "fa-brands fa-github icon_port_gt",
    link: "https://github.com/Andre-StudioNerd/Front_codemain",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "Blog Back-End",
    iconClass: "fa-brands fa-github icon_port_gt",
    link: "https://github.com/Andre-StudioNerd/Back_Codemain",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3"],
  },
  {
    title: "react-runner-circle",
    iconClass: "fa-brands fa-github icon_port_gt",
    link: "https://github.com/Andre-StudioNerd/react-runner-circle",
    category: "react",
    techs: ["React | Javascript", "HTML5 | CSS3 | GraphQL"],
  },
];

// 2. Função para renderizar os projetos organizados em grupos de até 4 itens
function renderProjects() {
  // Mapeia o ID do container do HTML para a categoria correspondente do Array (Adicionado a linha do Python)
  const tabsConfig = [
    { id: "projects-grid-react", category: "react" },
    { id: "projects-grid-javascript", category: "javascript" },
    { id: "projects-grid-php", category: "php" },
    { id: "projects-grid-python", category: "python" }, // <--- Nova aba mapeada aqui!
  ];

  tabsConfig.forEach((tab) => {
    const container = document.getElementById(tab.id);
    if (!container) return;

    container.innerHTML = ""; // Limpa o contêiner atual

    // FILTRO: Pega apenas os projetos que pertencem a esta aba específica
    const filteredProjects = projects.filter(
      (project) => project.category === tab.category,
    );

    // Roda o loop de 4 em 4 nos projetos filtrados
    for (let i = 0; i < filteredProjects.length; i += 4) {
      const chunk = filteredProjects.slice(i, i + 4);

      const sectionContainer = document.createElement("div");
      sectionContainer.className = "section-container1";

      const aboutDetails = document.createElement("div");
      aboutDetails.className = "about-details-container";

      const aboutContainers = document.createElement("div");
      aboutContainers.className = "about-containers";

      chunk.forEach((project) => {
        const techParagraphs = project.techs
          .map((tech) => `<p class="details-proj">${tech}</p>`)
          .join("");

        const projectCard = document.createElement("div");
        projectCard.className = "details-container";
        projectCard.innerHTML = `
          <h3>${project.title}</h3>
          <p class="${project.iconClass.split(" ").pop()}"><i class="${project.iconClass}"></i></p>
          <a href="${project.link}" target="_blank" class="btnlink"> Acessar o Site </a>
          ${techParagraphs}
        `;
        aboutContainers.appendChild(projectCard);
      });

      aboutDetails.appendChild(aboutContainers);
      sectionContainer.appendChild(aboutDetails);
      container.appendChild(sectionContainer);
    }
  });
}

// Executa a função assim que a página carregar
document.addEventListener("DOMContentLoaded", renderProjects);
