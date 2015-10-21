
    var sequence = [

        {
            content: 'This is<br />an example</br>title sequence',
            id: 'scroll1',
            css: { left: 0, top: '250px' },
            animate: { top: '30px' },
            duration: 3000,
            easing: 'linear',
            pause: 1200
        },

        {
            selector: '#scroll1',
            animate: { opacity: 0 },
            duration: 2000,
            pause: 900
        },

        {
            content: '',
            id: 'group1',
            css: { height: '300px', opacity: 0 }
        },

        {
            container: '#group1',
            content: 'You have seen ...',
            css: { left: '30px', top: '16px' },
        },

        {
            selector: '#group1',
            animate: { opacity: 1 },
            duration: 2000,
            pause: 900
        },

        {
            container: '#group1',
            content: '&bull; scrolling',
            css: { left: '38px', top: '150px' },
            animate: { top: '44px' },
            duration: 1200,
            pause: 500
        },

        {
            container: '#group1',
            content: '&bull; fading',
            css: { left: '38px', top: '72px', opacity: 0 },
            animate: { opacity: 1 },
            duration: 1200,
            pause: 500
        },

        {
            container: '#group1',
            content: '&bull; wipe in',
            css: { left: '38px', top: '100px', width: 0 },
            animate: { width: '240px' },
            duration: 1200,
            pause: 500
        },

        {
            container: '#group1',
            content: '&bull; wipe out?',
            css: { left: '38px', top: '128px', width: 0 },
            animate: { width: '240px' },
            duration: 1200,
            pause: 500
        },

        {
            selector: '#group1',
            animate: { width: 0 },
            duration: 1200,
            pause: 500
        },

        {
            delete: '#group1',
        },

        {
            content: '',
            id: 'bg',
            css: { top: 0, left: 0, width: '100%', height: '186px', 'background-color': '#000000', opacity: 0 },
            animate: { opacity: 1 },
            duration: 300
        },

        function(seq) {
            $('#demo-titles').css({ 'background-color': '#000000' });
            $('#bg').remove();
            seq.next_cue();
        },

        {
            content: '',
            id: 'colour1',
            css: { height: '160px' },
            pause: 800
        },

        {
            container: '#colour1',
            content: "You",
            css: { left: '-150px', top: '22px', color: '#f5510a' },
            animate: { left: 0 },
            duration: 900,
            no_wait: true
        },

        {
            container: '#colour1',
            content: "Can",
            css: { left: '150px', top: '56px', color: '#0d8d10' },
            animate: { left: 0 },
            duration: 900,
            no_wait: true
        },

        {
            container: '#colour1',
            content: "Use",
            css: { left: '-150px', top: '90px', color: '#0050ff' },
            animate: { left: 0 },
            duration: 900,
            no_wait: true
        },

        {
            container: '#colour1',
            content: "Colour!",
            css: { left: '180px', top: '124px', color: '#f00f0f' },
            animate: { left: 0 },
            duration: 900,
            pause: 1000
        },

        {
            selector: '#colour1',
            animate: { opacity: 0 },
            duration: 1600,
            pause: 800
        },

        {
            delete: '#colour1'
        },

        {
            content: '',
            id: 'bg',
            css: { top: 0, left: 0, width: '248px', height: '186px', 'background-color': '#44c735', opacity: 0 },
            animate: { opacity: 1 },
            duration: 300
        },

        function(seq) {
            $('#demo-titles').css({ 'background-color': '#44c735' });
            $('#bg').remove();
            seq.next_cue();
        },

        {
            content: '',
            id: 'fonts',
            css: { height: '180px' },
            pause: 800
        },

        {
            container: '#fonts',
            content: "And",
            css: { left: '88px', top: '16px', 'font-family': '"Trebuchet MS", Verdana, sans-serif', 'font-size': '40px', 'font-weight': 'bold', opacity: 0 },
            animate: { opacity: 1 },
            duration: 100,
            pause: 600
        },

        {
            container: '#fonts',
            content: "Fonts",
            css: { left: '40px', top: '23px', 'font-family': '"Times New Roman", Gerogia, serif', 'font-size': '76px', opacity: 0 },
            animate: { opacity: 1 },
            duration: 100,
            pause: 600
        },

        {
            container: '#fonts',
            content: "too",
            css: { left: '108px', top: '86px', 'font-family': '"Courier New", monospace', 'font-size': '40px', 'font-weight': 'normal', opacity: 0 },
            animate: { opacity: 1 },
            duration: 100,
            pause: 600
        },

        {
            container: '#fonts',
            content: "of course",
            css: { left: '8px', top: '110px', 'font-family': '"Arial Black", sans-serif', 'font-size': '40px', 'font-weight': 'bold' },
            animate: { opacity: 1 },
            duration: 100,
            pause: 600
        },

        {
            selector: '#fonts',
            animate: { opacity: 0 },
            duration: 1600,
            pause: 800
        },

        {
            content: '',
            id: 'waterfall',
            css: {width: '374px', height: '190px', top: 0, left: '-126px', opacity: 0},
            animate: {opacity: 1},
            duration: 500
        },

        {
            selector: '#waterfall',
            animate: {left: 0},
            duration: 4000,
            no_wait: true
        },

        {
            content: 'and<br />images',
            id: 'photo-title',
            css: {opacity: 0},
            animate: {opacity: 1},
            duration: 800,
            pause: 3500
        },

        function(seq) {
            seq.next_cue();
            $('#demo-titles').css({ 'background-color': '#eeeeee' })
                .html('<a id="demo-start" class="btn">Start Demo</a>');
        }

    ];

    $('#demo-titles').on('click', '#demo-start', function() {

        $('#demo-titles').empty().titleSequence(sequence);

    });
