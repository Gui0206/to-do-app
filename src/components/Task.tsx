import styles from './Task.module.css'
import trash from '../assets/trash.svg'
import type { ITask } from '../App'
import checked from '../assets/checked.svg'
import check from '../assets/check.svg'


interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({task, onDelete, onComplete} : Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} type='button' onClick={() => onComplete(task.id)}>
        {task.isCompleted ?  <img src={checked} alt='trash checked box'/> :<img src={check} alt='trash checked box'/>}
      </button>
      
      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.content}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)} type='button'>
        <img src={trash} alt='trash can'/>
      </button>
    </div>
  )
}