import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
  baseURL: 'https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(config => {
      if (user?.accessToken) {
        config.headers.authorization = `bearer ${user.accessToken}`;
      }
      return config;
    });

    const responseInterceptor = axiosInstance.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 401) {
          signOutUser()
            .then(() => {
              console.log('User signed out due to 401 Unauthorized');
            })
            .catch(err => {
              console.error('Sign out error:', err);
            });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup: remove interceptors when component unmounts
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
