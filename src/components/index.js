import styled from '@emotion/styled';
import colors from '../constant/colors.js';

const SectionHeader = styled.div`
padding: 32px 16px 8px 16px;
`;

const NoticeCell = styled.div`
text-align: center;
padding: 16px 16px 16px 16px;
`
const LoadingCell = styled.div`
display: flex;
justify-content: center;
padding: 16px 16px 16px 16px;
`

const PersonCell = styled.div`
display: flex;
flex-direction: column;
margin: 16px 16px 16px 16px;
`
const DataCell = styled.div`
display: flex;
padding: 16px 16px 16px 16px;
gap: 16px;`

const Header = styled.div`
background-color: ${colors.RavnBlack};
padding: 16px 0 16px 32px;

`

export { SectionHeader, NoticeCell, LoadingCell, PersonCell, DataCell, Header}