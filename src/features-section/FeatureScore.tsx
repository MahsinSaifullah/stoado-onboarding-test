import { Score, ScoreCategory } from '../lib';

type FeatureScoreProps = {
  score: Score;
};

const SCORE_CATEGORIES = Object.values(ScoreCategory);

export const FeatureScore: React.FC<FeatureScoreProps> = ({ score }) => {
  return (
    <div className="flex flex-col space-y-3">
      {SCORE_CATEGORIES.map((category) => {
        return (
          <div
            key={category}
            className="flex items-center space-x-4 justify-between"
          >
            <p className="uppercase text-sm text-paleTaupe">{category}</p>
            <div className="w-48 h-[0.1rem] bg-charcoalGray relative">
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
