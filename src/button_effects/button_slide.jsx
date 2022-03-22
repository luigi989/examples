import { React } from 'react';
import Scaffold from '../assets/scaffold';

function SlideEffect() {
    
    function ButtonSlide(props) {
        return (
            <h2 className={`group relative text-deepblue uppercase cursor-pointer`}>
                <span className={`absolute top-0 left-0 w-0 h-100 ${props.textColor} overflow-hidden group-hover:w-full duration-1000
                                    border-r-4 border-solid ${props.borderColor}`}>
                    Creative...
                </span>
                Creative...
            </h2>
        );
    }

    return (
        <Scaffold>
            {/* Maps an array into three rows with a different color on each row */}
            <div className="flex flex-row md:flex-col m-6">
                {[
                    ['border-[#255784]', 'text-[#255784]'],
                    ['border-[#ca1f1f]', 'text-[#ca1f1f]'],
                    ['border-[#92530b]', 'text-[#92530b]']
                ].map(([borderColor, textColor]) => (
                    <div key={textColor} className={`flex flex-col md:flex-row gap-20 m-4 text-5xl`}>
                        <ButtonSlide textColor={textColor} borderColor={borderColor} />
                    </div>
                ))}
            </div>
        </Scaffold>
    );
}

export default SlideEffect;
