import { useEffect, useState } from "react"
import { AddTodoModel } from "./partials/addTodoModal"
import { Header } from "./partials/header"
import { Todo } from "./partials/todo"
import { getTodoListApi, getToken } from "../services/api"
import { useNavigate } from "react-router-dom"
import { Thankyou } from "./partials/thankyou"

export const Home=()=>{
const navigation = useNavigate()
const [list, setList] = useState([])
const [refreshList, setRefreshList] = useState()
    useEffect(()=>{
   if(!getToken()){
    navigation('/login')
   }
   fetchTodoList()
    },[refreshList])

async function fetchTodoList(){
    const result = await getTodoListApi();
   console.log("todolist-",result)
    if(result.status===200 && result.data.status === 200){
        setList(result.data.data.todos.reverse())
    }
}
    return <>
    <Header />
    {
            list.length===0 ? <div className="thankyou" >
                No Reviews Yet
            </div>
             :
             <Thankyou/>
           }
    <div className="product">
    <div className="product-div">
        <div className="product">
        <img src="https://traya.health/cdn/shop/products/Slide1-HairRusnew_1.jpg?v=1677585873&width=360"/>
        </div>
        <p><b>Hair Ras Ayurvedic Hair Herbs | 100% Natural Hair Supplement with Bhringraj</b></p>
        <p className="price"><b>Price:&#8377;520/-</b> </p>
        <p>A herbal supplement with Shatavari and Bhringraj for better hair quality and delayed greying</p>
    </div>
    </div>
    <div className="container">
        <div className="display-grid index mt-4">
           {
            list.map((todo)=><Todo todo={todo} key={todo._id} setRefreshList={setRefreshList}/>

            )
           }

        </div>
    </div>
   
    <div className="" style={{position: 'fixed', right:50, bottom:100, zIndex:1030}}>
   
        {
            list.length===0 ? 
           
            <button className="btn btn-primary" type="button" data-bs-toggle = "modal" data-bs-target = "#exampleModal">Add Review</button>
        
            :
            <button className="btn btn-primary" type="button" data-bs-toggle = "modal" data-bs-target = "#exampleModal">Edit Review</button>
           
       }
      
      </div>

           
    <AddTodoModel setRefreshList={setRefreshList}/>
    </>
}