import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import tw from 'tailwind.macro';

const Button = styled(Link)`
  ${tw`mx-auto hover:underline font-bold rounded-full py-2 px-6 shadow opacity-75 bg-white text-darkGray`};
  background-color: white;
  color: #2d3748;
  cursor: pointer;
  border-width: 2px;
  outline: none;
  z-index: 20;
`;

const ButtonFlat = styled(Link)`
  ${tw`mx-auto hover:underline font-bold rounded-full py-2 px-6 shadow opacity-75 bg-white text-darkGray`};
  background-color: white;
  color: #2d3748;
  cursor: pointer;
  border-width: 2px;
  outline: none;
  z-index: 20;
`;

const ButtonForm = styled.button`
  ${tw`mx-auto hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg`};
  background-color: white;
  color: #2d3748;
  cursor: pointer;
  outline: none;
`;

const ButtonSmall = styled.button`
  ${tw`bg-white hover:bg-lightGray text-darkGray text-md py-2 px-4 border border-gray rounded-xs shadow`};
  cursor: pointer;
`;

export { Button, ButtonForm, ButtonSmall, ButtonFlat };
