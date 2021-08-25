import React, { useContext } from 'react'
import {Button, Typography} from '@material-ui/core'
import {SocketContext} from '../SocketContext'

const Notifications = () => {
    const {answerCall,call,callAccepted}=useContext(SocketContext)
    return (
        <>
            {call.isReceivingCall&& !callAccepted &&(
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Typography variant="h4">{call.name} is calling:</Typography>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notifications
