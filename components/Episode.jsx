import { useEffect } from "react";
import EpisodeCard from "./ui/EpisodeCard";
import { useSelector, useDispatch } from "react-redux";
import { episodesAction } from "../store/episodes";

const Episode = () => {
  const dispatch = useDispatch();
  const epiList = useSelector((state) => state.episodes.epiList);
  const text = useSelector((state) => state.input.text);
  let epiLi = [];
  useEffect(() => {
    const fetchEpi = async () => {
      let Epi = await fetch("https://www.breakingbadapi.com/api/episodes");
      Epi = await Epi.json();
      for (const ep in Epi) {
        epiLi.push(<EpisodeCard ep_id={Epi[ep].episode_id} title={Epi[ep].title} />);
      }
      dispatch(episodesAction.addEpi(epiLi));
    };
    fetchEpi();
  }, []);
  return <>{epiList.filter((jsx) => jsx.props.title.toLowerCase().includes(text.toLowerCase()))}</>;
};

export default Episode;
