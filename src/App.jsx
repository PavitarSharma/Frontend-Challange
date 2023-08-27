import { useCallback, useRef, useState } from "react";
import "./App.css";
import usePost from "./usePost";
const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, posts, error, hasMore } = usePost(pageNumber);

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  
  return (
    <>
      {/* Cards */}

      <div className="container">
        <p className="title">List of Cards</p>
        <div className="cards">
          {posts &&
            posts?.map((post, index) => {
              const title = post?.title?.split(" ").splice(0, 3).join(" ");

              if (posts.length === index + 1) {
                return (
                  <div key={index} className="card" ref={lastPostElementRef}>
                    <div className="card-header">{post?.id}</div>
                    <div className="card-body">{post?.body}</div>
                    <div className="card-footer">{title}</div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="card">
                    <div className="card-header">{post?.id}</div>
                    <div className="card-body">{post?.body}</div>
                    <div className="card-footer">{title}</div>
                  </div>
                );
              }
            })}
        </div>

        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
        <div>{!hasMore && "No more Data"}</div>
      </div>
    </>
  );
};

export default App;
