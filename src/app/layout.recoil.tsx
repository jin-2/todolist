'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import globalStyles from '../assets/styles/globalStyles';

interface Props {
  children: React.ReactNode;
}

const LayoutRecoil = ({ children }: Props) => {
  return (
    <>
      <Global styles={globalStyles} />
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
};

export default LayoutRecoil;
