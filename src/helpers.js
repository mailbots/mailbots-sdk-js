import moment from 'moment-timezone';

/**
 * Transform a unix timestamp into user friendly output.
 *
 * @param  {number} unixTime
 * @param  {string} timezone Standard tz abbreviation (ex: America/Los_Angeles)
 * @param  {string} format Moment.js time formatting (default: "MMMM Do YYYY, h:mma z")
 * @return {object} An object of user-friendly versions of the date
 */
function getFriendlyDates({
  unixTime,
  userTimezone,
  format = "MMMM Do YYYY, h:mma z"
}) {
  const secondsFromNow = Math.round(unixTime - Date.now() / 1000);
  const daysInFuture = Math.round(secondsFromNow / 60 / 60 / 24);
  const hoursInFuture = Math.round(secondsFromNow / 60 / 60);
  const minutesInFuture = Math.round(secondsFromNow / 60);

  // build how far in future
  const howFarInDays = daysInFuture
    ? `${daysInFuture} ${daysInFuture === 1 ? "day" : "days"}`
    : null;
  const howFarInHours = hoursInFuture
    ? `${hoursInFuture} ${hoursInFuture === 1 ? "hour" : "hours"}`
    : null;
  const howFarInMinutes = minutesInFuture
    ? `${minutesInFuture} ${minutesInFuture === 1 ? "minute" : "minutes"}`
    : null;
  const howFarInFuture =
    howFarInDays || howFarInHours || howFarInMinutes || "Date error";

  userTimezone = userTimezone || "GMT";
  const friendlyDate = moment(unixTime * 1000)
    .tz(userTimezone)
    .format(format);
  return {
    friendlyDate,
    daysInFuture,
    hoursInFuture,
    minutesInFuture,
    howFarInFuture
  };
}

/**
 * Parse a full fut command and extract individual components (timeFormat, skills, etc).
 *
 * @param {string} fullCommand - task command
 * @param {ISkillInfo[]} existingSkills - task command
 * @param {Object} options - date parsing extras
 */
function parseFutCommand (
  fullCommand,
  existingSkills,
  options = { validateNaturalTime: true }
) {
  // lexic consts
  const flagSeparator = "-";
  const argSeparator = ".";

  let timeFormat = "";
  let isValidTimeFormat = false;
  let timestamp;
  let friendlyDate;

  // const fullCommand = bot.get("task.command", "");
  const fullEmailParts = fullCommand.split("@");
  let commandFormat = fullEmailParts[0];
  const emailDomain = fullEmailParts[1];

  commandFormat = options.commandFormatLegacy || commandFormat;

  // split the command format by hyphens
  let parts = commandFormat.split(flagSeparator);

  // check if this is a timeless skill (first part is a skill)
  // https://github.com/mailbots/fut-mailbot/issues/144
  const isTimeless = existingSkills
    .filter((sk) => sk.timeless)
    .some(
      (sk) =>
        parts[0] === (sk.flag || "") ||
        parts[0].startsWith(`${sk.flag || ""}${argSeparator}`)
    );

  // Ex: 2020-09-16
  const is8601Format = (parts) =>
    Array.isArray(parts) &&
    parts.length >= 3 &&
    /^[0-9]{4}$/i.test(parts[0]) &&
    /^[0-9]{2}$/i.test(parts[1]) &&
    /^[0-9]{2}$/i.test(parts[2]);

  if (!isTimeless) {
    if (is8601Format(parts)) {
      // transform date format parts back into 8601 string: Ex: 2020-09-11
      timeFormat = [parts.shift(), parts.shift(), parts.shift()].join("-");
    } else {
      // in non-ISO8601, the format the fist part is the time format. Ex: tues-sms-en
      // remainig "parts" are assumed to contain only skills (["-sms", "-en"])..same as above
      timeFormat = parts.shift() || "";
    }
  }

  const skills = parts.map((skillFormat) => {
    const skillParts = skillFormat.split(argSeparator);

    return {
      flag: skillParts[0],
      args: skillParts.slice(1),
    };
  });

  const userTimezone = options.userTimezone;
  const userPreferredDateFormat = options.userPreferredDateFormat;
  return Promise.resolve().then(() => {
    if (!isTimeless && options.validateNaturalTime) {
      return this.naturalTime({
        format: timeFormat,
        timezone: userTimezone,
      });
    }
  }).then(naturalTimeResponse  => {
    if (naturalTimeResponse) {
      isValidTimeFormat = naturalTimeResponse.valid;
      timestamp = parseInt(naturalTimeResponse.time_ts);

      friendlyDate = getFriendlyDates({
        unixTime: timestamp,
        userTimezone,
        format: userPreferredDateFormat,
      });
    }

    return {
      isTimeless,
      timeFormat,
      fullFormat: commandFormat,
      emailDomain,
      isValidTimeFormat,
      timestamp,
      friendlyDate,
      skills,
    };
  });
}

export default {
  parseFutCommand
};
