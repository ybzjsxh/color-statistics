import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import Tooltip from 'rc-tooltip';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { formatNumber } from './_utils';
import './index.css';
import '../assets/bootstrap.css';

export interface StatisticsProps {
  style?: React.CSSProperties;
  type?: 'primary' | 'success' | 'warning' | 'info';
  title: string | React.ReactNode;
  tip?: string | React.ReactNode;
  align?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  number: string | number;
  showTip?: boolean | string;
}

const Statistics = (props: StatisticsProps, ref: any) => {
  const {
    type = 'primary',
    tip = '',
    title,
    align = 'right',
    number,
    showTip = true,
    style = {},
  } = props;

  const domRef = useRef(null);
  useImperativeHandle(ref, () => domRef.current);

  return (
    <div className={`container-${type}`} style={style}>
      <div className="title">
        <div className="title-content">{title}</div>
        {!!showTip && (
          <div className="title-tips">
            <Tooltip overlay={tip} placement={align}>
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
        )}
      </div>
      <div className="number">{formatNumber(number)}</div>
    </div>
  );
};

export default forwardRef(Statistics);
