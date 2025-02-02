import bcrypt from "bcryptjs";

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // Access users collection from request
    const usersCollection = req.usersCollection;

    // Check if user exists
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // Respond with user info (without sensitive data like password)
    res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred during login.",
    });
  }
};

export default loginHandler;
