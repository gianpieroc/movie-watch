import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllLists } from "../../redux/list/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLists());
  }, []);

  return (
    <div data-testid="home-page">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
