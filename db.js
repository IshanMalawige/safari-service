const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect('mongodb+srv://ishansthsr:3mIKg9G3xpd4m75U@cluster0.rim3l.mongodb.net/CAR_BOOKING', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Mongo Db connected Successfully');
  });

  connection.on('error', (err) => {
    console.error('Database connection error:', err);
  });
}

connectDB();

module.exports = connectDB;
