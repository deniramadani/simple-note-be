
const notesModel = require('../models/notes.model')

module.exports = {
    getAllNotes: async () => {
        try {
            return await notesModel.find()
        } catch (err) {
            throw err
        }
    },
    createNote: async (noteData) => {
        try {
            const result = await notesModel.create(noteData)
            return result
        } catch (error) {
            throw error
        }
    },
    toggleArchivedById : async (id) => {
        try {
            const note = await notesModel.findById(id)
            if (!note) {
                throw new Error('Note not found')
            }
            note.archived = !note.archived
            await note.save()
            return note
        } catch (error) {
            throw error
        }
    },
    deleteNoteById: async (id) => {
        try {
            const result = await notesModel.deleteOne({ _id: id })
            return result
        } catch (error) {
            throw error
        }
    }
}