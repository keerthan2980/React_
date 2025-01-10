import React, { useEffect, useRef, useState } from "react";


const Gamesize = 15; // size of the game
const Gamegrids = Array.from({ length: Gamesize }, () =>
  // for creating the girds(divs)
  new Array(Gamesize).fill("")
);

const Initail_Snake = [[5, 5]];
const Generatefood = () => {
  const x = Math.floor(Math.random() * Gamesize); // we will get the co-ordinates less than gamesize
  const y = Math.floor(Math.random() * Gamesize);
  return [x, y];
};

// console.log(Gamegrids);
export default function SnakeGame() {
  const [snakeBody, setSnakeBody] = useState(Initail_Snake); // for snake body
  // score update
  const [score, setScore] = useState(0);

  // for snake direction
  const directionRef = useRef([1, 0]);

  // for food
  const foodRef = useRef(Generatefood());

  // for game over display
  const [isGameOver, setIsGameover] = useState(false);

  // for snake body present
  const isSnakeBodyDiv = (xy, yc) => {
    return snakeBody.some(([x, y]) => {
      return x === xy && y === yc;
    });
  };

  // Check if a cell is the snake's head
  const isSnakeHead = (xc, yc) => {
    return snakeBody[0][0] === xc && snakeBody[0][1] === yc;
  };

  // remove tail and add head
  useEffect(() => {
    // game over
    if (isGameOver) return;

    const intervalid = setInterval(() => {
      setSnakeBody((prevSnakeBody) => {
        const newHead = [
          prevSnakeBody[0][0] + directionRef.current[0],
          prevSnakeBody[0][1] + directionRef.current[1],
        ]; // head
        // Check if a cell is the snake's head

        // for restart
        if (
          newHead[0] < 0 ||
          newHead[0] >= Gamesize ||
          newHead[1] < 0 ||
          newHead[1] >= Gamesize ||
          prevSnakeBody.some(([x, y]) => {
            return newHead[0] === x && newHead[1] === y;
          })
        ) {
          setIsGameover(true);
          return prevSnakeBody;
        }

        const copySnakeBody = prevSnakeBody.map((arr) => [...arr]);
        // update the head when snake eate food
        if (
          newHead[0] === foodRef.current[0] &&
          newHead[1] === foodRef.current[1]
        ) {
          // when snake meet the food the food will genearte again
          foodRef.current = Generatefood();
          // update the score when food is eaten
          setScore((prevScore) => prevScore + 1);
        } else {
          copySnakeBody.pop();
        }

        copySnakeBody.unshift(newHead); // for moving the head(add the head continous)
        return copySnakeBody;
      });
    }, 500);
       
    // for handling the key events
    const handleDirection = (e) => {
      const key = e.key;
      // console.log(key);
      if (key === "ArrowUp" && directionRef.current[1] !== 1) {
        directionRef.current = [0, -1];
      } else if (key === "ArrowLeft" && directionRef.current[0] !== 1) {
        directionRef.current = [-1, 0];
      } else if (key === "ArrowRight" && directionRef.current[0] !== -1) {
        directionRef.current = [1, 0];
      } else if (key === "ArrowDown" && directionRef.current[1] !== -1) {
        directionRef.current = [0, 1];
      }
    };

    window.addEventListener("keydown", handleDirection);

    return () => {
      clearInterval(intervalid);
      window.removeEventListener("keydown", handleDirection);
    };
  }, [isGameOver]);

  const handleStartGame = () => {
    setSnakeBody(Initail_Snake);
    setScore(0);
    setIsGameover(false);
    directionRef.current = [1, 0];
    foodRef.current = Generatefood();
  };

  return (
    <>
      <h1> Welcome to the Snake Game </h1>

      <p>Score: {score}</p>

      {/* display when game is over */}
      {isGameOver && (
        <p className="game-over">Game Over! Press Start to Play Again.</p>
      )}

      <button onClick={handleStartGame} disabled={!isGameOver && score > 0}>
        {isGameOver ? "Restart Game" : "Start Game"}
      </button>

      <div className="gamecontainer">
        {Gamegrids.map((row, yc) => {
          return row.map((cell, xc) => {
            return (
              <div
                className={`cell ${isSnakeBodyDiv(xc, yc) ? "snake" : ""}
                   ${
                     // for food show in ui
                     foodRef.current[0] === xc && foodRef.current[1] === yc
                       ? "food"
                       : ""
                   }
                `}
              >
                {isSnakeHead(xc, yc) && <span className="snake-head">🐍</span>}
                {foodRef.current[0] === xc && foodRef.current[1] === yc && (
                  <span className="food-icon">🍎</span>
                )}
              </div>
            );
          });
        })}
      </div>
    </>
  );
}
