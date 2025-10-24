const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },

  // Updated address structure
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  area: { type: String, required: true },
  fullAddress: { type: String, required: true },

  status: { type: String, required: true, default: 'Order Placed' },
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false },
  date: { type: Number, required: true }
});
