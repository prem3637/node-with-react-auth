import {create} from "zustand";
const noteStore = create((set) => ({
  notes: null,

  
  createNotes: {
    title: "",
    body: "",
  },


  updateNotes: {
    id: null,
    title: "",
    body: "",
  },


  fetchNotes: () => {
    fetch("http://localhost:5000/get-notes",{
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        set({
          notes: data.notes,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },


  updateCreateFormField: (e) => {
    const { name, value } = e.target;
    const { createNotes, notes } = noteStore.getState();
    set((state) => {
      return {
        createNotes: {
          ...createNotes,
          [name]: value,
        },
      };
    });
  },


  createNote: (e) => {
    e.preventDefault();
    const { createNotes, notes } = noteStore.getState();
    fetch("http://localhost:5000/notes", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(createNotes),
    })
      .then((res) => {
        if (res.ok) {
          alert("data save");
          return res.json();
        }
      })
      .then((data) => {
        set({
          notes: [...notes, data.note],
          createNotes: {
            title: "",
            body: "",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },


  deleteNote: (id) => {
    const { notes } = noteStore.getState();
    fetch("http://localhost:5000/delete-notes/" + id, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          alert("delete successfully...");
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        const newNotes = notes.filter((note) => {
          return note._id !== id;
        });
        set({
          notes: newNotes,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },


  updateNoteForm: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        updateNotes: {
          ...state.updateNotes,
          [name]: value,
        },
      };
    });
  },


  toggleUpdate: (note) => {
    set({
      updateNotes: {
        title: note.title,
        body: note.body,
        id: note._id,
      },
    });
  },


  handleuUpdate: (e) => {
    e.preventDefault();
    const {updateNotes: {title, body,id},notes } = noteStore.getState();
    fetch("http://localhost:5000/update-notes/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      credentials: "include",
      body: JSON.stringify({ title, body }),
    })
      .then((res) => {
        if (res.ok) {
          alert("data save");
          return res.json();
        }
      })
      .then((data) => {
        const newNotes = [...notes];
        const noteIndex = notes.findIndex((note) => {
          return note._id === id;
        });
        newNotes[noteIndex] = data.notes;
        set({
            notes:newNotes,
            updateNotes:{
                id:null,
                title:'',
                body:''
            }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  },

}));
export default noteStore;
