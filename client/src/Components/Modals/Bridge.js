
import React from "react";
import '../../App.css';
function Bridge() {


    return (
        <div className="header-modal">
        <div className="flexContainer">
          
          <div className="flexside">
            <h2>Bridge Builders</h2>
            
          </div>
          <div className="flexmiddle"></div>
          <div className="flexsideCenter">
          <h3><a class="link-primary" href="https://github.com/jande48/BridgeBuildersInfographic">GitHub</a></h3>
          </div>
        </div>
            <hr class="solid"></hr>
            <h5>&emsp;Bridge Builders is a non-profit organization seeking an infographic about their scholarship recipients.</h5>
            <h5>&emsp;Backend: Python Flask</h5>
            <h5>&emsp;&emsp;o	Authentication & data entry routes for updating data & committing to an SQLite database</h5>
            <h5>&emsp;Frontend: React </h5>
            <h5>&emsp;&emsp;o	D3 nested bubble chart for zooming, highlights, and display student data</h5>
            <h5>&emsp;&emsp;o	React-Router-DOM for routing custom JSX compoents</h5>

    </div>
        )

}
export default Bridge