const mongoose=require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName:{ 
        type: String,
        required: [true,"El nombre del autor es requerido"],
        minlength: [3, "El nombre debe contener más de 3 caracteres"]
    },
    titleBook:{ 
        type: String,
        required: [true,"Name book is required"],
        minlength: [2, "El nombre del libro debe contener más de 3 caracteres"],
    }
}, {timestamps:true});


module.exports.Author=mongoose.model('Author',AuthorSchema);