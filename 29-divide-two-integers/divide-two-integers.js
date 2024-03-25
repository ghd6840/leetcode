/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // Covert them in String so we can do subtraction while looping
   let dend = '' + Math.abs(dividend)
   let dsor = '' + Math.abs(divisor)

   // if the dividend have less digits, there is no meaning to continue
   // For example, '12 / 123' will yield '0.09...' which is '0' according to the requirement 
   if ( dend.length < dsor.length ) return 0

   let result = [] 
   let remainder = 0
   let end = dsor.length

   for (let i=0; i<dend.length; i++) {
      // Initial pass, we make sure 'dsor' and 'remainder' have the same length. 
      // Subsequence iteration will add the next digit of string to the any 'remainder' produced in the following loop
	  // The Number() will remove preceeding '0' ---> '01234' to 1234
      remainder = Number( remainder + dend.slice(i, end) )
      
      // The range 9 because it is the maximum you can get when dividing
      // For example, '1234 / 134' will yield a '9' plus the remainder of '28'
      for (let j=0; j<=9; j++) {
         
		 if ( dsor > remainder ) {
            result.push(j)
            break;
         }
         remainder = remainder - dsor
      }
      
      // update the pointers
      i = end - 1
      end = end + 1
   }
   
   // Next two lines will remove the initial '0' if the array of values looks this [0, 1, 2, ...]
   // And make sure the 'result' in correct side of negative or positive
   result = Number( result.join('') )
   result = (dividend < 0) && (divisor < 0) ? result : (
      (dividend < 0) || (divisor < 0) ? -result : result
   )

   return result >= 2147483647 ? 2147483647 : (
      result <= -2147483648 ? -2147483648 : result
   );
};