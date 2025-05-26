import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

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

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };

  public query func getPlayers() : async Text {
    Debug.print("Get players called");
    "Get players called";
  };

  public func savePlayers() : async Player {
    Debug.print("Enter savePLayers");

    Jackie;

  };
};
