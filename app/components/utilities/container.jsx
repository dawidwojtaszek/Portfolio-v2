const Container = ({ children, className, id }) => (
  <div
    className={`${className} max-w-[1140px] mx-auto px-4`}
    role="none presentation"
    id={id}
  >
    {children}
  </div>
);
export default Container;
