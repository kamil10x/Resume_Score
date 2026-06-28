const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error occurred", err));
  
  
  
  /*
  mongoose.connect('mongodb+srv://shaikkamil2024_db_user:9j70C7RO50TZ6f8N@cluster0.prbhqal.mongodb.net/?appName=Cluster0').then((res)=>{
      console.log("DataBase Connected Successfully")
  }).catch(err=>{
      console.log("Error occurred ",err);
  })
  */
  
  








//9j70C7RO50TZ6f8N

//shaikkamil2024_db_user

//mongodb+srv://shaikkamil2024_db_user:9j70C7RO50TZ6f8N@cluster0.prbhqal.mongodb.net/?appName=Cluster0