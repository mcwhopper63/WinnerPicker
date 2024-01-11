import mongoose from 'mongoose';

const fighterSchema = new mongoose.Schema(
    {
        name: String,
        division: String,
        dob: String,
    },
    { timestamps: true }
);

export default mongoose.model('Fighter', fighterSchema);
