import React from 'react';

class AddNote extends React.Component {

  handleSubmit(){
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  }

  handleKeyDown(e){
    if (e.keyCode == 13 && this.refs.note.getDOMNode().value) {
      this.handleSubmit();
    }
  }
  render() {
    return (
      <div className="ui fluid action input">
        <input type="text" ref='note' placeholder="Add Note ... "
          onKeyDown={this.handleKeyDown.bind(this)}/>
        <button className="ui primary button" onClick={this.handleSubmit.bind(this)}>
          Add
        </button>
      </div>
    );
  }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default AddNote;
