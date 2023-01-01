import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {ContextR} from "../App";

function HomePage(props) {
  const {inputs, setInputs, eventArray, setEventArray} = useContext(ContextR);
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function onSubmit(data) {
    setInputs(data);
    setEventArray([...eventArray, data]);
    reset();
    console.log(eventArray);
  }

  function resetLists(){
    setInputs({});
    setEventArray([]);
    }

  return (
    <div>
      <button onClick={resetLists}> clear list </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={"text"} {...register("name", {required: true})} />
        {errors.name && <p> name is required</p>}

        <input type={"text"} {...register("description", {required: true})} />
        {errors.description && <p> description is required</p>}

        <input type={"date"} {...register("startDate", {required: true})} />
        {errors.startDate && <p> startDate is required</p>}

        <input type={"date"} {...register("endDate", {required: true})} />
        {errors.endDate && <p> endDate is required</p>}

        <input defaultValue={"#ffffff"} type={"color"} {...register("colorOfEvent")} />
        <input type={"submit"} />
        <NavLink to={"/EventList"}>
          {" "}
          <button> to event list </button>
        </NavLink>
      </form>

      {inputs && (
        <ul>
          {" "}
          {Object.keys(inputs).map((key, index) => (
            <li key={index}>
              {" "}
              {key}: {"  "} {inputs[key]}{" "}
            </li>
          ))}{" "}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
