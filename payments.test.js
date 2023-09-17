// payments.test.js

describe("Payments test", function() {
    beforeEach(function () {
      // Set up any necessary DOM elements for testing
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  
    it('should create a valid payment object on submitPaymentInfo()', function () {
      billAmtInput.value = '100';
      tipAmtInput.value = '20';
  
      submitPaymentInfo();
  
      const paymentKey = 'payment1';
      const expectedPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      };
  
      expect(allPayments[paymentKey]).toEqual(expectedPayment);
    });
  
    it('should update the payment table correctly on appendPaymentTable()', function () {
      const testPayment = {
        billAmt: '75',
        tipAmt: '15',
        tipPercent: 20,
      };
  
      appendPaymentTable(testPayment);
  
      const createdTr = document.querySelector('#payment1');
      expect(createdTr).toBeTruthy();
  
      const tds = createdTr.querySelectorAll('td');
      expect(tds[0].innerText).toBe('$' + testPayment.billAmt);
      expect(tds[1].innerText).toBe('$' + testPayment.tipAmt);
      expect(tds[2].innerText).toBe(testPayment.tipPercent + '%');
    });
  
    it('should update the summary correctly on updateSummary()', function () {
      const payments = {
        payment1: { billAmt: '50', tipAmt: '10', tipPercent: 20 },
        payment2: { billAmt: '75', tipAmt: '15', tipPercent: 20 },
      };
  
      allPayments = payments;
  
      updateSummary();
  
      const summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
      expect(summaryTds[0].innerText).toBe('$125');
      expect(summaryTds[1].innerText).toBe('$25');
      expect(summaryTds[2].innerText).toBe('20%');
    });
  
    // Add more test cases for other functions in payments.js
  });
  