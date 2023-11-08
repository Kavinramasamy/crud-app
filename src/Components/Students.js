import React, { useState } from "react";
import Base from "../Base/base";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Students({ students, setStudents }) {
    const history = useHistory();

    //delete functionality
    const deleteStudent = async (studId) => {
        const response = await fetch(
            `https://6543697301b5e279de20509f.mockapi.io/student-teacher-lists/${studId}`,
            {
                method: "DELETE",
            }
        );
        const data = await response.json();
        if (data) {
            const remainingStudents = students.filter(
                (stud, idx) => stud.id !== studId
            );
            setStudents(remainingStudents);
        }

    };
    const searchFilter = (filterKey) => {
        var boxes = document.getElementsByClassName("student-data-card");
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            if ((box.id).includes(filterKey)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
    };
    return (
        <Base
            title={"Students DashBoard"}
            description={"This page contains all students data"}
        >
            <input className="form-control" placeholder="Search..." type="text" onChange={(e) => searchFilter(e.target.value)} />
            <div className="container">
                <div className="row d-flex justify-content-around" id="row">
                    {students.map((stud, idx) => (
                        <div
                            className="card-body student-data-card col-sm-6 col-md-4 col-lg-3 border border-secondary shadow rounded m-3 p-3 h-100"
                            id={(stud.name + "-" + stud.batch + "-" + stud.gender + "-" + stud.qualification).toLowerCase()}
                            key={idx}
                        >
                            <div className="content ">
                                <h3>{stud.name}</h3>
                                <p>
                                    <span className="text-muted">Batch - </span>
                                    {stud.batch}
                                </p>
                                <p>
                                    <span className="text-muted">Gender - </span>
                                    {stud.gender}
                                </p>
                                <p>
                                    <span className="text-muted">Qualification - </span>
                                    {stud.qualification}
                                </p>
                            </div>
                            <data className="controls">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => history.push(`/edit/${stud.id}`)}
                                >
                                    Edit
                                </button>{" "}
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteStudent(stud.id)}
                                >
                                    Delete
                                </button>
                            </data>
                        </div>
                    ))}
                </div>
            </div>
        </Base>
    );
}
