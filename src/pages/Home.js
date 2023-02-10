import { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../components/NewsList";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(10);

  const options = {
    method: "GET",
    url: "https://nba-latest-news.p.rapidapi.com/articles",
    headers: {
      "X-RapidAPI-Key": "86b4788c35mshbfeccd3463252bbp1ce753jsn40224f9087e4",
      "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      const res = await axios.request(options);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPlayers();
  }, [page]);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="card-container content-wrapper">
      <div className="col-12 col-md-10 my-3">
        <NewsList posts={currentPosts} loading={loading} />
        <PaginationControl
          page={page}
          between={4}
          total={posts.length}
          limit={postsPerPage}
          changePage={(page) => {
            setPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </main>
  );
};

export default Home;
