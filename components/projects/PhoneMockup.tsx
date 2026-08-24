import Image from "next/image";

/**
 * Moldura de celular estilo iPhone (bezel + notch), em CSS puro, sem
 * asset externo. A tela mostra o screenshot real do projeto.
 *
 * Altura sempre `80vh` (igual ao código-fonte de referência, que usa esse
 * valor fixo pras 4 imagens de cada projeto, sem variar por breakpoint);
 * o tamanho aparente de cada celular vem de `scale`, exatamente como lá
 * (`transform: scale(0.9)`, `scale(0.7)` etc.).
 *
 * `scale`/`rotate` ficam num wrapper interno separado do elemento que
 * recebe `ref`/`style`, esse é reservado pra animação de entrada
 * (`translateY` via GSAP), senão os dois `transform` colidiriam.
 */
export default function PhoneMockup({
  src,
  className = "",
  scale = 1,
  rotate = 0,
  style,
  ref,
}: {
  src: string;
  className?: string;
  scale?: number;
  rotate?: number;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className={`absolute ${className}`} style={style}>
      <div
        className="relative aspect-[9/19.5] h-[80vh] rounded-[1.6em] bg-black p-[3px] shadow-2xl"
        style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[1.35em] bg-white">
          <Image src={src} alt="" fill sizes="40vh" className="object-contain object-top" />
        </div>
        <div
          className="absolute left-1/2 top-0 h-[9%] w-[45%] -translate-x-1/2 rounded-b-[0.7em] bg-black"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
