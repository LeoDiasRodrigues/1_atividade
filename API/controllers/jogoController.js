const Jogo = require('../models/Jogo');

class JogoController {

    static async create(req, res) {
        try {
            const { titulo, genero, anoLancamento, nota, favorito, amigo } = req.body;

            if (!titulo || !genero || !anoLancamento || !nota || !amigo) {
                return res.status(400).json({ message: "Dados inválidos" });
            }

            const jogo = await Jogo.create({
                titulo,
                genero,
                anoLancamento,
                nota,
                favorito,
                amigo
            });

            return res.status(201).json({ data: jogo });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const { genero, anoLancamento } = req.query;

            let filtro = { isActive: true };

            if (genero) filtro.genero = genero;
            if (anoLancamento) filtro.anoLancamento = anoLancamento;

            const jogos = await Jogo.find(filtro).populate('amigo');

            return res.status(200).json({ data: jogos });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const jogo = await Jogo.findById(req.params.id);

            if (!jogo || !jogo.isActive) {
                return res.status(404).json({ message: "Jogo não encontrado" });
            }

            return res.status(200).json({ data: jogo });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const jogo = await Jogo.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!jogo) {
                return res.status(404).json({ message: "Jogo não encontrado" });
            }

            return res.status(200).json({ data: jogo });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const jogo = await Jogo.findByIdAndUpdate(
                req.params.id,
                { isActive: false },
                { new: true }
            );

            if (!jogo) {
                return res.status(404).json({ message: "Jogo não encontrado" });
            }

            return res.status(200).json({ message: "Jogo desativado" });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = JogoController;