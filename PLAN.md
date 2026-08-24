# PLAN.md — Portfólio Thales de Abreu Fortes da Silva

## Objetivo
Site portfólio pessoal em Next.js (App Router) + TypeScript + Tailwind CSS,
pronto para deploy na Vercel, com dados 100% reais extraídos de
`e:\brief-portfolio-thales (1).md`. Estrutura de seções inspirada (não copiada)
no layout single-page do projeto React clonado em
`C:\Users\Thales\Desktop\Porti\sureshmurali.github.io` (Hero, About, Skills,
Work/Projects, Contact).

## Agentes e sequência
1. **dev-code** — gerar estrutura de arquivos Next.js App Router + implementar
   todo o site (Hero, About, Experience timeline, Education, Skills, Projects
   com status badges e links, Contact/Footer), SEO/OG metadata, acessibilidade,
   responsividade, `prefers-reduced-motion`. Rodar `npm install` e validar
   `next build` sem erros.
2. **dev-docs** — gerar `README.md` (rodar local, deploy Vercel, estrutura,
   pendências: currículo PDF).
3. **dev-sec** — revisão rápida: sem segredos hardcoded, `rel="noopener
   noreferrer"` em links externos, sem PII sensível exposta (telefone ausente
   por decisão, não vazar nada do brief além do que foi pedido).

## Dados de origem (fonte de verdade — não alterar fatos)
Ver arquivo bruto do brief. Resumo estruturado passado ao dev-code no prompt
de delegação: identidade, posicionamento ("prova, não promessa"), experiência
(7 itens), formação/certificações, skills agrupadas, projetos (6 featured + 2
secundários) com status e cores (`no ar`=verde, `on-chain`=âmbar, `código`=azul,
`NDA`/interno=cinza).

## Placeholders explícitos permitidos
- Currículo PDF: botão "Currículo (em breve)" linkando `/curriculo.pdf` +
  comentário no código pedindo para adicionar o arquivo em `public/`.
- Telefone: NÃO exibir (ausência intencional, não é placeholder).

## Critério de aceite
- `npm run build` (ou `next build`) sem erros no diretório do projeto.
- Todas seções presentes, dados batendo com o brief, cores de status corretas,
  links clicáveis corretos (GitHub/demo/Etherscan).
- README completo.
- Revisão de segurança sem achados críticos pendentes.

## Status
- [x] dev-code — projeto Next.js 16 gerado, build validado sem erros
- [x] dev-docs — README.md definitivo escrito
- [x] dev-sec — auditoria concluída, 1 ajuste menor aplicado (headers), 0 vulnerabilidades no npm audit
- [x] Consolidação final pelo ARCH (v1 — identidade visual própria)

## Pivô solicitado pelo usuário (correção mid-turn)
Usuário rejeitou a v1 ("voce fez errado") e pediu explicitamente: mesmo
layout, mesmas regras, mesmas cores, **mesma animação**, "tudo igual, uma
cópia, porém com minhas informações" — referência: projeto React clonado em
`C:\Users\Thales\Desktop\Porti\sureshmurali.github.io` (Suresh Murali,
código MIT, GSAP + styled-components + react-responsive, scroll-jacking
parallax).

### Investigação da referência (feita pelo ARCH antes de delegar)
- Licença: MIT no código (`README.md` da referência) — copiar a lógica/CSS é
  permitido.
- Fontes usadas (`src/Assets/index.css`, `src/Assets/Fonts/`): Avenir
  (Light/Roman/Book/Medium/Heavy) e Valencia — **fontes comerciais
  embutidas como arquivo .ttf, não cobertas pela licença MIT do código**.
  Decisão: substituir por fontes livres do Google Fonts com personalidade
  equivalente — **Poppins** (família de pesos ampla, geométrica, no lugar de
  Avenir) e **Playfair Display** (serifada de destaque, no lugar de Valencia
  para o nome no Hero). Registrar essa substituição como decisão de
  licenciamento, não corte de escopo.
