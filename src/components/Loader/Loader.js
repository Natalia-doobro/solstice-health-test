import { Facebook } from "react-spinners-css";
import s from "../../style/Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.container}>
      <Facebook color="white" size={60} />
    </div>
  );
};

export default Loader;
