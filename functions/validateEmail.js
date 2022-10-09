export function validateEmail(str) {
  if (str === undefined || str === '') return { text: 'Email cannot be blank', type: 'error' };
  if (typeof str !== 'string') return { text: 'Email must be a string', type: 'error' };
  str = str.trim().replace(/\s+/g, ' ');
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;  ///Full Regex email validation form

  const maxSize = 100;
  if (str.length > maxSize) return { text: `Email is too long, cannot exceed ${maxSize} characters`, type: 'error' };
  const minWordLength = 6;
  const allowedSymbols = /^([a-zA-Z0-9\.])/;
  const parts = str.split('@');
  const [locale, domain] = parts;
  if (str.length < minWordLength) return { text: `Too short, email must be atleast ${minWordLength} symbols`, type: 'error' };
  if (parts.length !== 2) return { text: 'Email must contain one @ symbol', type: 'error' };
  if (locale === '') return { text: 'Missing email name before @ symbol', type: 'error' };
  if (domain === '') return { text: 'Missing email domain after @ symbol', type: 'error' };
  if (str.includes('..')) return { text: 'Email cannot contain 2 dots in a row', type: 'error' };
  if (locale[0] === '.' || !isNaN(+locale[0])) return { text: 'Email must start with a letter', type: 'error' };
  for (const s of locale) {
    if (!allowedSymbols.test(s)) return { text: `Email name includes a restricted symbol - ${s}`, type: 'error' };
  };

  const domainParts = domain.split('.');
  if (domainParts.length === 1) return { text: 'Domain is incorrect. No dot (.) found after @ symbol', type: 'error' };
  if (domainParts[0] === '') return { text: 'Domain cannot start with a dot (.)', type: 'error' };
  if (domainParts[domainParts.length - 1].length < 2) return { text: 'Domain has to end with atleast 2 letters', type: 'error' };
  for (const s of domain) {
    if (!allowedSymbols.test(s)) return { text: `Email domain includes a restricted symbol ${s}`, type: 'error' };
  };

  return { text: 'Your email is confirmed!', type: 'success' };
}