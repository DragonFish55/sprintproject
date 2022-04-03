import './News.css';
import {Link} from 'react-router-dom'
import {React} from 'react';
import $ from 'jquery';

function News(props){
    console.log(props.data)
    return (

            <div className="news">
                {

                props.data &&
                props.data.map((object, index) => {
                return (
                <div className = "newsdata" key={index}>
                    
                    <div className="dataentries" key="hey">
                        {
                        
                            <div className='dataentry'>
                                <div className = "datacat">
                        {
                            
                            props.data[index][0].charAt(0).toUpperCase() + 
                            props.data[index][0].substring(1, props.data[index][0].length)      
                        }
                    </div>
                                <div className='data_title'>
                                    {props.data[index][1].title}
                                </div>

                                {
                                    props.data[index][1].author &&
                                    <div className='data_author'>
                                        {props.data[index][1].author}
                                    </div>
                                }
                                <div className='data_published'>
                                    {props.data[index][1].publish}
                                </div>

                                 <div className='data_desc'>
                                    {props.data[index][1].desc}
                                </div>

                                <div className="data_image">
                                        <img
                                            src={props.data[index][1].image}
                                            alt="pic1"
                                            className="center"/>
                                </div>
                                <div className="data_source">
                                    <p className="center">Read more at<a href = {props.data[index][1].url}>{props.data[index][1].source.name}</a></p>
                                </div>
                              </div>


                            
                        }
                    </div>
                </div>
                )
                })
            }
            </div>
        )
}

export default News;