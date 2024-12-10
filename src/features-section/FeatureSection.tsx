import React from 'react';
import { Tabs } from '../components';
import { FEATURES, Feature, FeatureCategory } from '../lib';
import { FeaturePanel } from './FeaturePanel';

const TABS = Object.values(FeatureCategory);

export const FeatureSection = () => {
  const [selectedPanel, setSelectedPanel] = React.useState<Feature>(
    FEATURES[TABS[0]]
  );

  const handleOnTabSelect = (index: number) => {
    setSelectedPanel(FEATURES[TABS[index]]);
  };

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
      <Tabs tabs={TABS} onTabSelect={handleOnTabSelect}>
        <FeaturePanel feature={selectedPanel} />
      </Tabs>
    </section>
  );
};
