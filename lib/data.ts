export type ProjectStatus = "no-ar" | "on-chain" | "codigo" | "nda";

export const statusLabel: Record<ProjectStatus, string> = {
  "no-ar": "no ar",
  "on-chain": "on-chain",
  codigo: "código",
  nda: "NDA",
};

export const statusColor: Record<ProjectStatus, string> = {
  "no-ar": "bg-status-live",
  "on-chain": "bg-status-onchain",
  codigo: "bg-status-code",
  nda: "bg-status-nda",
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  status: ProjectStatus;
  description: string;
  links: ProjectLink[];
  // Screenshots reais em /public/projects/<slug>/ — só os projetos que têm
  // print entram no painel visual (WorkSection); os demais vão para a seção
  // "Outros projetos" (texto, sem mídia).
  images?: string[];
};

export const identity = {
  name: "Thales de Abreu Fortes da Silva",
  shortName: "Thales Fortes",
  age: 29,
  location: "Barra Mansa, Rio de Janeiro, Brasil",
  headline: "Analista de Sistemas | Desenvolvimento de Software",
  // Frase única da seção "Sobre", no mesmo formato do original (uma frase
  // curta, não um parágrafo de bio).
  aboutSentence: "Construir software que resolve problemas reais não é só profissão, é a prova que deixo no ar.",
  email: "thales_pro@outlook.com",
  github: "https://github.com/ThalesFortes",
  linkedin: "https://www.linkedin.com/in/thales-de-abreu-fortes-da-silva",
  resumeHref: "/curriculo.pdf",
};

export const positioning = {
  headline: "Desenvolvedor full-stack",
  differentiators: [
    {
      title: "Web3 verificável",
      description:
        "Contratos deployados com endereço público auditável, não só slides.",
    },
    {
      title: "Automação com IA / n8n",
      description:
        "Processos que rodam sozinhos, do dado bruto ao relatório pronto.",
    },
  ],
};

export type SkillPairing = {
  skills: string[];
  responsibility: string;
};

