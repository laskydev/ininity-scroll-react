import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { Square } from "./components/Square";

import "./App.scss";
import { fetchMoreData } from "./helpers/helper";
import { Copied } from "./components/Copied";

function App() {
  //---State---//
  const [items, setItems] = useState({
    items: Array.from({ length: 100 }),
  });
  const [copied, setCopied] = useState(false);

  return (
    <>
      <h1 className={"text-white text-center"}>Infinite Colors</h1>
      <h2 className={"text-white text-center"}>
        Select a color and it is copied to the clipboard
      </h2>
      <p className={"text-center"}><a href="https://lasky.dev" target={'_blank'}>By LaskyDev</a></p>
      {copied && <Copied />}
      <InfiniteScroll
        className={"container"}
        next={() => fetchMoreData(items, setItems)}
        hasMore={true}
        dataLength={items.items.length}
        endMessage={<p>Aquí se acabo xD</p>}
      >
        {items.items.map((i, index) => {
          return <Square key={index} index={index} setCopied={setCopied} />;
        })}
      </InfiniteScroll>
    </>
  );
}

export default App;
