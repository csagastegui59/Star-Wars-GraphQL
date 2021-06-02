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
flex-direction: column;
padding: 32px 116px 16px 116px;
gap: 16px;
`

const Header = styled.div`
background-color: ${colors.RavnBlack};
padding: 16px 0 16px 32px;
`
const Card = styled.div`
border-bottom: solid 1px rgba(0, 0, 0, 0.1);
border-right: solid 1px rgba(0, 0, 0, 0.1);
width: 350px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 16px 24px 16px 15px;
`
const CharactersWrapper = styled.div`
display: flex;
flex-direction: row;
`

const InfoWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom: solid 1px rgba(0, 0, 0, 0.1);
width: 890px;
padding: 14px 0px 15px 0px;
margin-bottom: 29px;
`
export { SectionHeader, NoticeCell, LoadingCell, PersonCell, DataCell, Header, Card, CharactersWrapper, InfoWrapper}