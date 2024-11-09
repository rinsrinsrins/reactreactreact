import './App.css';
import {useState} from 'react';

const user = {
  name: 'Clarence Prades',
  age: 22,
  hobby: "exploring new things"
};

const likes = [
  { title: 'Play Roblox', isFav: false, id: 1 },
  { title: 'Sleep', isFav: false, id: 2 },
  { title: 'Work', isFav: false, id: 3 },
  { title: 'Code Code Code', isFav: true, id: 4 },
];


export default function HelloWorld() {
  const { name, age, hobby } = user;
  const isClose = true;
  const textContent = isClose ? "Hello!" : "Hi!";

  const listLikes = likes.map(like => (
    <li key={like.id} className={like.isFav ? 'fav' : 'regular'}>
      {like.title}
    </li>
  ));

function handleClick() {
    alert('Why you clicked me?');
}

const [count, setCount] = useState(0);


function addCount(){
  setCount(count + 1);
}

function subCount(){
  setCount(count - 1);
}

function CountMeAdd(){
  return(
    <button onClick={addCount}>
    Incremented by {count} times.
    </button>
  );     
}

function CountMeSub(){
  return(
    <button onClick={subCount}>
    Decremented by {count} times.
    </button>
  );     
}


  return (
    <>
      <h1>Hello, {name}.</h1>
      <p>I know you are {age} years old.</p>
      <p>Your hobby is {hobby}.</p>
      <p>{textContent}</p>
      <h2>Your likes:</h2>
      <ul>{listLikes}</ul>
      <button onClick={handleClick}>
      Click me!
      </button>
      <CountMeAdd />
      <CountMeAdd />
      <CountMeSub />
    </>
  );
}
