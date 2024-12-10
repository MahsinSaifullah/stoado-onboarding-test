import { MatrixItem } from '../lib';

type MatrixItemProps = {
  matrixItems: MatrixItem[];
};

export const MatrixItemList: React.FC<MatrixItemProps> = ({ matrixItems }) => {
  return (
    <div className="flex flex-wrap gap-2 text-lighterGray font-light text-xs">
      {matrixItems.map((item, index) =>
        item.link ? (
          <div
            className="flex justify-center items-center space-x-1 bg-charcoal py-4 px-6 min-w-fit rounded-[3rem]
          whitespace-nowrap  text-softBlue cursor-pointer hover:text-pastelBlue"
          >
            <a href={item.link} key={index} className="underline">
              {item.title}
            </a>
            <span className="font-bold">→</span>
          </div>
        ) : (
          <p
            key={index}
            className="bg-charcoal py-4 px-6 min-w-fit rounded-[3rem] whitespace-nowrap"
          >
            {item.title}
          </p>
        )
      )}
    </div>
  );
};
