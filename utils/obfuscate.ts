// Utility functions to obfuscate contact information from web crawlers

/**
 * Decodes a Base64 encoded string
 */
export const decode = (encoded: string): string => {
  try {
    return atob(encoded);
  } catch {
    return '';
  }
};

/**
 * Encodes a string to Base64
 */
export const encode = (text: string): string => {
  try {
    return btoa(text);
  } catch {
    return '';
  }
};

/**
 * Creates a mailto link with obfuscated email
 */
export const createMailtoLink = (encodedEmail: string): string => {
  const email = decode(encodedEmail);
  return `mailto:${email}`;
};

/**
 * Formats a phone number for display (adds spaces/dashes to obfuscate)
 */
export const formatPhone = (encodedPhone: string): string => {
  const phone = decode(encodedPhone);
  // Add random formatting to make it harder to parse
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};

/**
 * Creates an obfuscated contact object
 */
export const obfuscateContact = (contact: {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}) => ({
  email: encode(contact.email),
  phone: encode(contact.phone),
  location: contact.location, // Location is generally okay to show
  github: contact.github,
  linkedin: contact.linkedin,
});

