const Container = ({ children, className }) => (
  <div
    className={`${className} max-w-[1140px] mx-auto`}
    role="none presentation"
  >
    {children}
  </div>
);
export default Container;
