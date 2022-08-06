import {Touchable, Title, Text, Spacer} from '../../components';
import {colors} from '../../styles/theme.json';

const Story = ({story, onPress = () => {}}) => {
  return (
    <Touchable
      onPress={onPress}
      hasPadding
      border={`2px solid ${colors.muted}`}
      spacing="0px 0px 5px 0px">
      <Text>@{story?.by}</Text>
      <Spacer />
      <Title bold>{story?.title}</Title>
      <Spacer />
      <Text>URL: {story?.url}</Text>
    </Touchable>
  );
};

export default Story;
