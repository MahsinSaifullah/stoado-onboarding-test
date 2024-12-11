import { ScoreType, ScoreCategory } from '../lib';

type ScoreProps = {
  score: ScoreType;
};

const SCORE_CATEGORIES = Object.values(ScoreCategory);

export const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="pl-5 md:pl-0 flex flex-col space-y-3 w-full md:w-[320px]">
      {SCORE_CATEGORIES.map((category) => {
        return (
          <div
            key={category}
            className="flex items-center space-x-4 justify-between"
          >
            <p className="uppercase text-sm text-paleTaupe">{category}</p>
            <div className="w-full md:w-48 h-[0.1rem] bg-charcoalGray relative">
              <div
                style={{ width: `${score[category]}%` }}
                className="absolute bg-offWhite h-[0.1rem]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
