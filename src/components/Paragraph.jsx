import React, { useState } from "react";

const Paragraph = (props) => {
  console.log(props);
  const [list, setList] = useState("");

  const handleInput = (e) => {
    setList(e.target.value);
  };

  const handleAdd = () => {
    if (!list) {
      alert("input is empty");
      return;
    }

    const newaTask = {
      task: list,

      id: Date.now(),
    };

    props.handleParagraph(newaTask);

    setList("");
  };
  return (
    <div>
      <input onChange={handleInput} type="text" value={list} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default Paragraph;
