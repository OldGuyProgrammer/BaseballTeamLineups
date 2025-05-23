import Debug "mo:base/Debug";

actor Baseball {
  Debug.print("Baseball Backend starting");

  let players = "{'players': [
    { 'name': 'Jackie Robinson', 'id': 1 },
    { 'name': 'Mickey Mantle', 'id': 2 },
    { 'name': 'Earnie Banks', 'id': 3 },
    { 'name': 'Louis Aparicio', 'id': 4 },
    { 'name': 'Jim Landis', 'id': 5 }
  ]
}";

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };

  public query func getPlayers() : async Text {
    Debug.print(players);
    players;
  };
};
