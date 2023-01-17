import React, { useState } from "react";
import { data } from "../../../data";

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(data.length);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    setValue(value - 1);
  };

  const removePeople = () => {
    setPeople([]);
    setValue(0);
  };

  return (
    <>
      <h2>{value} birthdays today</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => removePeople()}>
        Clear All
      </button>
    </>
  );
};

export default BirthdayReminder;
