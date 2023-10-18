import { imagesPath } from 'src/app/path';

export const data = {
  0: {
    description: `
            This antenna system is designed for covering a wide range of frequencies with consistency in gain and beamwidth and providing 360 degrees of coverage. 
            The system is divided into 4 quadrants, each quadrant containing a vertically polarized antenna, covering 433MHz to 6GHz. `,

    specification: {
      'Frequency range': [
        {
          P1: '433MHz – 1.3GHz',
          P2: '2.4GHz – 2.5GHz $ 5.1GHz – 5.9GHz',
        },
      ],
      Gain: [
        {
          P1: '3.5 – 7.9 dBi',
          P2: '10 dBi',
        },
      ],
      'Beamwidth Azimuth': [
        {
          P1: '60 – 90 Degrees (@ -3dB)',
          P2: 'Degrees (@ -3dB)',
        },
      ],
      'Beamwidth Elevation': [
        {
          P1: '80 – 110 Degrees (@ -3dB)',
          P2: '30 Degrees (@ -3dB)',
        },
      ],
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 20dB',
      'RF Interface': 'X8 N-type Female (2 per quadrant)',
    },

    mechanical_properties: {
      length: 40.5,
      width: 53,
      weight: 0.2,
      color: 'white or green',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_1_1',
      1: imagesPath + 'home/content/charts/' + 'chart_1_2',
      header: 'PAT0413G5',
    },
  },
  1: {
    description: `
            This antenna system is designed for covering a wide range of frequencies with consistency in gain and beamwidth and providing 360 degrees of coverage. 
            The system is divided into 4 quadrants, each quadrant containing a vertically polarized antenna, covering 433MHz to 6GHz.`,

    specification: {
      'Frequency range': '400MHz – 6GHz',
      Gain: '8-9 dBi',
      'Beamwidth Azimuth': '80 deg (@ -3dB)',
      'Beamwidth Elevation': '60 deg (@ -3 dB)',
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 25dB',
      'RF Interface': 'X4 N-type Female (1 per quadrant)',
    },

    mechanical_properties: {
      length: 84,
      width: 84,
      height: 115,
      weight: 17,
      color: 'white or green',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_2',
      header: 'PAT0413G5',
    },
  },
  2: {
    description: `
        This is a compact microstrip directive Vivaldi antenna covering from 500MHz up to 6GHz with a gain of up tuo12 dBi. 
        The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.`,

    specification: {
      'Frequency range': '500MHz – 6GHz',
      Gain: '7 - 12 dBi',
      'Beamwidth Azimuth': '50 - 60 deg (@ -3dB)',
      'Beamwidth Elevation': '20 - 70 deg (@ -3 dB)',
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 20dB',
      'RF Interface': 'N-type Female ',
    },

    mechanical_properties: {
      length: 63.2,
      width: [41.5, 34.7],
      weight: 0.2,
      color: 'white or green',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_3',
      header: 'PAT0413G5',
    },
  },
  3: {
    description: `
        This is a ruggedized steel directive LPD antenna covering from 500MHz up to 3GHz. 
        The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth. 
        The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization. `,

    specification: {
      'Frequency range': '500MHz – 3GHz',
      Gain: '10 dBi',
      'Beamwidth Azimuth': '80 deg (@ -3dB)',
      'Beamwidth Elevation': '50 deg (@ -3 dB)',
      VSWR: '< 2',
      Impedance: '50 Ohms',
      'XPD (cross polarization discrimination)': '> 20dB',
      'RF Interface': 'N-type Female ',
    },

    mechanical_properties: {
      length: 72,
      width: 29,
      weight: 3.75,
      color: 'white or green',
      material: 'Plastic',
    },

    charts: {
      0: imagesPath + 'home/content/charts/' + 'chart_4',
      header: 'PAT0413G5',
    },
  },
};
