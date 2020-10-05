import React, { useState } from 'react';
import * as Styled from './Destructuring.styles';
import { Switch } from 'antd';

interface IProps {
  isVisible: boolean;
  avatar: string;
  status: boolean;
  nick: string;
  title: string;
  lastLogin: string;
}

const STATUS_CONST = ['Useless', 'Online', 'Afk'];

const Destructuring = (props: IProps) => {
  const [status, setStatus] = useState<boolean>(props.status);

  const queryStatus = () => {
    return status ? STATUS_CONST[1] : STATUS_CONST[2];
  };

  const onStatusChange = (checked: boolean) => {
    setStatus(checked);
  };

  return (
    <Styled.Container isVisible={props.isVisible}>
      <Styled.Card>
        <div>
          <Styled.Avatar status={status}>
            <img src={props.avatar} alt={'Avatar'} />
          </Styled.Avatar>
          <Styled.SwitchContainer>
            {STATUS_CONST[2]}{' '}
            <Switch checked={status} size="small" onChange={onStatusChange} />{' '}
            {STATUS_CONST[1]}
          </Styled.SwitchContainer>
        </div>
        <Styled.Data>
          <Styled.DataRow>
            <Styled.DataLabel>Nick:</Styled.DataLabel>{' '}
            <Styled.DataValue>{props.nick}</Styled.DataValue>
          </Styled.DataRow>
          <Styled.DataRow>
            <Styled.DataLabel>Title:</Styled.DataLabel>{' '}
            <Styled.DataValue>{props.title}</Styled.DataValue>
          </Styled.DataRow>
          <Styled.DataRow>
            <Styled.DataLabel>Last login:</Styled.DataLabel>{' '}
            <Styled.DataValue>{props.lastLogin}</Styled.DataValue>
          </Styled.DataRow>
          <Styled.DataRow>
            <Styled.DataLabel>Status:</Styled.DataLabel>{' '}
            <Styled.DataStatus status={status}>
              {queryStatus()}
            </Styled.DataStatus>
          </Styled.DataRow>
        </Styled.Data>
      </Styled.Card>
    </Styled.Container>
  );
};

export default Destructuring;
