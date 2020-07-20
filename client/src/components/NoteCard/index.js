import React, { Component } from "react";
import { Card, Button, Icon } from "react-materialize";
import API from "../../utils/API";

class NoteCard extends Component {
  state = {
    topic: "",
    url: "",
    body: "",
  };

  // Deletes a note from the database with a given id, then reloads notes from the db
  deleteNote = (id) => {
    API.deleteNote(id)
      .then((res) => this.props.loadNotes())
      .catch((err) => console.log(err));
  };
  updateNote = (id) => {
    API.updateNote(id, this.state)

  }


  render() {
    return (
      <>
        {this.props.notes.map((note) => (
          <div className="col s4">
            <Card
              actions={[
                <Button
                  node="a"
                  small
                  style={{
                    marginRight: "5px",
                  }}
                  waves="light"
                >
                  Update
              </Button>,
                <Button
                  node="a"
                  onClick={() => this.deleteNote(note._id)}
                  small
                  style={{
                    marginRight: "5px",
                  }}
                  waves="light"
                >
                  Delete
              </Button>,
              ]}
              className="blue-grey darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              header={note.topic}
              title={note.url}
            >
              {note.body}
            </Card>
          </div>
        ))}
      </>
    );
  }
}

export default NoteCard;
