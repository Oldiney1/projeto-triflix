import Navbar from "@/components/navbar";
import styles from "./page.module.css"
import Slider from "@/components/slider";

export default function Suggestions(){
    return(
        <div>
            <Navbar></Navbar>

            <div className={styles.telaInicial}> 
                <div>
                    <h1>Você pode gostar de:</h1>
                    <br />
                    <div className={styles.containerLogo}>

                    </div>
                </div>

                <div>
                    <br />
                    <br />
                    <div className={styles.containerTexto}>
                        <div className={styles.conteudo}>
                            <h1>Título</h1>
                            <br />
                            <br />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nisi, debitis accusantium reiciendis beatae itaque ab repellat enim expedita laboriosam a doloremque illum autem quo laudantium nam, nostrum ad deleniti.
                            Voluptas ratione eius, quasi commodi voluptatem officia explicabo provident accusantium fugit eum maiores? Nostrum laudantium architecto, recusandae necessitatibus aliquid, nisi tempore debitis expedita blanditiis fugiat ex? Culpa, hic fuga! Aliquid.
                            Sunt et sapiente soluta. Rem dolor velit inventore, molestiae nisi voluptates maxime magni placeat molestias quidem aspernatur deserunt voluptatum labore illo itaque nam dolorum et obcaecati? Voluptatem sequi aliquam beatae.
                            Blanditiis delectus deleniti ipsa nostrum sunt sint harum. Dolorum provident voluptates pariatur iste quos perferendis similique laboriosam sunt, quisquam odio aliquid, impedit, velit et? Magnam esse neque minima sed non?
                            Vero explicabo nisi neque tenetur iusto, dolore tempora nulla consectetur repellendus cum magni ab sed? Esse, reiciendis eligendi illo quos adipisci id libero veritatis eaque veniam voluptates architecto nam natus!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Slider></Slider>
        </div>
    );
}