import React from 'react';

class SearchGithub extends React.Component {
  handleSubmit(){
    var router = this.context.router;
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = "";
    router.transitionTo('profile', {username: username});
  }

  handleKeyDown(e){
    if (e.keyCode == 13 && this.refs.username.getDOMNode().value) {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className='right item'>
      <div className="ui action input">
        <input  ref="username"
                type="text"
                placeholder="Search for a Github user ..."
                onKeyDown={this.handleKeyDown.bind(this)}/>
        <div  className="ui yellow button"
              onClick={this.handleSubmit.bind(this)}>Search</div>
      </div>
      </div>
    );
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SearchGithub;
