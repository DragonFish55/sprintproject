import './Settings.css';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

//returns main page component of the frontend app
function Settings(props) {
    const checkout = document.getElementsByClassName("checkout");
    const checkq = document.getElementById("checkq");
    const checkb = document.getElementsByClassName("checkb")
    
  
  return (
    <div className="settings">
        <div className="sett_title"></div>
        <div className="sett_choices">
            <div className="sett_choice">
                <label htmlFor="gen_box">General</label>
                <input type="checkbox" className= "checkb" name = "gen_box" id = "gen_box" value = "def"/>
            </div>
            <div className="sett_choice">
                <label htmlFor="bux_box">Business</label>
                <input type="checkbox" className= "checkb" name="bus_box" id = "bus_box" value = "def"/>
            </div>
            <div className="sett_choice">
                <label htmlFor="ent_box">Entertainment</label>
                <input type="checkbox" className= "checkb" name="ent_box" id = "ent_box" value = "def"/>
            </div>
            <div className="sett_choice">
                <label htmlFor="hlth_box">Health</label>
                <input type="checkbox" className= "checkb" name="hlth_box" id = "hlth_box" value = "def"/>
            </div>
            <div className="sett_choice">
                <label htmlFor="sci_box">Science</label>
                <input type="checkbox" className= "checkb" name = "sci_box" id = "sci_box" value = "def"/>
            </div>
            <div className="sett_choice">
                <label htmlFor="sprt_box">Sports</label>
                <input type="checkbox" className= "checkb" name = "sprt_box" id = "sprt_box" value = "def"/>
            </div>
            <div className="sett_choice">
                <label htmlFor="tech_box">Technology</label>
                <input type="checkbox" className= "checkb" name="tech_box" id = "tech_box" value = "def"/>
            
            </div>
        </div>
        
        <button onClick={callApi} id = "checkq">Check</button>
    </div>
  )

function parseCheck(){
    let checklist1 = []
    for(let i = 0; i < checkb.length; i++){
        if(checkb[i].checked){
            checklist1[i] = "true"
        }
        else{
            checklist1[i] = "false"
        }
    }
    return checklist1
}


function callApi(){
    let checklist = []
    let querystr = ""
    let  user = "GoodByeJ"
    let data_len = 0
    checklist = parseCheck()
    console.log(checklist)
    let data = {"general":checklist[0], "business":checklist[1],
            "entertainment":checklist[2], "health":checklist[3],
            "science":checklist[4], "sports":checklist[5], "technology":checklist[6]};
    data_len = Object.keys(data).length
    let keys = Object.keys(data)
    let values = Object.values(data)
    console.log(data_len)
            //let data_len = 0
    //if(other == false){
    //    data_len = data_length
    //}
    //else{
    //    data_len = data_length - 1
    //}
    for(let i = 0; i < data_len; i++){
        if(i != data_len-1){
            querystr = querystr + keys[i] + "=" + values[i] + "&";
        }else{
            querystr = querystr + keys[i] + "=" + values[i];
        } 
    }

    console.log(querystr)
    
    $.ajax({
        //url: 'https://lit-dawn-76000.herokuapp.com/api/signin',
        url: "http://127.0.0.1:5000/api/new/" + user + "/categories?" + querystr,
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
            console.log(data)
        },
        error: function(request,error){
          console.log(error);
        }
      })
};
  

}

export default Settings;