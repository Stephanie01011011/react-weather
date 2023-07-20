import './Footer.css'


function Footer() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return(
        <>
        <div className="footContainer">
            <div className="items">
            <div className="trade"><p>Weather App is not a registered trademark.</p></div>
            <div className="date"><p>{`${month}/${day}/${year}`}</p></div>
            <div className="link"><p><a href="/">Local News: Wish-TV 8 </a></p></div>
            </div>
        </div>
        </>
    )
}

export default Footer;