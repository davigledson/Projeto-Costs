import ProjectForm from '../project/ProjectForm'
import styles from'./NewProject.module.css'
import { useNavigate } from 'react-router-dom'

function NewProject(){
   const navigate =useNavigate()

   function createPost(project){
      // initialize cost and services
      project.cost=0
      project.services=[]
      fetch("http://localhost:5000/projects",{
         method:'POST',
         headers:{
            'Content-type':'application/json',
         },
         body: JSON.stringify(project)
      })
      .then((resp) =>resp.json())
      .then((data) =>{
         console.log(data)
         //redirect
         navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })

      })
      .catch(err => console.log(err))

   }
    return (
        <div className={styles.newproject_container}>
           <h1> Crie seu Projeto</h1>
           <p>Crie seu Projeto para depois adicionar seu serviços</p>
           <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
   )
}
export default NewProject