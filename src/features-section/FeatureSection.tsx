import { Tabs } from '../components';
import { FeaturePanel } from './FeaturePanel';

export const FeatureSection = () => {
  return (
    <section
      className="bg-[url('https://cdn.auth0.com/website/cic-homepage/bg-mobile/BG_Mobile.svg')]
    bg-top bg-no-repeat bg-cover rounded-[2.4rem] min-h-fit text-white pl-16 py-16 max-w-[90rem] mx-auto"
    >
      <h2 className="text-6xl max-w-[50%] mb-6">
        Identity is so much more than just the login box
      </h2>
      <p className="text-3xl font-light mb-14">
        Let’s take a look at everything you can do.
      </p>
      <Tabs
        tabs={[
          'B2B SaaS',
          'Retail',
          'Financial Services',
          'Publishing',
          'Travel',
          'Healthcare',
        ]}
        activeIndex={0}
        onTabSelect={() => {}}
      >
        <FeaturePanel />
      </Tabs>
    </section>
  );
};
