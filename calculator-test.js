
it('should calculate the monthly rate correctly', function () {
  // ...
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
describe("Loan Calculator", function() {
  it('should calculate the correct monthly payment', function () {
    // Arrange
    const values = { amount: 10000, years: 5, rate: 5 };
    
    // Act
    const monthlyPayment = calculateMonthlyPayment(values);

    // Assert
    expect(monthlyPayment).toEqual('188.71');
  });

  it('should handle zero principal', function () {
    // Arrange
    const values = { amount: 0, years: 5, rate: 5 };
    
    // Act
    const monthlyPayment = calculateMonthlyPayment(values);

    // Assert
    expect(monthlyPayment).toEqual('0.00');
  });

  it('should handle zero interest rate', function () {
    // Arrange
    const values = { amount: 10000, years: 5, rate: 0 };
    
    // Act
    const monthlyPayment = calculateMonthlyPayment(values);

    // Assert
    expect(monthlyPayment).toEqual('166.67');
  });

  it('should calculate the monthly rate correctly', function () {
    // Arrange
    const values = { amount: 10000, years: 5, rate: 6 };
    
    // Act
    const monthlyPayment = calculateMonthlyPayment(values);

    // Assert
    expect(monthlyPayment).toEqual('193.33');
  });

  it("should return a result with 2 decimal places", function() {
    // Arrange
    const values = { amount: 20000, years: 3, rate: 4.5 };
    
    // Act
    const monthlyPayment = calculateMonthlyPayment(values);

    // Assert
    expect(monthlyPayment).toMatch(/^\d+\.\d{2}$/); // Check if it has 2 decimal places
  });

  // Add more test cases as needed
});
