import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment() {
    return(
        
        <div className={styles.comment}>
                <Avatar hasBorder={false}
                 src="https://avatars.githubusercontent.com/u/91148856?v=4"/>
            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Dias</strong>
                            <time dateTime="2023-04-20 20:07h">Cerca de 2h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={23}/>
                        </button>
                    </header>
                    <p>Muito bom, Dev, adorei.</p>
                </div>
                    <footer>
                        <button>
                            <ThumbsUp/>
                            <p>Aplaudir</p> <span>20</span>

                        </button>
                    </footer>
            </div>
        </div>
        
        
    )

}
