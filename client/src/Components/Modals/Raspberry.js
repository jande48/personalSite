
import React from "react";
import '../../App.css';
function Raspberry() {


    return (
        <div className="header-modal">
        <div className="flexContainer">
          
          <div className="flexside">
            <h2>Dog Treat Dispenser</h2>
            
          </div>
          <div className="flexmiddle"></div>
          <div className="flexsideCenter">
          <h3><a class="link-primary" href="https://github.com/jande48/RaspberryPiDogTreatDispenser">GitHub</a></h3>
          </div>
        </div>
            <hr class="solid"></hr>
            <h5>&emsp;Backend: Python Flask</h5>
            <h5>&emsp;&emsp;o	uWSGI application instances</h5>
            <h5>&emsp;&emsp;o	Scripts to initiate servos, record video, and play audio</h5>
            <h5>&emsp;&emsp;o AWS S3 Buckets to host videos</h5>
            <h5>&emsp;Task Manager: Redis</h5>
            <h5>&emsp;&emsp;o	Multithreading handled by Celery/Redis</h5>
            <h5>&emsp;Frontend: ReactJS</h5>
            <h5>&emsp;&emsp;o	React Hooks for creating JSX components</h5>
            <h5>&emsp;&emsp;o	Modals and custom CSS </h5>
    </div>
        )

}
export default Raspberry