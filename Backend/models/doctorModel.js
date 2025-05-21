import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, requiured: true },
    email: { type: String, requiured: true, unique: true },
    password: { type: String, requiured: true },
    image: { type: String, requiured: true },
    speciality: { type: String, requiured: true },
    degree: { type: String, requiured: true },
    experience: { type: String, requiured: true },
    about: { type: String, requiured: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, requiured: true },
    address: { type: Object, requiured: true },
    date: { type: Number, requiured: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel
