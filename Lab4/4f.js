function prime (n) {
    if (n % 2 === 0) {
        return (n + " is NOT a prime number");
    }
    for (let i = 3; i * i < n; i += 2) {
        if (n % i === 0) {
            return (n + " is NOT a prime number");
        }
    }
    return (n + " is a prime number");
  }
  console.log(prime(83));
  console.log(prime(82));