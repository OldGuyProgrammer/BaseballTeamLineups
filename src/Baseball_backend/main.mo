import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Array "mo:base/Array";

actor Baseball {
  Debug.print("Baseball Backend starting");

  type Player = {
    name : Text;
    id : Nat;
  };

  let Jackie : Player = { name = "Jackie Robinson"; id = 1 };
  let Mickey : Player = { name = "Mickey Mantle"; id = 2 };
  let Earnie : Player = { name = "Earnie Banks"; id = 3 };
  let Louis : Player = { name = "Louis Aparicio"; id = 4 };
  let Jim : Player = { name = "Jim Landis"; id = 5 };

  Debug.print("Load players array");

  var playerArray : [Player] = [];
  playerArray := Array.append(playerArray, [Jackie]);
  playerArray := Array.append(playerArray, [Mickey]);
  playerArray := Array.append(playerArray, [Earnie]);
  playerArray := Array.append(playerArray, [Louis]);
  playerArray := Array.append(playerArray, [Jim]);

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };

  public query func getPlayers() : async [Player] {
    Debug.print("Get players called");
    playerArray;
  };

  public func savePlayers() : async Player {
    Debug.print("Enter savePLayers");

    Jackie;

  };
};
