import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

function App() {
  const [items, setItems] = useState({
    items: Array.from({ length: 20 })
  });

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems({
        items: items.items.concat(Array.from({length:20}))
      })
    }, 0);
  };

  return (
    <InfiniteScroll
      next={fetchMoreData}
      hasMore={true}
      loader={<h1>Loading...</h1>}
      dataLength={items.items.length}
      endMessage={<p>Aquí se acabo xD</p>}
    >
      {items.items.map((i, index) => {
        return <h1 key={index}>Infinity Scroll {index}</h1>;
      })}
    </InfiniteScroll>
  );
}

export default App;
