import { MatrixType } from '../lib';
import { MatrixItemList } from './MatrixItemList';

type MatrixProps = {
  matrix: MatrixType;
};

export const Matrix: React.FC<MatrixProps> = ({ matrix }) => {
  return (
    <div className="flex mt-12 overflow-x-scroll">
      <div className="min-w-[250px] flex-1">
        <div
          style={{
            background:
              'linear-gradient(to right, #f2ac84 90%, #7549f2) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-6 uppercase flex items-center tracking-[0.15rem] text-sm
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
        <div
          style={{
            background:
              'linear-gradient(to right, #7549f2 90%, #3f59e4) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-6 uppercase flex items-center tracking-[0.15rem] text-sm text-lavendar font-light mb-10"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/login.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Login
        </div>
        <MatrixItemList matrixItems={matrix.login} />
      </div>
      <div className="min-w-[250px] flex-1">
        <div
          style={{
            background:
              'linear-gradient(to right, #3f59e4 90%, #4cb7a3) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-6 uppercase flex items-center tracking-[0.15rem] text-sm text-pastelBlue font-light mb-10"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/check-circle.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Access
        </div>
        <MatrixItemList matrixItems={matrix.access} />
      </div>
      <div className="min-w-[250px] flex-1">
        <div
          style={{
            background:
              'linear-gradient(to right, #4cb7a3 90%, #4cb7a3) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-6 uppercase flex items-center tracking-[0.15rem] text-sm font-light text-teal mb-10"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/hexagon.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Transactions
        </div>
        <MatrixItemList matrixItems={matrix.transaction} />
      </div>
    </div>
  );
};
