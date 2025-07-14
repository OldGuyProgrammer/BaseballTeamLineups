import Debug "mo:base/Debug";
import List "mo:base/List";
import Text "mo:base/Text";

actor Baseball {
  Debug.print("Baseball Backend starting");

  public type Player = {
    jerseyNumber : Text;
    playerName : Text;
    playerTeam : Text;

  };

  stable var playerList : List.List<Player> = List.nil<Player>();

  public func savePlayer(playerName : Text, jerseyNumber : Text, playerTeam : Text) {
    let newPlayer : Player = {
      playerName = playerName;
      jerseyNumber = jerseyNumber;
      playerTeam = playerTeam;
    };

    playerList := List.push(newPlayer, playerList);
  };

  public func loadPLayers() {

    Debug.print("Load players list");
    savePlayer("Jackie Robinson", "42", "Dodgers");
    savePlayer("Mickey Mantle", "95", "Yankees");
    savePlayer("Earnie Banks", "1", "Cubs");
    savePlayer("Louis Aparicio", "7", "White Sox");
    savePlayer("Jim Landis", "22", "White Sox");
  };

  public func deleteAllPlayers() {
    let emptyList : List.List<Player> = List.nil<Player>();
    playerList := emptyList;
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

};
