
SS = '1 2 3 4 5 6';

const N = 7; //parseInt(readline());
const S = SS.split` `.map(x=>+x); //readline().split` `.map(x=>+x);
console.log(S);
op = ((S[5] - S[4]) == (S[4] - S[3])) ? (x => x + (S[4] - S[3])) : (x => x * (S[4] / S[3]))
console.log(op);
r = S[0]
console.log(r);
for (i = 0; i < N; i++) r = op(r)
console.log(r)