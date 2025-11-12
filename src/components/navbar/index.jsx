import Image from "next/image";
import Botao from "../botao";
import styles from "./component.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/Logo.svg"
          width={200}
          height={50}
          alt="Imagem com o letreiro da logo (TRIFLIX)"
        />
      </div>

      <div className={styles.links}>
        <Botao link="/home">Home</Botao>
        <Botao link="/suggestions">Sugestões</Botao>
        <Botao link="/genres">Gêneros</Botao>
        <Botao link="/">Sair</Botao>
      </div>
    </div>
  );
}
