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

test('error', function(t){
    t.plan(1);

    consoleWatch(function(getResults){
        console.error('foo');

        var results = getResults();

        t.deepEqual(results, {error:['foo']});
    });
});

test('warn', function(t){
    t.plan(1);

    consoleWatch(function(getResults){
        console.warn('foo');

        var results = getResults();

        t.deepEqual(results, {warn:['foo']});
    });
});

test('info', function(t){
    t.plan(1);

    consoleWatch(function(getResults){
        console.info('foo');

        var results = getResults();

        t.deepEqual(results, {info:['foo']});
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