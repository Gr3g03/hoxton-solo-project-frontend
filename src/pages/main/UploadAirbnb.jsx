export default function Upload({ user, setRooms }) {

    async function createAirbnb(e) {
        e.preventDefault()
        const home_type = e.target.homeType.value
        const room_type = e.target.roomType.value
        const total_occupancy = e.target.occupancy.value
        const total_bedrooms = e.target.bedrooms.value
        const total_bathrooms = e.target.bathrooms.value
        const address = e.target.address.value
        const tv = e.target.tv.value
        const kitchen = e.target.Kitchen.value
        const airCon = e.target.airCon.value
        const heating = e.target.heating.value
        const internet = e.target.internet.value
        const price = e.target.price.value
        const photo = e.target.photo.value
        const stars = user.stars
        const userId = user.id

        await fetch('http://localhost:4000/rooms', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                home_type: home_type,
                room_type: room_type,
                total_occupancy: total_occupancy,
                total_bedrooms: total_bedrooms,
                total_bathrooms: total_bathrooms,
                address: address,
                has_tv: tv,
                has_kitchen: kitchen,
                has_air_con: airCon,
                has_heating: heating,
                has_Internet: internet,
                price: Number(price),
                photo: photo,
                published_at: Date(),
                created_at: Date(),
                stars: 0,
                userId: userId,
                ownerId: 1
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setRooms(data)
                }
            })

    }

    return (


        <section>
            <div >
                <h1>Enter  Information</h1>
                <form onSubmit={createAirbnb}>
                    <label>
                        home type
                        <input
                            // className="firstname"
                            placeholder="home_type"
                            name='homeType'
                            type="text"
                        />
                    </label>
                    <label>
                        room type
                        <input
                            // className="lastname"
                            placeholder="room_type"
                            name='roomType'
                            type="text"
                        />
                    </label>
                    <label>
                        occupancy
                        <input
                            // className="profilepic"
                            placeholder="total_occupancy"
                            name='occupancy'
                            type="text"
                        />
                    </label>

                    <label>
                        bedrooms
                        <input
                            // className="phone"
                            placeholder="total_bedrooms"
                            name='bedrooms'
                            type="number"
                        />
                    </label>

                    <label>
                        bathrooms
                        <input
                            // className="email"
                            placeholder="total_bathrooms"
                            name='bathrooms'
                            type="number"
                        />
                    </label>
                    <label>
                        address
                        <input
                            // className="password"
                            placeholder="address"
                            name='address'
                            type="text"
                        />
                    </label>

                    <label>
                        tv
                        <input
                            // className="password"
                            placeholder="tv"
                            name='tv'
                            type="number"
                        />
                    </label>
                    <label>
                        Kitchen
                        <input
                            // className="password"
                            placeholder="kitchen"
                            name='Kitchen'
                            type="number"
                        />
                    </label>
                    <label>
                        air Con
                        <input
                            // className="password"
                            placeholder="air con"
                            name='airCon'
                            type="number"
                        />
                    </label>
                    <label>
                        heating
                        <input
                            // className="password"
                            placeholder="heating"
                            name='heating'
                            type="number"
                        />
                    </label>
                    <label>
                        internet
                        <input
                            // className="password"
                            placeholder="internet"
                            name='internet'
                            type="number"
                        />
                    </label>
                    <label>
                        price
                        <input
                            // className="password"
                            placeholder="price"
                            name='price'
                            type="number"
                        />
                    </label>
                    <label>
                        photo
                        <input
                            // className="password"
                            placeholder="photo"
                            name='photo'
                            type="text"
                        />
                    </label>

                    {/* <label>
                        stars
                        <input
                            // className="password"
                            placeholder="stars"
                            name='stars'
                            type="number"
                        />
                    </label> */}

                    <input type='submit' className="submit" value={'SAVE'} />
                </form>
            </div>

        </section>
    )
}