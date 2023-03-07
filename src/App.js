import React, { useState } from "react";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import ParagraphList from "./components/ParagraphList";
import Salary from "./components/Salary";

const App = () => {
  // counter start
  const [counter, setCount] = useState(0);
  function increment() {
    setCount(counter - 1);
  }
  function decrement() {
    setCount(counter + 1);
  }
  // counter end
  const [paragraph, setParagraph] = useState([]);

  function handleParagraph(newObj) {
    let newparagraph = [...paragraph];

    newparagraph.push(newObj);

    setParagraph(newparagraph);
  }

  // task3

  const [salary, setSalary] = useState([
    { id: 1, name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { id: 2, name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { id: 3, name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { id: 4, name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { id: 5, name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { id: 6, name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { id: 7, name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { id: 8, name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { id: 9, name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { id: 10, name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },

    { id: 11, name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ]);

  return (
    <div>
      <Counter increment={increment} decrement={decrement} counter={counter} />
      <Paragraph handleParagraph={handleParagraph} />
      <ParagraphList paragraph={paragraph} />
      <Salary salary={salary} setParagraph={setParagraph} />
    </div>
  );
};

export default App;
