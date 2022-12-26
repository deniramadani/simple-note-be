const notesService = require('../services/notes.service')

module.exports = {
    getAllNotes: async (req, res) => {
        try {
            const notes = await notesService.getAllNotes()
            res.status(200).json({ data: notes })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
    createNote: async (req, res) => {
        try {
            const result = await notesService.createNote(req.body)
            res.status(201).json({ message: "created" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }, 
    toggleArchivedById: async (req, res) => {
        try {
            const updatedNote = await notesService.toggleArchivedById(req.params.id)
            res.status(200).json({ data: updatedNote })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    deleteNoteById: async (req, res) => {
        try {
            const result = await notesService.deleteNoteById(req.params.id)
            res.status(200).json({ data: result })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
};