import * as mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/backSystem',{ useNewUrlParser: true, useUnifiedTopology:true })
const db = mongoose.connection
db.on('error', () => {
  console.log('database connect error')
})
db.once('open', () => {
  console.log('database connect success')
})
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  avatar: String
})
const articleSchema = new mongoose.Schema({
  id: String,
  user_name: String,
  face_img: String,
  create_time: Number,
  classify: String,
  update_time: Number,
  title: String,
  content: String
})
const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  content: String,
  spider_time: String
})
const classifySchema = new mongoose.Schema({
  name: String,
  isFix: Number
})
const commentSchema = new mongoose.Schema({
  article_id: Object,
  article_name: String,
  comment_time: Number,
  comment_name: String,
  comment_email: String,
  content: String,
  author_reply: String
})
const models = {
  user: mongoose.model('user', userSchema),
  article: mongoose.model('article', articleSchema),
  news: mongoose.model('news', newsSchema),
  classify: mongoose.model('classify', classifySchema),
  comment: mongoose.model('comment', commentSchema)
}
export default models;
