export const FeatureScore = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-4 justify-between">
        <p className="uppercase text-sm text-paleTaupe">Convenience</p>
        <div className="w-48 h-[0.1rem] bg-charcoalGray relative">
          <div className="absolute w-[80%] bg-offWhite h-[0.1rem]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-between">
        <p className="uppercase text-sm text-paleTaupe">Privacy</p>
        <div className="w-48 h-[0.1rem] bg-charcoalGray relative">
          <div className="absolute w-[20%] bg-offWhite h-[0.1rem]" />
        </div>
      </div>
      <div className="flex items-center space-x-4 justify-between">
        <p className="uppercase text-sm text-paleTaupe">Security</p>
        <div className="w-48 h-[0.1rem] bg-charcoalGray relative">
          <div className="absolute w-[95%] bg-offWhite h-[0.1rem]" />
        </div>
      </div>
    </div>
  );
};
