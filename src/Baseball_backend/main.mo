import Debug "mo:base/Debug";
import List "mo:base/List";
import Text "mo:base/Text";

actor Baseball {
  Debug.print("Baseball Backend starting");

  public type Player = {
    jerseyNumber : Text;
    playerName : Text;
    batsLeftorRight : Text; // use L for left, R for right, S for switch
    throwsLeftorRight : Text; // use L for left, R for right
    usualPosition : Text;
  };

  public type Team = {
    name : Text;
    city : Text;
    league : Text; // American East, National Central, AAA International, etc
    level : Text; // MLB. AAA, AA, A, Little League, College, High School, etc.
  };

  stable var playerList : List.List<Player> = List.nil<Player>();
  stable var teamList : List.List<Team> = List.nil<Team>();

  public func savePlayer(playerName : Text, jerseyNumber : Text, batsLeftorRight : Text, throwsLeftorRight : Text, usualPosition : Text) {
    let newPlayer : Player = {
      playerName;
      jerseyNumber;
      batsLeftorRight;
      throwsLeftorRight;
      usualPosition;
    };

    playerList := List.push(newPlayer, playerList);
  };

  public func saveTeam(name : Text, city : Text, league : Text, level : Text) {
    let newTeam : Team = {
      name;
      city;
      league;
      level;
    };
    teamList := List.push(newTeam, teamList);
  };

  // public func loadPLayers() {

  //   Debug.print("Load players list");
  //   savePlayer("Jackie Robinson", "42", "Dodgers");
  //   savePlayer("Mickey Mantle", "95", "Yankees");
  //   savePlayer("Earnie Banks", "1", "Cubs");
  //   savePlayer("Louis Aparicio", "7", "White Sox");
  //   savePlayer("Jim Landis", "22", "White Sox");
  // };

  public func deleteAllPlayers() {
    let emptyList : List.List<Player> = List.nil<Player>();
    playerList := emptyList;
  };

  public func deleteAllTeams() {
    let emptyList : List.List<Team> = List.nil<Team>();
    teamList := emptyList;

  };

  public func deletePlayer(jerseyNumber : Text) {
    let index = 3;
    let listFront = List.take(playerList, index);
    let listBack = List.drop(playerList, index + 1);
    playerList := List.append(listFront, listBack);
  };

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };

  public query func filterPlayers(name : Text, number : Text, team : Text) : async [Player] {
    let filteredPlayers = List.filter<Player>(playerList, func p { Text.equal(p.jerseyNumber, number) });
    return List.toArray(filteredPlayers);
  };

  public query func getPlayers() : async [Player] {
    List.toArray(playerList);
  };

  public query func getTeams() : async [Team] {
    List.toArray(teamList);
  }

};
