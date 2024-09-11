const SkeletonAnimation = () => {
  return (
    <div className="w-full flex flex-col">
      <div className=" mb-[26px] w-full h-[34px] bg-gray rounded-lg"></div>
      <div className="flex flex-col">
        <div className="  border-4 border-darkerGray w-full   h-[348px] mb-12 ">
          <div className="hidden md:block w-[500px] bg-gray h-full"></div>
        </div>
        <div className="  border-4 border-darkerGray w-full   h-[348px] mb-12 ">
          <div className="hidden md:block w-[500px] bg-gray h-full"></div>
        </div>
        <div className="  border-4 border-darkerGray w-full   h-[348px] mb-12 ">
          <div className="hidden md:block w-[500px] bg-gray h-full"></div>
        </div>

        <div className="  border-4 border-darkerGray w-full   h-[348px] mb-12 ">
          <div className="hidden md:block w-[500px] bg-gray h-full"></div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonAnimation;
