import img1 from '../img/memeface.png'
import React, { useState, useEffect } from 'react';


function Main() {

    // memes state
    const [memes , setMemes ] = useState({
        TopText : '',
        BottomText : '',
        RandomImg : img1
    })
    // memes images state
    const [allMemeImg , setallMemeImg] = useState({})

    //geetting hte data from an api
    // https://api.imgflip.com/get_memes
    useEffect(()=>{
        
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMemeImg(data))
    },[])

    // generation the images get random images
    function getimg(){
    // getting the data
    const memesdata = allMemeImg.data.memes
    // make a random number depends on the length of the data
    const position = Math.floor(Math.random() * memesdata.length)

    // getting the url from the data
    const url = memesdata[position].url
    
    // changing the state of the memes state
    setMemes(previose => {
        return {
            ...previose, 
            RandomImg : url}
    })

    }

    // make the input text display on the image
    function handelChange(event){
        const {name , value } = event.target //getting the inputs value

        // change the stat of the top and bottom text
        setMemes(prevText =>{
        return {
        ...prevText,
        [name] : value
        }
        } )
    }

    return (
        <main>

            {/* button for generating the memes images */}
            {<button onClick = {getimg}>Get new meme image 🖼️</button>}

            <div className="inputsection">
                {/* input for the top text */}
                <input name='TopText' type="text" placeholder='text will display in  top of the image' value={memes.TopText} onChange={handelChange}/>

                {/* input for the bottom text */}
                <input name='BottomText' type="text" placeholder='text will display in  bottom of the image' value={memes.BottomText} onChange={handelChange}/>

            </div>
            
            {/* where the meme will display */}
            <div className="memeContainer">
                <img src={memes.RandomImg} alt="" />
                <h2 className='top'>{memes.TopText}</h2>
                <h2 className='bottom'>{memes.BottomText}</h2>
            </div>
        </main>
    )
}

export default Main