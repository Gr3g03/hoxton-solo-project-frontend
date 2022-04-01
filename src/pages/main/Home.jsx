import { useEffect, useState } from "react";
import Banner from "./Banner";

export default function Home({ user }) {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/rooms`)
            .then(resp => resp.json())
            .then(data => setRooms(data))
    }, [])

    return (

        <section className='home'>

            <Banner />

            <div className='home__section'>
                {rooms.map(room =>
                    <div className='card'>
                        <img src={room.photo} alt="" />
                        <div className="card__info">
                            <h2>{room.address}</h2>
                            <h4> ★{room.stars}</h4>
                            <h3>${room.price}</h3>
                        </div>

                    </div>
                )}

            </div>

        </section>
    )
}
