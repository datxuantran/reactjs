import React from "react";

const Main = () => {
  const handleNameChange = () => {
    const names = ["Dat", "Anh Minh", "Hung Cho"];
    const index = Math.floor(Math.random() * 3);
    return names[index];
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Main;
