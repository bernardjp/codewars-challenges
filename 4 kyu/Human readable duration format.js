/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

export default function(sec) {
  if(sec === 0) { return 'now' };

  const time = getTimeFromSeconds(sec);
  const usableTimeUnits = filertUnits(time);
  const readableFormatTime = getReadableFormat(usableTimeUnits);

  return readableFormatTime;
}

function getTimeFromSeconds(sec) {
  const date = new Date(sec * 1000);
  const [ hours, minutes, seconds ] = date
    .toISOString()
    .split('T')[1]
    .split('.')[0]
    .split(':')
    .map(Number);

  const totalDays = Math.floor(sec/(60*60*24));
  const years =  Math.floor(sec/(60*60*24*365));
  const days = totalDays >= 365 ? totalDays - (365 * years) : totalDays;

  return {
    years, days, hours, minutes, seconds
  }
}

function getReadableFormat(time) {
  const usableUnits = Object.entries(time);

  const readableFormat = usableUnits
    .reduce((acc, t, i, arr) => {
      const unit = t[1] > 1 ? t[0] : t[0].slice(0, -1);
      let unitStr = `${t[1]} ${unit}`;

      if (i < arr.length - 2) unitStr = `${unitStr}, `
      if (i === arr.length - 2) unitStr = `${unitStr} and `

      return `${acc}${unitStr}`;
    }, '');

  return readableFormat;
}

function filertUnits(time) {
  let filteredUnits = {}

  for (const unit in time) {
    if (time[unit] !== 0) {
      filteredUnits = {...filteredUnits, [unit]: time[unit]}
    }
  }

  return filteredUnits;
}
