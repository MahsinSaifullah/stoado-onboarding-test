import { MatrixType } from '../lib';
import { MatrixItemList } from './MatrixItemList';

type MatrixProps = {
  matrix: MatrixType;
};

export const Matrix: React.FC<MatrixProps> = ({ matrix }) => {
  return (
    <div className="flex space-x-2 mt-12 overflow-x-scroll">
      <div className="min-w-[250px] flex-1">
        <div
          className="uppercase flex items-center tracking-[0.15rem] text-sm
        text-peach font-light mb-10"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/edit.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Registration
        </div>
        <MatrixItemList matrixItems={matrix.registration} />
      </div>
      <div className="min-w-[250px] flex-1">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm text-lavendar font-light mb-10">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/login.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Login
        </p>
        <MatrixItemList matrixItems={matrix.login} />
      </div>
      <div className="min-w-[250px] flex-1">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm text-pastelBlue font-light mb-10">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/check-circle.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Access
        </p>
        <MatrixItemList matrixItems={matrix.access} />
      </div>
      <div className="min-w-[250px] flex-1">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm font-light text-teal mb-10">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/hexagon.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Transactions
        </p>
        <MatrixItemList matrixItems={matrix.transaction} />
      </div>
    </div>
  );
};
