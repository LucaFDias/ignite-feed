import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar
                    src="https://avatars.githubusercontent.com/u/91148856?v=4" alt="autor" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Dias</strong>
                        <span>Developer Full Stack</span>
                    </div>
                </div>
                <time title="20 de Abril às 18:27h" dateTime="2023-04-20 18:27:30">
                    Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>Acabei de subir mais um projeto no meu portifólio, espero que gostem</p>
                <p><a href="github.com/lucaFdias">lucasdias.com</a></p>
                <p><a href="#">#developer #nlw</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>
        </article>
    )
}