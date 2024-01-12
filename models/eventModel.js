import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
    {
        name: { type: String },
        date: { type: String },
        venue: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        mainEventTime: { type: String },
        prelimsEventTime: { type: String },
        earlyPrelimsEventTime: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model('Event', EventSchema);
