import { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../components/NewsList";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

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
  }, []);

  // console.log(meta);
  console.log(posts);

  //   const indexOfLastPost = currentPage * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="card-container">
      <div className="col-12 col-md-10 my-3">
        <NewsList posts={posts} loading={loading} />
      </div>
    </main>
  );
};

export default Home;
