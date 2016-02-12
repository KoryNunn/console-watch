var test = require('tape'),
    consoleWatch = require('../');

test('log', function(t){
    t.plan(1);

    consoleWatch(function(getResults){
        console.log('foo');

        var results = getResults();

        t.deepEqual(results, {log:['foo']});
    });
});

test('multiple params', function(t){
    t.plan(1);

    consoleWatch(function(getResults){
        console.log('foo', 2, {whatsits:true});

        var results = getResults();

        t.deepEqual(results, {log:['foo', 2, {whatsits:true}]});
    });
});

test('many methods', function(t){
    t.plan(1);

    consoleWatch(function(getResults){
        console.log('foo');
        console.info('bar');
        console.warn('baz');
        console.error('majigger');

        var results = getResults();

        t.deepEqual(results, {
            log:['foo'],
            info:['bar'],
            warn:['baz'],
            error:['majigger']
        });
    });
});