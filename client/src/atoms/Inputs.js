import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Input = styled.input`
  ${tw`bg-white focus:outline-0 focus:shadow-outline border border-gray rounded-xs py-2 px-4 block w-full appearance-none leading-normal my-2`};
  outline: none;
  border-style: solid;
  border-width: 2px;
`;

export { Input };
