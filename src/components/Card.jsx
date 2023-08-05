import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
   

     <div className="max-w-sm  overflow-hidden shadow-sm transition-transform transform-gpu hover:-translate-y-1 hover:shadow-sm hover:shadow-slate-100 rounded-[13px]">
     <div className="cursor-pointer  sm:mx-auto hover:shadow-slate-400 ">
     <Link className="" href={`/movie/${result.id}`}>
        <div className="card  bg-base-100 shadow-xl">
          
          <figure>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={384}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 "
            style={{
              maxWidth: "100",
              height: "300px",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
          </figure>

          <div className="p-2">
              <p className="line-clamp-2 text-md">{result.overview}</p>
              <h2 className="truncate text-lg font-bold">
                {result.title || result.name}
              </h2>
              <p className="flex items-center">
                {result.release_date || result.first_air_date}
                <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
              </p>
              </div>
         
        </div>
     </Link>
      
     </div>
     
     </div>

  );
}
