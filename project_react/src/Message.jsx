function Message({text,type}){
    let msg = "message";
    
        if (type === "info") msg += ' message-info';
            
         else if (type === "alert") msg += ' message-alert';

         else if (type === "success") msg += ' message-success';
        
        
    
    return <div className={msg}>{text}</div>;
    
}
export default Message;
