export const  MyMessage = ({message,lastMessage}) => {
    // if(message?.attachments?.length > 0) {
    //     return(
    //         <img src={message.attachments[0].file}
    //         alt="message-attachment"
    //         className="message-image"
    //         style={{float:'right'}}
    //         />
    //     )
    // }
    // return(
    //     <div className='message' style={{float:'right', marginRight:'18px', color:"white", backgroundColor:'#3B2A50'}}>
    //         {message.text}
    //     </div>
    // )



    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !==message.sender.username


    return(
        <div className="my-message-row">
            
            {
                (message?.attachments?.length > 0) ? 
                    (
                        <img src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{float:'right'}}
                        />
                    ):
                    (
                        <div className='my-message' style={{float:'right', marginRight:'18px', color:"white", backgroundColor:'#3B2A50'}}>
                        {message.text}
                        </div>
                    )
                
            }
            {isFirstMessageByUser && (
                <div className="my-message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />
            )}
        </div>
    )

}