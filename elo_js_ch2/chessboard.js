// Chessboard

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.



let board = ''
//size is basically index, so 8 will return 4 # and 4 ' ', 16 will return 8 # and 8 ' ', etc
let size = 8

//For Rows
for(let i = 1; i <= size; i++){
  //For Columns
 for(let x = 1; x <= size; x++){
   //if column is even
   if((i + x) % 2 == 0){
     board += ' '
    //if column is odd, '#' 
    } else {
     board += '#'
   }
   //after one row is printed, jump to new row
 } board += '\n'
}

console.log(board)

