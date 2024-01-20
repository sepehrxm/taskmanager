

const TaskList = (props) => {
    const {deleteTask, updateTask, page} = props
    const tasks = page===undefined ? props.tasks : props.tasks.filter((task)=> task.completed === page)
  return (
    <>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
         {tasks.map((task) => {
            return <li className="bg-base-100 p-2 flex flex-col col-auto items-center justify-between gap-4 rounded-lg border-2 border-gray-600" key={task.id}>
              <div className="flex flex-col w-full overflow-auto p-2">
                <h1 className="underline decoration-emerald-500 decoration-2 underline-offset-2 font-semibold self-center text-primary">Task Title:</h1>
                <h1 className="">{task.title}</h1>
              </div>
              <div className="flex flex-col w-full overflow-auto p-2">
                <h1 className="divider divider-primary text-primary font-semibold">Task Description</h1>
                <div className="">{task.content}</div>
              </div>
              <div className="flex flex-col w-full p-2">
                <h1 className="divider divider-primary text-primary font-semibold">Deadline</h1>
                <h3>{task.date}</h3>
              </div>
              <div className="flex flex-col w-full p-2">
                <label className="divider divider-primary text-primary font-semibold" htmlFor="completed">Status</label>
                <p className="badge badge-warning">{task.completed? 'Completed' : 'Incomplete'}</p>
                {!task.completed? <button className="btn glass mt-2" onClick={()=>{
                  updateTask(task.id, task.completed)
                }}>Completed</button> : null}
                <button className="btn btn-square btn-outline btn-error self-center mt-4" onClick={()=>{
                  deleteTask(task.id)
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </li>
        })}

        </ul>
    </>
  )
}
export default TaskList