import styled from 'styled-components';
import { Button } from 'antd';

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  padding: 5px;
`;

export const Card = styled.div`
  height: 150px;
  width: 265px;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  padding: 3px;
  display: flex;
  justify-content: space-between;
`;

interface StatusProps {
  status: boolean;
}

export const Avatar = styled.div<StatusProps>`
  height: 100px;
  width: 100px;
  border: 1px solid #c3c3c3;
  background-color: ${props => (props.status ? '#0ac400' : '#eab200')};
  border-radius: 4px;
  padding: 3px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Data = styled.div``;

export const DataRow = styled.p``;
export const DataLabel = styled.span`
  font-weight: bold;
`;

export const DataValue = styled.span``;

export const DataStatus = styled.span<StatusProps>`
  color: ${props => (props.status ? '#0ac400' : '#eab200')};
`;

export const SwitchContainer = styled.div`
  margin-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #c3c3c3;
`;

export const Group = styled(Button.Group)`
  margin: 5px 0;
`;
