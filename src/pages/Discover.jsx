import { Error, Loader, SongCard, } from "../components";
import { genres } from '../assets/constants'
import { useBrowseAllQuery } from "../redux/services/Spotify";

const Discover = () => {

    const { data, isFetching, error } = useBrowseAllQuery()

    if (isFetching) return <Loader title={'Loading Song...'} />
    if ( error ) return <Error />
    
    const { items } = data.data.browseStart.sections.items[0].sectionItems


    const genreTitle = 'HipHop';


    return (
        <div className=" flex flex-col items-center ">
            <div className=" flex w-full justify-between space-y-2 sm:space-y-0 items-center sm:flex-row flex-col mt-6 mb-10">
                <h2 className=" text-2xl font-sans font-bold ">Discover {genreTitle} </h2>
                <select name="" id=""
                    onChange={() => { }}
                    value={''}
                    className=" bg-stone-400 px-3 py-1 text-gray-200 mt-0 sm:mt-5 rounded-md outline-none"
                >
                    {genres.map((genre) => {
                        return (
                            <option value="" key={genre.value}>
                                {genre.title}
                            </option>
                        )
                    })}
                </select>
                {/* MUSICS CARDS => */}
                
            </div>
            <div className="">
                {items.map((song, i) =><SongCard key={song.key} song={song} i={i}  />)}
            </div>

        </div>
    )
}

export default Discover;
