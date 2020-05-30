import React from 'react';

class ChatWindow extends React.Component{
  state={
    message:"",
  }

handleMessage=(event)=>{
	this.setState({message:event.target.value})
}

handleSubmit=(event)=>{
  event.preventDefault();
  this.props.onMessage(this.props.username, this.state.message)
  this.setState({
    message:"",
   })
}

isDisabled = () => {
    return this.state.message.length === 0 ;
  }

  render(){
	let { messages, username } = this.props

   return(
       <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.message} onChange={this.handleMessage}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        </div>
   ) 
    
  }

}

export default ChatWindow;