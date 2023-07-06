import moment from "moment/moment"
export const Todo =({todo,setRefreshList})=>{
return <>
    <div className='todo-card index-div'>
        <h5>Your Review</h5>
      <div className="card-body">
        
      <p className="card-title" >{todo.desc}</p>
      </div>
      <br />
      <div className="actionButtons d-flex" style={{justifyContent:"space-between",alignItems:"center"}}>
    
       </div>
       <br />
       <small className="bottom-right"><b>{moment(todo.date).fromNow()}</b> </small>
    </div>
</>
}