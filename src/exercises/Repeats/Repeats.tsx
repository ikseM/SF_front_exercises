import React, { useEffect, useState } from 'react';
import * as Styled from './Repeats.styles';
import { Switch, Button } from 'antd';
import swifty_avatar from '../../commons/swifty.png';
import pat_avatar from '../../commons/pat.png';
import leeroy_avatar from '../../commons/leeroy.png';

import { selectPlayer } from '../../actions/players';
import {connect, useDispatch, useSelector} from "react-redux";

import {
  DATA,
  findTitle,
  findLoginData,
  findStatus,
  gatherPayload
} from './helper';
import {RootState} from '../../reducers';

type Player = {
  nick: string;
  title: string;
  lastLogin: string;
  status: boolean;
  avatar?: string;
};

const Repeats = () => {
  const reduxPlayer = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();

  const [status, setStatus] = useState<boolean>(findStatus());
  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    if (reduxPlayer) {
      const player = queryPlayerData(reduxPlayer);

      if (player) {
        player.avatar = queryPlayerAvatar(reduxPlayer);
        setPlayer(player);
      }
    } else {
      setPlayer(undefined)
    }
  }, [reduxPlayer])

  useEffect(() => {
    if (player) setStatus(player.status);
  }, [player]);


  const [online, afk] = DATA.STATUSES;
  const queryStatus = () => {
    return status ? online.key : afk.key;
  };

  const onStatusChange = (checked: boolean) => {
    setStatus(checked);
  };

  const onPlayerClick = (player: string) => {
    dispatch(selectPlayer(player))
  }

  const queryPlayerData = (value: string): Player | undefined => {
    const title = findTitle(value);

    if (title) {
      const loginDate = findLoginData(title.value);
      const status = findStatus();

      if (status) {
        return gatherPayload({
          nick: value,
          title: title ? title.value : '',
          lastLogin: loginDate ? loginDate.value : '',
          status
        });
      }
    }
  };

  const queryPlayerAvatar = (value: string) => {
    switch(value) {
      case 'Leeroy':
        return leeroy_avatar
      case 'Pat':
        return pat_avatar
      case 'Swifty':
        return swifty_avatar
      default: return
    }
  }

  return (
    <Styled.Container isVisible={true}>
      <Styled.Group>
        <Button onClick={() => onPlayerClick('Leeroy')}>Leeroy</Button>
        <Button onClick={() => onPlayerClick('Pat')}>Pat</Button>
        <Button onClick={() => onPlayerClick('Swifty')}>Swifty</Button>
        <Button onClick={() => onPlayerClick('')}>Clear</Button>
      </Styled.Group>
      <Styled.Card>
        {player ? (
          <>
            <div>
              <Styled.Avatar status={status}>
                <img src={player.avatar} alt={'Avatar'} />
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

export default Repeats
