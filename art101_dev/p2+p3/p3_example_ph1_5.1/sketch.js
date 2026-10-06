    // example #5.1 
    // this is a 7x7 array
    var gridarr = [
        [0, 0, 0, 0, 0, 0, 7],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 2, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    var a = 0;

    function setup() {

        createCanvas(240, 240);

        background(120);
        
        console.log(gridarr[0][6]);

        // j: column, i: row
        for (var i = 0; i < gridarr.length; i++) {
            for (var j = 0; j < gridarr.length; j++) {
                a = gridarr[i][j];
                if (a === 1) {
                    fill(200, 200, 20);
                } else  if (a === 2) {
                    fill(255, 0, 0);
                } else{
                    fill(200)
                }

                // typical way of mapping out a grid (value * scale) + offset
                // value  -- the increment counter from the forloop
                // scale -- a multiple that will effect value in terms of size/position of each drawing
                // offset -- relative movement of the x/y position on the canvas

                //fill(255);
                rect((j * 30) + 20 , (i * 30) + 20, 20, 20);
            }
        }
    }
