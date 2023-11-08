import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/base';
import { useHistory } from 'react-router-dom';

export default function UpdateStudents({ students, setStudents }) {
    const { id } = useParams();
    const editStudent = students[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory();

    useEffect(() => {
        setName(editStudent.name)
        setBatch(editStudent.batch)
        setGender(editStudent.gender)
        setQualification(editStudent.qualification)
    }, [editStudent])

    async function updateStudent() {
        const updatedObject = {
            name: name,
            batch: batch,
            gender: gender,
            qualification: qualification,
            id: id
        }
        const response = await fetch(`https://6543697301b5e279de20509f.mockapi.io/student-teacher-lists/${editStudent.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedObject),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        if (data) {
            students[id] = updatedObject
            setStudents([...students])
            history.push("/students")
        }
    }

    return (
        <Base
            title={"update student"}
            description={"You can update student data here"}
        >
            <div className='d-flex flex-column align-items-center'>
                <input
                    className="form-control shadow m-3"
                    placeholder='Enter Name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="form-control shadow m-3"
                    placeholder='Enter Batch'
                    type='text'
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                />
                <input
                    className="form-control shadow m-3"
                    placeholder='Enter Gender'
                    type='text'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <input
                    className="form-control shadow m-3"
                    placeholder='Enter Qualification'
                    type='text'
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                />
                <button
                    className='btn btn-warning m-3 shadow'
                    onClick={updateStudent}
                >
                    Update Student
                </button>
            </div>
        </Base>
    )
}
