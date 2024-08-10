import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface AstronautProps {
  role: string;
  name: string;
  text: string;
  image: string;
}

type Props = {
  member: AstronautProps;
  image: StaticImageData;
};

export default function Astronaut({ member, image }: Props) {
  return (
    <div className={styles.crewContent}>
      <div className={styles.crewInfo}>
        <h3>{member.role}</h3>
        <h1>{member.name}</h1>
        <p>{member.text}</p>
      </div>
      <div className={styles.crewImage}>
        <Image
          alt={member.name}
          quality={100}
          src={image.src}
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  );
}
