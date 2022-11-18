# Euclidean 3

## Artur Hamernik

This project is an assignment for Algebra and Numbers Theory.

Mathematical problem
We are looking for x, y, z and (a, b, c)
(a, b, c) = a * x + b * y + c * z

Hint
(a, b, c) = (a, (b, c))

Solution
Step 1 - Lets find x0, y0 i (b, c)
(b, c) = b * x0 + c *y0
Step 2 - Lets find x1, y1 i (a, (b, c))
(a, (b, c)) = a * x1 + (b, c) * y1
Step 3 - Lets find x, y, z
(a, b, c) = a * x1 + b * (x0 * y1) + c * (y0 * y1)
(a, b, c) = (a, (b, c))
x = x1
y = x0 * y1
z = y0 * y1