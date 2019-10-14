import React from "react";

export default function Dog(props) {
  const { dog } = props;

  const facts = dog.facts.map((fact, index) => {
    return (
      <li key={index} className="border-t py-2">
        <span className="text-blue-800 mr-2">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
        </span>
        {fact}
      </li>
    );
  });

  return (
    <div className="px-2 my-4 h-screen">
      <div className="max-w-sm mx-auto shadow-md rounded bg-white">
        <img
          src={require(`./../img/${dog.src}.jpg`)}
          alt={dog.name}
          title={dog.name}
          className="h-full w-full"
        />
        <div className="px-2 mt-2">
          <h2 className="text-xl font-semibold">{dog.name}</h2>
          <p className="text-gray-600 text-sm mb-6">{`${dog.age} years old`}</p>
          <ul className="border-b">{facts}</ul>
        </div>
        <button
          className="px-2 py-1 bg-blue-800 text-white ml-2 my-4"
          onClick={props.history.goBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
