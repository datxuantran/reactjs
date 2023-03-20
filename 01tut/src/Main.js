import React from "react";

const Main = () => {
  const handleNameChange = () => {
    const names = ["Dat", "Anh Minh", "Hung Cho"];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  };

  const handleClick = ()=>{
    console.log("You clicked it")
  }

  const handleClickParams = (name)=>{
    console.log(`${name} was clicked`)
  }
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClickParams("Dat")}>Click it</button>
    </main>
  );
};

export default Main;
