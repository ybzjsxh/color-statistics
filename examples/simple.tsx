import React from 'react';
import Statistics from '../src';

export default () => (
  <div>
    <Statistics
      title="default"
      tip={<div>this is default tip</div>}
      type="primary"
      number={123123}
    />
    <Statistics
      title="success"
      tip={
        <Statistics
          title="success"
          tip={<div>this is success tip</div>}
          type="success"
          number={123123}
        />
      }
      align="bottom"
      type="success"
      number={123123}
    />
    <Statistics
      title="warning"
      tip={<div>this is warning tip</div>}
      type="warning"
      number={123123}
    />
    <Statistics title="info" tip={<div>this is info tip</div>} type="info" number={123123} />
  </div>
);
