import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./routes/axios";
import "./Cards.css";

function Cards() {
  const [people, setpeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards")
      setpeople(req.data)
      console.log(req.data)
    }
    fetchData()
  }, []);
console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete);
  };
  const putOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className="tindercards">
      <div className="tindercards__container">
        {people.data?.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => putOfFrame(person.name)}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.imgUrl})` }}
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
