import styles from './Body.module.css';
import { Task } from "./Task";
import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

export function Body() {

    const [listTask, setListTask] = useState([])
    const [newTask, setNewTask] = useState('')
    const [listTaskCompleted, setListTaskCompleted] = useState(0)

    function handleCreateNewTask(e: FormEvent){
        e.preventDefault()

        setListTask([...listTask, newTask])
        setNewTask('')
        console.log(listTask)
    }

    function handleNewTaskText(e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setNewTask(e.target.value)
    }

    function deleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = listTask.filter(task => {
            return task != taskToDelete
        })
        setListTask(taskWithoutDeletedOne)

    }

    function completedTask(task: boolean){
        console.log(task)
        setListTaskCompleted(task ? listTaskCompleted - 1 : listTaskCompleted + 1 )
    }

    return (
        <article className={styles.article}>
            <form onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    className={styles.input}
                    value={newTask}
                    onChange={handleNewTaskText}
                    required
                />
                <button type='submit'>Criar <PlusCircle size={20}/></button>
            </form>
            <div className={styles.task}>
                <div className={styles.top}>
                    <strong className={styles.tarefasCriadas}>Tarefas criadas <span>{listTask.length}</span></strong>
                    <strong className={styles.concluidas}>Concluidas <span>{listTaskCompleted}</span></strong>
                </div>
            {
                listTask.map(tasks => {
                    return (
                        < Task key={tasks} content={tasks} onDeleteTask={deleteTask} onCompleted={completedTask}/>
                        
                    )
                })
            }   
            </div>
        </article>
    )
}