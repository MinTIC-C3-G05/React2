import React, { useState, useEffect } from "react";
import axios from "axios";

function Vocabulary() {
    const [englishWord, setenglishWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [palabras, setPalabras] = useState([])
    const newPair = {
        englishWord: englishWord,
        definition: definition,
    };


    // GET PALABRAS BASE DE DATOS
    useEffect(() => {
        axios.get("/vocabulary").then((response) => {
            setPalabras(response.data);
        });
    }, []);
    //    FIN GET 



    // POST NUEVO PAR DE PALABRAS
    const captureEnglishword = (e) => {
        setenglishWord(e.target.value);
    };
    const captureDefinition = (e) => {
        setDefinition(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newPair);

        if (newPair.englishWord === "" || newPair.definition === "") {
            alert("todos los campos son obligatorios");

            return;
        }

        axios
            .post("/vocabulary", newPair)
            //   .then((response) => this.setState({ newPair: response.data }))
            .then(alert(JSON.stringify(newPair)));
    };
    // FIN DE NUEVO PAR DE PALABRAS






    // RENDER TABLE WITH DATA
    const renderPalabras = (palabra, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{palabra.englishWord}</td>
                <td>{palabra.definition}</td>
                <td>EDIT</td>
                <td>Delete</td>
            </tr>
        )
    }

    return (
        <React.Fragment>
            <div>
                <h1>VOCABULARY LIST</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="form">
                    <label class="form-label">NEW ENGLISH WORD</label>
                    <input
                        className="form-control"
                        type="text"
                        name="englishWord"
                        placeholder="Write your new English word"
                        onChange={captureEnglishword}
                    />
                    <label class="form-label">Definition</label>
                    <input
                        className="form-control"
                        type="text"
                        name="definition"
                        placeholder="Write your definition"
                        onChange={captureDefinition}
                    />
                    <button className="btn btn-success">create new pair</button>
                </form>
            </div>

            <div>
                <h1>YOUR VOCABULARY</h1>
            </div>

          


            {/* table */}
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>NUMBER</th>
                        <th>ENGLISH WORD</th>
                        <th>DEFINTION</th>
                    </tr>
                </thead>
                <tbody>
                    {palabras.map(renderPalabras)}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Vocabulary;
