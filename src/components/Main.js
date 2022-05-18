import img1 from '../img/memeface.png'
import MemeData from '../MemeData'


function Main() {
    let url

    function getimg(){
        const data = MemeData.data.memes
        const position = Math.floor(Math.random() * data.length) + 1
        return (
            url = data[position].url
            )           
        }

    return (
        <main>
            <div className="inputsection">
                <input type="text" placeholder='top'/>
                <input type="text" placeholder='bottom'/>
            </div>

            {<button onClick = {getimg}>Get new meme image 🖼️</button>}

            <div className="memeContainer">
                <img src={img1} alt="" />
                <h1 className='top'>this is top</h1>
                <h1 className='bottom'>this is buttom</h1>
            </div>
        </main>
    )
}

export default Main