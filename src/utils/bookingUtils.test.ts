import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateIranianPhone,
  validateAppointmentRequest,
  generateAppointmentTrackingCode,
} from './bookingUtils.ts';

test('validateIranianPhone handles standard Iranian mobile numbers', () => {
  const result = validateIranianPhone('09121234567');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '09121234567');
});

test('validateIranianPhone handles Persian numerals and spaces', () => {
  const result = validateIranianPhone('۰۹۱۲ ۳۴۵ ۶۷۸۹');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '09123456789');
});

test('validateIranianPhone handles international prefixes +98', () => {
  const result = validateIranianPhone('+989351234567');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '09351234567');
});

test('validateIranianPhone rejects invalid inputs', () => {
  assert.equal(validateIranianPhone('12345').isValid, false);
  assert.equal(validateIranianPhone('abc').isValid, false);
  assert.equal(validateIranianPhone('').isValid, false);
});

test('validateAppointmentRequest validates full form requirements', () => {
  const validForm = validateAppointmentRequest({
    fullName: 'رضا حسینی',
    phone: '09123456789',
    serviceId: 'composite-veneer',
  });
  assert.equal(validForm.isValid, true);
  assert.equal(Object.keys(validForm.errors).length, 0);

  const invalidForm = validateAppointmentRequest({
    fullName: '',
    phone: '000',
    serviceId: '',
  });
  assert.equal(invalidForm.isValid, false);
  assert.ok(invalidForm.errors.fullName !== undefined);
  assert.ok(invalidForm.errors.phone !== undefined);
  assert.ok(invalidForm.errors.serviceId !== undefined);
});

test('generateAppointmentTrackingCode creates PARMIS- prefixed code', () => {
  const code = generateAppointmentTrackingCode();
  assert.ok(code.startsWith('PARMIS-'));
  assert.equal(code.length, 12);
});
