import { MatrixItem } from '../lib';

type MatrixItemProps = {
  matrixItems: MatrixItem[];
};

export const MatrixItemList: React.FC<MatrixItemProps> = ({ matrixItems }) => {
  return (
    <div className="flex flex-wrap gap-2 text-lighterGray font-light text-xs">
      {matrixItems.map((item, index) =>
        item.link ? (
          <a
            key={index}
            className="bg-charcoal py-4 px-6 min-w-fit rounded-[3rem] whitespace-nowrap"
          >
            {item.title}
          </a>
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
