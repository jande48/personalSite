import React, {useRef, useEffect, useState} from "react";
import '../App.css';
import Modal from 'react-modal'
import bubbleChart from "./bubbleChart";
import LSU from "./Modals/LSU";
import BC from "./Modals/BC";
import UT from "./Modals/UT";
import Stonk from "./Modals/Stonk";
import Github from "./Modals/Github";
import Twitter from "./Modals/Twitter";
import Linkedin from "./Modals/Linkedin";
import Freelance from "./Modals/Freelance";
import RDS from "./Modals/RDS";
import Kinnickinick from "./Modals/Kinnickinick";
import Columbine from "./Modals/Columbine";
import Personal from "./Modals/Personal";
import Physics from "./Modals/Physics";
import Raspberry from "./Modals/Raspberry";
import Bridge from "./Modals/Bridge";

function Home() {
  
  const bubbleChartNode = useRef()  
  const [modalOpenArray, setModalOpenArray] = useState({'activated':'none'})
  Modal.setAppElement('#root');
  useEffect(() => {
    // const axios = require('axios').default;
    //   axios.get('/getPostPickle')
    //     .then(function (response) {
          
    //       if (typeof(response.data) == 'object'){
    //         setPickle(response.data)
    //       }else{
    //         setPickle(JSON.parse(response.data))
    //       }
          
    //       bubbleChart(bubbleChartNode,response.data)
    //     })
        bubbleChart(bubbleChartNode, setModalOpenArray)
  },[])
    
    function getOpenModal(array){
      switch(array['activated']){
        case 'LSU':
          return <LSU/>;
        case 'BC':
          return <BC/>;
        case 'UT':
          return <UT/>;
        case 'stonk':
          return <Stonk/>;
        case 'git':
          return <Github/>;
        case 'twitter':
          return <Twitter/>;
        case 'linked':
          return <Linkedin/>;
        case 'freelance':
          return <Freelance/>;
        case 'RDS':
          return <RDS/>;
        case 'expo':
          return <Kinnickinick/>;
        case 'columbine':
          return <Columbine/>;
        case 'personal':
          return <Personal/>; 
        case 'physics':
          return <Physics/>; 
        case 'pi':
          return <Raspberry/>;
        case 'bridge':
          return <Bridge/>;
        default:
          return <h1>Error</h1>
      }
    }
    return (
    
    <div>
      
        <div className="flexContainer">
          
          <div className="flexside">
            <h3>Jacob Anderson, PhD</h3>
          </div>
          <div className="flexmiddle"></div>
          <div className="flexsideHeader">
            <h4>Python / Javascript Developer</h4>
          </div>
        </div>
        <div className="fullWidth">
          <React.Fragment>
            <svg id="bubbleChart" className="fullWidth" ref={bubbleChartNode}></svg>
          </React.Fragment>
          
          <Modal isOpen={modalOpenArray['activated']!=='none'}>
            {getOpenModal(modalOpenArray)}
            <div className="vertical-center">
              <button type="button" className="btn btn-danger btn-lg" onClick={() => setModalOpenArray({'activated':'none'})}>Close</button>
            </div>
          </Modal>
          
        </div>

    </div>

    )
  }

export default Home