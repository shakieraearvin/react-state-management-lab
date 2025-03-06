import { useState } from 'react';
import './App.css';

const App = () => {

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(50);

  // Calculate Total Strength and Agility
  const totalStrength = team.reduce((total, fighter) => total + (fighter.strength || 0), 0);
  const totalAgility = team.reduce((total, fighter) => total + (fighter.agility || 0), 0);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
      setMoney(money - fighter.price);
    } else {
      console.log("Not enough money to add this fighter.");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  return (
    <div className="container">
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>

      
      <h3>Total Strength: {totalStrength}</h3>
      <h3>Total Agility: {totalAgility}</h3>

      {/* Your Team */}
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="team-list">
          {team.map((fighter) => (
            <li key={fighter.id} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} className="fighter-img" />
              <h3>{fighter.name}</h3>
              <p><strong>Price:</strong> ${fighter.price}</p>
              <p><strong>Strength:</strong> {fighter.strength}</p>
              <p><strong>Agility:</strong> {fighter.agility}</p>
              <button className="remove-btn" onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Available Fighters */}
      <h2>Available Fighters</h2>
      {zombieFighters.length === 0 ? <p>No available fighters</p> : (
        <ul className="fighters-list">
          {zombieFighters.map((fighter) => (
            <li key={fighter.id} className="fighter-card">
              <img src={fighter.img} alt={fighter.name} className="fighter-img" />
              <h3>{fighter.name}</h3>
              <p><strong>Price:</strong> ${fighter.price}</p>
              <p><strong>Strength:</strong> {fighter.strength}</p>
              <p><strong>Agility:</strong> {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;