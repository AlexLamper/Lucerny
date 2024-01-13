// /utils/send-email.ts
import { FormData } from '@/components/Contact/ContactForm';

export const sendEmail = async (data: FormData) => {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to send email: Noooo :(`);
  }
};
