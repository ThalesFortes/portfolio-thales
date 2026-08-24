# Portfólio — Thales de Abreu Fortes da Silva

Portfólio pessoal de Thales de Abreu Fortes da Silva. Posicionamento do site:
**prova, não promessa** — cada projeto listado tem status verificável (no ar,
on-chain, código aberto, NDA/interno) e links reais (demo, repositório,
explorador de blockchain), sem alegações não conferíveis.

## Stack técnica

- [Next.js 16](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Deploy alvo: [Vercel](https://vercel.com/)

## Estrutura do projeto

```
app/                 App Router: layout.tsx (metadata/OG), page.tsx,
                     sitemap.ts, robots.ts, icon.svg, globals.css
components/          Header, Hero, About, Experience, Education, Skills,
                     Projects, ProjectCard, StatusBadge, Contact, Footer
lib/data.ts          Fonte única dos dados do site (perfil, experiência,
                     formação, skills, projetos, links)
public/              Assets estáticos (og-image.svg, ícone, etc.)
```

Toda a informação de conteúdo (textos, experiências, projetos, links) fica
centralizada em `lib/data.ts` — para atualizar o site, edite esse arquivo em
vez de mexer diretamente nos componentes.

## Como rodar localmente

Pré-requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:3000`.

Build e execução em modo produção (local):

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

O build foi validado com `npx next build` (Next 16.3.2) sem erros.

## Deploy na Vercel

### Via dashboard (recomendado)

1. Suba o repositório para o GitHub (ou GitLab/Bitbucket).
2. Em [vercel.com](https://vercel.com/), clique em **Add New → Project** e
   importe o repositório.
3. O framework é detectado automaticamente como **Next.js** — não é
   necessário configurar build command nem output directory manualmente.
4. Não há variáveis de ambiente obrigatórias no momento.
5. Clique em **Deploy**. A partir daí, todo push na branch de produção gera
   um novo deploy automaticamente.

### Via CLI (alternativa)

```bash
npm install -g vercel
vercel
vercel --prod
```

## Pendências conhecidas

- **Imagem Open Graph**: `public/og-image.svg` é um placeholder simples.
  Pode ser substituída por uma arte definitiva (recomendado: PNG ou JPG,
  1200x630) no mesmo caminho ou ajustando a referência em `app/layout.tsx`.
- **Domínio**: `app/layout.tsx` define `siteUrl` (usado em `metadataBase` e
  nas tags de SEO/OG) como `https://thalesfortes.dev`, um domínio
  placeholder. Ajustar para a URL real assim que o domínio próprio ou o
  subdomínio da Vercel for definido.

## Licença e autoria

Projeto pessoal de Thales de Abreu Fortes da Silva
(thales_pro@outlook.com). Sem licença de uso público — código e conteúdo
reservados ao autor.
