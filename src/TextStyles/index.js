import styled from '@emotion/styled';
import colors from '../constant/colors.js';

const H2 = styled.h2`
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 1.25%;
`
const P = styled.p`
  font-weight: 400;
  font-size: 14;
  letter-spacing: 1.25%;
`

const H2Default = styled(H2)`
  color: ${colors.TextDark};
`;
const H2White = styled(H2)`
  color: ${colors.TextWhite};
  `
const H2LowEmphasis = styled(H2)`
  color: ${colors.TextLight};
`;
const H2HighEmphasis = styled(H2)`
  color: ${colors.TextEmphasis} ;
`;
const P1Default = styled(P)`
  color: ${colors.TextDark};
`;
const P1LowEmphasis = styled(P)`
  color: ${colors.TextLight};
`;

export { H2Default, H2HighEmphasis, H2White, H2LowEmphasis, P1Default, P1LowEmphasis}
