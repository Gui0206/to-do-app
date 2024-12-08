import { type ChangeEvent, type FormEvent, useState } from 'react'
import todoLogo from '../assets/Logo.svg'
import plus from '../assets/plus.svg'

import styles from './Header.module.css'

interface Props {
  HandleNewTask: (taskContent: string) => void
}

export function Header ({HandleNewTask}: Props) {
  const [ content, setContent ] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    HandleNewTask(content)
    setContent("")
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='logo' />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder='Adicione uma nova tarefa' onChange={onChangeContent} value={content}/>
        <button type='submit'>
          Criar 
          <img src={plus} alt='plus' />
        </button>
      </form>

    </header>
  )
}