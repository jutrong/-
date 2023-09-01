import useAxiosPrivate from "../hooks/useAxiosPrivate";
const Missing = () => {
  const axiosPrivate = useAxiosPrivate();
  return (
    <div>
      missing
      <button
        onClick={(e) => {
          e.preventDefault();
          axiosPrivate
            .get("sonminsu-items?page=1&perPage=1")
            .catch((err) => {
              console.error(err);
            });
        }}
      >
        test
      </button>
    </div>
  );
};
export default Missing;
