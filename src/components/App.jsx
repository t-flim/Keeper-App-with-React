import React from "react";

// components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
    return(
        <div>
            <Header />
            {notes.map(note => (
                <Note 
                    key={note.key}
                    name={note.name}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    )
}

export default App;