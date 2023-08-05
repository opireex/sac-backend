import mongoose from 'mongoose';

class MongoooseConnection {
  static connect(app) {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log('Mongo Connect');
        app.emit('DBon');
      })
      .catch((err) => console.log(err.message));
  }
}

export default MongoooseConnection;
