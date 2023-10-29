/* eslint-disable react/prop-types */
export default function MainScheme({ colorScheme }) {
    return (
        <section className="main-colorscheme">
            <div id="first" className="box" style={{backgroundColor:colorScheme.first}} ></div>
            <div id="second" className="box" style={{backgroundColor:colorScheme.second}}></div>
            <div id="third" className="box" style={{backgroundColor:colorScheme.third}}></div>
            <div id="fourth" className="box" style={{backgroundColor:colorScheme.fourth}}></div>
            <div id="fifth" className="box" style={{backgroundColor:colorScheme.fifth}}></div>
        </section>
    );
}