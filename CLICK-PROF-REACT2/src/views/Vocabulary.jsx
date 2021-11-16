import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/vocabulary.css"
import {useAuth0} from '@auth0/auth0-react'
import LoginPage from "../components/LoginPage"

function Vocabulary() {
    const {user, isAuthenticated, isLoading} = useAuth0()
    const [englishWord, setenglishWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [palabras, setPalabras] = useState([])
    const [actualizar, setActualizar] = useState(0)
    const [ocultarDefinition, setOcultarDefinition] = useState("show")
   

       // GET PALABRAS BASE DE DATOS
    
   useEffect(() => {
      

       
            axios.get("/vocabulary").then((response) => {
    
    
                response.data.map(registro=>{
                    if(registro.email === user.email){
                        
                        console.log(registro)
                        palabras.push(registro)
                    }else{
                        return
                    }
                })
            });
    

    
}, [actualizar]);
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
            //   .then((response) => this.setState({ newPair: response.data }))
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
        return (
            <tr key={palabra._id}>
                <td>{index + 1}</td>
                <td>{palabra.englishWord}</td>
                <td className={ocultarDefinition}>{palabra.definition}</td>
                <td><button className="btn btn-warning" onClick={() => updatePalabras(palabra._id, palabra.englishWord)}>EDIT</button></td>
                <td><button className="btn btn-danger" onClick={() => deletePalabra(palabra._id)}>Delete</button></td>
            </tr>
        )
    }




    

    // RETURN
    if (isAuthenticated){
    return (
        <React.Fragment>
            <div>WELCOME {user.name}</div>
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
return(
    <React.Fragment>
    <h1>PLEASE LOG IN</h1>
    <LoginPage/>
    </React.Fragment>
)
}

export default Vocabulary;
