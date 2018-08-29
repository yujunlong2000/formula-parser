import * as lib from '../../src/index';

describe('Public API', () => {
  it('Parser should be defined', () => {
    expect(lib.Parser).toBeInstanceOf(Function);
  });

  it('ERROR should be defined', () => {
    expect(lib.ERROR).toBeDefined();
  });

  it('ERROR_DIV_ZERO should be defined', () => {
    expect(lib.ERROR_DIV_ZERO).toBeDefined();
  });

  it('ERROR_NAME should be defined', () => {
    expect(lib.ERROR_NAME).toBeDefined();
  });

  it('ERROR_NOT_AVAILABLE should be defined', () => {
    expect(lib.ERROR_NOT_AVAILABLE).toBeDefined();
  });

  it('ERROR_NULL should be defined', () => {
    expect(lib.ERROR_NULL).toBeDefined();
  });

  it('ERROR_NUM should be defined', () => {
    expect(lib.ERROR_NUM).toBeDefined();
  });

  it('ERROR_REF should be defined', () => {
    expect(lib.ERROR_REF).toBeDefined();
  });

  it('ERROR_VALUE should be defined', () => {
    expect(lib.ERROR_VALUE).toBeDefined();
  });

  it('error should be defined', () => {
    expect(lib.error).toBeDefined();
  });
});