- Imagens de projeto (`src/Assets/Images/{Tesla,Lashic,FastRetailing,...}`):
  são capturas de telas de trabalhos de cliente do Suresh — não pertencem a
  Thales e não fazem sentido nos projetos dele (que não têm mockups visuais,
  são projetos de código/Web3). Decisão: manter o MESMO mecanismo de
  parallax/scroll-jacking do Work slide, mas o painel de imagem vira um
  painel tipográfico/cor sólida por status do projeto (mesma cor da badge),
  não uma imagem de terceiro.
- Paleta e regras extraídas (arquivos lidos: `Hero.js`, `NameAndJobTitle.js`,
  `NameReveal.js`, `TitleReveal.js`, `AboutMe.js` (desktop+mobile),
  `Work.js`, `TextContent.js` (desktop+mobile), `ImageContent.js`,
  `EyepImages.js`, `Skills.js` (desktop+mobile), `Contact.js`
  (desktop+mobile), `SocialLogo.js`, `breakpoints.js`):
  - Fundo: branco `#FFFFFF`. Texto padrão: preto/`#333`.
  - Títulos-marca d'água gigantes por seção (ABOUT ME / SKILLS / CONTACT):
    cor `#EEEEEE`, font-size responsivo 150/180/200/350px (tablet/laptop/
    laptopL/desktop), animados via GSAP com `translateX` proporcional ao
    scroll (parallax horizontal).
  - Reveal de texto (nome/título no Hero): texto começa deslocado
    (`translateY = fontSize * 1.4`), anima para 0 com
    `cubic-bezier(0,0.1,0.12,0.99)` em 1s; um bloco branco cobre o texto e
    encolhe/some depois de 2s (`opacity:0, height:0`, linear, 0.5s).
  - Reveal de texto dos cards de projeto (`TextContent`/`TextReveal`): texto
    começa branco (invisível no fundo branco), uma barra `#222` desliza da
    esquerda (`width 0→100%`, 0.5s, `power2.inOut`) e depois desliza para
    fora pela direita (`left 0→100%`, `width 100%→0%`, 0.5s), revelando o
    texto que muda para `#333`.
  - Breakpoints exatos: mobileS 320 / mobileM 375 / mobileL 425 / tablet 768
    / laptop 1024 / laptopL 1440 / desktop 2560. Corte desktop/mobile do
    layout inteiro em 1224px (`react-responsive`, `useMediaQuery`).
  - Work slide: scroll-jacking — painel de texto fixo à esquerda (50%
    largura) com número/nome/descrição/papéis/tipo, muda conforme
    `Math.floor(scrollTop / slideHeight)`; painel direito com "imagens"
    (aqui: cor sólida por status) em parallax vertical.
  - Skills/Contact: mesmo padrão de título-marca-d'água + lista/grade fixa;
    no mobile, sem scroll-jacking, usa stagger fade-in simples com GSAP.
  - Ícones sociais: grid com stagger fade-in/scale, `target="_blank"
    rel="noopener noreferrer"` (já correto no original).

### Mapeamento de seções (referência → site do Thales)
1. Hero (NameAndJobTitle: "Thales Fortes" em reveal + headline) + AboutMe
   (marca d'água "SOBRE" + resumo/posicionamento, incluindo a tagline
   "prova, não promessa").
2. Projetos — reaproveita o padrão Work (scroll-jacking): número, nome,
   descrição, status (era "ProjectType") com a cor da badge, links reais
   (era "roles", agora GitHub/Demo/Etherscan clicáveis com
   `rel="noopener noreferrer"`), painel direito com bloco de cor sólida por
   status em vez de screenshot.
3. Experiência — reaproveita o padrão Skills (marca d'água + lista em duas
   colunas): empresa · cargo · período.
4. Formação — mesmo padrão reaproveitado: curso · instituição · período.
5. Skills — padrão original, cores/grupos reais do brief, com destaque para
   IA/Agentes de IA/n8n.
