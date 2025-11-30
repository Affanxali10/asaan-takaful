import axios from 'axios';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    // const token = Cookies.get('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      if (status === 401) {
        // Unauthorized - handle logout
        // Cookies.remove('token');
        // window.location.href = '/login';
      }
      
      return Promise.reject({
        status,
        message: data?.message || error.message,
        data: data,
      });
    } else if (error.request) {
      // Request made but no response received
      return Promise.reject({
        status: null,
        message: 'Network error. Please check your connection.',
        data: null,
      });
    } else {
      // Something else happened
      return Promise.reject({
        status: null,
        message: error.message || 'An unexpected error occurred',
        data: null,
      });
    }
  }
);

/**
 * GET request template
 * @param {string} url - API endpoint
 * @param {object} params - Query parameters
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const get = async (url, params = {}, config = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      params,
      ...config,
    });
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * POST request template
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const post = async (url, data = {}, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * PUT request template
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const put = async (url, data = {}, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * PATCH request template
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const patch = async (url, data = {}, config = {}) => {
  try {
    const response = await axiosInstance.patch(url, data, config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * DELETE request template
 * @param {string} url - API endpoint
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const del = async (url, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * HEAD request template
 * @param {string} url - API endpoint
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const head = async (url, config = {}) => {
  try {
    const response = await axiosInstance.head(url, config);
    return {
      success: true,
      data: response.headers,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * OPTIONS request template
 * @param {string} url - API endpoint
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const options = async (url, config = {}) => {
  try {
    const response = await axiosInstance.options(url, config);
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Request failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * Upload file(s) using POST with FormData
 * @param {string} url - API endpoint
 * @param {FormData} formData - FormData object with files
 * @param {object} config - Additional axios config (e.g., onUploadProgress)
 * @returns {Promise}
 */
export const upload = async (url, formData, config = {}) => {
  try {
    const response = await axiosInstance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config,
    });
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Upload failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

/**
 * Download file
 * @param {string} url - API endpoint
 * @param {string} filename - Name for downloaded file
 * @param {object} config - Additional axios config
 * @returns {Promise}
 */
export const download = async (url, filename, config = {}) => {
  try {
    const response = await axiosInstance.get(url, {
      responseType: 'blob',
      ...config,
    });
    
    // Create blob link and download
    const blob = new Blob([response.data]);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
    
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Download failed',
      status: error.status || null,
      data: error.data || null,
    };
  }
};

// Export axios instance for custom usage
export default axiosInstance;

