import { useState } from "react";

const AddTutorial = ({addTutorial}) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial({title:title,description:desc})
  };
  return (
    <div className="container tex-center mt-5">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Your Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter Your Description"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
