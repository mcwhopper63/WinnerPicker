import mongoose from 'mongoose';

const PickSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    picks: [
        {
            fight: { type: mongoose.Schema.Types.ObjectId, ref: 'Fight' },
            winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Fighter' },
        },
    ],
});

export default mongoose.model('Pick', PickSchema);
