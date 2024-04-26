/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
const {
  getUsersBySearch,
  getUserDetail,
  updateUserTypePost,
  updateImage,
  updateProfile,
  check,
  getAllUserRouter,
} = require("../controllers/users.controller");

const usersRouter = (app) => {
  app.get("/api/user/check/:id", check);
  app.get("/api/user/allUsers", getAllUserRouter);
  app.post("/api/user/:user_id", getUserDetail);
  app.post("/api/users", getUsersBySearch);
  app.put("/api/user/:id", updateUserTypePost);
  app.put("/api/user/image/:id", updateImage);
  app.put("/api/user/profile/:id", updateProfile);
};

module.exports = {
  usersRouter,
};
