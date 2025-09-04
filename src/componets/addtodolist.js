import { useState } from 'react'

export default function AddTodoList(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    const formStyle = {
        margin: "40px 0px",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "5px",
        backgroundColor: "#e6e6e6",
        alignItems: "center"
    }

    const centerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "100vh"
    }

    return (
        <div style={centerStyle} >
            <div className='container' style={formStyle}>
                <h3> Add a Todo </h3>
                <form onSubmit={submit}>
                    <div className="mb-3 my-7">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="emailHelp"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="desc"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
