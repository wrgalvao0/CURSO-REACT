import styles from './Comentario.module.css'
import { Trash } from "phosphor-react"
import { ThumbsUp } from "phosphor-react"
export function Comentario(){
    return(
        <div className={styles.comentario}>
            <img src="https://github.com/wrgalvao0.png"/>
            <div className={styles.comentarioBox}>
                <div className={styles.comentarioConteudo}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Warley Galvão</strong>
                            <time title="02 de Março de 2024 as 11:05" dateTime="2024-03-02 11:05:15">Cerca de 1 hora atrás</time>
                        </div>
                        <button title="Deletar Comentario">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Devon parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button> 
                </footer>
            </div>
        </div>
    )
}