import axios from "axios";
import { useEffect, useState } from "react";

const usePost = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [limit] = useState(10);



  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/posts",
          params: { page: pageNumber, _limit: limit  * pageNumber - 10 + 10 },
        });

        setPosts(data);
        setHasMore(data?.length > 0);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [pageNumber, limit]);

  return { loading, error, posts, hasMore };
};

export default usePost;
