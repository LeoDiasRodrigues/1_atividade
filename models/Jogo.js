const mongoose = require('mongoose');

const JogoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    anoLancamento: {
        type: Number,
        required: true,
        validate: {
            validator: function(value) {
                return value <= new Date().getFullYear();
            },
            message: 'Ano não pode ser no futuro'
        }
    },
    nota: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    favorito: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    amigo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Amigo',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Jogo', JogoSchema);