import React, { useEffect, useState } from 'react';
import * as Styled from './Responsibilities.styles';
import { Switch, Select } from 'antd';
import avatar from '../../commons/avatar.png';
import { SelectValue } from 'antd/es/select';

interface IProps {
  isVisible: boolean;
}

const STATUSES = [
  { key: 'Online', value: true },
  { key: 'Afk', value: false }
];

const TITLES = [
  {
    key: 'Leeroy',
    value: 'Jenkins'
  },
  { key: 'Pat', value: 'PVP' },
  { key: 'Swifty', value: 'Mastermind' }
];

const LOGINS = [
  {
    key: 'Jenkins',
    value: '24.02.1998'
  },
  { key: 'PVP', value: '13.07.2016' },
  { key: 'Mastermind', value: '01.01.2021' }
];

const DEFAULT_STATUS = true;

type Player = {
  nick: string;
  title: string;
  lastLogin: string;
  status: boolean;
};

const Responsibilities = ({ isVisible }: IProps) => {
  const [status, setStatus] = useState<boolean>(() => {
    const tempStatus = STATUSES.find(status => status.value === DEFAULT_STATUS);
    if (tempStatus) return tempStatus.value;
    return false;
  });

  const [player, setPlayer] = useState<Player>();
  useEffect(() => {
    if (player) setStatus(player.status);
  }, [player]);

  const [online, afk] = STATUSES;
  const queryStatus = () => {
    return status ? online.key : afk.key;
  };

  const onStatusChange = (checked: boolean) => {
    setStatus(checked);
  };

  const onChange = (value: SelectValue) => {
    queryPlayerData(value as string);
  };

  const queryPlayerData = (value: string) => {
    const title = TITLES.find(title => title.key === value);

    if (title) {
      const loginDate = LOGINS.find(login => login.key === title.value);
      const status = STATUSES.find(status => status.value === DEFAULT_STATUS);

      if (status) {
        const payload = {
          nick: value,
          title: title ? title.value : '',
          lastLogin: loginDate ? loginDate.value : '',
          status: status.value
        };

        setPlayer(payload);
      }
    }
  };

  return (
    <Styled.Container isVisible={isVisible}>
      <Styled.Select onChange={onChange}>
        <Select.Option value="Leeroy">Leeroy</Select.Option>
      </Styled.Select>
      <Styled.Card>
        {player ? (
          <>
            <div>
              <Styled.Avatar status={status}>
                <img src={avatar} />
              </Styled.Avatar>
              <Styled.SwitchContainer>
                {afk.key}{' '}
                <Switch
                  checked={status}
                  size="small"
                  onChange={onStatusChange}
                />{' '}
                {online.key}
              </Styled.SwitchContainer>
            </div>
            <Styled.Data>
              <Styled.DataRow>
                <Styled.DataLabel>Nick:</Styled.DataLabel>{' '}
                <Styled.DataValue>{player.nick}</Styled.DataValue>
              </Styled.DataRow>
              <Styled.DataRow>
                <Styled.DataLabel>Title:</Styled.DataLabel>{' '}
                <Styled.DataValue>{player.title}</Styled.DataValue>
              </Styled.DataRow>
              <Styled.DataRow>
                <Styled.DataLabel>Last login:</Styled.DataLabel>{' '}
                <Styled.DataValue>{player.lastLogin}</Styled.DataValue>
              </Styled.DataRow>
              <Styled.DataRow>
                <Styled.DataLabel>Status:</Styled.DataLabel>{' '}
                <Styled.DataStatus status={status}>
                  {queryStatus()}
                </Styled.DataStatus>
              </Styled.DataRow>
            </Styled.Data>
          </>
        ) : (
          <Styled.NoPlayer>
            <span>No player selected</span>
          </Styled.NoPlayer>
        )}
      </Styled.Card>
    </Styled.Container>
  );
};

export default Responsibilities;
