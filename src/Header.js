import pic from './head-img.png'
import './Header.css'

function Head(){
    return(
        <header className='main-header'>
            <div className='head-section-1'>
            <img src = {pic} className='head-img'/>
            <h2 className='head-sec1-text'>Meme Genaretor</h2>
            </div>
            <div className='head-sec-2'>
                Vansh's React Project
            </div >
        </header>
    )
}

export default Head