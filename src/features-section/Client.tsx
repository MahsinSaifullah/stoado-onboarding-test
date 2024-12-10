import { ClientExample } from '../lib';

type ClientProps = {
  clientExample: ClientExample;
};

export const Client: React.FC<ClientProps> = ({ clientExample }) => {
  return (
    <div className="max-w-[50%]">
      <img src={clientExample.logo} alt={clientExample.name} className="mb-3" />
      <a
        className="text-xl tracking-wider after:content-['→'] after:pl-2 hover:underline"
        href={clientExample.link}
      >
        {clientExample.prompt}
      </a>
    </div>
  );
};
