import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    categoryName: { type: String, ref: 'Category', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

export default mongoose.model('Product', productSchema);