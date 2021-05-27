// helloSpeaker function
const helloSpeaker = {
  speakWord: "Hello",
};

(function () {
  helloSpeaker.speak = function (name) {
    return helloSpeaker.speakWord + " " + name;
  };
})();

//byeSpeaker function
const byeSpeaker = {
  speakWord: "Good Bye",
};

(function () {
  byeSpeaker.speak = function (name) {
    return byeSpeaker.speakWord + " " + name;
  };
})();

// main function
(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    let name = names[i];
    if (firstLetter === "j") {
      document.write(byeSpeaker.speak(name) + "<br>");
      console.log(byeSpeaker.speak(name));
    } else {
      document.write(helloSpeaker.speak(name) + "<br>");
      console.log(helloSpeaker.speak(name));
    }
  }
})();
