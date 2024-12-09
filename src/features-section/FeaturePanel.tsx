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
        <div className="max-w-[50%]">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industries-flow//gymshark.svg"
            alt="Gymshark"
            className="mb-3"
          />
          <a className="text-xl" href="https://auth0.com/customers">
            See how Gymshark saves money while improving customer experience
          </a>
        </div>
        <FeatureScore />
      </div>
    </div>
  );
};
