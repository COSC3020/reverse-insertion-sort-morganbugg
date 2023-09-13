[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11851170&assignment_repo_type=AssignmentRepo)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

## Complexity Answer

The average number of swaps needed for each iteration should be around (n-1)/4, because on average each value will swap with half of the other values. We can determine this by starting at the worst case for the algorithm. If we recognize that, in the worst case, each element in the array the program will make that many comparisons, we can determine that the worst will make approximately (n-1)/2 comparisons total. If we take the average of this list of comparisons made, we get (n-1)/4. We can then multiply this by the size of the list to get n*(n-1)/4. With this value in mind, we can simplify disregarding constants as follows:

$\Theta(n*(n-1)/4)$ -> $\Theta(n^2)$

Based on this analysis, we can determine that the average-case time complexity is $\Theta(n^2)$

I used the following source to ensure that I was properly understanding how this average case would be found: https://www.interviewkickstart.com/learn/insertion-sort