import React from 'react';
import UserProfile from '../components/Github/UserProfile';
import Repos from '../components/Github/Repos';
import Notes from '../components/Notes/Notes';
import Firebase from 'firebase';
import helpers from '../utils/helpers';
import Rebase from 're-base';

//create a base URL for the firebase database.
//this will include the helper methods we need to replace the mixin
var base = Rebase.createClass('https://add.your.firebase.url.here');

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }

  init(){
    this.ref = base.bindToState(this.router.getCurrentParams().username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    helpers.getGithubInfo(this.router.getCurrentParams().username)
      .then((dataObj) => {
        this.setState({
          bio: dataObj.bio,
          repos: dataObj.repos
        });
      });
  }

  componentWillMount() {
    this.router = this.context.router;
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init();
  }

  handleAddNote(newNote) {
    base.post(this.router.getCurrentParams().username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render() {
    var username = this.router.getCurrentParams().username;
    return (
      <div className="ui grid">
        <div className="three column row">
          <div className="column">
            <UserProfile username={username} bio={this.state.bio}/>
          </div>
          <div className="column">
            <Repos username={username} repos={this.state.repos}/>
          </div>
          <div className="column" >
            <Notes username={username}
                   notes={this.state.notes}
                   addNote={this.handleAddNote.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

Profile.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Profile;
