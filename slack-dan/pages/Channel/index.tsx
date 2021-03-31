import useInput from '../../hooks/useInput';
import useSocket from '../../hooks/useSocket';
import fetcher from '../../utils/fetcher';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useSWR, { useSWRInfinite } from 'swr';
import { Container, Header, DragOver } from '../../pages/Channel/styles';

const Channel = () => {
  return <Container></Container>;
};

export default Channel;
