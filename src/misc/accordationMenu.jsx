import { React, useState } from 'react';
import ModeSwitch from "../assets/modeSwitch";
import { FaPlus, FaMinus } from 'react-icons/fa';

function AccordationMenu() {

  const [entry1open, setEntry1Open] = useState(false);
  const [entry2open, setEntry2Open] = useState(false);
  const [entry3open, setEntry3Open] = useState(false);
  const [entry4open, setEntry4Open] = useState(false);
  const [entry5open, setEntry5Open] = useState(false);

  const [imageURL, setImageURL] = useState("https://jooinn.com/images/nature-background-30.jpg");
  const [isDark, setIsDark] = useState(true);

  const title = "Lorem ipsum dolor sit amet?";
  const desc = "Lorem ipsum dolor sit amet consectuetur adipisicing elit. Illo temporibus " +
    "possimus expedita optio magni malores impedit inventore lusto accusantium doloremque?";

  const headerFormat = "flex items-center justify-between gap-10 w-11/12 md:w-full p-3 " +
    "uppercase text-white bg-orange-400 cursor-pointer";
  const descFormat = "w-11/12 md:w-full p-3 " +
    "text-white bg-gray-500";
  const setImage = (index) => {
    switch (index) {
      case 1:
        setEntry1Open(prevEntry1Open => !prevEntry1Open);
        setImageURL("https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg");
        break;
      case 2:
        setEntry2Open(prevEntry2Open => !prevEntry2Open)
        setImageURL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFAmhp4k-JX7afGiU4f-qfbcwPPjJus4xTQ&usqp=CAU");
        break;
      default: break;
    }
  }

  return (
    <div className={isDark ? 'w-full h-full dark' :
      'w-full h-full '}>
      <div className='w-full h-screen flex-1 flex flex-col justify-center items-center bg-light dark:bg-dark'>

        <div className='absolute top-10 right-10'>
          <ModeSwitch setIsDark={setIsDark} />
        </div>

        <div className='w-full md:w-1/2 flex md:scale-100'>
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-10">

            <div className='flex flex-col items-center gap-2 w-full md:w-1/2'>
              <div className={headerFormat} onClick={e => setImage(1)}>
                {title}
                {entry1open ? <FaMinus className='float-right mr-2' /> : <FaPlus className='float-right mr-2' />}
              </div>
              {entry1open ? <div className={descFormat}>{desc}</div> : null}

              <div className={headerFormat} onClick={e => setImage(2)}>
                {title}
                {entry2open ? <FaMinus className='float-right mr-2' /> : <FaPlus className='float-right mr-2' />}
              </div>
              {entry2open ? <div className={descFormat}>{desc}</div> : null}

              <div className={headerFormat} onClick={e => setEntry3Open(prevEntry3open => !prevEntry3open)}>
                {title}
                {entry3open ? <FaMinus className='float-right mr-2' /> : <FaPlus className='float-right mr-2' />}
              </div>
              {entry3open ? <div className={descFormat}>{desc}</div> : null}

              <div className={headerFormat} onClick={e => setEntry4Open(prevEntry4open => !prevEntry4open)}>
                {title}
                {entry4open ? <FaMinus className='float-right mr-2' /> : <FaPlus className='float-right mr-2' />}
              </div>
              {entry4open ? <div className={descFormat}>{desc}</div> : null}

              <div className={headerFormat} onClick={e => setEntry5Open(prevEntry5open => !prevEntry5open)}>
                {title}
                {entry5open ? <FaMinus className='float-right mr-2' /> : <FaPlus className='float-right mr-2' />}
              </div>
              {entry5open ? <div className={descFormat}>{desc}</div> : null}
            </div>

            <div className='w-[75vw] h-[25vh] md:w-[25vw] md:h-[25vh]'>
              <img src={imageURL} alt="Nature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordationMenu;
