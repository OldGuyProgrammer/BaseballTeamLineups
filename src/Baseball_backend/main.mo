import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Array "mo:base/Array";
import List "mo:base/List";
import Text "mo:base/Text";

actor Baseball {
  Debug.print("Baseball Backend starting");

  public type Player = {
    jerseyNumber : Text;
    playerName : Text;
    playerTeam : Text;

  };

  var playerList : List.List<Player> = List.nil<Player>();

  public func savePlayer(name : Text, number : Text, team : Text) {
    let newPlayer : Player = {
      playerName = name;
      jerseyNumber = number;
      playerTeam = "";
    };

    playerList := List.push(newPlayer, playerList);
    Debug.print(debug_show (playerList));
  };

  public func loadPLayers() {

    Debug.print("Load players list");
    savePlayer("Jackie Robinson", "42", "Dodgers");
    savePlayer("Mickey Mantle", "42", "Yankees");
    savePlayer("Earnie Banks", "42", "Cubs");
    savePlayer("Louis Aparicio", "42", "White Sox");
    savePlayer("Jim Landis", "42", "White Sox");
  };

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };

  public query func getPlayers() : async Text {
    Debug.print("Get players called");
    "Get players called";
  };

};
