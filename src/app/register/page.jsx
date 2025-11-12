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
                <div className={styles.input}>
                    <label htmlFor="text">E-mail</label>
                    <input type="text" placeholder="Insira seu e-mail" />
                </div>
            
                <div className={styles.input}>
                    <label htmlFor="text">Senha</label>
                    <input type="password" placeholder="Digite sua senha" />
                </div>

                <div className={styles.input}>
                    <label htmlFor="text">Confirmar Senha</label>
                    <input type="password" placeholder="Confirme sua senha" />
                </div>

                <div className={styles.links}>
                    <p>Possui conta?</p>
                    <a href="/">Entrar</a>
                </div>

                <Botao link="/">Cadastrar</Botao>

                <div className={styles.links}>
                    <p>Esqueceu a senha?</p>
                    <a href="/recoverPass">Recuperar</a>
                </div>
            </div> 

        </div>
    </div>
    );
}