import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutorials, deleteTutorial, editTutorial }) => {
  const [editItem, setEditItem] = useState("")
  console.log({ tutorials });

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-nowrap">
                  <FaEdit
                    size={20}
                    className="text-warning me-3 cursor-pointer"
                    onClick={() => setEditItem(item)}
                    data-bs-toggle="modal" 
                    data-bs-target="#edit-modal"
                  />
                  <FaTrashAlt
                    size={18}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editTutorial={editTutorial} editItem={editItem}/>
    </div>
  );
};

export default TutorialList;
