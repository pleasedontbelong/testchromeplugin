import React, { Component } from 'react';
import $ from 'jquery';


class Sandbox extends Component {

  render() {
    const { name, user, branch, date_assigned } = this.props.data;
    const callback = this.props.callback;
    return (
      <li>
        <form>
          <strong>{ name }</strong><br/>
          <input
            ref="user"
            name="user"
            className="small"
            placeholder="User"
            defaultValue={ user }/><br/>
          <input
            ref="branch"
            name="branch"
            className="small"
            placeholder="Branch deployed"
            defaultValue={ branch }/>
          <span>{ date_assigned }</span><br/>
        </form>
        <button onClick={(e) => {
          console.log(this.refs);
        }}>
          Save
        </button>
        <button onClick={(e) => {
          console.log(this.refs);
        }}>
          Deploy
        </button>
      </li>
    );
  }
}

class Sandboxes extends Component {

  constructor(props){
    super(props);
    this.state = {
      sandboxes: [],
    };
  }

  componentDidMount() {
    this.serverRequest = $.get(
      this.props.source,
      (data) => {
        this.setState({
          sandboxes: data.results,
        });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render(){
    return (
      <div>
        <div className="heading" tabIndex="-1">
          <span id="sandboxes_tab_header">Sandboxes</span>
        </div>
        <div id="channel_page_scroller" className="flex_content_scroller">
          { this.renderSandboxes() }
        </div>
      </div>
    );
  }

  renderSandboxes(){
    return (
      <ul>
        {this.state.sandboxes.map((sandbox) => {
          return <Sandbox data={sandbox}/>;
        })}
      </ul>
    );
  }
}



export default Sandboxes;
