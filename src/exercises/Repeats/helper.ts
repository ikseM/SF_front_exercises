export const DATA = {
  STATUSES: [
    { key: 'Online', value: true },
    { key: 'Afk', value: false }
  ],
  TITLES: [
    {
      key: 'Leeroy',
      value: 'Jenkins'
    },
    { key: 'Pat', value: 'PVP' },
    { key: 'Swifty', value: 'Mastermind' }
  ],
  LOGINS: [
    {
      key: 'Jenkins',
      value: '24.02.1998'
    },
    { key: 'PVP', value: '13.07.2016' },
    { key: 'Mastermind', value: '01.01.2021' }
  ],
  DEFAULT_STATUS: true
};

export const findTitle = (value: string) => {
  return DATA.TITLES.find(title => title.key === value);
};

export const findLoginData = (title: string) => {
  return DATA.LOGINS.find(login => login.key === title);
};

export const findStatus = (status: boolean = DATA.DEFAULT_STATUS) => {
  const tempStatus = DATA.STATUSES.find(item => item.value === status);
  return tempStatus ? tempStatus.value : false;
};

type Payload = {
  nick: string;
  title: string;
  lastLogin: string;
  status: boolean;
  avatar?: string;
};
export const gatherPayload = ({
  nick,
  title = '',
  lastLogin = '',
  status
}: Payload) => {
  return {
    nick,
    title,
    lastLogin,
    status
  };
};
