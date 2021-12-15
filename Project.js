import React,{useState} from 'react'
import './Project.css';

const Project = () => {
 
      const[show,setShow]=  useState(true);
   
    return (
        <div className='main-container'>
            <div>
                <div className="main-head">
                <div className='Topicrect'>    </div>
                <div className="topic">
                  Projects
                </div>
               <span className='session-head'> Topic</span>
                </div>
               
<div className='project-container'>
<div class="tab">
  <div className="project">
  <button class="tablinks" onclick={()=>setShow(!show)} >Project</button>
  {show? <div className="project-desc">
   Project Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </div>:null}
      </div>
      <div className="project">
  <button class="tablinks" onclick={()=>setShow(!show)} >Project</button>
  {show? <div className="project-desc">
   Project Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </div>:null}
      </div>
      <div className="project">
  <button class="tablinks" onclick={()=>{setShow(!show)}}>Project</button>
  {show? <div className="project-desc">
   Project Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </div>:null}
      </div>
 
</div>


</div>
                     
                </div>
                </div>
          
    )
}

export default Project 



