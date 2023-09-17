// helpers.test.js

describe("Helpers test", function() {
    beforeEach(function () {
      // Set up any necessary DOM elements for testing
    });
  
    it('should calculate tip percent correctly', function () {
      const billAmt = 100;
      const tipAmt = 15;
      const expectedTipPercent = 15;
  
      const result = calculateTipPercent(billAmt, tipAmt);
  
      expect(result).toEqual(expectedTipPercent);
    });
  
    it('should sum payment total correctly', function () {
      const payments = {
        payment1: { billAmt: 50, tipAmt: 10 },
        payment2: { billAmt: 75, tipAmt: 15 },
      };
      const type = 'tipAmt';
      const expectedTotal = 25;
  
      allPayments = payments;
  
      const result = sumPaymentTotal(type);
  
      expect(result).toEqual(expectedTotal);
    });
  
    // Add more test cases for other functions in helpers.js
  });
  