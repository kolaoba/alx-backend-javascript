const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  return buffer;
};

export default createInt8TypedArray;