6. Contato — padrão Contact (marca d'água "CONTATO" + grade de ícones):
   e-mail, GitHub, LinkedIn, e um tile "Currículo (em breve)" — sem
   telefone.

### Requisitos que NÃO mudam (continuam valendo do brief original)
- Dados exatos das seções 1-6 do brief (não inventar).
- Assinatura "prova, não promessa", badges de status coloridos, links reais
  com `rel="noopener noreferrer"`.
- SEO (metadata + OG), sem telefone, currículo como placeholder "em breve".
- `prefers-reduced-motion`: desativar/simplificar scroll-jacking, parallax e
  reveals (mostrar estado final estático) — requisito de acessibilidade do
  brief original, mantido mesmo pedindo cópia fiel da animação.
- Stack Next.js + TypeScript + Tailwind (Tailwind mantido para layout base;
  `styled-components` + `gsap` + `react-responsive` adicionados como novas
  dependências para reproduzir fielmente a mecânica da referência).
- Build (`next build`) sem erros ao final.

## Status do pivô
- [x] dev-code — layout/animações reescritos (GSAP + Tailwind, réplica fiel
      da referência com conteúdo do Thales), build validado
- [x] dev-sec — 0 vulnerabilidades, headers/links/segredos ok, npm audit limpo
- [x] Consolidação final pelo ARCH (v2)

## Bugfix: nome só aparecia após rolar a tela
Usuário reportou que a animação do nome no Hero não disparava sozinha no
carregamento — só ficava visível depois de rolar a página. Investigado com
Playwright (screenshots reais em t=0/1/2/4/6s, sem scroll, desktop e mobile,
dev e produção).

**Causa raiz confirmada (mobile):** `components/mobile/MobileHero.tsx`
escondia o estado inicial via `gsap.set()` dentro do `useEffect`, sem
nenhuma classe CSS correspondente — resultado: no HTML de SSR/primeiro
paint, nome/título/tagline apareciam já 100% visíveis (flash), e só
"desapareciam" depois que o JS rodava. Corrigido: estado inicial agora vem
de classes Tailwind condicionadas a `reducedMotion` (mesmo padrão usado em
`NameReveal`/`TitleReveal` no desktop).

**Hardening preventivo (desktop):** `lib/useRevealAnimation.ts` trocou
`setTimeout` bruto por `delay` nativo do GSAP (`gsap.timeline({ delay:
timeDelay/1000 })`), eliminando uma fonte plausível de timer competindo com
o commit/paint do React — não confirmado como causa isolada nos testes, mas
mais robusto.

Build (`next build`) validado novamente após a correção. Playwright ficou
como devDependency para futuras verificações visuais.
- [x] Bugfix aplicado e validado (mobile confirmado; desktop com hardening
      preventivo, causa raiz no desktop não 100% reproduzida em testes)

## Ajuste de ritmo: animação lenta + divergência da fonte (mobile)
Feedback do usuário: "a animação ta demorando muito e não está igual ao
original". Duas causas:
1. **Bug de fidelidade real (mobile)**: `MobileHero.tsx` encadeava
   nome→título→tagline numa única timeline sequencial inventada; o original
   (`NameAndJobTitle.js` + `AboutMe.js` mobile) trata nome+título e a
   tagline como dois efeitos INDEPENDENTES e paralelos. Corrigido: dois
   `useEffect` separados, tagline com seu próprio delay.
2. **Cópia fiel do desktop era, de fato, lenta por design** (~4.8s até o
   bloco branco sumir de vez — confirmado 1:1 com os números do
   `NameReveal.js`/`TitleReveal.js` originais: delay 500/1300ms, pausa de 2s
   antes do fade do bloco). Isso é uma escolha cinematográfica do portfólio
   de referência (site de designer), inadequada pra um portfólio de
   recrutamento. Decisão: manter o MESMO mecanismo visual (slide-up +
   easing + bloco branco cobrindo/revelando), só encurtando os tempos
   mortos — `timeDelay` 500/1300ms → 150/450ms, pausa antes do fade do
   bloco 2s → 0.4s; tagline mobile delay 1.5s → 0.5s.

Medido de verdade com Playwright (não só teoricamente): reveal completo do
nome no desktop caiu de ~5.1s para ~2.7s; tagline mobile de ~2.4s para
~1.45s. Build revalidado.
- [x] Ajuste de ritmo aplicado e medido (Playwright); aguardando validação
      visual do usuário em navegador real
