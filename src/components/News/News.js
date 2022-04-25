import './News.css';
import {Link} from 'react-router-dom'
import {React} from 'react';
import $ from 'jquery';

function News(props){

    function submitFavorite(event){
        let endp = null
        let fav_btn = event.target
        let data_children = fav_btn.parentElement.parentElement.parentElement.children
        let text_type = data_children[0].children[0].innerHTML
        let title = data_children[1].innerHTML
        let author = data_children[2].innerHTML
        let pub_date = data_children[3].innerHTML
        let desc = data_children[4].innerHTML
        let image = data_children[5].children[0].src
        let source = data_children[6].children[0].children[0].href

        let data = {
            "type": text_type,
            "title":title,
            "author": author,
            "pub_datae": pub_date,
            "desc": desc,
            "image":image,
            "source": source
        }


        if(fav_btn.style.backgroundColor == "yellow"){
            fav_btn.style.backgroundColor = "gray"
            endp = "remove"
        } else{
            fav_btn.style.backgroundColor = "yellow"
            endp = "add"
        }

        let url = "http://127.0.0.1:5000/api/" + endp + "/submitFavorite"
        console.log(url)
        
        $.ajax({
            url: url,
            type: 'POST',
            crossorigin: true,
            cache:false,
            dataType: "json",
            contentType: "application/json",
            credentials: "include",
            xhrFields: {
              withCredentials: true
            },
            data:JSON.stringify(data),
            success: function(data,xhr){
              if(data.dataout == true){
                  console.log("true")
              }
      
            },
            error: function(request,error){
              console.log(error);
            }
          })

    }
    
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
                                    <p className = "data_type">
                                        {
                                        props.data[index][0].charAt(0).toUpperCase() + 
                                        props.data[index][0].substring(1, props.data[index][0].length)      
                                        }
                                    </p>
                                <div className='fav_btn_div'>
                                    <button id = "fav_btn" onClick={submitFavorite} className = "fav_btn"></button>
                                </div>
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