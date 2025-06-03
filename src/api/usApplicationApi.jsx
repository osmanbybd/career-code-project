import useAxiosSecure from '../hook/useAxiosSecure';

const useApplicationApi = () => {
  const instanceAxios = useAxiosSecure();

  const myApplicationPromise = (email) => {
    return instanceAxios.get(`/applications?email=${email}`).then(res => res.data);
  };

  return { myApplicationPromise };
};

export default useApplicationApi;
