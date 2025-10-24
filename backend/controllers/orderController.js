import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using Cash On Delivery Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, customerName, phone, city, street, area, fullAddress } = req.body;

    if (!userId || !items || !amount || !customerName || !phone || !city || !street || !area || !fullAddress) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing."
      });
    }

    const orderData = {
      userId,
      items,
      amount,
      customerName,
      phone,
      city,
      street,
      area,
      fullAddress,
      paymentMethod: "Cash on Delivery",
      payment: false,
      status: "Pending",
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    return res.json({
      success: true,
      message: "Order placed successfully.",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error placing the order:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


// All Orders data for Admin Panel
// All Orders data for Admin Panel (Fixed)
const allOrders = async (req, res) => {
  try {
    // Fetch all orders sorted by most recent
    const orders = await orderModel.find({}).sort({ date: -1 });

    if (!orders || orders.length === 0) {
      return res.json({ success: true, orders: [], message: "No orders found" });
    }

    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching all orders:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


// All Orders data for User (Frontend)
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update Order status from Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.error("Error updating order status:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Export only COD + utility functions
export { placeOrder, allOrders, userOrders, updateStatus };
