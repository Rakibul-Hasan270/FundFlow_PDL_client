import React from 'react';

const Loading = () => {
    return (
        <div className='mt-5 flex justify-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;