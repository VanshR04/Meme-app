import './Form.css'
import memesData from './memeData'
import React from 'react'

function Form(){
    const [url,seturl] = React.useState('')
    const [u, setu] = React.useState('')
    const [l, setl] = React.useState('')

     
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        seturl(memesArray[randomNumber].url)
        console.log(url)
    }

    function updateUpper(){
            setu(document.querySelector('.uT').value)
            console.log(u)
    }

    function updateLower(){
            setl(document.querySelector('.lT').value)
            console.log(l)
    }
    return(
        <div className="full-form">
            <div className="inp">
            <input type="text" placeholder="Upper Text" className='uT' onChange={updateUpper}></input>
            <input type="text" placeholder="Lower Text" className='lT' onChange={updateLower}></input>
            </div>
            <button className="btn" type="submit" onClick={getMemeImage}>Get a New Meme</button>
            <div className='meme-dis'>
            <section className='upper'>{u}</section>
            <img src= {url} className='im'>
            </img>
            <section className='lower'>{l}</section>
            </div>
        </div>
    )
}

export default Form