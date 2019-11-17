import React from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import Content from "./components/Content";

class AppRun extends React.Component {
  constructor(props){
    super(props);
    // this.contentElement = React.createRef();
    this.state = {content_id: "apresentacao"};
  }
  handlerChangeContent = (content_id) => {
    this.setState({content_id})
    console.log('handlerChangeContent:', content_id);
    console.log('content_id:', this.state.content_id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Não faça bullying, faça amigos! 
          </p>
        </header>
        <SideBar handlerChangeContent={this.handlerChangeContent}/>
        <Content content_id={this.state.content_id}/>
      </div>
    );
  }
}
export default AppRun;
