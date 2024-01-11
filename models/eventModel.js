import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
    {
        name: String,
        date: String,
        arena: String,
        city: String,
        state: String,
        country: String,
        mainEventTime: String,
        prelimsEventTime: String,
        earlyPrelimsEventTime: String,
    },
    { timestamps: true }
);

export default mongoose.model('Event', EventSchema);
