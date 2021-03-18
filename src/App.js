import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
    const [berry,setBerry] =React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);



    const { handleSubmit, register } = useForm();


    function reset() {
        setBerry(0);
        setBanana(0);
        setApples(0);
        setKiwi(0);
    }

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
    <>
       <h1>Fruitmand bezorgservice</h1>

        <fieldset>
            <h2>🍓 Aardbeien</h2>
            <button
                type="button"
                onClick={() => setBerry(berry -1)}
            >
                -
            </button>
            <p>{berry}</p>
            <button
                type="button"
                onClick={() => setBerry(berry +1)}
            >
                +
            </button>
        </fieldset>

        <fieldset>
            <h2>🍌 Bananen</h2>
            <button
                type="button"
                onClick={() => setBanana(banana -1)}
            >
                -
            </button>
            <p>{banana}</p>
            <button
                type="button"
                onClick={() => setBanana(banana +1)}
            >
                +
            </button>
        </fieldset>

        <fieldset>
            <h2>🍏 Appels</h2>
            <button
                type="button"
                onClick={() => setApples(apples -1)}
            >
                -
            </button>
            <p>{apples}</p>
            <button
                type="button"
                onClick={() => setApples(apples +1)}
            >
                +
            </button>
        </fieldset>

        <fieldset>
            <h2>🥝 Kiwi's</h2>
            <button
                type="button"
                onClick={() => setKiwi(kiwi -1)}
            >
                -
            </button>
            <p>{kiwi}</p>
            <button
                type="button"
                onClick={() => setKiwi(kiwi +1)}
            >
                +
            </button>
        </fieldset>

        <button
            id="reset-button"
            onClick={() => reset()}
        >
            RESET
        </button>


        <div id="form">
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="firstName">
            Voornaam
            <input
                type="text"
                name="voornaam"
                id="firsName"
                ref={register}
                />
            </label>

            <label htmlFor="lastName">
              Achternaam
              <input
              type="text"
              name="achternaam"
              id="lastName"
              ref={register}
              />
            </label>

            <label htmlFor="age">
               Leeftijd
               <input
               type="number"
               name="leeftijd"
               id="age"
               ref={register}
               />
            </label>

             <label htmlFor="postalCode">
              Postcode
              <input
              type="number and text"
              name="postcode"
              id="postalCode"
              ref={register}
              />
             </label>

              <label htmlFor="houseNumber">
                  Huisnummer zonder toevoeging
                  <input
                      type="number"
                      name="postcode"
                      id="houseNumber"
                      ref={register}
                  />
              </label>


              <label htmlFor="frequency">
                  <input type="radio" value="weekly" name="frequency" id="weekly" ref={register}/>Iedere week
              </label>
              <label htmlFor="frequency">
                  <input type="radio" value="bi-weekly" name="frequency" id="bi-weekly" ref={register}/>Om de week
              </label>
              <label htmlFor="frequency">
                  <input type="radio" value="monthly" name="frequency" id="monthly" ref={register}/>Iedere maand
              </label>
              <label htmlFor="frequency">
                  <input type="radio" value="different" name="frequency" id="different" ref={register}/>Anders
              </label>


          </form>
        </div>




    </>
  );
}


export default App;
