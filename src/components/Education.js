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
                    <h3>10th (2013-2014)</h3>
                    <p>Kendriya Vidyalaya No.1 Airforce Station Hindan ,Ghaziabad</p>
                    <p>CGPA: 9.2</p>
                    <p >I went to Nationals in Dramatics (Stage play) for National Social Science Exhibition. 
                    Was also a part of gold winning regional cricket team</p>
                </div>
            </div>
            {/* - */}
            <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>12th (2015-2016)</h3>
                    <p>Kendriya Vidyalaya No.1 Airforce Station Hindan ,Ghaziabad</p>
                    <p>Percentage: 89.8</p>
                    <p >Played cluster level in football representing the school. Also bagged 3rd prize in 
                    regional level in Stage play. Also secured 95% in Physics, Chemistry and Maths.</p>
                </div>
            </div>
            {/* - */}
            <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3>B.E in Electrical and Electronics Engg. (2017-2021)</h3>
                    <p>Birla Institute of Technology MESRA, Ranchi</p>
                    <p>CGPA: 8.03</p>
                    <p >I was the General Secretary of the dramatics club. Also bagged 1st and 2nd prize in Street play in Moodi-17 and Moodi-19 respectively</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education