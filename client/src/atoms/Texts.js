import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Hero = styled.div`
  ${tw`mx-auto flex flex-wrap flex-col md:flex-row items-center`};
`;

const Title = styled.h1`
  ${tw`text-white leading-tight`};
`;

const MediumTitle = styled.a`
  ${tw`text-4xl`};
`;

const Text = styled.p`
  ${tw`text-xl md:text-2xl lg:text-sm w-1/2`};
`;

const Error = styled.p`
  ${tw`text-md md:text-md pt-2 text-redForm`};
`;

const Block = styled.div({
  height: `500px`,
  textAlign: 'center',
});

export { Title, MediumTitle, Text, Block, Hero, Error };
