import React from 'react';
import { Tabs } from '../components';
import { FEATURES, Feature, FeatureCategory } from '../lib';
import { Panel } from './Panel';

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
    bg-top bg-no-repeat bg-cover rounded-[2.4rem] min-h-fit text-white py-12 lg:py-16 md:max-w-[90rem] md:mx-auto"
    >
      <div className="pl-5 md:pl-10 lg:pl-16">
        <h2 className="text-2xl md:text-4xl lg:text-6xl max-w-[90%]  md:max-w-[50%] mb-3 lg:mb-6">
          Identity is so much more than just the login box
        </h2>
        <p className="text-md md:text-xl lg:text-3xl font-light mb-10 lg:mb-14">
          Let’s take a look at everything you can do.
        </p>
      </div>
      <Tabs
        buttonContainerStyle="pl-5 md:pl-10 lg:pl-16"
        tabs={TABS}
        onTabSelect={handleOnTabSelect}
      >
        <Panel feature={selectedPanel} />
      </Tabs>
    </section>
  );
};
