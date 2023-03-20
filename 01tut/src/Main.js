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

  const handleEvent = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.innerText)
  }
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClickParams("Dat")}>Click it</button>
      <button onClick={handleEvent}>Event</button>
    </main>
  );
};

export default Main;
