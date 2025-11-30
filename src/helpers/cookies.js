import Cookies from 'cookie-js';

/**
 * Set a cookie
 * @param {string} name - Cookie name
 * @param {string|number|object} value - Cookie value (objects will be JSON stringified)
 * @param {object} options - Cookie options (expires, path, domain, secure, sameSite)
 * @returns {void}
 */
export const setCookie = (name, value, options = {}) => {
  const {
    expires = 7, // Default 7 days
    path = '/',
    domain = null,
    secure = false,
    sameSite = 'Lax',
  } = options;

  // Convert objects/arrays to JSON string
  const cookieValue = typeof value === 'object' ? JSON.stringify(value) : String(value);

  Cookies.set(name, cookieValue, {
    expires,
    path,
    domain,
    secure,
    sameSite,
  });
};

/**
 * Get a cookie
 * @param {string} name - Cookie name
 * @param {boolean} parseJson - Whether to parse JSON values (default: true)
 * @returns {string|object|null} - Cookie value or null if not found
 */
export const getCookie = (name, parseJson = true) => {
  const value = Cookies.get(name);
  
  if (!value) return null;

  // Try to parse as JSON if parseJson is true
  if (parseJson) {
    try {
      return JSON.parse(value);
    } catch (e) {
      // If parsing fails, return as string
      return value;
    }
  }

  return value;
};

/**
 * Remove a cookie
 * @param {string} name - Cookie name
 * @param {object} options - Cookie options (path, domain)
 * @returns {void}
 */
export const removeCookie = (name, options = {}) => {
  const {
    path = '/',
    domain = null,
  } = options;

  Cookies.remove(name, {
    path,
    domain,
  });
};

/**
 * Check if a cookie exists
 * @param {string} name - Cookie name
 * @returns {boolean}
 */
export const hasCookie = (name) => {
  return Cookies.get(name) !== undefined;
};

/**
 * Get all cookies as an object
 * @returns {object} - Object with all cookies
 */
export const getAllCookies = () => {
  return Cookies.all();
};

/**
 * Clear all cookies
 * @param {object} options - Cookie options (path, domain)
 * @returns {void}
 */
export const clearAllCookies = (options = {}) => {
  const {
    path = '/',
    domain = null,
  } = options;

  const allCookies = Cookies.all();
  Object.keys(allCookies).forEach((name) => {
    Cookies.remove(name, { path, domain });
  });
};

/**
 * Set multiple cookies at once
 * @param {object} cookies - Object with cookie names as keys and values as values
 * @param {object} options - Default options for all cookies
 * @returns {void}
 */
export const setMultipleCookies = (cookies, options = {}) => {
  Object.entries(cookies).forEach(([name, value]) => {
    setCookie(name, value, options);
  });
};

/**
 * Get multiple cookies at once
 * @param {string[]} names - Array of cookie names
 * @param {boolean} parseJson - Whether to parse JSON values
 * @returns {object} - Object with cookie names as keys and values as values
 */
export const getMultipleCookies = (names, parseJson = true) => {
  const result = {};
  names.forEach((name) => {
    result[name] = getCookie(name, parseJson);
  });
  return result;
};

/**
 * Remove multiple cookies at once
 * @param {string[]} names - Array of cookie names
 * @param {object} options - Cookie options
 * @returns {void}
 */
export const removeMultipleCookies = (names, options = {}) => {
  names.forEach((name) => {
    removeCookie(name, options);
  });
};

/**
 * Set a cookie with expiration in days
 * @param {string} name - Cookie name
 * @param {string|number|object} value - Cookie value
 * @param {number} days - Number of days until expiration
 * @param {object} additionalOptions - Additional cookie options
 * @returns {void}
 */
export const setCookieWithDays = (name, value, days, additionalOptions = {}) => {
  setCookie(name, value, {
    expires: days,
    ...additionalOptions,
  });
};

/**
 * Set a cookie with expiration in hours
 * @param {string} name - Cookie name
 * @param {string|number|object} value - Cookie value
 * @param {number} hours - Number of hours until expiration
 * @param {object} additionalOptions - Additional cookie options
 * @returns {void}
 */
export const setCookieWithHours = (name, value, hours, additionalOptions = {}) => {
  setCookie(name, value, {
    expires: hours / 24, // Convert hours to days
    ...additionalOptions,
  });
};

/**
 * Set a session cookie (expires when browser closes)
 * @param {string} name - Cookie name
 * @param {string|number|object} value - Cookie value
 * @param {object} additionalOptions - Additional cookie options
 * @returns {void}
 */
export const setSessionCookie = (name, value, additionalOptions = {}) => {
  setCookie(name, value, {
    expires: 0, // Session cookie
    ...additionalOptions,
  });
};

// Export default cookie-js instance for advanced usage
export default Cookies;

