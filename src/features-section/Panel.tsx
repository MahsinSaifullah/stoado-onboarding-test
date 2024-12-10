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
      <p className="max-w-[60%] text-xl font-light">{feature.summary}</p>
      <Matrix />
      <div className="mt-14 flex items-center justify-between pr-16">
        <Client clientExample={feature.clientExample} />
        <Score score={feature.score} />
      </div>
    </div>
  );
};
