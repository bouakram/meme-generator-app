import img1 from '../img/memeface.png'
import React, { useState, useEffect } from 'react';


function Main() {

    const [memes , setMemes ] = useState({
        TopText : '',
        BottomText : '',
        RandomImg : img1
    })
    const [allMemeImg , setallMemeImg] = useState({})

    // https://api.imgflip.com/get_memes
    useEffect(()=>{
        
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMemeImg(data))
    },[])

    function getimg(){
    const data = allMemeImg.data.memes
    const position = Math.floor(Math.random() * data.length)

    setMemes(previose => {
        return {
            ...previose, 
            RandomImg : data[position].url}
    })

    }

    function handelChange(event){
        const {name , value } = event.target
        setMemes(prevText =>{
        return {
        ...prevText,
        [name] : value
        }
        } )
    }

    return (
        <main>

            {<button onClick = {getimg}>Get new meme image 🖼️</button>}

            <div className="inputsection">
                <input name='TopText' type="text" placeholder='text will display in  top of the image' value={memes.TopText} onChange={handelChange}/>
                <input name='BottomText' type="text" placeholder='text will display in  bottom of the image' value={memes.BottomText} onChange={handelChange}/>
            </div>
            <div className="memeContainer">
                <img src={memes.RandomImg} alt="" />
                <h2 className='top'>{memes.TopText}</h2>
                <h2 className='bottom'>{memes.BottomText}</h2>
            </div>
        </main>
    )
}

export default Main