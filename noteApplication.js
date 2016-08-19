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
	
	search(search_text){
		
	}
	
	delete(note_id){
		
	}
	
	edit(note_id, new_content){
		
	}
}
	
var note = new NotesApplication('Achabe');

note.create('This Fall Apart');
note.create('Oliver Twist');
note.create('No Second Chance');
note.create('Second Chance');


note.listNotes();
