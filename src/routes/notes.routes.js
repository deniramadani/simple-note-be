const express = require('express')
const notesController = require('../controllers/notes.controller')
const router = express.Router()

router
  .route('/notes')
  .get(notesController.getAllNotes)
  .post(notesController.createNote)


router.route('/notes/:id')
.patch(notesController.toggleArchivedById)
.delete(notesController.deleteNoteById)

module.exports = router