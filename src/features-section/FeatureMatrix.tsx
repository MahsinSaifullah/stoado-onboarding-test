export const FeatureMatrix = () => {
  return (
    <div className="grid grid-cols-4 mt-12 overflow-x-scroll">
      <div className="">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm text-peach font-light">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/edit.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Registration
        </p>
      </div>
      <div className="">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm text-lavendar font-light">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/login.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Login
        </p>
      </div>
      <div className="">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm text-pastelBlue font-light">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/check-circle.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Access
        </p>
      </div>
      <div className="">
        <p className="uppercase flex items-center tracking-[0.15rem] text-sm font-light text-teal">
          <img
            src="https://cdn.auth0.com/website/cic-homepage/industriesFlow/hexagon.svg"
            alt="Registration"
            loading="lazy"
            className="mr-3"
          />
          Transactions
        </p>
      </div>
    </div>
  );
};
