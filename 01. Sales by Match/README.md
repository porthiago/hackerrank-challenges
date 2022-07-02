# Sales by match [Hackerrank Challenge]

## Problem:

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

[add example]

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

    int n: the number of socks in the pile
    int ar[n]: the colors of each sock

Returns

    int: the number of pairs

Input Format

The first line contains an integer
, the number of socks represented in .
The second line contains space-separated integers,

, the colors of the socks in the pile.

Constraints

where

Sample Input

STDIN                       

9                           
10 20 20 10 10 30 50 10 20  

Function
n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

Sample Output

3

Explanation

![sock.png](https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png)

There are three pairs of socks.

---------

## Notes for Solution:

### Important Detail: 
- Through the for loop used in the solution, it is necessary to decrease the index to iterate each time an element is deleted by "splice".
