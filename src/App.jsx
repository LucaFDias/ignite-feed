import styles from './App.module.css';
import Header from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post
          author="Lucas Dias"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut 
          reprehenderit doloribus. Libero qui aliquam repellendus labore numquam rerum hic animi 
          aliquid, laboriosam accusantium odit modi doloremque, perspiciatis corporis molestiae?"
          />
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App