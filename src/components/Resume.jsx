import React from "react";

function Resume() {
  const clickHandler = () => {
    console.log('Button clicked');
    window.location.href = 'https://example.com/your-resume-url';
  };

  return (
    <div className="resume">
      <button
        type='button'  
        onClick={clickHandler}
        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transform transition-transform hover:scale-105 hover:bg-gray-700'
      >
        Get My Resume Here
      </button>
    </div>
  );
}

export default Resume;
