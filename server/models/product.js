import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true },
		shortDescription: { type: String, required: false, trim: true },
		description: { type: String, required: true },
		imageUrl: { type: String, required: false },
		price: { type: Number, required: true, min: 0 },
		aditionaInfo: {
			weight: { type: Number, required: false },
			dimensions: { type: Number, required: false },
			colours: { type: [String], required: false },
			material: { type: String, required: false },
		},
		categories: { type: [String], require: false },
		SKU: { type: Number, require: true },
	},
	{ timestamps: true }
)

export default mongoose.model('Product', productSchema)
