# Problem 4

## Installation and Setup

### 1️ **Clone repository**
```bash
git clone <repository_url>
cd problem_4
```

### 2 **Install dependencies**
```bash
yarn install
```
### 3 **Run project**
```bash
yarn dev
```

## Constraint Analysis
### **Key constraints of the problem**
1. Input: n is a positive integer.
2. Output: The sum of numbers from 1 to n.
3. Guaranteed conditions:
   * n is always small enough so that the result does not exceed Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).
   * No need to handle negative numbers or n = 0, assuming n ≥ 1.
   * To ensure the sum does not exceed `Number.MAX_SAFE_INTEGER`, \( n \) should be in the range from 1 to approximately 4,243,579.

## Different Implementations of sum_to_n(n)
Below are three different implementations of the sum_to_n(n) function, with a performance analysis of each.

### 1️ **Recursive Approach**
```typescript
const sum_to_n_a = (n: number): number => {
    if(n <= 1) return n;
    return n + sum_to_n_a(n - 1);
}
```
Performance Analysis:
* Time Complexity: 𝑂(𝑛) → Calls the function n times.
* Space Complexity: 𝑂(𝑛) → Uses n stack frames due to recursion.

### 2 **Iterative Approach (Using a Loop)**
```typescript
const sum_to_n_b = (n: number): number => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
```
Performance Analysis:
* Time Complexity: 𝑂(𝑛) → Iterates n times to compute the sum.
* Space Complexity: 𝑂(1) → Uses only one variable (sum).

### 3 **Mathematical Formula Approach (Constant Time)**
```typescript
const sum_to_n_c = (n: number): number => {
    return n * (n + 1) / 2;
}
```
Performance Analysis:
* Time Complexity: 𝑂(1) → Uses a simple multiplication and division.
* Space Complexity: 𝑂(1) → No extra memory usage.

## Comparison of Each Method
| Method             | Time Complexity | Space Complexity | Efficiency     |
|--------------------|-----------------|------------------|----------------|
| Recursion (sum_to_n_a)| 𝑂(𝑛)          | 𝑂(𝑛)             | Least efficient|
| Loop (sum_to_n_b)  | 𝑂(𝑛)           | 𝑂(1)             | Average        |
| Formula (sum_to_n_c)| 𝑂(1)           | 𝑂(1)             | Best choice    |


