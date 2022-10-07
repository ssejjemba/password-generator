const shuffleString = (inputString: string): string => {
  var a = inputString.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};

const randomPassGenerator = (length: number, chars: string): string => {
  const randomArray = Array.from(
    {
      length: length,
    },
    () => chars[Math.floor(Math.random() * chars.length)]
  );
  const randomPassword = randomArray.join("");
  return randomPassword;
};

const uppercaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCaseCharSet = uppercaseCharSet.toLocaleLowerCase();

const symbolSet = "`!@#$%^&*()_+-={};':\\|,.<>/?~";

const numberSet = "1234567890";

type Flags = {
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasSymbols: boolean;
  hasNumbers: boolean;
};

type FlagsMapping = {
  hasLowerCase: string;
  hasUpperCase: string;
  hasSymbols: string;
  hasNumbers: string;
};

const generateUnionCharSetFromFlags = (flags: Flags): string => {
  const flagToSetMapping: FlagsMapping = {
    hasLowerCase: lowerCaseCharSet,
    hasUpperCase: uppercaseCharSet,
    hasSymbols: symbolSet,
    hasNumbers: numberSet,
  };

  let unionSet = "";

  Object.keys(flags).forEach((key) => {
    if (
      flags[key as keyof Flags] === true &&
      flagToSetMapping[key as keyof FlagsMapping]
    ) {
      unionSet += flagToSetMapping[key as keyof FlagsMapping];
    }
  });

  return shuffleString(unionSet);
};

export const createPassword = (flags: Flags): string => {
  const allowedCharacterSet = generateUnionCharSetFromFlags(flags);
  return randomPassGenerator(4, allowedCharacterSet);
};
