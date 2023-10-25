export default function FooterHex({hexScheme}) {


    function handleClick(event){
        let hexcode = event.target.textContent;
        console.log(hexcode);
        // Copy the text inside the text field
        navigator.clipboard.writeText(hexcode);
    
        // Alert the copied text
        alert("Color "+ hexcode + " copied!");
    }
    return (
        <section className="footer-hex">
            <p id="first-hex" className="hex-container" onClick={handleClick}>{hexScheme.first.toUpperCase()}</p>
            <p id="second-hex" className="hex-container" onClick={handleClick}>{hexScheme.second.toUpperCase()}</p>
            <p id="third-hex" className="hex-container" onClick={handleClick}>{hexScheme.third.toUpperCase()}</p>
            <p id="fourth-hex" className="hex-container" onClick={handleClick}>{hexScheme.fourth.toUpperCase()}</p>
            <p id="fifth-hex" className="hex-container" onClick={handleClick}>{hexScheme.fifth.toUpperCase()}</p>
        </section>
    );
}