const Container = ({ children, className }) => (
  <div
    className={`${className} max-w-[1140px] mx-auto px-4`}
    role="none presentation"
  >
    {children}
  </div>
);
export default Container;
