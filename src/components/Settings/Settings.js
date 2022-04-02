import './Settings.css';
import $ from 'jquery';
import coockiecheck from '../../cookiecheck';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



//returns main page component of the frontend app
function Settings(props){

    const checkb = document.getElementsByClassName("checkb")
    const navigate = useNavigate()
    const [category, setCategory] = useState(props.categories)

    useEffect(() => {
        checkCategories()
    })

    function checkCategories(){
        let checkclass = document.getElementsByClassName("checkb")
        let i = 0
        for(i = 0; i < checkclass.length; i++){
            if(checkclass[i].name == "general"){
                checkclass[i].checked = props.categories.general
            } else if(checkclass[i].name == "business"){
                checkclass[i].checked = props.categories.business
            } else if(checkclass[i].name == "sports"){
                checkclass[i].checked = props.categories.sports
            } else if(checkclass[i].name == "health"){
                checkclass[i].checked = props.categories.health
            } else if(checkclass[i].name == "technology"){
                checkclass[i].checked = props.categories.technology
            } else if(checkclass[i].name == "entertainment"){
                checkclass[i].checked = props.categories.entertainment
            } else if(checkclass[i].name == "science"){
                checkclass[i].checked = props.categories.science
            } else {
                console.log("hi")
            }
        }
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
        let data = {"general":checklist[0], "business":checklist[1],
                "entertainment":checklist[2], "health":checklist[3],
                "science":checklist[4], "sports":checklist[5], "technology":checklist[6]};
        data_len = Object.keys(data).length
        let keys = Object.keys(data)
        let values = Object.values(data)

        for(let i = 0; i < data_len; i++){
            if(i !== data_len-1){
                querystr = querystr + keys[i] + "=" + values[i] + "&";
            }else{
                querystr = querystr + keys[i] + "=" + values[i];
            }
        }

        $.ajax({
            //url: 'https://gentle-island-18820.herokuapp.com/api/signin',
            url: "http://127.0.0.1:5000/api/new/" + user + "/categories?" + querystr,
            type: 'GET',
            crossorigin: true,
            cache:false,
            success: function(data,xhr){
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


    return (
        <div className="settings">
            <div className="sett_title">Settings:</div>
            <div className="sett_choices">
                <div className="sett_choice">
                    <label htmlFor="gen_box">General</label>
                    {
                        props.categories &&
                        <input type="checkbox"
                               className= "checkb"
                               name = "general"
                               id = "gen_box"
                               value = "def"
                               />
                    }

                </div>
                <div className="sett_choice">
                    <label htmlFor="bux_box">Business</label>
                    {
                        props.categories &&
                        <input type="checkbox"
                        className= "checkb"
                        name="business"
                        id = "bus_box"
                        value = "def"
                         />

                    }


                </div>
                <div className="sett_choice">
                    <label htmlFor="ent_box">Entertainment</label>
                    <input type="checkbox"
                           className= "checkb"
                           name="entertainment"
                           id = "ent_box"
                           value = "def"
                           />
                </div>
                <div className="sett_choice">
                    <label htmlFor="hlth_box">Health</label>
                    <input type="checkbox"
                           className= "checkb"
                           name="health"
                           id = "hlth_box"
                           value = "def"
                           />
                </div>
                <div className="sett_choice">
                    <label htmlFor="sci_box">Science</label>
                    <input type="checkbox"
                           className= "checkb"
                           name = "science"
                           id = "sci_box"
                           value = "def"
                           />
                </div>
                <div className="sett_choice">
                    <label htmlFor="sprt_box">Sports</label>
                    <input type="checkbox"
                           className= "checkb"
                           name = "sports"
                           id = "sprt_box"
                           value = "def"
                           />
                </div>
                <div className="sett_choice">
                    <label htmlFor="tech_box">Technology</label>
                    <input type="checkbox"
                           className= "checkb"
                           name="technology"
                           id = "tech_box"
                           value = "def"
                           />

                </div>
            </div>

            <button onClick={updateSettings} id = "checkq">Submit</button>
        </div>
    )

}

export default Settings;
