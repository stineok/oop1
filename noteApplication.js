function NotesApplication(author) {

    //validate autor
    this.author = author;
     this.notelist = [];



  /**
   * Method create
   *
   * This function takes note content and add to notelist object
  */
  this.create = function(note_content){
    if(note_content == " "){
      return "Empty Inputs are not allowed";
    }else{
    this.notelist.push(note_content);
    //return this.notelist;
    }
  }


  /**
  * Method listNote
  * This function list out note_id, the content and authors
  */
  this.listNote = function(){
    for(var i =0; i < this.notelist.length; i++ ){
      //console.log('Note Id :' + i + '\n' + this.notelist[i] );
      return ('Note Id :' + i + '\n' + this.notelist[i] );
    }
     return ('By Author :' + this.author);

  }

  /**
  *Method getNoteId
  *This function takes in the note_id and return the note content as string
  */
  this.getNoteId = function(note_id){
    if (!this.notelist[note_id]){
      return "Strings are not valid Input";
    }
    else{
      return this.notelist[note_id];
      //return "thanks";
    }
  }


/**
*Method searchText
*This function takes in a seach text and returns all note with that text within in
*/

  this.searchText = function(search_text){
    if(search_text != " "){
    for(var i =0; i < this.notelist.length; i++ ){
      if(this.notelist[i].includes(search_text)){


      	return ('Showing result for search :' + '['+search_text+']' +'\n' +
      	           'Note Id :' + i + '\n' +
      	           this.notelist[i] +'\n' +
      	            'By Author :' + this.author);
      }else{
      	return ('Search text not in search string');
      }

    }
  }else {
    return  "Empty string is not a valid input to search for";
  }

  }


/**
*Method deleteNote
*This function takes in note_id and delete the corresponding  note from notelist
*/

  this.deleteNote = function(note_id){
    if(typeof note_id == "number" ){
      return (delete this.notelist[note_id]);
    }else{
      return "Note Id is Not Valid";
    }
  }


/**
*Method editNote
*This function takes in note_id and a new content and replace the old one
*/
  this.editNote = function(note_id, new_content){
    if(typeof note_id == "number"  && new_content != " "){
      this.notelist[note_id] = new_content;
      return this.notelist[note_id];
    }else{
      return "Note Id is Not Valid";
    }
  }

}

module.exports = NotesApplication
