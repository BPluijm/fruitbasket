import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
    const [berry,setBerry] =React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);



    const { handleSubmit, register, watch, errors } = useForm();

    const watchDifferent = watch("frequency");


    function reset() {
        setBerry(0);
        setBanana(0);
        setApples(0);
        setKiwi(0);
    }


    function onFormSubmit(data) {
        console.log(data);
        console.log(berry)
    }

    return (
    <>
     <div id="products">
       <h1>Fruitmand bezorgservice</h1>

        <article>
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
        </article>

        <article>
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
        </article>

        <article>
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
        </article>

        <article>
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
        </article>

        <button
            id="reset-button"
            onClick={() => reset()}
        >
            RESET
        </button>
     </div>

        <div id="formContainer">
          <form onSubmit={handleSubmit(onFormSubmit)}>
          <div id="personal">
            <label htmlFor="firstName">
            Voornaam
            <input
                type="text"
                name="voornaam"
                id="firstName"
                ref={register({ required: true })}
            />
            </label>

            <label htmlFor="lastName">
              Achternaam
              <input type="text"
                     name="achternaam"
                     id="lastName"
                     ref={register({ required: true })}
              />
            </label>

            <label htmlFor="age">
               Leeftijd
               <input type="number"
                      name="leeftijd"
                      id="age"
                      ref={register({ required: true })}
               />
            </label>

             <label htmlFor="postalCode">
              Postcode
              <input type="number and text"
                     name="postcode"
                     id="postalCode"
                     ref={register({ required: true })}
              />
             </label>

              <label htmlFor="houseNumber">
                  Huisnummer zonder toevoeging
                  <input type="number"
                         name="huisnummer"
                         id="houseNumber"
                         ref={register({ required: true })}
                  />
              </label>
          </div>
            <div id="delivery">
                <p>Bezorgfrequentie</p>
              <label htmlFor="frequency">
                  <input type="radio"
                         value="weekly"
                         name="frequency"
                         id="weekly"
                         ref={register}
                  />
                  Iedere week
              </label>

              <label htmlFor="frequency">
                  <input type="radio"
                         value="bi-weekly"
                         name="frequency"
                         id="bi-weekly"
                         ref={register}
                  />
                  Om de week
              </label>

              <label htmlFor="frequency">
                  <input type="radio"
                         value="monthly"
                         name="frequency"
                         id="monthly"
                         ref={register}
                  />
                  Iedere maand
              </label>

              <label htmlFor="frequency">
                  <input type="radio"
                         value="different"
                         name="frequency"
                         id="different"
                         ref={register}
                  />
                  Anders
              </label>
              {watchDifferent === "different" && <textarea type="textarea" name="tekstveld" ref={register} />}
            </div>

              <label htmlFor="comments">
                  Opmerking:
                  <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      cols="40"
                      ref={register(
                          {
                                  maxLength: {
                                  value: 75,
                                  message: 'Er mogen maximaal 75 karakters gebruikt worden',
                              },
                          }
                      )}
                  >
                  </textarea>
                  {errors.comments && <p>{errors.ref.message}</p>}
              </label>

             <div id="checkbox">
              <input type="checkbox"
                     id="conditions"
                     name="conditions"
                     ref={register ({required: true})}
              />
              <label htmlFor="checkbox">Ik ga akkoord met de algemene voorwaarden</label>
                 {errors.conditions && <p id="error">Please agree with our terms and conditions</p>}
             </div>

              <button type="submit">
                  Verzend
              </button>

          </form>
        </div>
    </>
  );
}


export default App;
