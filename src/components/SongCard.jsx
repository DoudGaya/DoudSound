import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../redux/features/playerSlice";


const SongCard = ({ song, i }) => (

  <div className=" w-[250px] cursor-pointer rounded-md animate-slideup drop-shadow-sm backdrop-blur-sm bg-gray-500/50">
    <div className=" relative w-full h-56 group ">
      <div className={` absolute inset-0 bg-opacity-50 justify-center items-center group-hover:flex`}>
        {'Video Length: 00:46:31'}
    </div>
    </div>
  </div>
);

export default SongCard;
