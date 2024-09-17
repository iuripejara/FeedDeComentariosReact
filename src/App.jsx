
import useFeedCollection from "./hooks/useFeedCollection"
import NewFeedForm from "./components/NewFeedForm"
import Feed from "./components/Feed"

export default function App(){
const {feed,addFeed,removeFeed} = useFeedCollection()
// const [feed,addFeed,removeFeed] = useFeedCollection()
  return(
    <div className="app">
      <h1>Seção de Comentário</h1>
      <NewFeedForm 
        addFeed = {addFeed}
      />
      <hr />
      <div className="feeds">
        { feed.length > 0
          ? feed.map((feeds) =>(
            <Feed 
              key={feeds.id}
              email={feeds.email}
              comentario={feeds.comentario}
              removeFeed={()=>removeFeed(feeds.id)}
            />))
          :(
            <h1>insira um comentario</h1>
        )}
      </div>
    </div>
  )
}