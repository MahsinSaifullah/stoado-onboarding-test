import React from 'react';
import { cn } from '../utils';

type TabsProps = {
  tabs: string[];
  onTabSelect: (index: number) => void;
  buttonContainerStyle?: string;
};

export const Tabs = ({
  children,
  tabs,
  onTabSelect,
  buttonContainerStyle,
}: React.PropsWithChildren<TabsProps>) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onTabSelect(index);
  };

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          'flex overflow-x-scroll no-scrollbar space-x-2',
          buttonContainerStyle
        )}
      >
        {tabs.map((tab, index) => (
          <button
            className={cn(
              'min-w-fit border border-lightGray rounded-[3rem] px-6 py-2 lg:px-8 lg:py-4 text-lighterGray hover:border-softWhite hover:text-lightestGray',
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
      <div className="mt-10 lg:mt-14">{children}</div>
    </div>
  );
};
