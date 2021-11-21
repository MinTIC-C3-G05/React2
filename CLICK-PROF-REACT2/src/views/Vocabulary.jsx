import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/vocabulary.css"
import { useAuth0 } from '@auth0/auth0-react'
import LoginPage from "../components/LoginPage"

function Vocabulary() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const [englishWord, setenglishWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [palabrasAntes, setPalabrasAntes] = useState([])
    const [actualizar, setActualizar] = useState(0)
    const [ocultarDefinition, setOcultarDefinition] = useState("show")
    const [palabras, setPalabras] = useState([])





    // GET PALABRAS BASE DE DATOS

    useEffect(() => {
        
       
        // if (isAuthenticated) {
            axios.get("/vocabulary").then((response) => {
                
                setPalabras(response.data)
               
                // response.data.map(registro => {
                //     if (registro.email === user.email) {
                //         palabras.push(registro)
                //     }
                // })


            })

        // }
        
       
    }, [actualizar]);
    //    FIN GET 

   
   
    


    // POST NUEVO PAR DE PALABRAS
    const captureEnglishword = (e) => {
        setenglishWord(e.target.value);
        console.log(e.target.value)
    };
    const captureDefinition = (e) => {
        setDefinition(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();


        const newPair = {
            englishWord: englishWord,
            definition: definition,
            email: user.email
        };

        if (newPair.englishWord === "" || newPair.definition === "") {
            alert("todos los campos son obligatorios");

            return;
        }

        axios
            .post("/vocabulary", newPair)
            .then((response) => palabras.push(response.data))
            .then(alert("Created successfully"))
            .then(setActualizar(actualizar + 1));
    };
    // FIN DE POST NUEVO PAR DE PALABRAS




    // DELETE PALABRAS
    const deletePalabra = (id) => {
        console.log(id);
        axios.delete("/vocabulary/" + id).then(alert("It was deleted successfully!")).then(setActualizar(actualizar + 1));
    };


    // ACTUALIZAR PALABRAS
    const updatePalabras = (id, text) => {

        console.log(id, text)
        let cambioEnglishWord = prompt("Edit your English Word")
        let cambioDefinition = prompt("Edit your Defition")
        console.log(cambioEnglishWord + cambioDefinition)
        const data = { englishWord: cambioEnglishWord, definition: cambioDefinition }
        axios.put("/vocabulary/" + id, data).then(alert("The word: '" + text + "' has been updated"));
        // setTimeout(() => console.log(alert("time out")), 5000);
        setActualizar(actualizar + 1)


    }


    //   ESCONDER Y MOSTRAR DEFINITIONS
    const hideDefinitions = () => {
        setOcultarDefinition("ocultarDefinition")
    }
    const showDefinitions = () => {
        setOcultarDefinition("show")
    }




    // RENDER TABLE WITH DATA
    const renderPalabras = (palabra, index) => {
        
        if(palabra.email === user.email){
            
        return(
            <tr key={palabra._id}>
                <td>{index}</td>
                <td>{palabra.englishWord}</td>
                <td className={ocultarDefinition}>{palabra.definition}</td>
                <td><button className="btn btn-warning" onClick={() => updatePalabras(palabra._id, palabra.englishWord)}>EDIT</button></td>
                <td><button className="btn btn-danger" onClick={() => deletePalabra(palabra._id)}>Delete</button></td>
            </tr>
            
        )

        
    }

    }




    // *****************************************************************************************************


    // RETURN
    if (isAuthenticated) {

        return (
            <React.Fragment>
                <div>
                    <h4 className="text-muted">WELCOME {user.name}</h4>
                    <h4 className="text-muted"> {user.email}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h1 className="display-1">VOCABULARY LIST</h1>
                </div>
                <div className=" d-flex justify-content-center " style={{ backgroundColor: "gray", borderRadius: "19px", textAlign: "center", fontSize: "30px" }}>
                    <form onSubmit={handleSubmit} className="form  ">
                        <label className="form-label">NEW ENGLISH WORD</label>
                        <input
                            className="form-control  "
                            type="text"
                            name="englishWord"
                            placeholder="Write your new English word"
                            onChange={captureEnglishword}
                        />
                        <label className="form-label ">Definition</label>
                        <input
                            className="form-control "
                            type="text"
                            name="definition"
                            placeholder="Write your definition"
                            onChange={captureDefinition}
                        />
                        <div style={{ display: "block", padding: "15px", width: "100%" }} >
                            <button className="btn btn-success" style={{ display: "block", padding: "15px", width: "100%" }} >create new pair</button>
                        </div>

                    </form>

                </div>

                <div style={{ textAlign: "center" }}>
                    <h1 className="display-3" className="text-muted">YOUR VOCABULARY</h1>
                </div>




                {/* table */}
                <table className="table table-striped" style={{ textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>NUMBER</th>
                            <th>ENGLISH WORD</th>
                            <th>DEFINTION</th>
                            <th><button className="btn btn-primary" onClick={hideDefinitions} >Hide definitions</button></th>
                            <th><button className="btn btn-primary" onClick={showDefinitions}>Show definitions</button></th>

                        </tr>
                    </thead>
                    <tbody>
                        {palabras.map(renderPalabras)}
                    </tbody>
                </table>
            </React.Fragment>

        );
    }
    return (
        <React.Fragment>
            <br/>
            <h4 class="font-family">PLEASE LOG IN</h4>
            <LoginPage />
        </React.Fragment>
    )
}

export default Vocabulary;
