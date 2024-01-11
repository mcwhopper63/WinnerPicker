import mongoose from 'mongoose';

const FightSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    fightNumber: String,
    weightDivision: { type: Number },
    odds: { type: Number },
    fighterA: { type: mongoose.Schema.Types.ObjectId, ref: 'Fighter' },
    fighterB: { type: mongoose.Schema.Types.ObjectId, ref: 'Fighter' },
    // any other fight information you want to store
});

export default mongoose.model('Fight', FightSchema);
