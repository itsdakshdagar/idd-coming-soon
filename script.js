$(document).ready(function() {

    function Ticker(elem, onCompleteCallback) { // Added onCompleteCallback
        this.elem = elem;
        this.elem.lettering();
        this.onComplete = onCompleteCallback || function() {}; // Store the callback

        this.done = false;
        this.cycleCount = 8;
        this.cycleCurrent = 0;
        this.chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#+*%&?$!<>[]{}'.split('');
        this.charsCount = this.chars.length;

        this.letters = this.elem.find('span');
        this.letterCount = this.letters.length;
        this.letterCurrent = 0;

        var self = this;

        this.letters.each(function() {
            var $thisSpan = $(this);
            var originalChar = $thisSpan.text();
            $thisSpan.attr('data-orig', originalChar);

            if (originalChar === ' ') {
                $thisSpan.addClass('is-space').css('opacity', 1).html(' ');
            } else {
                $thisSpan.text(self.getChar());
                $thisSpan.css('opacity', 0);
            }
        });
    }

    Ticker.prototype.getChar = function() {
        return this.chars[Math.floor(Math.random() * this.charsCount)];
    };

    Ticker.prototype.startAnimation = function() {
        this.done = false;
        this.cycleCurrent = 0;
        this.letterCurrent = 0;
        var self = this;

        this.letters.each(function() {
            var $thisSpan = $(this);
            if (!$thisSpan.hasClass('is-space')) {
                $thisSpan.text(self.getChar()).removeClass('done').css('opacity', 0);
            }
        });
        this.loop();
    };

    Ticker.prototype.loop = function() {
        var self = this;

        if (this.done) { // Should not happen if called correctly, but good guard
            return;
        }

        if (this.letterCurrent < this.letterCount) {
            this.letters.each(function(index, elem) {
                var $elemSpan = $(elem);
                if (!$elemSpan.hasClass('is-space') && index >= self.letterCurrent) {
                    $elemSpan.text(self.getChar());
                    $elemSpan.css('opacity', Math.random() * 0.5 + 0.2);
                }
            });
        }

        if (this.cycleCurrent < this.cycleCount) {
            this.cycleCurrent++;
        } else if (this.letterCurrent < this.letterCount) {
            var currentLetterSpan = this.letters.eq(this.letterCurrent);
            this.cycleCurrent = 0;

            if (currentLetterSpan.hasClass('is-space')) {
                // Space handling
            } else {
                currentLetterSpan.text(currentLetterSpan.attr('data-orig'))
                                 .css('opacity', 1)
                                 .addClass('done');
            }
            this.letterCurrent++;
        } else {
            this.done = true; // All letters in this ticker are done
        }

        if (!this.done) {
            requestAnimationFrame(function() {
                self.loop();
            });
        } else {
            // This ticker is complete, call its onComplete callback
            this.onComplete();
        }
    };

    // --- Initialization for Sequential Animation ---
    var $words = $('.word'); // Get all elements with class 'word'
    var tickers = [];      // Array to store our Ticker instances

    // Create Ticker instances for each word
    $words.each(function(index) {
        var $thisWord = $(this);
        var onCompleteFunc = function() {}; // Default empty callback

        // If this is NOT the last word, set its onComplete to start the next one
        if (index < $words.length - 1) {
            onCompleteFunc = function() {
                if (tickers[index + 1]) { // Check if next ticker exists
                    tickers[index + 1].startAnimation();
                }
            };
        }
        // For the last word, onCompleteFunc remains empty (or you can add a final action)

        tickers.push(new Ticker($thisWord, onCompleteFunc));
    });

    // Start the animation for the FIRST ticker only
    if (tickers.length > 0) {
        tickers[0].startAnimation();
    }

});