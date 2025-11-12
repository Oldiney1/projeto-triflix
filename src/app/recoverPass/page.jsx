import styles from "./page.module.css"
import Image from "next/image";
import Botao from "@/components/botao";

export default function Register(){
    return(

    <div className={styles.principal}>
        <Image
        src='/logo-triflix.svg'
        width={290}
        height={304}
        alt="imagem da logo (um mascote 'pipoca')"
        />

        <div className={styles.container}>

            <div className={styles.items}>
                <h1>Insira o e-mail para a recuperação de senha</h1>

                <br />

                <div className={styles.input}>
                    <label htmlFor="text">E-mail</label>
                    <input type="text" placeholder="insira seu e-mail" />
                </div>
            
                <Botao link="/">Enviar</Botao>

            </div> 

        </div>
    </div>
    );
}