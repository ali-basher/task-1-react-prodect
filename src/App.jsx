import "./css/style.css"
import Card from "./../components/cards/card"
import { posts } from "../API/featured-posts";

export default function App() {
  console.log(posts);
  return (
    <section className="featured-posts">
      <h1>Featured Posts</h1>
      <div className="cards">

        {
          posts.map(function (data, index) {
            return (
              <Card
                key={index}
                tag={data.tag}
                title={data.title}
                content={data.content}
                author={data.author}
                date={data.date}
                readtime={data.readtime}
                url={data.url}
              />
            )
          })
        }


      </div>
    </section>
  );
}
