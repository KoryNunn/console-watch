var methods = Object.keys(console),
    originals = {};

methods.map(function(key){
    return originals[key] = console[key];
});

module.exports = function(callback) {
    var results = {};
    methods.forEach(function(key){
        console[key] = function(){
            results[key] = results[key] || [];
            results[key] = results[key].concat(Array.prototype.slice.call(arguments));
            originals[key].apply(console, arguments);
        };
    });
    callback(function(){
        methods.forEach(function(key){
            console[key] = originals[key];
        });
        return results;
    });
}