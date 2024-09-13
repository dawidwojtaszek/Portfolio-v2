const TagsPage = ({ tags }) => {
  return (
    <div className="flex gap-1 flex-wrap">
      {tags.map((tag, index) => (
        <div key={index} className="bg-green py-1 px-2 text-white rounded-md">
          {tag}
        </div>
      ))}
    </div>
  );
};
export default TagsPage;
