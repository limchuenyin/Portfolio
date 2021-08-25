import './movies.scss'

function Movies() {

    return (
        <div className='movies' id='movies'>
            <div className="moviesContainer">
                <span style={{'--i':1}}><img src="assets/catch_me_if_you_can.jpg" alt="catch_me_if_you_can" /></span>
                <span style={{'--i':2}}><img src="assets/dark_knight.jpg" alt="dark_knight" /></span>
                <span style={{'--i':3}}><img src="assets/fight_club.jpg" alt="fight_club" /></span>
                <span style={{'--i':4}}><img src="assets/inception.jpg" alt="inception" /></span>
                <span style={{'--i':5}}><img src="assets/memento.jpg" alt="memento" /></span>
                <span style={{'--i':6}}><img src="assets/seven.jpg" alt="seven" /></span>
                <span style={{'--i':7}}><img src="assets/zombieland.jpg" alt="zombieland" /></span>
                <span style={{'--i':8}}><img src="assets/prestige.jpg" alt="prestige" /></span>
            </div>
        </div>
    )
}

export default Movies
