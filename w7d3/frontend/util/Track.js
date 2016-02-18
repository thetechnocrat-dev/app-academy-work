var KeyAction = require('../actions/KeyActions');

function Track(attr) {
  this.name = attr.name;
  this.roll = attr.roll;
}

Track.prototype.addNotes = function(notes) {
  this.roll.push({
    timeSlice: Date.now() - this.currentTime,
    notes: notes
  });
};

Track.prototype.StartRecording = function () {
  this.roll = [];
  this.currentTime = Date.now();
};

Track.prototype.StopRecording = function() {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }
  this.interval = 10;
  var playbackStartTime = Date.now();
  var currentNote = 0;
  var oldNotes = [];
  var that = this;
  var totalTime = this.roll[this.roll.length-1].timeSlice;

  var keyAction = function() {
    var currentNotes = that.roll[currentNote].notes;
    var currentTime = that.roll[currentNote].timeSlice;

    if (Date.now() - playbackStartTime - totalTime >= 0) {

      oldNotes.forEach(function(oldNote) {
        if(currentNotes.indexOf(oldNote) === -1){
          KeyAction.keyOff(oldNote);
        }
      });

      delete that.interval;
      clearInterval(intervalId);
      
    } else if (Date.now() - playbackStartTime >= currentTime) {

      oldNotes.forEach(function(oldNote) {
        if(currentNotes.indexOf(oldNote) === -1){
          KeyAction.keyOff(oldNote);
        }
      });

      currentNotes.forEach(function(note){
        KeyAction.keyPressed(note);
      });

      oldNotes = currentNotes;
      currentNote++;
    }
  };


  var intervalId = setInterval(keyAction, this.interval);

};

module.exports = Track;
