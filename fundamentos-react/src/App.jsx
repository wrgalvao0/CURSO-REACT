import { Post } from "./Post"
import './styles.css'
import { Header } from "./assets/components/Header"
export function App() {

  return (
    <div>
      <Header/>
      <Post author = "WARLEY GALVAO" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime deleniti rem ipsum optio natus neque fuga. Harum quisquam aut eaque possimus molestiae. Quo non porro nihil laudantium nobis, officiis recusandae." />
      <Post author = "WADERSON GALVAO" content="Um conteúdo muito legal" />
    </div>
  )
}
