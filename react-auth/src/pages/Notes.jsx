import React, { useEffect } from "react";
import ShowNotes from "../components/ShowNotes";
import noteStore from "../stores/noteStore";
import UpdateNotes from "../components/UpdateNotes";
import CreateNotes from "../components/CreateNotes";
function Notes() {
  const store = noteStore()
  useEffect(()=>{
    store.fetchNotes()
  },[])

  return (
    <>
      <div className="row">
        <CreateNotes/>
         <UpdateNotes/>
      </div>
            <ShowNotes/>
    </>
  );
}

export default Notes;