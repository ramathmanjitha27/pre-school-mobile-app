import mongoose from "mongoose";

const childSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  classRoom: {
    type: String,
    required: true,
  },
});

export default mongoose.model("child", childSchema);
