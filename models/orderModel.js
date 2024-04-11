import {Schema, model} from 'mongoose'

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
}, { timestamps: true })

const Order = model ('Order', orderSchema);

export default Order;