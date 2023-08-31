import { useSelector } from "react-redux";

const useGetToken = () => {
  const token = useSelector(({ auth }) => auth.accessToken);
  return token;
};
export default useGetToken;
