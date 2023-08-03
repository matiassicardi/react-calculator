/* For the input validation, I use a regular expression that checks the possible combinations that, in terms of mathematics, would give an undefined result.:

const valValidation = /\(\+|\(\*|\(\/|\(\%|\(\.|\*\)|\/\/|\(\/\+|\(\/\%|\(\+\+|\(\+\*|\(\+\/|\+\%|\-\-|\-\*|\-\/|\-\+|\-\%|\%\%|\%\./g;
const input = input;
const result = valValidation.test(input);

'\(\+' look for the combination '(+'
'\(\*' look for the combination '(*'
'\(/' look for the combination '(/'
'\(\%' look for the combination '(%'
'\(\.' look for the combination '(.'
'\*\)' look for the combination '*)'
'\/\/' look for the combination '//'
'\(/' look for the combination '(/'
'\(\+' look for the combination '(+'
'\(\%' look for the combination '(%'
'\(\.' look for the combination '(.'
'\+\%' look for the combination '+%'
'\-\-' look for the combination '--'
'-\*' look for the combination '-*'
'-\+' look for the combination '-+'
'-\%' look for the combination '-%'
'\%\%' look for the combination '%%'
'\%\.' look for the combination '%.'

The 'g' modifier at the end of the regular expression allows to find all matches within the string.

*/