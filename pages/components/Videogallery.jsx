import React, { useState } from 'react'

import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import "react-modal-video/css/modal-video.css"
import { IoIosArrowForward } from "react-icons/io";
import { GiPlayButton } from "react-icons/gi";

function Videogallery() {

  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("")

  return (
    <div>

      <div className="VideoGalleryDiv">
        <div className="container">
          <div className="RangeView">
            <h4>Explore vivopune</h4>
            <h2>View All <IoIosArrowForward /> </h2>
          </div>

          <div className="exploreVivo">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img className='w-100' src="\images\GalleryVideoImg.png" alt="" />
              </div>
              <div className="col-lg-6">
                <img className='w-100' src="\images\GalleryVideoImg1.png" alt="" />
              </div>
            </div>



            <div className="VideoplayButton">
              <img className='img1 ' src="/images/playButton.svg" alt="" onClick={() => {
                setOpen(true)
                setVideoId('jMVLvVE6LbM')
              }} />
              <img className='img2' src="/images/playButton.svg" alt="" onClick={() => {
                setOpen(true)
                setVideoId('Xr-fB_w8-V4')
              }} />
            </div>

          </div>


          <React.Fragment>
            <ModalVideo
              channel="youtube"
              youtube={{ mute: 0, autoplay: 0 }}
              isOpen={isOpen}
              videoId={videoId}
              onClose={() => setOpen(false)}
            />
          </React.Fragment>



        </div>
      </div>



    </div>
  )
}

export default Videogallery