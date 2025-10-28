# 🧠 Floating-Point Precision and Exact Representation in C

## 🔹 1. Introduction
In C, real numbers are represented using **floating-point formats** based on the IEEE-754 standard.  
These formats can **approximate most decimal numbers**, but **not all** of them can be stored exactly due to binary representation limits.

---

## 🔹 2. Data Types and Precision

| Type | Size (bits) | Sign | Exponent | Fraction (Mantissa) | Approx. Decimal Precision |
|------|--------------|-------|-----------|----------------------|----------------------------|
| `float` | 32 | 1 | 8 | 23 | ≈ 7 digits |
| `double` | 64 | 1 | 11 | 52 | ≈ 15 digits |

### 🧩 Meaning
- **Mantissa (fraction bits)** determines *how many binary digits* you can represent.
- **More mantissa bits → more precision**.

---

## 🔹 3. What Does “Exact Representation” Mean?

A **decimal number** is *exactly representable in binary* if its **fractional part** can be written as  
a finite binary fraction.

### ✅ Rule of Thumb
A decimal fraction is **exactly representable in binary** *only if*  
its **denominator (in simplest fraction form)** is a **power of 2**.

---

## 🔹 4. Why Some Numbers Are Exact and Some Aren’t

Binary representation can only represent fractions that are sums of powers of 1/2:1/2, 1/4, 1/8, 1/16, 1/32, …


So:
- If your number’s denominator is **2, 4, 8, 16, etc.** → ✅ exact.
- If your number’s denominator is **5, 10, 20, 3, etc.** → ❌ inexact (repeating fraction in binary).

---

## 🔹 5. Mathematical Check Method

To check if a number is **exactly representable**:

1. Write the number as a fraction (simplest form).  
2. Simplify the denominator.  
3. If the denominator = 2ⁿ → ✅ exact.  
   Otherwise → ❌ not exact.

### Examples

| Decimal | Fraction | Denominator | Binary Representation | Exact in Binary? |
|----------|-----------|-------------|------------------------|------------------|
| 0.5 | 1/2 | 2¹ | 0.1 | ✅ |
| 0.25 | 1/4 | 2² | 0.01 | ✅ |
| 0.75 | 3/4 | 2² | 0.11 | ✅ |
| 8.5 | 17/2 | 2¹ | 1000.1 | ✅ |
| 8.2 | 41/5 | 5 | 1000.0011001100… (repeating) | ❌ |
| 0.1 | 1/10 | 5×2 | 0.00011001100… (repeating) | ❌ |
| 0.375 | 3/8 | 2³ | 0.011 | ✅ |

---

## 🔹 6. Practical Check Method (in Code)

You can print the stored value with many decimal places:

```c
#include <stdio.h>
int main() {
    float f = 8.2;
    double d = 8.2;

    printf("float:  %.20f\n", f);
    printf("double: %.20lf\n", d);
    return 0;
}
/*ouput
float:  8.19999980926513671875
double: 8.19999999999999928946
*/
```
```c
#include <stdio.h>
int main() {
    float f = 8.2;
    double d = 8.2;

    printf("float:  %.20f\n", f);
    printf("double: %.20lf\n", d);
    return 0;
}
/*ouput
float:  8.19999980926513671875
double: 8.19999999999999928946
*/
```

```c
#include <stdio.h>
int main() {
    float f = 8.5;
    double d = 8.5;

    printf("float:  %.20f\n", f);
    printf("double: %.20lf\n", d);
    return 0;
}
/*ouput
float:  8.50000000000000000000
double: 8.50000000000000000000
*/
```