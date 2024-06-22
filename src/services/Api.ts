const API_BASE_URL: string = 'https://pokeapi.co/api/v2';

class ApiService {
  private baseURL;
  
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint: string, options: any) {
    const url = `${this.baseURL}${endpoint}`;
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };
    
    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        const error: string = (await response.text()).toString();
        throw new Error(`HTTP error! status: ${response.status}, message: ${error}`);
      }
      return await response.json();
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async get(endpoint: string, params = {}) {
    const urlParams = new URLSearchParams(params).toString();
    const url = urlParams ? `${endpoint}?${urlParams}` : endpoint;
    return await this.request(url, { method: 'GET' });
  }

  async post(endpoint: string, data: any) {
    return await this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put(endpoint: string, data: any) {
    return await this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint: string, data: any) {
    return await this.request(endpoint, {
      method: 'DELETE',
      body: JSON.stringify(data),
    });
  }

  handleError(error: string) {
    console.error('API Error:', error);
    throw error;
  }
}

export default ApiService;
