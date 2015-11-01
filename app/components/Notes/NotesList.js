import React from 'react';

class NotesList extends React.Component {
  render() {
    var notes = this.props.notes.map((note, index) => {
      return <div className='item' key={index}> {note} </div>
    });

    return (
      <div className="ui celled list">
        {notes}
      </div>
    );
  }
}

export default NotesList;
