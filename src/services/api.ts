const API_BASE_URL = 'https://api.patropatri.online/api';

export interface UserCountResponse {
  success: boolean;
  data: {
    totalUsers: number;
    message: string;
  };
}

export const apiService = {
  async getRegisteredUsersCount(): Promise<UserCountResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/public/users/count`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user count:', error);
      // Return fallback data if API fails
      return {
        success: false,
        data: {
          totalUsers: 1000,
          message: 'Join 1,000+ registered users'
        }
      };
    }
  }
}; 