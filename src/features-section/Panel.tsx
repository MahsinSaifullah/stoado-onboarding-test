import { Feature } from '../lib';
import { Client } from './Client';
import { Matrix } from './Matrix';
import { Score } from './Score';

type PanelProps = {
  feature: Feature;
};

export const Panel: React.FC<PanelProps> = ({ feature }) => {
  return (
    <div>
      <p className="max-w-[60%] text-md lg:text-xl font-light pl-10 lg:pl-16">
        {feature.summary}
      </p>
      <Matrix matrix={feature.matrix} />
      <div className="mt-10 lg:mt-14 flex items-center justify-between pr-16">
        <Client clientExample={feature.clientExample} />
        <Score score={feature.score} />
      </div>
    </div>
  );
};