// Cada linha pareia as ferramentas/skills usadas (esquerda) com a
// responsabilidade real do brief onde elas foram aplicadas (direita).
// Lista enxuta de propósito (foco para vaga júnior-pleno): só o que deve
// bater o olho primeiro. PHP/WordPress/Apache, TOTVS RM/T-SQL/PL-SQL,
// Metabase/Snowflake, C/C++ e C#/.NET/Redis saíram daqui — continuam
// documentados (com prova) nos bullets da seção Experiência.
export const skillPairings: SkillPairing[] = [
  {
    skills: ["Java", "Spring Boot"],
    responsibility: "Aplicações Java orientadas a objetos (Sistema de Compras) e pós-graduação em Engenharia de Software com Java + IA",
  },
  {
    skills: ["React", "JavaScript", "TypeScript"],
    responsibility: "Desenvolvimento e manutenção de páginas e sistemas web",
  },
  {
    skills: ["SQL", "PostgreSQL"],
    responsibility: "Consultas e modelagem de dados em banco relacional",
  },
  {
    skills: ["n8n", "Inteligência Artificial", "Agentes de IA"],
    responsibility: "Automação de processos",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

// Fonte: currículo (public/curriculo.pdf) + atualização manual (Projetar IA,
// emprego atual adicional, não presente no PDF). Ordem cronológica
// decrescente.
export const experience: ExperienceItem[] = [
  {
    role: "Desenvolvedor .NET / Back-end",
    company: "Projetar IA",
    period: "jul/2026 — atual",
    bullets: [
      "Backend em C#/.NET do DelvyID — identidade descentralizada e credenciais verificáveis para saúde, com PostgreSQL",
    ],
  },
  {
    role: "Analista de Sistemas",
    company: "Centro Universitário de Barra Mansa (UBM)",
    period: "abr/2026 — atual",
    bullets: [
      "Consultas SQL e automações de processo com n8n",
      "Relatórios e dashboards via TOTVS RM",
      "Análise, integração e parametrização do sistema TOTVS RM",
      "Manutenção de sistemas em PHP, JavaScript, HTML e CSS",
      "Refatoração de página em WordPress para melhor desempenho",
    ],
  },
  {
    role: "Analista de Testes (QA) — Residente",
    company: "WEG Mobile Robot (Santa Catarina)",
    period: "abr/2025 — abr/2026",
    bullets: [
      "Análise de software e bibliotecas em C para identificar problemas e oportunidades de melhoria antes da produção",
    ],
  },
  {
    role: "Suporte ao Usuário (N1/N2)",
    company: "SINDPASS",
    period: "abr/2024 — out/2024",
    bullets: [
      "Suporte a clientes com foco em resolução rápida",
      "Criação de um chatbot para agilizar o atendimento",
      "Análise do sistema de transporte e resolução de problemas",
    ],
  },
  {
    role: "Analista de Sistemas (Estagiário)",
    company: "Hospital Unimed Volta Redonda",
    period: "fev/2022 — fev/2024",
    bullets: [
      "Manutenção do sistema MV",
      "Consultas SQL para obtenção de dados para dashboards",
      "Dashboards em Metabase com dados do Snowflake",
      "Páginas com HTML, CSS, JavaScript, TypeScript e React",
      "Desenvolvimento sobre banco de dados Oracle",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Protocolo Web3",
    status: "on-chain",
    description:
      "Protocolo descentralizado com 4 contratos: token ERC-20 de governança, NFT ERC-721 de credencial, staking com oráculo Chainlink e DAO com votação on-chain. Auditado com Slither e Mythril, publicado na testnet Sepolia. Front em ethers.js v6.",
    links: [
      { label: "GitHub", href: "https://github.com/ThalesFortes/mvp_web3" },
      {
        label: "GovernanceToken (Etherscan)",
        href: "https://sepolia.etherscan.io/address/0xB01867306d06bFb38853951855D2D9C9901Fc178",
      },
      {
        label: "ProtocolNFT (Etherscan)",
        href: "https://sepolia.etherscan.io/address/0xbeddfd1C944D76e5Cc1A78C686f3aB093A31EC61",
      },
      {
        label: "StakingContract (Etherscan)",
        href: "https://sepolia.etherscan.io/address/0x21667DCBdf431f9849CB2D851ea70d58c7e65Fb2",
      },
      {
        label: "DAOGovernance (Etherscan)",
        href: "https://sepolia.etherscan.io/address/0x11dC0b47fe68bCDAB98c3532ed59A46ac2783677",
      },
      {
        label: "Chainlink ETH/USD (feed)",
        href: "https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306",
      },
    ],
  },
  {
    name: "GreenTrace (ImpactLedger)",
    status: "on-chain",
    description:
      "Rastreabilidade de impacto social on-chain: evidências no IPFS (Pinata), certificados em NFT com SVG gerado dentro do contrato, governança via DAO.",
    links: [
      { label: "GitHub", href: "https://github.com/ThalesFortes/impactledger-template" },
      { label: "Demo", href: "https://impact-ledger-five.vercel.app/" },
    ],
    images: [
      "/projects/greentrace/01.png",
      "/projects/greentrace/02.png",
      "/projects/greentrace/03.png",
      "/projects/greentrace/04.png",
      "/projects/greentrace/05.png",
      "/projects/greentrace/06.png",
      "/projects/greentrace/07.png",
    ],
  },
  {
    name: "Sales Dashboard",
    status: "no-ar",
    description:
      "Plataforma de gestão de vendas: autenticação JWT, rotas protegidas, CRUD de leads, testes com Jest e Cypress. React 19 + TypeScript + Redux Toolkit + MUI.",
    links: [
      { label: "GitHub", href: "https://github.com/ThalesFortes/sales-dashboard-tafs" },
      { label: "Demo", href: "https://sales-dashboard-tafs.vercel.app/" },
    ],
    images: [
      "/projects/sales-dashboard/login.png",
      "/projects/sales-dashboard/01.png",
      "/projects/sales-dashboard/02.png",
      "/projects/sales-dashboard/03.png",
    ],
  },
  {
    name: "Vitrine de vagas CIEE (site da UBM)",
    status: "no-ar",
    description:
      "Shortcode WordPress (PHP + jQuery) que consome a API pública do CIEE inteiramente no client (sem carga no servidor): design próprio, filtros, busca, paginação, modal e tema dark.",
    links: [{ label: "Demo", href: "https://dev.ubm.br/vagas-ciee/" }],
    images: [
      "/projects/vitrine-ciee/01.png",
      "/projects/vitrine-ciee/02.png",
      "/projects/vitrine-ciee/03.png",
      "/projects/vitrine-ciee/04.png",
    ],
  },
  {
    name: "Sistema de Compra",
    status: "codigo",
    description:
      "Aplicação Java orientada a objetos: arquitetura em camadas, injeção de dependência, DTOs. Escrita à mão, sem IA, com foco em fundamento.",
    links: [{ label: "GitHub", href: "https://github.com/ThalesFortes/Sistema_de_Compra" }],
  },
  {
    name: "DelvyID",
    status: "nda",
    description:
      "Identidade descentralizada e credenciais verificáveis para saúde: Hyperledger Fabric, chaincode em Go, backend .NET, PostgreSQL. Arquitetura e papel descritos sem expor nada proprietário.",
    links: [],
  },
];

export type SecondaryProject = {
  name: string;
  description: string;
  link?: ProjectLink;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    name: "Automação de certificados (n8n + TOTVS RM)",
    description:
      "Pipeline consulta SQL Server → geração de PDF via SOAP (GenerateReport) → tratamento do PDF (pdf-lib) → envio por e-mail. Projeto profissional, sem repositório público.",
  },
  {
    name: "Firmware embarcado (Raspberry Pi Pico W)",
    description:
      "C bare-metal, drivers de sensor escritos a partir do datasheet, I²C de baixo nível. Vários repositórios no GitHub.",
    link: { label: "Ver no GitHub", href: "https://github.com/ThalesFortes" },
  },
];
