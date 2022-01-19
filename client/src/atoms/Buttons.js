import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ButtonForm = styled.button`
  ${tw`mx-auto hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg`};
  background-color: white;
  color: #2d3748;
  cursor: pointer;
  outline: none;
`

const ButtonSmall = styled.button`
  ${tw`bg-white hover:bg-lightGray text-darkGray text-md py-2 px-4 border border-gray rounded-xs shadow`};
  cursor: pointer;
`

export { ButtonForm, ButtonSmall }
