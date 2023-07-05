import React from 'react'
import noteStore from "../stores/noteStore";
function ShowNotes({notes}) {
  const store = noteStore()
    return(
        <div>
        <h2>Notes:</h2>
        {store.notes &&
          store.notes.map((item, index) => {
            return (
              <div key={item._id}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <button
                  onClick={() => {
                    store.deleteNote(item._id);
                  }}
                >
                  delete note
                </button>
                <button
                  onClick={() => {
                    store.toggleUpdate(item);
                  }}
                >
                  update Note
                </button>
              </div>
            );
          })}
      </div>
    )
}

export default ShowNotes
