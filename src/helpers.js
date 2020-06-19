/** Parse date format, add skill to command
 * @param {string} existingCmd - ex: 3days-sms-r+foo
 * @param {string} newSkill - ex: -t.3days
 *  @todo: make format parser into common fn. DRY https://github.com/mailbots/fut-mailbot/blob/e9ddf48d6affbacdcec6a333a9ba8bea631cc460/src/lib/dateUtil.ts#L43
 */
function addSkillToCommand(existingCmd, newSkill) {
  // let [justTime, everythingElse] = existingCmd.split(/-(.+)/); // Ex: 3days-sms.1+foo+bar -> ["3days", "-sms.1+foo+bar"]
  // return justTime + newSkill + (everythingElse ? "-" + everythingElse : "");
  const { dateStr, skillsArr, domain } = futCmdParse(existingCmd);
  skillsArr.push(newSkill);
  return futCmdStringify({ dateStr, skillsArr, domain });
}

function removeSkillFromCommand(existingCmd, skillToRemove) {
  let { dateStr, skillsArr, domain } = futCmdParse(existingCmd);
  skillsArr = skillsArr.filter(s => !s.includes(skillToRemove));
  return futCmdStringify({ dateStr, skillsArr, domain });
}

/**
 * Simple parser for fut command, separating date format and skills and domain
 */
function futCmdParse(cmdStr) {
  if (!cmdStr) return {};
  let localPart;
  let domain;
  if (cmdStr.includes("@")) {
    [localPart, domain] = cmdStr.split("@");
  } else {
    localPart = cmdStr;
  }
  const [dateStr, ...skillsArr] = localPart.split("-"); // Ex: 3days-sms.1+foo+bar -> ["3days", "-sms.1+foo+bar"]
  return { dateStr, skillsArr, domain };
}

/**
 * Simple stringifier for fut command
 */
function futCmdStringify({ dateStr, skillsArr, domain = null }) {
  const skillsStr = skillsArr.length ? "-" + skillsArr.join("-") : "";
  const localPart = dateStr + skillsStr;
  return localPart + (domain ? `@${domain}` : "");
}

export default {
  addSkillToCommand,
  removeSkillFromCommand,
  futCmdParse,
  futCmdStringify
};
