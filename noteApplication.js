/* Create a class called NotesApplication */

class NotesApplication {
        constructor (author) {
    	this.author = author;
    	this.note = [];
	}
	create(note_content){
		this.note.push(note_content);
		return 'Created';
		
	}
	listNotes() {
		for(var i=0; i<this.note.length; i++){
			console.log("Note ID: " +i);
			console.log("Note Content: "+this.note[i]);
			console.log("By Author " + this.author);
		}
	}
	get(note_id){
		return this.note[note_id]
	}
}
	
var note = new NotesApplication('goat');
note.create('the fell');
note.listNotes();
