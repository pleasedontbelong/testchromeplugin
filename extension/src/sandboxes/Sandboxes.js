import React, { Component } from 'react';
import $ from 'jquery';


class Sandbox extends Component {

  render() {
    const { name, user, branch, date_assigned } = this.props.data;
    const callback = this.props.callback;
    return (
      <li>
        <strong>{ name }</strong><br/>
        <input
          type="text"
          ref="user"
          name="user"
          className="small"
          placeholder="User"
          defaultValue={ user }/><br/>
        <input
          type="text"
          ref="branch"
          name="branch"
          className="small"
          placeholder="Branch deployed"
          defaultValue={ branch }/>
        <span>{ date_assigned }</span>
        <div className="modal-footer">
          <button className="btn" onClick={(e) => {
            console.log(this.refs);
          }}>
            Save
          </button>
          <button className="btn" onClick={(e) => {
            console.log(this.refs);
          }}>
            Deploy
          </button>
        </div>
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
          sandboxes: data,
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
    if (this.state.sandboxes && this.state.sandboxes.length){
      return (
        <ul>
          {this.state.sandboxes.map((sandbox) => {
            return <Sandbox data={sandbox}/>;
          })}
        </ul>
      );
    }
    return '';
  }
}



export default Sandboxes;
