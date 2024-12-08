import { cn } from '../utils';

type TabsProps = {
  tabs: string[];
  activeIndex: number;
  onTabSelect: (index: number) => void;
};

export const Tabs = ({
  children,
  tabs,
  activeIndex,
}: React.PropsWithChildren<TabsProps>) => {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-x-scroll space-x-2">
        {tabs.map((tab, index) => (
          <button
            className={cn(
              'min-w-fit border border-lightGray rounded-[3rem] px-8 py-4 text-lighterGray hover:border-softWhite hover:text-lightestGray',
              {
                'bg-offWhite text-darkGray hover:bg-transparent border-softWhite':
                  index === activeIndex,
              }
            )}
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
