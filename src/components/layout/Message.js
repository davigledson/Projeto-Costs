import styles from './Message.module.css'
import { useState, useEffect } from 'react'

function Message( {type,msm}){
    const [visible,setVisible]= useState(false)

    useEffect(() => {
        if(!msm){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 5000)

        return () => clearTimeout(timer)

    }, [msm])
 return(
    <>
    {visible && (
        <div className={`${styles.message} ${styles[type]}`}> {msm} </div>
    )}
    </>
 )
}
export default Message