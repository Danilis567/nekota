import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const useSubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Lütfen bir e-posta adresi girin.');
      return;
    }
    
    setLoading(true);
    setMessage('Kaydediliyor...');

    try {
      // 'subscribers' koleksiyonuna yeni bir döküman ekliyoruz
      await addDoc(collection(db, "subscribers"), {
        email: email,
        subscribedAt: serverTimestamp() // Sunucu zaman damgasını ekliyoruz
      });
      
      setMessage('Başarıyla abone oldunuz! Teşekkürler.');
      setEmail(''); // Formu temizle
    } catch (error) {
      console.error("Abone olma hatası: ", error);
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
        setLoading(false);
    }
  };

  return { email, setEmail, message, loading, handleSubscribe };
};
