import styles from './App.module.css';
import Header from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [

  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @ Rocketseat',
      },
      content: [
          {type: 'paragraph', content: 'Fala galera'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu potifolio. É um projeto que fiz no NLW Return, evento da rocketseat.'},
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/lucaFdias.png',
          name: 'Lucas Dias',
          role: 'Engineer Software',
      },
      content: [
          {type: 'paragraph', content: 'Fala galera'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu potifolio. É um projeto que fiz no NLW Return, evento da rocketseat.'},
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
      id: 3,
      author: {
          avatarUrl: 'https://github.com/maykbrito.png',
          name: 'maykbrito',
          role: 'Educador @Rocketseat',
      },
      content: [
          {type: 'paragraph', content: 'Fala galera'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu potifolio. É um projeto que fiz no NLW Return, evento da rocketseat.'},
          {type: 'link', content: 'jane.desing/doctorcare'}
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
  },
];


function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
            {posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}

export default App