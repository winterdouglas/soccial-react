import { FlattenSimpleInterpolation, css } from "styled-components";

/**
 * Follows https://www.a11yproject.com/posts/how-to-hide-content
 */
export const visuallyHidden = css`
  &:not(:focus, :active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const onDesktop = (style: FlattenSimpleInterpolation) => css`
  @media (width >= 60rem) {
    ${style}
  }
`;

export const titleText = css`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fwBold};
  font-size: ${({ theme }) => theme.fsHuge};
`;

export const subtitleText = css`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fwBold};
  font-size: ${({ theme }) => theme.fsExtraLarge};
`;

export const contenTitleText = css`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fwBold};
  font-size: ${({ theme }) => theme.fsLarge};
`;

export const bodyText = css`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fwRegular};
  font-size: ${({ theme }) => theme.fsMedium};
`;

export const smallText = css`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fwRegular};
  font-size: ${({ theme }) => theme.fsSmall};
`;
