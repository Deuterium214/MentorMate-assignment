function repeat(str, times) {
    return new Array(times + 1).join(str);
}

function paintMentorMate(N) {
    if (N < 2 || N > 10000 || N % 2 == 0) {
        return false;
    }
  
    let index1 = N;
    let index2 = N;
    let index3 = N;
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            arr1.push("-".repeat(N));
        } else {
            arr1.push("*".repeat(N));
        }
    }

    for (let i = 0; i < N + 1; i++) {
        for (let j = 0; j < 2; j++) {
            if (i <= (N - 1) / 2) {
                process.stdout.write(arr1.join(""));
            } else {
                process.stdout.write(arr2.join(""));
            }
        }
        console.log();

      
        if (i <= (N - 1) / 2) {
            arr1[0] = repeat("-", index1 - 1);
            arr1[1] = repeat("*", index2 + 2);
            arr1[2] = repeat("-", index3 - 2);
            arr1[3] = repeat("*", index2 + 2);
            arr1[4] = repeat("-", index1 - 1);
            index1 = index1 - 1;
            index2 = index2 + 2;
            index3 = index3 - 2;

          
            if (i + 1 > (N - 1) / 2) {
                for (let d = 0; d < 7; d++) {
                    if (d === 2 || d === 4) {
                        arr2.push("-");
                    } else if (d % 2 === 0) {
                        arr2.push("-".repeat(index1));
                    } else if (d === 3) {
                        arr2.push("*".repeat(index2 - 2));
                    } else {
                        arr2.push("*".repeat(N));
                    }
                    index3 = 1;
                }
            }
        }

     
        if (i > (N - 1) / 2) {
            arr2[0] = repeat("-", index1 - 1);
            arr2[1] = repeat("*", N);
            arr2[2] = repeat("-", index3 + 2);
            arr2[3] = repeat("*", index2 - 4);
            arr2[4] = repeat("-", index3 + 2);
            arr2[5] = repeat("*", N);
            arr2[6] = repeat("-", index1 - 1);
            index1 -= 1;
            index2 -= 2;
            index3 += 2;
        }
    }
}

paintMentorMate(5);
