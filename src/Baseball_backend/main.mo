import Debug "mo:base/Debug";

actor Baseball {
  Debug.print("Baseball Backend starting");

  public query func ping() : async Text {
    Debug.print("Baseball backend running.");
    "Baseball backend running";
  };
};
