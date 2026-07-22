import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "KL Rahul", score: 45 },
        { name: "Shubman Gill", score: 76 },
        { name: "Hardik Pandya", score: 68 },
        { name: "Ravindra Jadeja", score: 81 },
        { name: "Rishabh Pant", score: 59 },
        { name: "Suryakumar Yadav", score: 92 },
        { name: "Shreyas Iyer", score: 64 },
        { name: "Kuldeep Yadav", score: 72 },
        { name: "Jasprit Bumrah", score: 55 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <hr />

            <h2>Players with Score Below 70</h2>

            {lowScorePlayers.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

        </div>
    );
}

export default ListofPlayers;