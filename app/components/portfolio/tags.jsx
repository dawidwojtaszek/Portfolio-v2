// TODO create a component with  dynamic tags

const Tags = ({ tags }) => {
  return (
    <div className="flex gap-1 my-2 flex-wrap">
      {tags.map((t, index) => (
        <div className="bg-green py-1 px-2 rounded-md text-white" key={index}>
          {t}
        </div>
      ))}
    </div>
  );
};

export default Tags;
