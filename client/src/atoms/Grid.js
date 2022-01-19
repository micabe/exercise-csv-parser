import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Row = styled.div`
  ${tw`flex flex-wrap -mx-3 mb-6 w-full`}};
`

const Column = styled.div`
  ${tw`w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-3`};
`

const Center = styled.div`
  ${tw`w-1/3 mx-auto`};
`
const CenterLarge = styled.div`
  ${tw`w-2/3 mx-auto`};
`

export { Row, Column, Center, CenterLarge }
