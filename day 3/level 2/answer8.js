// Function to calculate the roots of the quadratic equation y = x^2 + 6x + 9
function calculateRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      return []; // No real roots
    }
  }
  
  // Test different x values to find when y is 0
  for (let x = -10; x <= 10; x++) {
    const a = 1; // coefficient of x^2
    const b = 6; // coefficient of x
    const c = 9; // constant term
  
    const roots = calculateRoots(a, b, c);
  
    for (const root of roots) {
      if (Math.abs(root - x) < 0.00001) {
        console.log(`y is 0 at x = ${x}`);
      }
    }
  }
  