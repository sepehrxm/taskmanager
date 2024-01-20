"use client"
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { TbPointerPlus } from "react-icons/tb";
import axios from "axios";
import TaskList from "./TaskList";


const CreateTask = (props) => {
  const {page} = props
  const [create, setCreate] = useState(false)
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [completed, setCompleted] = useState(false)

  const getTasks = async () => {
    try {
      const res = await axios.get("./api/tasks")
      setTasks(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTasks()
  },[tasks])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const task = {title, content, date, completed}
    try {
      const res = await axios.post("./api/tasks", task)
      if(res.data.error){
        toast.error(res.data.error)
      } else{
        toast.success("Task Created")
        setCreate(false)
      }

    } catch (error) {
      toast.error("Something went wrong.")
      console.log(error)
    } finally{
      const res = await axios.get("./api/tasks")
      setTasks(res.data)
    }
  }

  const handleCreate = () => {
    setCreate(true)
  }

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`./api/tasks/${id}`)
      toast.success("Task deleted.")
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    } finally{
      const response = await axios.get("./api/tasks")
      setTasks(response.data)

    }
  }

  const updateTask = async (id, completed) => {
    try {
      const res = await axios.put(`./api/tasks/${id}`, completed)
      toast.success("Task updated.")
  
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    } finally{
      const response = await axios.get("./api/tasks")
      setTasks(response.data)
    }
  }


  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full gap-2">
      <button className={`${create?'hidden':''} btn flex flex-row border-b items-center justify-center border-gray-900/10 bg-base-300 w-36 mx-4 rounded-xl`} onClick={handleCreate}>
        <TbPointerPlus className="w-5 h-5" />
        New Task
      </button>
    <form className={`${create?'':'hidden'} flex flex-col bg-base-300 w-64 h-76 self-center rounded-md py-2`} onSubmit={handleSubmit}>
      <div className="input-control flex flex-col">
        <label htmlFor="title" className="block my-1 ml-4">Title</label>
        <input className="rounded-md input input-bordered h-8 w-56 self-center" type="text" id="title" value={title} name="title" onChange={(e)=> setTitle(e.target.value)} placeholder="Title"/>
      </div>

      <div className="input-control flex flex-col">
        <label htmlFor="content" className="block my-1 ml-4">Content</label>
        <textarea className="textarea w-56 rounded-md self-center" rows={4} id="content" value={content} name="content" onChange={(e)=> setContent(e.target.value)} placeholder="content"/>
      </div>

      <div className="input-control flex flex-col">
        <label htmlFor="date" className="block my-1 ml-4">Date</label>
        <input className="self-center rounded-md w-56" type="date" id="date" value={date} name="date" onChange={(e)=> setDate(e.target.value)} placeholder="date"/>
      </div>

      <div className="input-control flex items-center self-center justify-self-center">
        <label htmlFor="completed" className="my-4 mr-2">Completed?</label>
        <input className="checkbox checkbox-info checkbox-sm" type="checkbox" id="completed" value={completed.toString()} name="completed" onChange={(e)=> setCompleted(!completed)} placeholder="completed"/>
      </div>
        
      <div className="submit-btn flex flex-col gap-1">
        <button className="btn btn-outline btn-success" type="submit" >Submit</button>
        <button className="btn btn-ghost" type="button" onClick={()=>setCreate(false)}>Cansel</button>  
      </div>
    </form>
    <div className="h-1 w-full bg-neutral block rounded-xl"></div>
      </div>
      <div className="w-full flex my-4">
    <TaskList updateTask={updateTask} deleteTask={deleteTask} tasks={tasks} page={page}/>
      </div>
    </div>
  )
}
export default CreateTask