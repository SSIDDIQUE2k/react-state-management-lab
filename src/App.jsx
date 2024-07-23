import {useEffect, useState} from "react";
import './App.css';


const zombieFightersArray = [
  { 
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];



const App = ()=> {

//   
const [team, setTeam] = useState([]); 
const [money,setMoney]= useState(100);
const [zombieFighters, setZombieFighters] = useState(zombieFightersArray);
const [totalStrength, setTotalStrength]=useState(0)
const [ totalAgility, setAgility] =  useState(0);


const addToStrength = (fighter) => {

  const  initialValue = 0;
  const sumWithInitial = team.reduce((accumlator, currentValue) =>  {
    console.log(currentValue.strength)
    accumlator + currentValue,  initialValue 
  } );

setTotalStrength(sumWithInitial) 
}


// agulity
const addToAgility = () => {
    let  agulity = 0;
    team.map((fighter) => {
      agulity += fighter.agility
    })
    setAgility(agulity)
}

useEffect(() => {
  addToAgility()
}, [team])



const  handleAddFighter = (zombieFighter)=> {
  if(money < zombieFighter.price)
  {
  }else{
    const teamArray =  [...team];
    teamArray.push(zombieFighter);
    setTeam(teamArray);

    addToStrength (zombieFighter);
    addToAgility (zombieFighter);

// add to total strength // 



const newTotal = money -zombieFighter.price
setMoney(newTotal)

  }
}

return  (
  <>
 <h1>Hello world!</h1>



 <h2> Money : {money}</h2>
<ul>
{ zombieFighters.map((zombieFighter, idx) => (
<div key={idx}>
<h3>Name: { zombieFighter.name }</h3>
<li>Price: { zombieFighter.price }</li>
<li>Strength: { zombieFighter.strength }</li>
<li>Agility: { zombieFighter.agility }</li>
<img src={ zombieFighter.img } />
<button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
</div>
))}
</ul>
<h2>Team:  </h2>
<h3> Total Strength: {totalStrength}</h3>
<h3> Total Agility: {totalAgility}</h3>
{ team.length === 0 ? <p> Pick some member!</p> 

: <ul>

{team.map((zombieFighter, idx) => (
  <div key={idx}>
  <h3>Name: { zombieFighters[idx].name }</h3>
  <li>Price: { zombieFighters[idx].price }</li>
  <li>Strength: { zombieFighters[idx].strength }</li>
  <li>Agility: { zombieFighters[idx].agility }</li>
  <img src={ zombieFighters[idx].img } />
  <button onClick={() => handleAddFighter(zombieFighters[idx])}>Add</button>
  </div>
  ))}
  </ul>
}
</>
)
}




   
  
export default App;