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
            <div className="upload_form" >
                <div className="image_container">
                    <h1 className="h1_info">Enter  Information  </h1>
                    <img className="imgimg" src="https://i0.wp.com/skarredghost.com/wp-content/uploads/2017/07/amaze_logo.jpg?resize=800%2C445&ssl=1 alt=" />
                </div>
                <form className="upload_airbnb" onSubmit={createAirbnb}>
                    <label>
                        home type
                        <input
                            className="list"
                            placeholder="home_type"
                            name='homeType'
                            type="text"
                        />
                    </label>
                    <label>
                        room type
                        <input
                            className="list"
                            placeholder="room_type"
                            name='roomType'
                            type="text"
                        />
                    </label>
                    <label>
                        occupancy
                        <input
                            className="list"
                            placeholder="total_occupancy"
                            name='occupancy'
                            type="text"
                        />
                    </label>

                    <label>
                        bedrooms
                        <input
                            className="list"
                            placeholder="total_bedrooms"
                            name='bedrooms'
                            type="number"
                        />
                    </label>

                    <label>
                        bathrooms
                        <input
                            className="list"
                            placeholder="total_bathrooms"
                            name='bathrooms'
                            type="number"
                        />
                    </label>
                    <label>
                        address
                        <input
                            className="list"
                            placeholder="address"
                            name='address'
                            type="text"
                        />
                    </label>

                    <label>
                        tv
                        <input
                            className="list"
                            placeholder="tv"
                            name='tv'
                            type="number"
                        />
                    </label>
                    <label>
                        Kitchen
                        <input
                            className="list"
                            placeholder="kitchen"
                            name='Kitchen'
                            type="number"
                        />
                    </label>
                    <label>
                        air Con
                        <input
                            className="list"
                            placeholder="air con"
                            name='airCon'
                            type="number"
                        />
                    </label>
                    <label>
                        heating
                        <input
                            className="list"
                            placeholder="heating"
                            name='heating'
                            type="number"
                        />
                    </label>
                    <label>
                        internet
                        <input
                            className="list"
                            placeholder="internet"
                            name='internet'
                            type="number"
                        />
                    </label>
                    <label>
                        price
                        <input
                            className="list"
                            placeholder="price"
                            name='price'
                            type="number"
                        />
                    </label>
                    <label>
                        photo
                        <input
                            className="list"
                            placeholder="photo"
                            name='photo'
                            type="text"
                        />
                    </label>
                    <input type='submit' className="submit" value={'SAVE'} />
                </form>
            </div>

        </section>
    )
}