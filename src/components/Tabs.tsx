import React from 'react';
import { cn } from '../utils';

type TabsProps = {
  tabs: string[];
  onTabSelect: (index: number) => void;
};

export const Tabs = ({
  children,
  tabs,
  onTabSelect,
}: React.PropsWithChildren<TabsProps>) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onTabSelect(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex overflow-x-scroll space-x-2">
        {tabs.map((tab, index) => (
          <button
            className={cn(
              'min-w-fit border border-lightGray rounded-[3rem] px-8 py-4 text-lighterGray hover:border-softWhite hover:text-lightestGray',
              {
                'bg-offWhite text-darkGray hover:text-darkGray border-softWhite':
                  index === activeIndex,
              }
            )}
            onClick={() => handleTabClick(index)}
            key={index}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-14">{children}</div>
    </div>
  );
};
