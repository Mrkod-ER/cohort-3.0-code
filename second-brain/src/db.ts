import mongoose from "mongoose";

const Schema = mongoose.Schema; 
const Types = mongoose.Schema.Types; 

const contentTypes = ['image', 'video', 'article', 'audio']; // Extend as needed

const userSchema = new Schema({
    username: { type: String, required: true, unique: true}, 
    password: { type: String, required: true}
})

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }], // here ref is refering to the model name
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});

const linkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }
});
 

const User = mongoose.model('User', userSchema);
const Tag = mongoose.model('Tag', tagSchema);
const Link = mongoose.model('Link', linkSchema);
const Content = mongoose.model('Content', contentSchema);


export {
    User,
    Tag,
    Link,
    Content
};

