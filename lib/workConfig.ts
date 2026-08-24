// Cada "slide" de projeto ocupa 140% da altura da viewport, exatamente
// como `Work.js`/`ImageContent.js` da referência (slideHeightMultiplier).
export const SLIDE_HEIGHT_MULTIPLIER = 1.4;

// Espaço em branco (`mt-[40vh]`) antes de CADA caixa de celulares em
// `ProjectMedia`.
export const BOX_LEAD_VH = 0.4;

// Cada caixa de celulares (100vh de conteúdo, começando `BOX_LEAD_VH` de
// scroll depois do início do seu slide) só começa a aparecer no rodapé da
// tela quando o scroll já avançou `100vh - BOX_LEAD_VH*100vh` além do
// início do slide, ou seja, ~60vh ANTES do limiar ingênuo
// `index * slideHeight` usado pra trocar o texto. Sem descontar isso, a
// imagem do próximo projeto já aparecia entrando enquanto o texto ainda
// mostrava o projeto anterior. Somado ao `relative` antes de calcular o
// índice do slide, adianta a troca pro exato instante em que a imagem
// começa a entrar.
export const TEXT_SWITCH_LEAD_VH = 1 - BOX_LEAD_VH;
