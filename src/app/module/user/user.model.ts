import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: [true, 'Please enter your name'] },
  age: { type: Number, required: [true, 'Please enter your age'] },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: `{VALUE} is not valid`,
    },
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not valid, please provide a valid role',
    },
    required: true,
    default: 'user',
  },
  userState: {
    type: String,
    enum: {
      values: ['active', 'in-active'],
      message: '{VALUE} is not valid, please enter a valid value',
    },
    required: true,
    default: 'active',
  },
});

// ! pre hook
userSchema.pre('find', async function(next) {
  this.find({ userState: { $ne: 'active' } });
  next();
});

export const User = model('User', userSchema);
