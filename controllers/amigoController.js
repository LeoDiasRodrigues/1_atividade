const Amigo = require('../models/Amigo');

class AmigoController {

    static async create(req, res) {
        try {
            const { nome, sobrenome, idade } = req.body;

            if (!nome || !sobrenome || !idade) {
                return res.status(400).json({ message: "Dados inválidos" });
            }

            const amigo = await Amigo.create({ nome, sobrenome, idade });

            return res.status(201).json({ data: amigo });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const amigos = await Amigo.find();
            return res.status(200).json({ data: amigos });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const amigo = await Amigo.findById(req.params.id);

            if (!amigo) {
                return res.status(404).json({ message: "Amigo não encontrado" });
            }

            return res.status(200).json({ data: amigo });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = AmigoController;