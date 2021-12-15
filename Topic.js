import React from 'react'
import './Topic.css';
import vector from './Vector.png';
const Topic = () => {

    const color=()=>{
      
           
        
    }
    return (
        <div className='main-container'>
            <div>
                <div className="main-head">
                <div className='Topicrect'>    </div>
                <div className="topic">
                  Topics Covered
                </div>

                </div>
          <div className='content-container'>

              <div className="session-head">Session 1 </div>
              <div className="session-subhead">| 16 Nov, 8:00 am-12:00 </div>
          
           <div className='record'>
           <img className="record-img" src={vector}/>
              <span className='record-text'>Recording</span>
          </div>
          <div className='topic-tabs'>

          <div class="tab">
  <button class="tablinks" onclick={color()}>Topic</button>
  <button class="tablinks" onclick={color()}>Topic</button>
  <button class="tablinks" onclick={color()}>Topic</button>
  <button class="tablinks" onclick={color()}>Topic</button>
</div>
          </div>
            </div>






            <div className='content-container'>

<div className="session-head-2">Session 1 </div>
<div className="session-subhead-2">| 16 Nov, 8:00 am-12:00 </div>

<div className='record-2'>
<img className="record-img-2" src={vector}/>
<span className='record-text-2'>Recording</span>
</div>
<div className='topic-tabs-2'>

<div class="tab-2">
<button class="tablinks" onclick={color()}>Topic</button>
<button class="tablinks" onclick={color()}>Topic</button>
<button class="tablinks" onclick={color()}>Topic</button>
<button class="tablinks" onclick={color()}>Topic</button>
</div>
</div>
</div>



















            </div>

        </div>
    )
}

export default Topic 
