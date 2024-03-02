import styles from "./Post.module.css"
import { Comentario } from "./Comentario"
export function Post(){
    return(
        <article className={styles.post}>
           <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/wrgalvao0.png"/>
                <div className={styles.authorInfo}>
                    <strong>Warley Galvão</strong>
                    <span>web developer</span>
                </div>
            </div>
            <time title="02 de Março de 2024 as 11:05" dateTime="2024-03-02 11:05:15">Publicado há 1 hora</time>
           </header>
           <div className={styles.content}>
            <p>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p> <a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </p>
           </div>
           <form className={styles.comentarios}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Deixe um comentário"></textarea>
            <footer><button type="submit">Publicar</button></footer>
           </form>
           <div className={styles.comentarioLista}>
            <Comentario/>
            <Comentario/>
            <Comentario/>
           </div>
        </article>
    )
}