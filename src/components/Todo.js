import React,{useState} from 'react';
import './Todo.css';
const Todo = () => {
  const [todoArr,setTodoArr] = useState([]);
  const [value,setValue] =useState('');
  function createList(){
    if(value.length===0){
      return
    }
    let n = {id:Math.floor(Math.random() * 1000) + 4,desc:value,done:false};
    setTodoArr(prev => [...prev,n]);
    setValue('');
  }

  const checkClick = (v) => {
    var i = todoArr.findIndex(x=>x.id===v.id);
    var g = todoArr[i]
    g['done']=!v.done;
    setTodoArr(prev=>[...prev.slice(0,i),g,...prev.slice(i+1)])
    console.log(todoArr);
  }

  const deleteList = (item) =>{
    var i = todoArr.findIndex(x=>x.id===item.id);
    setTodoArr(prev=>[...prev.slice(0,i),...prev.slice(i+1)])
    console.log(todoArr)
  }

  return(
    <div className='todo'>
      <div style={{'background-color':'#313552'}} className='todoBar'>
        <div className='textbox'>
          <input autoFocus value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter Todo Task...' type='text' />
        </div>
        <div className='icon2'>
          <button onClick={()=>createList()} className='next'>{'>'}</button>
        </div>
      </div>
      {
        todoArr.map((item)=>{
          return (
            <div key={item.id} style={item.done?{"opacity":"0.5"}:null} className='todoBar'>
              <div className='icon1'>
                <div onClick={()=>checkClick(item)} className={!item.done?'checkbox1':'checkbox2'}></div>
              </div>
              <div className={!item.done?'text1':'text2'}>{item.desc}</div>
              <div className='icon2'>
                <button onClick={()=>deleteList(item)} className='del'>x</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Todo;
