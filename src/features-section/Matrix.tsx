import { MatrixType } from '../lib';
import { MatrixItemList } from './MatrixItemList';

type MatrixProps = {
  matrix: MatrixType;
};

export const Matrix: React.FC<MatrixProps> = ({ matrix }) => {
  return (
    <div className="flex mt-10 md:mt-12 overflow-x-scroll relative border-[0.05rem] md:border-none border-charcoalGray mx-5 md:mx-0 py-5 md:py-0 rounded-[1.6rem] min-h-72">
      <div className="h-[0.2rem] bg-peach w-[250px] absolute top-[46px] md:top-[37px] hidden md:inline-block" />
      <div className="min-w-[255px] md:min-w-[260px] lg:min-w-[314px] flex-1 md:pl-10 lg:pl-16 border-r-[0.05rem] border-r-silver md:border-none relative">
        <div
          style={{
            background:
              'linear-gradient(to right, #f2ac84 90%, #7549f2) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-5 uppercase flex items-center tracking-[0.15rem] text-xs
        text-peach font-light mb-5 md:mb-10 pl-5 md:pl-0"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/edit.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3 w-5 h-5"
          />
          Registration
        </div>
        <MatrixItemList matrixItems={matrix.registration} />
        <div
          aria-hidden
          className="w-[0.05rem] bg-silver h-10 absolute -right-[1px] -top-[20px] inline-block md:hidden"
        />
        <div
          aria-hidden
          className="w-[0.05rem] bg-silver h-10 absolute -right-[1px] -bottom-[20px] inline-block md:hidden"
        />
      </div>
      <div className="min-w-[250px] flex-1 border-r-[0.05rem] border-r-silver md:border-none relative">
        <div
          style={{
            background:
              'linear-gradient(to right, #7549f2 90%, #3f59e4) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-5 uppercase flex items-center tracking-[0.15rem] text-xs text-lavendar font-light mb-5 md:mb-10 pl-5 md:pl-0"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/login.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3 w-5 h-5"
          />
          Login
        </div>
        <MatrixItemList matrixItems={matrix.login} />
        <div
          aria-hidden
          className="w-[0.05rem] bg-silver h-10 absolute -right-[1px] -top-[20px] inline-block md:hidden"
        />
        <div
          aria-hidden
          className="w-[0.05rem] bg-silver h-10 absolute -right-[1px] -bottom-[20px] inline-block md:hidden"
        />
      </div>
      <div className="min-w-[250px] flex-1 border-r-[0.05rem] border-r-silver md:border-none relative">
        <div
          style={{
            background:
              'linear-gradient(to right, #3f59e4 90%, #4cb7a3) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-5 uppercase flex items-center tracking-[0.15rem] text-xs text-pastelBlue font-light mb-5 md:mb-10 pl-5 md:pl-0"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/check-circle.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3 w-5 h-5"
          />
          Access
        </div>
        <MatrixItemList matrixItems={matrix.access} />
        <div
          aria-hidden
          className="w-[0.05rem] bg-silver h-10 absolute -right-[1px] -top-[20px] inline-block md:hidden"
        />
        <div
          aria-hidden
          className="w-[0.05rem] bg-silver h-10 absolute -right-[1px] -bottom-[20px] inline-block md:hidden"
        />
      </div>
      <div className="min-w-[250px] flex-1">
        <div
          style={{
            background:
              'linear-gradient(to right, #4cb7a3 90%, #4cb7a3) left bottom / 100% 0.2rem no-repeat',
          }}
          className="pb-5 uppercase flex items-center tracking-[0.15rem] text-xs font-light text-teal mb-5 md:mb-10 pl-5 md:pl-0"
        >
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/hexagon.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3 w-5 h-5"
          />
          Transactions
        </div>
        <MatrixItemList matrixItems={matrix.transaction} />
      </div>
    </div>
  );
};
