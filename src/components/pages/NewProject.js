import ProjectForm from '../project/ProjectForm'
import styles from'./NewProject.module.css'

function NewProject(){
    return (
        <div className={styles.newproject_container}>
           <h1> Crie seu Projeto</h1>
           <p>Crie seu Projeto para depois adicionar seu serviços</p>
           <ProjectForm btnText='Criar Projeto'/>
        </div>
   )
}
export default NewProject