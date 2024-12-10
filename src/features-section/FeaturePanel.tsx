import { Feature } from '../lib';
import { Client } from './Client';
import { FeatureMatrix } from './FeatureMatrix';
import { FeatureScore } from './FeatureScore';

type FeaturePanelProps = {
  feature: Feature;
};

export const FeaturePanel: React.FC<FeaturePanelProps> = ({ feature }) => {
  return (
    <div>
      <p className="max-w-[60%] text-xl font-light">{feature.summary}</p>
      <FeatureMatrix />
      <div className="mt-14 flex items-center justify-between pr-16">
        <Client clientExample={feature.clientExample} />
        <FeatureScore score={feature.score} />
      </div>
    </div>
  );
};
