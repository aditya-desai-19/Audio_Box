import { genres } from "../assets/constants";
import SongCard from "../components/SongCard";

const Discover = () => {
    const genreTitle = "Pop";

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreTitle}
                </h2>
                <select>
                    {genres.map(genre =>
                        <option key={genre.value} value={genre.value}>
                        {genre.title}
                        </option>)}
                </select>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(song =>
                <SongCard />)}
            </div>
        </div>
    )
}

export default Discover;
