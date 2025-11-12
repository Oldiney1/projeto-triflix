import Link from "next/link";
import styles from "./component.module.css"

export default function Botao(props){
    return(
        <div className={styles.botao}>
            <Link href={props.link}>{props.children}</Link>
        </div>
    );
}