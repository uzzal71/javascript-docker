import mongoose from "mongoose";

mongoose
  .connect(`mongodb:user01:123334@ip-address`)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.error(err));
