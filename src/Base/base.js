import "../App.css";
import React from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Base({ title, description, children }) {
    const history = useHistory();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-secondary ">
                <div class="container">
                    <h1 class="navbar-brand text-light shadow nav justify-content-start  w-50">
                        STUDENTS DATABASE
                    </h1>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#myNavBar"
                        aria-controls="myNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="myNavBar">
                        <ul class="navbar-nav ml-auto nav text-center justify-content-around w-100">
                            <hr className="border" />
                            <li class="nav-item active">
                                <a class="nav-link text-light" onClick={() => history.push("/")}>
                                    DashBoard
                                </a>
                            </li>
                            <hr className="border" />
                            <li class="nav-item ">
                                <a
                                    class="nav-link text-light"
                                    onClick={() => history.push("/students")}
                                >
                                    Students-List
                                </a>
                            </li>
                            <hr className="border" />
                            <li class="nav-item">
                                <a class="nav-link text-light" onClick={() => { history.push("/add"); }}>Add-Students</a>
                            </li>
                            <br />
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="main-component d-flex flex-column align-items-center">
                <header>
                    <h1 className="heading text-success text-center m-3">{title}</h1>
                </header>
                <main className="main-segment m-3 text-center">
                    <h2>{description}</h2>
                    <div>{children}</div>
                </main>
            </div>
        </>
    );
}
