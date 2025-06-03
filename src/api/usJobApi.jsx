import useAxiosSecure from '../hook/useAxiosSecure';

const useJobApi = () => {
  const axiosPost = useAxiosSecure();

  const jobsCreatedByPromise = (email) => {
    return axiosPost
      .get(`/jobs?email=${email}`)
      .then((res) => res.data);
  };

  return { jobsCreatedByPromise };
};

export default useJobApi;
