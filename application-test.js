var App = require('../noteApplication.js');
var expect = require('chai').expect;

//Section for getNoteId method
describe("The getNoteId function ", function() {

  it("should not accept strings only integers", function() {
    var getId = new App('Celestine');
    expect(getId.getNoteId("one week")).to.equal("Strings are not valid Input");
  });

it("should return the content note of the index ", function(){
  before(function(){
    var getId = new App("Celestine");
    getId.create("Thanks");
    expect(getId.getNoteId(0)).to.equal("Thanks");
  });

  });

});


//Section for create method

describe("The create function", function() {
  it("Should not take empty  Content and Add it to listNote ", function(){
    var getContent = new App("Celestine");
    expect(getContent.create(" ")).to.equal("Empty Inputs are not allowed");
  });


});


//Section for listNote method

describe("The listNote function", function() {
  it("Should list out note_id, the content and authors ", function(){
    before(function(){
      var getListNot = new App("Celestine Okolie");
      getListNot.create("Computer Science for Polytechnics First Edition");
      expect(getListNot.listNote(0)).to.equal(true);
      expect(getListNot.listNote(0)).to.equal("Computer Science for Polytechnics First Edition");
      expect(getListNot.listNote(0)).to.equal("Celestine Okolie");
    });

  });

});


//Section for searching a Text match in notes

describe("The searchText function", function() {
  it("Should not accept an empty search string", function() {
    var getSearchText = new App("Kuti Gbolahan");
    expect(getSearchText.searchText(" ")).to.equal("Empty string is not a valid input to search for");
  });

  it("should return all notes with the search_text present  within in ", function(){
    before(function(){
      var getSearchText = new App("Ebube John");
      getSearchText.create("I love networking because of the configuration of cisco devices");
      expect(getSearchText.searchText("configuration")).to.equal("I love networking because of the configuration of cisco devices");
    });

    });
});


//Section for deleting notes from notelist when note_id is supplied

describe("The deleteNote function", function() {
  it("Should not accept a string note_id", function() {
    var getDeleteNote = new App("Ifeoluwa David Jr.");
    expect(getDeleteNote.deleteNote("Author-0001 ")).to.equal("Note Id is Not Valid");
  });

  it("Should Delete corresponding Note of note_id from notelist ", function(){
    before(function(){
      var getDeleteNote = new App("Oluwatobi Daniel ");
      getDeleteNote.create("I love programming using python");
      expect(getDeleteNote.deleteNote(0)).to.equal(true);
    });

    });
});



//Section for editing  notes in notelist when note_id and new note content are supplied

describe("The editNote function", function() {
  it("Should not accept a string note_id", function() {
    var getEditNote = new App("Abubakar Adamu.");
    expect(getEditNote.editNote("Author-0008 ", "I love football")).to.equal("Note Id is Not Valid");
  });

  it("Should Edit corresponding Note of note_id when a valid note_id and new note content are supplied ", function(){
    before(function(){
      var getEditNote = new App("Harison Ford ");
      getEditNote.create("Ford motor was invented by Henry Ford");
      expect(getEditNote.editNote(0,"Toyota car company was founded by a man name Toyota")).to.equal(true,"Toyota car company was founded by a man name Toyota");
    });

    });
});
