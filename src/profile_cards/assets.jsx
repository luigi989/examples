function InfoCell(props) {
    return (
        <div key={props.text} className="flex flex-col items-center p-4">
            <span className='text-[#2c3a47] text-3xl'>{props.number}</span>
            <span className='uppercase text-dark_accent'>{props.text}</span>
        </div>
    );
}

function ContactButton(props) {
    return (
        <button className='bg-transparent border-[#e66767] border-solid border-2 rounded-lg
            px-10 py-2 mt-4  w-fit text-dark_accent hover:bg-[#e66767] hover:text-dark
            transition ease-linear duration-300' 
            onClick={() => window.open(props.to, '_self')}>
            {props.text}
        </button>
    );
}
export {
    InfoCell,
    ContactButton,
}