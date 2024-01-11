import mongoose from 'mongoose';

const fighterSchema = new mongoose.Schema(
    {
        name: { type: String },
        division: { type: String },
        nickname: { type: String },
        wins: { type: Number },
        draws: { type: Number },
        losses: { type: Number },
        yearOfBirth: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model('Fighter', fighterSchema);
