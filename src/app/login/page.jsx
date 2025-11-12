import styles from "./page.module.css"
import Image from "next/image";
import Botao from "@/components/botao";

export default function Login(){
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
                <div className={styles.input}>
                    <label htmlFor="text">Login</label>
                    <input type="text" placeholder="Digite seu login" />
                </div>
            
                <div className={styles.input}>
                    <label htmlFor="text">Senha</label>
                    <input type="password" placeholder="Digite sua senha" />
                </div>

                <div className={styles.links}>
                    <p>Não Possui conta?</p>
                    <a href="/register">Cadastre-se</a>
                </div>

                <Botao link="/home">Entrar</Botao>

                <div className={styles.links}>
                    <p>Esqueceu a senha?</p>
                    <a href="/recoverPass">Recuperar</a>
                </div>
            </div> 

        </div>
    </div>
    );
}