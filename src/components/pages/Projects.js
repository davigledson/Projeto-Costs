import Message from "../layout/Message"
import { useLocation } from "react-router-dom"


function Projects(){
    const location = useLocation()
    let message = ""
    if(location.state){
       message = location.state.message
    }
    return (
    <div>
        <h1>Meus Projetos</h1>
        
        {message && <Message type="success" msm={message} />}
        
    </div>
    )
}

export default Projects