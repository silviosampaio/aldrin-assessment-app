import styled from 'styled-components/native';
import theme from '../styles/theme.json';

export const Box = styled.View`
  flex: 1;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.height || 'auto'};
  margin: ${props => props.spacing || 0};
  border-radius: ${props => (props.radius ? '5px' : '0px')};
  border: ${props => props.border || 'none'};
  background: ${props =>
    theme.colors[props.background] || props.background || 'transparent'};
`;

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.height || 'auto'};
  margin: ${props => props.spacing || 0};
  border-radius: ${props => (props.radius ? '5px' : '0px')};
  border: ${props => props.border || 'none'};
  background: ${props =>
    theme.colors[props.background] || props.background || 'transparent'};
`;

export const Spacer = styled.View`
  width: 100%;
  height: ${props => props.size || '10px'};
`;

export const Title = styled.Text`
  color: ${props => theme.colors[props.color || 'dark']};
  font-size: ${props => (props.small ? '22px' : props.big ? '50px' : '30px')};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-align: ${props => props.align || 'left'};
`;

export const Text = styled.Text`
  color: ${props => theme.colors[props.color || 'muted']};
  font-size: ${props => (props.small ? '13px' : '17px')};
  margin: ${props => props.spacing || 0};
  padding: ${props => (props.hasPadding ? '20px' : '0px')};
  line-height: ${props => (props.small ? '13px' : '20px')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  opacity: 0.7;
  text-align: ${props => props.align || 'left'};
`;

export const FlatList = styled.FlatList`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  text-align: center;
  align-items: center;
  padding: 7px 10px;
  width: 100%;
  margin: ${props => props.spacing || 0};
  background: ${props =>
    theme.colors[props.background] || props.background || 'transparent'};
  border-radius: 5px;
`;
