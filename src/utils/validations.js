export const required = () => {
  return (value) => {
    return !value || value.trim() === "";
  };
};

export const isNumber = () => {
  return (value) => {
    return value !== "" && !isNaN(Number(value));
  };
};

export const limitLengthOptional = (min, max) => {
  return (value) => {
    return value.length === 0 || (value.length >= min && value.length <= max);
  };
};

export const limitLengthRequired = (min, max) => {
  return (value) => {
    return value.length >= min && value.length <= max;
  };
};

export const isHostValid = () => {
  return (value) => {
    const isIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value);
    const isUrl =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w.-]*)*\/?$/.test(value);

    return value === "" || isIp || isUrl;
  };
};

export const isPortValid = () => {
  return (value) => {
    if (value === "") return true;
    if (!/^\d+$/.test(value)) return false;
    const port = parseInt(value);
    return port >= 1 && port <= 65535;
  };
};

export const isCoordinateValid = () => {
  return (value) => {
    return (/^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/).test(value) || value === "";
  }
}

export const isValidCertificateExtension = () => {
  return (value) => {
    if (!value) return true;
    const allowedExtensions = ['.pem', '.crt'];
    const extension = value.toLowerCase().slice((value.lastIndexOf('.') - 1 >>> 0) + 2);
    return allowedExtensions.includes(`.${extension}`);
  };
};
