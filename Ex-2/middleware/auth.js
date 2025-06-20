
const adminAuth = (req, res, next) => {
  const token = "12w3r3rdaf";
  const isAdminAuthorized = token === "12w3r3rdaf";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Request");
  } else {
    // res.send("Authoration success")
    next();
  }
}
const userAuth = (req, res, next) => {
  const userFromDB = "ReeganKumaran";
  const givenUser = "ReeganKumaran";
  const isValidUser = userFromDB === givenUser;
  if (!isValidUser) {
    res.status(401).send("Invaild User");
  } else {
    next();
  }
}
module.exports={
    userAuth,
    adminAuth
}