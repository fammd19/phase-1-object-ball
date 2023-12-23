function gameObject () {
    let obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                        number: 0,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 3,
                        blocks: 7,
                        slamDunks: 2,
                    },
                    "Reggie Evans": {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7,
                    },
                    "Brook Lopez": {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 15,
                    },
                    "Mason Plumlee": {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5,
                    },
                    "Jason Terry": {
                        number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slamDunks: 1,
                    },
                },
            },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Orange"],
            players: {
                "Jeff Adrien": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2,
                    },
                    "Bismak Biyombo": {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10,
                    },
                    "DeSanga Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 6,
                    },
                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0,
                    },
                    "Brendan Haywood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12,
                    },
                }
            }
        }
    return obj;
};

const game = gameObject ();

//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName) { 
    for (let team in game) {
        let players = game[team].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return;
}
      
console.log(numPointsScored("Brendan Haywood")); // Returns 6

//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player
function shoeSize(playerName) { 
    for (let team in game) {
        let players = game[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }
    return;
}
      
console.log(shoeSize("Alan Anderson")); // Returns 18

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors (team) {
    if (team === "Brooklyn Nets") {
        return game.home.colors;
    } else if (team === "Charlotte Hornets") {
        return game.away.colors;
    }
}

console.log(teamColors("Charlotte Hornets"));


//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames () {
    return [game.home.teamName,game.away.teamName];
}

console.log(teamNames());

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
    const playerNumbers = [];
    for (let team in game) {
      if (teamName === game[team]["teamName"]) {
        for (let player in game[team].players) {
          playerNumbers.push(game[team].players[player].number);
        }
      }
    }
    return playerNumbers;
  }
  console.log(playerNumbers("Brooklyn Nets")); 

//Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
function playerStats (playerName) {
    let playerStats = {}
    for (let team in game) {
        for (let player in game[team].players) {
            if (playerName === player) {
                playerStats = Object.assign(playerStats, game[team].players[playerName]);
            }
        }
    } return playerStats;
}

console.log(playerStats ("Ben Gordon"));

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size
let bigShoeRebounds = () => {
    const playerShoeSizes = [];
    let bigShoe;
    for (let team in game) {
        for (let player in game[team].players) {
            playerShoeSizes.push(game[team].players[player].shoe);
            bigShoe = Math.max(...playerShoeSizes);
        }
    }
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe === bigShoe) {
                return game[team].players[player].rebounds;
            } 
        }
    }        
}

console.log(bigShoeRebounds());