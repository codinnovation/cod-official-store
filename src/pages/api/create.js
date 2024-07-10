import { createUserWithEmailAndPassword } from "firebase/auth";
import withSession from "./session";
import { auth } from "../../../firebase.config";
import { updateProfile } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";

export default withSession(async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, name, phoneNumber } = req.body;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, { displayName: name });

      // Update user profile with phone number
      await updateProfile(userCredential.user, { phoneNumber: phoneNumber });

      // Send email verification
      await sendEmailVerification(userCredential.user);

      // Construct user object with necessary details
      const user = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.name, // Use the provided name
        phoneNumber: phoneNumber // Use the provided phone number
      };

      // Store user data in the session
      req.session.set("user", user);
      await req.session.save();

      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
});
