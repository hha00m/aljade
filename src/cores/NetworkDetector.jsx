import React from 'react';
import { Detector } from "react-detect-offline";

const NetworkDetector = () => (
  <Detector
    render={({ online }) => (
      !online ?
        <div style={{ backgroundColor: '#eddfb4', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}
        >
          لايوجد انترنيت
      </div> : ''
    )}
  />
);
export default NetworkDetector;