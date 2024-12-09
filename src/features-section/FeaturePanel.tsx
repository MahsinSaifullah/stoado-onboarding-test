import { ClientLink } from './ClientLink';
import { FeatureMatrix } from './FeatureMatrix';
import { FeatureScore } from './FeatureScore';

export const FeaturePanel = () => {
  return (
    <div>
      <p className="max-w-[60%] text-xl font-light">
        Design for security and convenience. Delegate access for B2B2C SaaS
        services. Incorporate an organizational portal, access controls, and
        multiple extensions.
      </p>
      <FeatureMatrix />
      <div className="mt-14 flex items-center justify-between pr-16">
        <ClientLink />
        <FeatureScore />
      </div>
    </div>
  );
};
