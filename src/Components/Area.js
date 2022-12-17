import React,{useState} from "react";


const Area=()=>{
    const [currentUser, setCurrentUser] = useState([])
    const [usersData, setUsersData] = useState([
        {
          title: "",
          notes: "",
          
        }
      ])
      function Changehandle(e) {
        setUsersData({...usersData,[e.target.name]:e.target.value})
      }

      let Title=usersData.title;
      let Notes=usersData.notes;
      

      function HandleNew(e) {
        e.preventDefault();
        setCurrentUser([...currentUser,{Title,Notes}])
        setUsersData({title:"",notes:""})
      }

    
     const Handledelete=(i)=>{
        const setCurrentUser1=[...currentUser];
        setCurrentUser1.splice(i,1)
        setCurrentUser(setCurrentUser1)
     }
     

    return(
        
        <div>
            <style>
                {'body {background-color:rgb(229, 228, 226);}'}
            </style>
            <div className="topnav"><p>Keeper</p></div>
            <form className="form">
                
            <input className="title"  name="title" value={Title} onChange={Changehandle } placeholder="Title"/><br/>
            
            <textarea className="textarea" name="notes" value={Notes} onChange={Changehandle} placeholder="Take a notes..."/>
            <button onClick={HandleNew}>Add</button>
            </form>
       
         {
            currentUser.map((info,ind)=>{
                return(
                    
                        <div className="Header">
                            <div key={ind}>
                                <p><b>{info.Title}</b></p>
                                <p>{info.Notes}</p>
                            </div>
                      <button className="b1" onClick={() =>Handledelete(ind)} >Delete</button>
                        </div>
            
                )
            }
              )
          }
             </div>
          
    )

    
}
export default Area