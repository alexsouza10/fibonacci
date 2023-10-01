const fibonacciSequence = (n: number): number[] => {
    if (n < 0) {
      throw new Error("The number of terms must be greater than or equal to 0.");
    }
  
    if (n === 0) {
      return [];
    }
  
    if (n === 1) {
      return [0];
    }
  
    const sequence: number[] = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextTerm = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextTerm);
    }
  
    return sequence;
  }
  
  const n = 10; // Console return: Fibonacci sequence with 10 terms: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  const result = fibonacciSequence(n);
  console.log(`Fibonacci sequence with ${n} terms: ${result.join(", ")}`);
  