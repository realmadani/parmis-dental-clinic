import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DENTAL_TREATMENTS,
  calculateTreatmentEstimate,
  formatPersianTomans,
  formatPersianNumber,
} from './costCalculator.ts';

test('DENTAL_TREATMENTS contains primary treatments', () => {
  assert.ok(DENTAL_TREATMENTS.length >= 6);
  const composite = DENTAL_TREATMENTS.find((t) => t.id === 'composite-veneer');
  assert.ok(composite !== undefined);
  assert.equal(composite?.basePricePerUnitTomans, 2200000);
});

test('calculateTreatmentEstimate calculates raw total correctly without insurance', () => {
  const result = calculateTreatmentEstimate({
    treatmentId: 'composite-veneer',
    quantity: 6,
  });

  assert.equal(result.quantity, 6);
  assert.equal(result.unitPriceTomans, 2200000);
  assert.equal(result.rawTotalTomans, 13200000);
  assert.equal(result.insuranceDiscountTomans, 0);
  assert.equal(result.finalPayableTomans, 13200000);
});

test('calculateTreatmentEstimate applies supplementary insurance discount properly', () => {
  const result = calculateTreatmentEstimate({
    treatmentId: 'dental-implant',
    quantity: 2,
    hasSupplementaryInsurance: true,
    supplementaryCoveragePercentage: 40,
  });

  assert.equal(result.rawTotalTomans, 22000000);
  assert.equal(result.insuranceDiscountTomans, 8800000);
  assert.equal(result.finalPayableTomans, 13200000);
  assert.equal(result.estimatedSessions, 3);
});

test('calculateTreatmentEstimate bounds quantity within min and max', () => {
  const clamped = calculateTreatmentEstimate({
    treatmentId: 'bleaching-office',
    quantity: 99,
  });

  assert.equal(clamped.quantity, 1);
});

test('formatPersianTomans formats numbers into Persian currency string', () => {
  const formatted = formatPersianTomans(2500000);
  assert.ok(formatted.includes('تومان'));
});
