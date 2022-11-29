import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import About from '../Pages/About'
import { UserAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'




const Movie = ({ item }) => {


    const title = `${item?.title.length > 10 ? item?.title.slice(0,18)  : item?.title} `
    // console.log(item.id)
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const movieID = doc(db, 'users' , `${user?.email}`)


    const saveShow = async () => {
        if(user?.email){
            setLike(prev => !prev)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        }
        else{
            alert('please log in to save a movie')
        }
    }

    return (
        <Link to={`/movie/${item.id}`}>

            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-90 text-white'>
                    <p className=' text-xs md:text-lg font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>

                    <p onClick={saveShow} className="z-[101]">
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-300 ' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300 ' />}
                    </p>
                </div>
            </div>
        </Link>

    )
}

export default Movie
