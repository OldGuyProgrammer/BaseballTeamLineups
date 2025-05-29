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

  public func savePlayer(name : Text, number : Text, team : Text) {
    let newPlayer : Player = {
      playerName = name;
      jerseyNumber = number;
      playerTeam = team;
    };

    playerList := List.push(newPlayer, playerList);
    Debug.print(debug_show (playerList));
  };

  public func loadPLayers() {

    Debug.print("Load players list");
    savePlayer("Jackie Robinson", "42", "Dodgers");
    savePlayer("Mickey Mantle", "95", "Yankees");
    savePlayer("Earnie Banks", "1", "Cubs");
    savePlayer("Louis Aparicio", "7", "White Sox");
    savePlayer("Jim Landis", "22", "White Sox");
  };

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };

  public query func getPlayers() : async [Player] {
    Debug.print("Get players called");
    List.toArray(playerList);
  };

};
