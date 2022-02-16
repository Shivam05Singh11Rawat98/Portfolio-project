import React from 'react'

const Education = () => {
  return (
    <div className='education'>
        <div className="d-flex justify-content-center my-5">
        <h1>education</h1>       
        </div>
        <div className="container education-wrapper">
            <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2013-2014</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed quis laudantium est a laboriosam
                     at commodi itaque rerum facere aliquid, repellat debitis. Ad, 
                     dicta! Itaque minus officia excepturi debitis fugit.</p>
                </div>
            </div>
            {/* - */}
            <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2015-2016</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed quis laudantium est a laboriosam
                     at commodi itaque rerum facere aliquid, repellat debitis. Ad, 
                     dicta! Itaque minus officia excepturi debitis fugit.</p>
                </div>
            </div>
            {/* - */}
            <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2017-2021</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed quis laudantium est a laboriosam
                     at commodi itaque rerum facere aliquid, repellat debitis. Ad, 
                     dicta! Itaque minus officia excepturi debitis fugit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education