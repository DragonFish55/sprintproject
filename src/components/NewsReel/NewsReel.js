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

                    props.data &&
                <div className = "newsdata" key={0}>
                    <div className = "datacat" key ={0}>
                        {
                            
                            props.data[0].charAt(0).toUpperCase() + 
                            props.data[0].substring(1, props.data[0].length)      
                        }
                    </div>
                    <div className="dataentries" key="hey">
                        {
                        (props.data[1].articles.length > 0) &&
                        props.data[1].articles.map((object2, index2) => {
                        return (
                            <div className='dataentry' key={index2}>
                                <div className='data_title'>
                                    {props.data[1].articles[index2].title}
                                </div>
                                <div className="data_source">
                                    <p>Read more at <span><a href = {props.data[1].articles[index2].url}>{props.data[1].articles[index2].source.name}</a></span></p>
                                </div>
                                <div className="data_image">
                                        <img 
                                            src={props.data[1].articles[index2].urlToImage}
                                            alt="pic1"
                                            width="100px"
                                            height="100px" />
                                </div>
                                 <div className='data_desc'> 
                                    {props.data[1].articles[index2].description}
                                </div>
                                <div className='data_published'> 
                                    {props.data[1].articles[index2].publishedAt}
                                </div>
                                {
                                    props.data[1].articles[index2].author && 
                                    <div className='data_author'> 
                                        <p>Author: {props.data[1].articles[index2].author}</p> 
                                    </div>
                                }
                            </div>
                            )})
                        }
                    </div>
                </div>
            }
            </div>
        )
}
}



export default NewsReel;