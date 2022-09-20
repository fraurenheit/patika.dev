import { useState } from "react"; 
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function Components() {
    const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
    );

  // Listelemede footerdan gelen bilgiyi alabilmek için hide adında string değer tutan bir state oluştuyoruz. Varsayılan değeri 'All'
    const [hide, setHide] = useState("All");

    return (
    <div className="todoapp">
        <Form todos={todos} setTodos={setTodos} />{" "}
      {/* Footer'dan gelen veriyle listeleme yapabilmek için hide verisini gönderiyoruz. */}
        <List todos={todos} setTodos={setTodos} hide={hide} />{" "}
        <Footer todos={todos} setTodos={setTodos} setHide={setHide} />{" "}
    </div>
    );
}

export default Components;