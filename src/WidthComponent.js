import { useWindowWidth } from "./useWindowWidth";

const WidthComponent = () => {
  const curremtWindowWidth = useWindowWidth();
  return <p>Current width: {curremtWindowWidth}</p>;
};

export default WidthComponent;
