import { ClipboardText, Circle, Trash, CheckCircle} from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';

export function Task({content, onDeleteTask, onCompleted}) {

    const num = 0;

    const [stateCircle, setStateCircle] = useState(true)
    function handleDeleteTask(){

        if(!stateCircle){
            onCompleted(true)
        }
        onDeleteTask(content)


    }

    function handleCompleted(){
        console.log(stateCircle)
        const state = stateCircle ? false : true
        setStateCircle(state)
        onCompleted(state)
    }


    return(
        <div className={styles.task}>
            {
                num === 1 ? (
                    <div className={styles.listaTarefas}>
                        <ClipboardText size={56} />
                        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                ) : (
                    <div className={styles.listaItemTask}>
                        <p className={styles.listaItem}><button className={styles.buttonCircle} onClick={handleCompleted}>{stateCircle ? <Circle className={styles.circle} size={24}/> : <CheckCircle className={styles.circle} size={24}/>}
                        </button><span className={!stateCircle && styles.textDecorator}>{content}</span> <button onClick={handleDeleteTask} className={styles.buttonTrash}><Trash className={styles.trash} size={24}/></button></p>            
                    </div>
                )
            }
        </div>
    );
}