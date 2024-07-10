// components/NotificationPermission.js
import { useEffect } from 'react';
import { messaging, getToken, onMessage } from '../pages/firebase';

const NotificationPermission = () => {
  useEffect(() => {
    const requestPermission = async () => {
      if (!messaging) {
        console.error('Firebase Messaging is not available.');
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        try {
          const token = await getToken(messaging, { vapidKey: 'BFh5LuTdtV36326ZmKqFx_OIOp6F6uquG9QFTp0CqxvrlHN9TufEdX0Fq7z4WZqdPCsZs6je2heer6bZSJCeKcc' });
          console.log('FCM Token:', token);
        } catch (error) {
          console.error('Error getting FCM token:', error);
        }
      } else {
        console.error('Notification permission not granted');
      }
    };

    requestPermission();

    if (messaging) {
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // Show notification here
        const { title, body } = payload.notification;
        new Notification(title, { body });
      });
    }
  }, []);

  return null;
};

export default NotificationPermission;
