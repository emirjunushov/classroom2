import React, { useState } from "react";

const Salary = (props) => {
  return (
    <div>
      <h2>ТАБЛИЦА</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Days</th>
            <th>Salaryperday</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {props.salary.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>
                  <input value={item.days} type="text" />
                </td>
                <td>
                  <input value={item.salaryPerDay} type="text" />
                </td>
                <td>{item.days * item.salaryPerDay}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
