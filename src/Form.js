import './Form.css'
import memesData from './memeData'

function Form(){
    let url

     
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return(
        <div className="full-form">
            <div className="inp">
            <input type="text" placeholder="Upper Text"></input>
            <input type="text" placeholder="Lower Text"></input>
            </div>
            <button className="btn" type="submit" onClick={getMemeImage}>Get a New Meme</button>
            <div className='meme-dis'>
            {url && <img src= {url} className='im'></img>}
            </div>
        </div>
    )
}

export default Form