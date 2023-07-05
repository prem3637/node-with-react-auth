import React from 'react'
import noteStore from "../stores/noteStore";
function CreateNotes() {
    const store = noteStore()
  return (
    <div>
         {!store.updateNotes.id && (
        <div className="col-md-6">
          <h2>Create Notes:</h2>
          <form onSubmit={store.createNote}>
            <input
              onChange={store.updateCreateFormField}
              value={store.createNotes.title}
              type="text"
              name="title"
            />{" "}
            <br />
            <br />
            <textarea
              value={store.createNotes.body}
              onChange={store.updateCreateFormField}
              name="body"
            ></textarea>
            <br />
            <br />
            <input type="submit" value="Save" />
          </form>
        </div>
        )}
    </div>
  )
}

export default CreateNotes
