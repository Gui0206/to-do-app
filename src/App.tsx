import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"


export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
    id: 'teste',
    content: 'teste',
    isCompleted: true,
    },
    {
      id: 'adsdasda',
      content: 'asdadasdasdsad',
      isCompleted: false,
      }
  ]);

  function addTask(taskContent: string) {
    setTasks([
      ...tasks, 
      {
        content: taskContent,
        isCompleted: false,
        id: crypto.randomUUID(),
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function handleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
      <>
        <Header HandleNewTask={addTask}/>
        <Tasks
          tasks={tasks} onDelete={deleteTaskById} onComplete={handleTaskCompletedById}
        />
      </>
  )
}

export default App