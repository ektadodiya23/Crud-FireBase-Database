import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  remove,
} from "firebase/database";
import { db } from "./FirebaseConfi";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

// fetch data
export default function Home() {
  const [TableData, setTableData] = useState({});

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [dltOpen, setDltopen] = useState(false);
  const [deleteKey, setDeleteKey] = useState(null);

  const [editData, seteditData] = useState(null);

  function fetchData() {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let result = snapshot.val();

      setTableData(result);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  // Delete Dialog Box Open
  const handelOpenDelDialog = (key) => {
    setDltopen(true);
    setDeleteKey(key);
  };

  // Edit
  const handleEdit = (row) => {
    setOpen(true);
    seteditData(row);
  };

  return (
    <div className="add-Form">
      <h2>Employee-List : </h2>
      <table className="table container AddBox mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(TableData).map((key, index) => {
            const row = { ...TableData[key] };
            return (
              <tr key={key}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.pass}</td>
                <td>{row.Number}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(row);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary ms-3"
                    onClick={() => handelOpenDelDialog(key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditDialog
        open={open}
        handleClose={() => setOpen(false)}
        value={editData}
      />
      <DeleteDialog
        open={dltOpen}
        handleClose={() => setDltopen(false)}
        value={deleteKey}
      />
    </div>
  );
}
