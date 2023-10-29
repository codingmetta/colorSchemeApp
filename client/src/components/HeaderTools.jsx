/* eslint-disable react/prop-types */
export default function HeaderTools({ colorScheme, handleChange, handleMode }) {
 
function changeColor(event){
    handleChange(event.target.value)
}

function changeMode(event){
    handleMode(event.target.value)
}
    return (
        <section className="header-tools">
            <label htmlFor="colorpicker" className="visually-hidden">Choose a color</label>
            <input type="color" id="colorpicker" value={colorScheme.first} onChange={changeColor} />
            <div className="select-wrapper">
                <select id="select" name="select" onChange={changeMode}>
                    <option value="0">Monochrome</option>
                    <option value="1">Monochrome-dark</option>
                    <option value="2">Monochrome-light</option>
                    <option value="3">Analogic</option>
                    <option value="4">Complement</option>
                    <option value="5">Analogic-Complement</option>
                    <option value="6">Triad</option>
                </select>
            </div>
        </section>
    );
}