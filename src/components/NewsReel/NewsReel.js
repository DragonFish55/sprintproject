import './NewsReel.css';
import {Link} from 'react-router-dom'
import {React} from 'react';
import $ from 'jquery';

//returns the header component to be put in main page
function NewsReel(props) {

  return (
      <div className = "news_outer">
         <News></News>
         
      </div>
        
  );

  function News(){
    console.log(props.data)
    return (

            <div className="news">
                {
                    props.data && (props.data.length > 0) &&
                    props.data.map((object, index) => {
                        return (
                            <div className = "newsdata" key={index}>
                                <div className = "datacat" key ={index}>
                                    {
                                        props.data[index][0].charAt(0).toUpperCase() + 
                                        props.data[index][0].substring(1, props.data[index][0].length)
                                        
                                    }
                                </div>
                                
                                <div className="dataentries" key="hey">
                                    {
                                        (props.data[index][1].articles.length > 0) &&
                                        props.data[index][1].articles.map((object2, index2) => {
                                            return (
                                                <div className='dataentry' key={index2}>
                                                    <div className='data_desc'> 
                                                        {props.data[index][1].articles[index2].description}
                                                    </div>
                                                    <div className = "data_source">
                                                        <div className='data_url'> 
                                                            {props.data[index][1].articles[index2].url}
                                                        </div>
                                                        <div className='data_name'> 
                                                            {props.data[index][1].articles[index2].name}
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            )
                                        })
                                        
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            
            </div>
        
    )
  }
  
  
  
}



export default NewsReel;