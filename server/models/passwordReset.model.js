import mongoose from 'mongoose'

const passwordResetSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	token: { type: String, required: true },
	expires: { type: Date, required: true },
})

module.exports = mongoose.model('PasswordReset', passwordResetSchema)
