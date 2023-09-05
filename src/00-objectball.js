function gameObject(){
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe:16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe:14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe:17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe:19,
                    points: 26,
                    rebounds: 12,
                    assists: 6, 
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe:15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 0,
                    shoe:16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Bismak Biyombo": {
                    number: 30,
                    shoe:14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "DeSagna Diop": {
                    number: 11,
                    shoe:17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Ben Gordon": {
                    number: 1,
                    shoe:15,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Brendan Haywood": {
                    number: 31,
                    shoe:18,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        }
    }
    return game;
}
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());

function returnTeamObject(teamName) {
    let game = gameObject();
    const bothTeams = [];
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        if(teamObj.teamName === teamName){
            return teamObj;
        } else if (teamName === "Both"){
            bothTeams.push(teamObj);
        }
    }
    return bothTeams;
}

function returnPlayerStats(playerName) {
    let game = gameObject();
    for(let gameKey in game) {
        let teamObj = game[gameKey];
        let player = teamObj.players;
        for (let playerKey in player) {
            let playerObj = player[playerKey];
            if(playerKey === playerName){
                return playerObj;
            } 
        }
    }
    return 'I can\'t find that player';
}

function numPointsScored(playerName) {
    let playerObj = returnPlayerStats(playerName);
    return playerName + " scored " + playerObj.points + " points!";
}

function teamNames() {
    let bothTeams = returnTeamObject("Both");
    return bothTeams;
}

function shoeSize(playerName) {
    let playerObj = returnPlayerStats(playerName);
    return playerName + " has size " + playerObj.shoe + " shoes.";
}

function teamColors (teamName) {
    let teamObj = returnTeamObject(teamName);
    return `Team colors for ${teamName} are ` + teamObj.colors;
}

function collectPlayerStatsForGivenTeam(teamName, stat){
    const statArray = [];
    const allPlayers = returnTeamObject(teamName);
    let playerObj = allPlayers.players;
    for (let player in playerObj){
        let stats = playerObj[player];
        statArray.push(stats[stat]);
    }
    return statArray;
}

function bestPlayerForGivenStat(teamName, statName){
    let bestPlayerName = [];
    let currentBestStat = 0;
    const teamObj = returnTeamObject(teamName);

    for (i=0; i< teamObj.length; i++){
        let newTeamObj = teamObj[i];
        let playerObj = newTeamObj.players



        for (let player in playerObj){
            let playerStatObj = playerObj[player];
                for(let stat in playerStatObj){
                    if (stat === statName){
                        let playerStat = playerStatObj[stat];
                        if (playerStat === currentBestStat){
                            bestPlayerName.push(player);
                            currentBestStat = playerStat;
                        } else if (playerStat > currentBestStat){
                            bestPlayerName.splice(0,bestPlayerName.length);
                            bestPlayerName.push(player);
                            currentBestStat = playerStat;
                        }
                }
            }
        }
    }
    return bestPlayerName;
}
function bigShoeRebounds(){
    let biggestShoe = "";
    biggestShoe = bestPlayerForGivenStat("Both", "shoe");
    const playerStats = returnPlayerStats(biggestShoe[0]);
    return playerStats.rebounds;
}

/*console.log(returnPlayerStats("Brendan Haywood"))
console.log(collectPlayerStatsForGivenTeam("Charlotte Hornets", "number"));
console.log(teamNames());
console.log(teamColors("Charlotte Hornets"));
console.log(shoeSize("Brendan Haywood"));
console.log(numPointsScored("Alan Anderson"));
console.log(bigShoeRebounds());*/