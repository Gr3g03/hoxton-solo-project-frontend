export default function Upload({ show, setShow }) {

    if (!show) {
        return null
    }
    return (
        <section className="add-modal">
            <div className="modal">

                <button className="close-button" onClick={() => setShow(false)}>X</button>
                <h1>Enter  Information</h1>
                <form >
                    <label>
                        home type
                        <input
                            className="firstname"
                            placeholder="home_type"
                            name='firstName'
                            type="text"
                        />
                    </label>
                    <label>
                        room type
                        <input
                            className="lastname"
                            placeholder="room_type"
                            name='lastName'
                            type="text"
                        />
                    </label>
                    <label>
                        occupancy
                        <input
                            className="profilepic"
                            placeholder="total_occupancy)"
                            name='photo'
                            type="text"
                        />
                    </label>

                    <label>
                        bedrooms
                        <input
                            className="phone"
                            placeholder="total_bedrooms"
                            name='phone'
                            type="number"
                        />
                    </label>

                    <label>
                        bathrooms
                        <input
                            className="email"
                            placeholder="total_bathrooms"
                            name='email'
                            type="email"
                        />
                    </label>
                    <label>
                        address
                        <input
                            className="password"
                            placeholder="address"
                            name='password'
                            type="password"
                        />
                    </label>

                    <label>
                        tv
                        <input
                            className="password"
                            placeholder="tv"
                            name='password'
                            type="password"
                        />
                    </label>
                    <label>
                        Kitchen
                        <input
                            className="password"
                            placeholder="kitchen"
                            name='password'
                            type="password"
                        />
                    </label>
                    <label>
                        air Con
                        <input
                            className="password"
                            placeholder="air con"
                            name='password'
                            type="password"
                        />
                    </label>
                    <label>
                        heating
                        <input
                            className="password"
                            placeholder="heating"
                            name='password'
                            type="password"
                        />
                    </label>
                    <label>
                        internet
                        <input
                            className="password"
                            placeholder="internet"
                            name='password'
                            type="password"
                        />
                    </label>
                    <label>
                        price
                        <input
                            className="password"
                            placeholder="price"
                            name='password'
                            type="password"
                        />
                    </label>
                    <label>
                        photo
                        <input
                            className="password"
                            placeholder="photo"
                            name='password'
                            type="password"
                        />
                    </label>

                    <label>
                        stars
                        <input
                            className="password"
                            placeholder="stars"
                            name='password'
                            type="password"
                        />
                    </label>

                    <input type='submit' className="submit" value={'SAVE'} />
                </form>
            </div>

        </section>
    )
}