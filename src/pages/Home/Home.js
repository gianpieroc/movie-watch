import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLists } from "../../redux/list/actions";
import { allListsDataSelector } from "../../redux/list/selectors";
import HorizontalList from "../../components/HorizontalList/HorizontalList";

const Home = () => {
  const dispatch = useDispatch();
  const allLists = useSelector(allListsDataSelector);

  useEffect(() => {
    dispatch(getAllLists());
  }, []);

  return (
    <div data-testid="home-page">
      {Array.isArray(allLists) &&
        allLists.map((list, id) => <HorizontalList list={list} key={id} />)}
    </div>
  );
};

export default Home;
