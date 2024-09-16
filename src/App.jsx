
import NewFeedForm from "./components/newFeedForm"
import Feed from "./components/Feed"
import useFeedCollection from "./assets/hooks/useFeedCollection"

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
        { feed.map((feeds) =>(
          <div key={feeds.id}>
            <Feed 
              key={feeds.id}
              email={feeds.email}
              comentario={feeds.comentario}
              removeFeed={()=>removeFeed(feeds.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}