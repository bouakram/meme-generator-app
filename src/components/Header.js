import img from '../img/memeface.png'

function Header() {
    return (
        <div className='header'>
            <img src={img} alt="" /> <span>MemeGenerator</span>
            <p>React - Project 3</p>
        </div>
    )
}

export default Header