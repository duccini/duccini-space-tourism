import Image from "next/image";

type AstroProps = {
  path: string;
  alt: string;
};

export default function Astro({ path, alt }: AstroProps) {
  return <Image alt={alt} src={path} quality={100} height={400} width={400} />;
}
