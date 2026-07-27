const { sendWelcomeMail } = require("../services/mailService");

const createUser = async (req, res) => {
  try {
    const user = {
      name: "Subin",
      email: "subinfasliya@gmail.com",
    };

    await sendWelcomeMail(user);

    return res.status(201).json({
      success: true,
      message: "Successfully created new user",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createUser };
