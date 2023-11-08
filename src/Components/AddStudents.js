import React, { useState } from "react";
import Base from "../Base/base";
import { useHistory } from "react-router-dom";

export default function AddStudents({ students, setStudents }) {
    const history = useHistory();
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [gender, setGender] = useState("");
    const [qualification, setQualification] = useState("");
    const createStudent = async () => {
        //creating object from input states
        const newStudents = {
            name: name,
            batch: batch,
            gender: gender,
            qualification: qualification,
        };
        const response = await fetch(
            "https://6543697301b5e279de20509f.mockapi.io/student-teacher-lists",
            {
                method: "POST",
                body: JSON.stringify(newStudents),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        setStudents([...students, data]);
        history.push("/students");
    };

    return (
        <Base
            title={"Add new student"}
            description={"You can add new student data here"}
        >
            <div className="m-3 pt-5 pb-3 bg-secondary border border-3 shadow rounded d-flex flex-column align-items-center justify-content-start">
                <div className=" form-floating mb-3 ">
                    <input
                        id="floatingInput"
                        className=" form-control shadow"
                        placeholder="Enter Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="floatingInput" className="text-muted">
                        Enter Name
                    </label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        id="floatingInput"
                        className="form-control shadow"
                        placeholder="Enter Batch"
                        type="text"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                    <label for="floatingInput" className="text-muted">
                        Enter Batch
                    </label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        id="floatingInput"
                        className="form-control shadow"
                        placeholder="Enter Gender"
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label for="floatingInput" className="text-muted">
                        Enter Gender
                    </label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        id="floatingInput"
                        className="form-control shadow"
                        placeholder="Enter Qualification"
                        type="text"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                    />
                    <label for="floatingInput" className="text-muted">
                        Enter Qualification
                    </label>
                </div>
                <button className="btn btn-success shadow" onClick={createStudent}>
                    Add Student
                </button>
            </div>
        </Base>
    );
}
