import React from 'react';

class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <h3>User Profile</h3>
        <div className='ui card'>
          {this.props.bio.avatar_url && <div className="image"><img src={this.props.bio.avatar_url} /></div>}
          <div className="ui celled list">
          {this.props.bio.name && <div className='item' >Name: {this.props.bio.name} </div>}
          {this.props.bio.login && <div className='item' >Login: {this.props.bio.login} </div>}
          {this.props.bio.email && <div className='item' >Email: {this.props.bio.email } </div>}
          {this.props.bio.followers &&  <div className='item' > <i className="users icon"></i>{this.props.bio.followers} followers</div>}
          {this.props.bio.following && <div className='item' > <i className="users icon"></i>{this.props.bio.following} following </div>}
        </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;
