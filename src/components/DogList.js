import React from "react";
import { Link } from "react-router-dom";

export default function DogList(props) {
  const dogslist = props.dogs.map(dog => (
    <Link to={`/dogs/${dog.src}`} key={dog.name}>
      <div className="DogItem mb-10 cursor-pointer">
        <img
          src={require(`./../img/${dog.src}.jpg`)}
          alt={dog.name}
          title={dog.name}
          className="h-40 w-40 rounded-full border-2 border-white shadow-xl"
        />
        <p className="mt-4 text-gray-600 text-xl">{dog.name}</p>
      </div>
    </Link>
  ));

  return (
    <div className="container mx-auto text-center h-screen">
      <h2 className="text-4xl font-thin mb-8">Click a Dog!</h2>
      <div className="flex flex-col items-center md:flex-row lg:flex-row md:justify-around lg:justify-around">
        {dogslist}
      </div>
    </div>
  );
}
