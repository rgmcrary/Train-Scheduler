// Initialize Firebase

var config = {
  apiKey: "AIzaSyBcd7My_AkrA_y0qdWe-YnIk3Z2oAMuC04",
  authDomain: "train-scheduler-b860a.firebaseapp.com",
  databaseURL: "https://train-scheduler-b860a.firebaseio.com",
  projectId: "train-scheduler-b860a",
  storageBucket: "",
  messagingSenderId: "630326143015"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var dataRef = firebase.database();

// Initial Values
var trainName = " ";
var dest = " ";
var trainTime = " ";
var freq = " ";

// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();

  trainName = $("#trainName-input").val().trim();
  dest = $("#dest-input").val().trim();
  trainTime = $("#trainTime-input").val().trim();
  freq = $("#freq-input").val().trim();

  // Code for the push
  dataRef.ref().push({
    name: trainName,
    destination: dest,
    time: trainTime,
    frequency: freq,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
  resetFields();
});

function resetFields() {
  $("#trainName-input").val("");
  $("#dest-input").val("");
  $("#trainTime-input").val("");
  $("#freq-input").val("");
}

function calculateTimes(frequency, initialTime) {
  var arrivalVal;
  var timeVal;

  //calculations go here

  return { arrival: arrivalVal, minutesAway: timeVal };
}

dataRef.ref().on(
  "child_added",
  function(childSnapshot) {
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().frequency);

    var times = calculateTimes(
      childSnapshot.val().frequency,
      childSnapshot.val().time
    );

    // Output to HTML
    $("#schedTable").append(
      "<tr><td> " +
        childSnapshot.val().name +
        " </td><td> " +
        childSnapshot.val().destination +
        " </td><td> " +
        childSnapshot.val().frequency +
        " </td><td> " +
        times.arrival +
        "</td><td>  " +
        times.minutesAway +
        "</td></tr>"
    );

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
