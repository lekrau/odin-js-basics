# Nth Highest Number

Small JavaScript exercise inspired by Richard Reis' article
Inspired by Richard Reis' article
[How to think like a programmer — lessons in problem solving](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)
and V. Anton Spraul's reduce-the-problem technique.

## Goal

Find the nth highest distinct number in an array.

## Learning focus

The purpose of this exercise was not to find the most elegant or shortest solution,
but to practice problem solving:

- reduce a larger problem into smaller subproblems
- solve the simpler versions first
- build helper functions
- test with fixed inputs and expected outputs
- avoid jumping straight to a final solution

## Assumptions

- The array contains numbers.
- The array is not empty.
- `n` is at least 1.
- `n` is not greater than the number of distinct values.
- Duplicate values count only once.

## Example test cases

- `getNthHighest([1, 2, 3], 1)` returns `3`
- `getNthHighest([1, 2, 3], 2)` returns `2`
- `getNthHighest([1, 2, 3], 3)` returns `1`
- `getNthHighest([5, 5, 4, 3], 3)` returns `3`
- `getNthHighest([100, 20, 100, 50, 40], 3)` returns `40`

## Reflection

This exercise helped me practice the reduce-the-problem technique:
first solving smaller problems like finding the highest number, then expanding the solution
step by step until it could find the nth highest distinct number.