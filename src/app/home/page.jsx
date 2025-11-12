import Navbar from "@/components/navbar"
import Image from "next/image";
import styles from "./page.module.css"
import Slider from "@/components/slider";

export default function Home(){
    return(
        
        <div>
            <Navbar></Navbar>
            
           <div className={styles.telaInicial}> 
                <Image
                        src='/logo-inicial.svg'
                        width={400}
                        height={400}
                        alt="imagem da logo(um mascote 'pipoca') junto a uma mensagem de Boas-Vindas e o logo da Triflix. "
                />
           </div>

           <Slider></Slider>
        </div>
    );
}