import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service', // Reference to the purchased Service
        required: true
    },
    gigId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gig', // Reference to the specific Gig purchased
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Client who purchased the service
        required: true
    },
    freelancerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Freelancer', // Reference to the Freelancer providing the service
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'], // Status of the order
        default: 'Pending'
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed', 'Refunded'], // Payment status options
        default: 'Pending'
    },
    paymentDetails: {
        amount: { type: Number, required: true }, // Total amount for the order
        currency: { type: String, default: 'USD' }, // Currency of the transaction
        transactionId: { type: String, trim: true }, // Transaction ID from the payment gateway
        paymentMethod: { type: String, enum: ['Card', 'PayPal', 'Bank Transfer'], required: true } // Payment method used
    },
    orderDate: {
        type: Date,
        default: Date.now, // Date when the order was placed
        required: true
    },
    deadline: {
        type: Date, // Optional deadline for order completion
        required: false
    },
    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review', // Reference to the review left for this order
        required: false
    },
    
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Compile the schema into a model
const Order = mongoose.model('Order', orderSchema);
export default Order;
