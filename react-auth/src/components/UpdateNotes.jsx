import React from 'react'
import noteStore from "../stores/noteStore";
function UpdateNotes() {
    const store = noteStore()
  return (
    <div>
       {store.updateNotes.id && (
        <div className="col-md-6">
            <>
              <h2>Update Notes:</h2>
              <form onSubmit={store.handleuUpdate}>
                <input
                  onChange={store.updateNoteForm}
                  value={store.updateNotes.title}
                  type="text"
                  name="title"
                />
                <br />
                <br />
                <textarea
                  value={store.updateNotes.body}
                  onChange={store.updateNoteForm}
                  name="body"
                ></textarea>
                <br />
                <br />
                <input type="submit" value="update" />
              </form>
            </>
        </div>
          )}
    </div>
  )
}

export default UpdateNotes
