import './Settings.css';
import $ from 'jquery';
import coockiecheck from '../../cookiecheck';
import { useNavigate } from 'react-router-dom';


//returns main page component of the frontend app
function Settings(props) {
   
    const checkb = document.getElementsByClassName("checkb")
    const navigate = useNavigate()
  
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
        
        <button onClick={updateSettings} id = "checkq">Submit</button>
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

//Based on which checkboxes are checked the users categories 
//are updated
function updateSettings(){
    let checklist = []
    let querystr = ""
    let cookies = document.cookie
    let check = coockiecheck(cookies, "username")
    let user = ""
    if(check !== ""){
      user = check
    }
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
  
    for(let i = 0; i < data_len; i++){
        if(i !== data_len-1){
            querystr = querystr + keys[i] + "=" + values[i] + "&";
        }else{
            querystr = querystr + keys[i] + "=" + values[i];
        } 
    }

    console.log(querystr)
    
    $.ajax({
        //url: 'https://gentle-island-18820.herokuapp.com/api/signin',
        url: "http://127.0.0.1:5000/api/new/" + user + "/categories?" + querystr,
        type: 'GET',
        crossorigin: true,
        cache:false,
        success: function(data,xhr){
            console.log(data)
            if(data.dataout === "true") {
                navigate('/')
                return true
            } else {
                return false
            }
        },
        error: function(request,error){
          console.log(error);
        }
      })
};
  

}

export default Settings;