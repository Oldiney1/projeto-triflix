import Link from "next/link";

export default function Botao(props){
    return(
        <div className="botao">
            <Link href={props.link}>{props.children}</Link>
        </div>
    );
}