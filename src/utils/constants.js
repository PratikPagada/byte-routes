// Colors used in the theme object
export const colors = {
  PRIMARY_GREEN: '#6FAA43',
  SECONDARY_GREEN: '#A2DD6F',
  YELLOW: '#F6D246',
  RED: '#FF8080',
  PRIMARY_TEXT_COLOR: '#212121', /*#444B52*/
  GREY_LIGHT: '#eeeeee',
};

// The theme used throughout the application w/ styled-components
export const theme = {
  defaultBackground: colors.GREY_LIGHT,
  primaryTextColor: colors.PRIMARY_TEXT_COLOR,
  primary: colors.PRIMARY_GREEN,
  secondary: colors.SECONDARY_GREEN,
  accent: colors.YELLOW,
  error: colors.RED,
};

export const api = 'https://api.optimoroute.com/v1/get_routes?key=4dcf3c4119906a2a275d379950b0a7b279RNEMX1ANE';

export const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

// Temporary tests for the API
export const byte = {
  routes: [
    {
      duration: 101,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 80.495,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
        {
          locationName: '(1132) Immersive SF',
          scheduledAt: '08:43',
          longitude: -122.386878,
          address: '1050 Marin St, San Francisco, CA 94124, USA',
          latitude: 37.74963,
          stopNumber: 3,
          orderNo: '',
          locationNo: '1132',
        },
        {
          locationName: '(961) Impact Hub',
          scheduledAt: '08:57',
          longitude: -122.419605,
          address: '1885 Mission St, San Francisco, CA 94103, USA',
          latitude: 37.766869,
          stopNumber: 4,
          orderNo: '',
          locationNo: '961',
        },
      ],
      driverName: 'Art Tkachenko',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'Lisa Clark',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'Clark Kent',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'Elmo Lisa',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'Don Clark',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'Clark Lisa',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'A Clark',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
    {
      duration: 21,
      vehicleLabel: null,
      vehicleRegistration: null,
      driverSerial: '',
      distance: 3.606,
      stops: [
        {
          locationName: 'Byte - 101 Glacier Pt - C',
          scheduledAt: '08:05',
          longitude: -122.4900207,
          address: '101 Glacier Point, Suite A, San Rafael, CA 94901',
          latitude: 37.9501647,
          stopNumber: 1,
          orderNo: '',
          locationNo: '576'
        },
        {
          locationName: 'Byte - Suite N',
          scheduledAt: '08:15',
          longitude: -122.499466,
          address: '3095 Kerner Blvd Suite N, San Rafael, CA 94901',
          latitude: 37.9563461,
          stopNumber: 2,
          orderNo: '',
          locationNo: '214',
        },
      ],
      driverName: 'L Clark',
      load1: 0,
      load3: 0,
      load2: 0,
      load4: 0,
    },
  ],
  success: true
};
