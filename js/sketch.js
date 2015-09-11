// The Odin Project
// Mini-sketch app

var reset = $('#reset');
var grid = $('#grid-container');
var block = '<div class="block"></div>';

function buildGrid(s) {
    // Concatenate variable for grid blocks
    // Removes finding selector in loop and saves time
    var gridBlocks = '';
    for (var g = 0; g < s * s; g++) {
        gridBlocks += block;
    }

    // Append generated HTML and adjustment styling
    grid.append(gridBlocks).css('height', s * s).css('width', s * s);
    $('.block').css('height', s).css('width', s);
    
    // Call function to allow user to draw blocks
    drawBlock();
}

function drawBlock() {
    $('.block').hover(function () {
        var $this = $(this);

        // Store selector specific data temporarily using .data()
        var count = ($this.data('count') || 0) + 1;
        $this.data('count', count);

        // For each hover event, opacity increases by 10%
        // Once opacity reaches 100%, block is darkened completely
        $this.addClass('active').css('opacity', $this.data('count') / 10);
    });
}

function resetGrid() {
    // Remove user drawn blocks
    $('.block').removeClass('active');

    // Remove grid blocks
    grid.empty();

    // Prompt user for grid size they want to use
    var size = prompt("What size grid?", 10);
    while (size <= 0 || isNaN(size) || size == "" || size == null) {
        size = prompt("What size grid?", 10);
    }
    buildGrid(size);
}

// Initialize grid to start with
buildGrid(16);