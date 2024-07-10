// components/NotificationPermission.js
import { useEffect } from "react";
import { messaging, getToken, onMessage } from "../../firebase.config";

const NotificationPermission = () => {
  useEffect(() => {
    const requestPermission = async () => {
      if (!messaging) {
        console.error("Firebase Messaging is not available.");
        return;
      }

      try {
        const registration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          const token = await getToken(messaging, {
            vapidKey:
              "BFh5LuTdtV36326ZmKqFx_OIOp6F6uquG9QFTp0CqxvrlHN9TufEdX0Fq7z4WZqdPCsZs6je2heer6bZSJCeKcc",
            serviceWorkerRegistration: registration,
          });
          console.log("FCM Token:", token);
        } else {
          console.error("Notification permission not granted");
        }
      } catch (error) {
        console.error("Error getting FCM token:", error);
      }
    };

    requestPermission();

    if (messaging) {
      onMessage(messaging, (payload) => {
        console.log("Message received. ", payload);
        const { title, body } = payload.notification;
        new Notification(title, { body });
      });
    }
  }, []);

  return null;
};

export default NotificationPermission;
