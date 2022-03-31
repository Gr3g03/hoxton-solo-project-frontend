import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nearby.css'

export default function Neadrby() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/rooms`)
            .then(resp => resp.json())
            .then(data => setRooms(data))
    }, [])


    console.log(rooms)
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <button>Cancellation Flexibility</button>
                <button>Type Of Place</button>
                <button>Rooms & Beds</button>
                <button>More Filters</button>
            </div>

            {rooms.map(room =>
                <div key={room.id}>
                    <Link to={`/nearby/${room.id}`} className="link">
                        <div className="resultcont">
                            <img src={room.photo} width="35%" alt="home" />
                            <div className="resultcont__info">
                                <h4>
                                    {room.room_type} in {room.location}
                                </h4>
                                <h3>{room.title}</h3>
                                <div className="resultcont__body">
                                    <br />
                                    <i style={{ opacity: "0.2" }}> ———— </i>
                                    <br />
                                    <br />
                                    <h4 style={{ paddingBottom: "10px" }}>
                                        Stay at this spacious Edwardian House
                                    </h4>
                                    <h4></h4>
                                </div>
                            </div>
                            <button
                            // className={`resultcont__heart ${this.state.clicked && "heart"
                            //     }`}
                            // onClick={() => {
                            //     this.fav(item);
                            // }}
                            ></button>
                            <div className="resultcont__price">
                                <span>{room.price}</span> / night
                            </div>
                            <div className="resultcont__star">
                                ★
                                <span
                                    style={{
                                        fontSize: "15px",
                                        color: "black",
                                        fontWeight: "normal",
                                    }}
                                >
                                    {/* {item.rating} */}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            )
            }
        </div>
    )
}